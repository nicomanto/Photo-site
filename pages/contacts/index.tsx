import React from "react";
import { useTranslation } from "react-i18next";
import Layout from "../../components/Layout";
import i18n from "../../i18n/config";
import FormEmail from "../../components/Email/FormEmail";

const ContactPage = () => {
  const { t } = useTranslation(["contacts"], { i18n });

  return (
    <Layout title={t("pageName")}>
      <div className="container text-center">
        <h1 className="display-4 mx-2 title">{t("title")}</h1>
        <FormEmail />
      </div>
    </Layout>
  );
};

export default ContactPage;
