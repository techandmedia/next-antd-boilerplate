import React from "react";
import App from "next/app";
import GlobalProvider from "../utils/context/Global-Context";
import Layout from "components";
import "../utils/style/ant-override.less";

/**
 * Preparing to use reducer here
 */
// const abc = require("dotenv").config();

export default function CustomApp(props) {
  console.log("CUSTOM", props);
  return (
    <GlobalProvider>
      <MyApp {...props} />
    </GlobalProvider>
  );
}

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    const currentRoute = router.route;

    return (
      <Layout currentRoute={currentRoute}>
        <Component {...pageProps} currentRoute={currentRoute} />
      </Layout>
    );
  }
}
