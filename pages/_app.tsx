/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from "next/app";
import React, { useEffect } from "react";

import { useTranslation } from "react-i18next";
import CookieConsent from "react-cookie-consent";
import i18n from "../i18n/config";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

/* eslint-disable global-require */

if (typeof window !== "undefined") {
  require("jquery");
  require("popper.js");
  require("bootstrap/dist/js/bootstrap");
}

/* eslint-enable global-require */

const PhotoSite = ({ Component, pageProps }: AppProps) => {
  const { t } = useTranslation(["cookie"]);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  });

  return (
    <>
      <Component {...pageProps} />
      <CookieConsent
        style={{ background: "white" }}
        contentClasses="CookieContent"
        buttonWrapperClasses="CookieWrapperButton"
        buttonText={t("button")}
      >
        {t("message")}
      </CookieConsent>
    </>
  );
};

export default PhotoSite;
