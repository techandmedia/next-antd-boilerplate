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
  // console.log(process.env.env.);
  return (
    <GlobalProvider>
      <MyApp {...props} />
    </GlobalProvider>
  );
}

class MyApp extends App {
  state = {
    isLoggedIn: false
  };

  login = () => {
    this.setState({ isLoggedIn: true });
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
