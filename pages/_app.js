import React from "react";
import App from "next/app";
import GlobalProvider from "../utils/context/Global-Context";
import Layout from "components";
import "../utils/style/ant-override.less";

export default class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    const currentRoute = router.route;

    return (
      <GlobalProvider>
        <Layout currentRoute={currentRoute}>
          <Component {...pageProps} currentRoute={currentRoute} />
        </Layout>
      </GlobalProvider>
    );
  }
}
