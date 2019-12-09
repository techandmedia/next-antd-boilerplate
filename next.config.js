/* eslint-disable */
const fs = require("fs");
const path = require("path");
// const withCss = require("@zeit/next-css");
const withLess = require("@zeit/next-less");
const lessToJS = require("less-vars-to-js");

// // Where your ant-override.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(
    path.resolve(__dirname, "./utils/style/ant-override.less"),
    "utf8"
  )
);

// // fix: prevents error when .less files are required by node
if (typeof require !== "undefined") {
  require.extensions[".less"] = file => {};
}

// fix: prevents error when .css files are required by node
if (typeof require !== "undefined") {
  require.extensions[".css"] = file => {};
}
module.exports = withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: themeVariables // make your antd custom effective
  },
  useFileSystemPublicRoutes: false,
  webpack: (config, { isServer }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style\/css.*?/;
      const origExternals = [...config.externals];
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback();
          if (typeof origExternals[0] === "function") {
            origExternals[0](context, request, callback);
          } else {
            callback();
          }
        },
        ...(typeof origExternals[0] === "function" ? [] : origExternals)
      ];

      config.module.rules.unshift({
        test: antStyles,
        use: "null-loader"
      });
    }
    config.resolve.alias["components"] = path.join(__dirname, "components");
    config.resolve.alias["api"] = path.join(__dirname, "utils/api");
    config.resolve.alias["context"] = path.join(__dirname, "utils/context");
    config.resolve.alias["utils"] = path.join(__dirname, "utils");

    return config;
  },
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/login": { page: "/login" },
      "/register": { page: "/register" },
      "/contact": { page: "/contact" },
      "/dashboard": { page: "/dashboard" },
      "/about": { page: "/about" }
    };
  }
});
