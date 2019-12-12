/* eslint-disable */
require("dotenv").config();
const withLess = require("@zeit/next-less");
const lessToJS = require("less-vars-to-js");
const fs = require("fs");
const path = require("path");

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(
    path.resolve(__dirname, "./utils/style/ant-variables.less"),
    "utf8"
  )
);

module.exports = withLess({
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS
  },
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: themeVariables // make your antd custom effective
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style.*?/;
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
  /**
   * Jadi begini "www.domain/login/" kalau di address bar
   * Remove this line atau make it false
   * to change it to "www.domain/login"
   * exportTrailingSlash: true,
   */

  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
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
