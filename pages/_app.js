import React from "react";
import App from "next/app";
import GlobalProvider from "../utils/context/Global-Context";
import Router from "next/router";
import Layout from "components";
import 'antd/dist/antd.less';
// import "../utils/style/ant-override.less";
// import "../utils/style/ant-style.less";
// import "../utils/style/index.less";

/**
 * Preparing to use reducer here
 */
export default function CustomApp(props) {
  return (
    <GlobalProvider>
      <MyApp {...props} />
    </GlobalProvider>
  );
}

class MyApp extends App {
  state = {
    isLoggedIn: true,
  };

  login = () => {
    this.setState({ isLoggedIn: true });
    Router.push("/dashboard");
  };

  logout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const { Component, pageProps, router } = this.props;
    const currentRoute = router.route;
    return (
      <Layout {...this.state} currentRoute={currentRoute} {...this}>
        <Component
          {...pageProps}
          {...this.state}
          {...this}
          currentRoute={currentRoute}
        />
      </Layout>
    );
  }
}
