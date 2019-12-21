import React from "react";
import App from "next/app";
import Head from "next/head";
import GlobalProvider from "../utils/context/Global-Context";
import Layout from "components";
import "../utils/style/ant-override.less";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add();

export default class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    const currentRoute = router.route;

    return (
      <GlobalProvider>
        <HeadTags />
        <Layout currentRoute={currentRoute}>
          <Component {...pageProps} currentRoute={currentRoute} />
        </Layout>
      </GlobalProvider>
    );
  }
}

/**
 Warning: You have opted-out of Automatic Static Optimization due to `getInitialProps` in `pages/_app`.
 Read more: https://err.sh/next.js/opt-out-auto-static-optimization
 
 MyApp.getInitialProps = async (req, res) => {
   console.log("dari app nih", req);
   return { andri: "Tes dari APp" };
  };
 */

const baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "http://localhost:5000"

const HeadTags = props => (
  <div>
    <Head>
      <title>SIAKAD - Akademi Perawat Bina Insan</title>
      {/* <base href={baseURL} /> */}
      <meta name="theme-color" content="#00A88E" />
      <link rel="icon" sizes="192x192" href="/images/logo-akper.png" />
      <meta
        name="keywords"
        content="akademi, perawat, cilincing, bina, insani, jakarta, indonesia, terdaftar, terakreditasi, siakad, aacode"
      />
      <meta
        name="description"
        content="Sistem Akademik Akademi Perawat Bina Insan"
      />
      <meta
        name="subject"
        content="Sistem Akademik Akademi Perawat Bina Insan"
      />
      <meta name="copyright" content="aacode" />
      <meta name="language" content="ID" />
      <meta name="robots" content="noindex,nofollow" />
      <meta name="revised" content={new Date()} />
      <meta
        name="abstract"
        content="Sistem Akademik Akademi Perawat Bina Insan"
      />
      <meta name="topic" content="Sistem Akademik Akademi Perawat Bina Insan" />
      <meta
        name="summary"
        content="Sistem Akademik Akademi Perawat Bina Insan"
      />
      <meta name="Classification" content="Education" />
      <meta name="author" content="aacode, +628510002378" />
      <meta name="designer" content="joko, developer.laper@gmail.com" />
      <meta name="copyright" content="andri, +6281977011090" />
      <meta name="reply-to" content="eko.andri9@gmail.com" />
      <meta name="owner" content="eko.andri9@gmail.com" />
      <meta name="url" content="http://siakad.akperbinainsan.ac.id" />
      <meta
        name="identifier-URL"
        content="http://siakad.akperbinainsan.ac.id"
      />
      <meta name="directory" content="siakad" />
      <meta name="category" content="Education" />
      <meta name="coverage" content="Indonesia" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      <meta name="revisit-after" content="30 days" />
      <meta httpEquiv="Expires" content="0" />
      <meta httpEquiv="Pragma" content="no-cache" />
      <meta httpEquiv="Cache-Control" content="no-cache" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta content="yes" name="apple-touch-fullscreen" />
      <meta name="apple-mobile-web-app-status-bar-style" content="tosca" />
      <meta name="format-detection" content="telephone=no" />
      <meta
        httpEquiv="Page-Enter"
        content="RevealTrans(Duration=2.0,Transition=2)"
      />
      <meta
        httpEquiv="Page-Exit"
        content="RevealTrans(Duration=3.0,Transition=12)"
      />
      <meta name="mssmarttagspreventparsing" content="true" />
      <meta httpEquiv="X-UA-Compatible" content="chrome=1" />
      <meta
        name="msapplication-starturl"
        content="siakad.akperbinainsan.ac.id"
      />
      <meta name="msapplication-window" content="width=800;height=600" />
      <meta name="msapplication-navbutton-color" content="tosca" />
      <meta
        name="application-name"
        content="Sistem Akademik Akademi Perawat Bina Insan"
      />
      <meta
        name="msapplication-tooltip"
        content="Sistem Akademik Akademi Perawat Bina Insan"
      />
      <link rel="shortcut icon" href="/images/logo-akper.ico" />
    </Head>
  </div>
);
