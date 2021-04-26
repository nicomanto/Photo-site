import React from "react";
import Layout from "../../components/Layout";
import FormEmail from "../../components/Email/FormEmail";

const contactPage = () => {
  return (
    <Layout title="Contact">
      <div className="container text-center">
        <h1 className="display-3">Contact</h1>
        <FormEmail />
      </div>
    </Layout>
  );
};

export default contactPage;
