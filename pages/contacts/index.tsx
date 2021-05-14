import React from "react";
import Layout from "../../components/Layout";
import FormEmail from "../../components/Email/FormEmail";

const ContactPage = () => {
  return (
    <Layout title="Contacts | Aurora Leso">
      <div className="container text-center">
        <h1 className="display-4 mx-2 title">Contacts</h1>
        <FormEmail />
      </div>
    </Layout>
  );
};

export default ContactPage;
