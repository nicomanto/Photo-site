import { AppProps } from "next/app";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

const PhotoSite = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default PhotoSite;
