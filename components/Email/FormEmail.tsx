import React, { useState } from "react";
import { FormGroup, FormLabel, Form, FormControl, Button, FormText } from "react-bootstrap";
import { EmailInfo } from "../../interfaces/Email";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n/config";

const FormEmail = () => {
  const { t } = useTranslation(["formEmail"], { i18n });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);

  // manage information form
  const sendInformation = async (event: any) => {
    event.preventDefault();
    setLoading(true);

    const infoEmail: EmailInfo = {
      name: event.target.nameValue.value,
      surname: event.target.surnameValue.value,
      email: event.target.emailValue.value,
      phone: event.target.phoneValue.value,
      message: event.target.messageValue.value,
    };

    const data = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(infoEmail),
    });

    if (data.status === 200) {
      setSubmitted(true);
    } else {
      setFailed(true);
    }

    setLoading(false);
  };

  if (!submitted && !loading && !failed) {
    return (
      <Form onSubmit={sendInformation}>
        <p className="my-5">{t('formMessage')}</p>
        <FormText>{t('formText')}</FormText>
        <FormGroup>
          <div className="form-row">
            <div className="col">
              <FormLabel>{t('name.label')}*</FormLabel>
              <FormControl
                type="text"
                required
                placeholder={t('name.placeholder')}
                id="nameValue"
                name="nameValue"
              />
            </div>

            <div className="col">
              <FormLabel>{t('surname.label')}*</FormLabel>
              <FormControl
                type="text"
                required
                placeholder={t('surname.placeholder')}
                id="surnameValue"
                name="surnameValue"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col">
              <FormLabel>{t('email.label')}*</FormLabel>
              <FormControl
                type="email"
                required
                placeholder={t('email.placeholder')}
                id="emailValue"
                name="emailValue"
              />
            </div>

            <div className="col">
              <FormLabel>{t('phone.label')}</FormLabel>
              <FormControl
                type="tel"
                placeholder={t('phone.placeholder')}
                id="phoneValue"
                name="phoneValue"
                pattern="[0-9]{10}"
              />
            </div>
          </div>

          <FormLabel>{t('message.label')}*</FormLabel>
          <textarea
            required
            placeholder={t('message.placeholder')}
            id="messageValue"
            name="messageValue"
            className="form-control"
            rows={3}
          />

          <Button type="submit" className="my-5 px-5" variant="light">
          {t('formButtonName')}
          </Button>
        </FormGroup>
      </Form>
    );
  }
  if (loading) {
    return (
      <div className="spinner-border text-light my-5" role="status">
        <span className="sr-only">{t('sendEmail.loadingSR')}</span>
      </div>
    );
  }

  let classMessage: string = "text-success";
  let message: string = t('sendEmail.successSend');

  if (failed) {
    classMessage = "text-danger";
    message = t('sendEmail.failedSend');
  }

  return (
    <div className="my-5">
      <p className={classMessage}>{message}</p>

      <a href="/" className="btn btn-light" role="button">
        {t('sendEmail.buttonBack')}
      </a>
    </div>
  );
};

export default FormEmail;
