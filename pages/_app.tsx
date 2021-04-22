/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from "next/app";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

/* eslint-disable global-require */

if (typeof window !== "undefined") {
  require("jquery");
  require("bootstrap/dist/js/bootstrap");
}

/* eslint-enable global-require */

const PhotoSite = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default PhotoSite;
