import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { FormGroup, FormLabel, Form, FormControl, Button, FormText } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import { AiOutlineSmile } from "react-icons/ai";
import { EmailInfo } from "../../interfaces/Email";

const FormEmail = () => {
  const { t } = useTranslation(["formEmail"]);

  // state of submitted email
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);

  // state of value in form
  const [nameForm, setNameForm] = useState("");
  const [surnameForm, setSurnameForm] = useState("");
  const [emailForm, setEmailForm] = useState("");
  const [phoneForm, setPhoneForm] = useState("");
  const [msgForm, setMsgForm] = useState("");

  // state of param in error message
  const [errorParami18n, setErrorParami18n] = useState("generalFailedSend");

  const recaptchaRef: any = useRef<ReCAPTCHA>();

  // manage information form
  const sendInformation = async (event: any) => {
    event.preventDefault();

    const token = await recaptchaRef.current.executeAsync();
    recaptchaRef.current.reset();

    setSending(true);
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
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ infoEmail, token }),
    });

    if (data.status === 200) {
      setSubmitted(true);
    } else {
      if (data.status === 400) setErrorParami18n("fillFailedSend");

      setFailed(true);
    }

    setSending(false);
  };

  if (sending) {
    return (
      <div className="spinner-border text-light infoMessage" role="status">
        <span className="sr-only">{t("sendEmail.sendingSR")}</span>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="infoMessage">
        <p className="text-success">{t("sendEmail.successSend")}</p>

        <a href="/" className="simpleLink" title="Home">
          {t("sendEmail.buttonBack")}
        </a>
      </div>
    );
  }

  return (
    <Form onSubmit={sendInformation}>
      <ReCAPTCHA
        size="invisible"
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_PUBLIC_KEY!}
        ref={recaptchaRef}
      />
      <p className="my-5">
        {`${t("formMessage")} `}
        <AiOutlineSmile title="Happy emoticon" className="iconForm" />
      </p>

      {failed ? (
        <div>
          <p className="text-danger">{t(`sendEmail.${errorParami18n}`)}</p>
        </div>
      ) : null}

      <FormText>{t("formText")}</FormText>
      <FormGroup>
        <div className="form-row">
          <div className="col">
            <FormLabel>{`${t("name.label")}*`}</FormLabel>
            <FormControl
              type="text"
              required
              placeholder="ex. Galileo"
              value={nameForm}
              onChange={(e) => {
                setNameForm(e.target.value);
              }}
              id="nameValue"
              name="nameValue"
            />
          </div>

          <div className="col">
            <FormLabel>{`${t("surname.label")}*`}</FormLabel>
            <FormControl
              type="text"
              required
              placeholder="ex. Galilei"
              value={surnameForm}
              onChange={(e) => {
                setSurnameForm(e.target.value);
              }}
              id="surnameValue"
              name="surnameValue"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <FormLabel>{`${t("email.label")}*`}</FormLabel>
            <FormControl
              type="email"
              required
              placeholder="ex. galileo@address.com"
              value={emailForm}
              onChange={(e) => {
                setEmailForm(e.target.value);
              }}
              id="emailValue"
              name="emailValue"
            />
          </div>

          <div className="col">
            <FormLabel>{t("phone.label")}</FormLabel>
            <FormControl
              type="tel"
              placeholder="ex. 1234567890"
              value={phoneForm}
              onChange={(e) => {
                setPhoneForm(e.target.value);
              }}
              id="phoneValue"
              name="phoneValue"
              pattern="[0-9]{10}"
            />
          </div>
        </div>

        <FormLabel>{`${t("message.label")}*`}</FormLabel>
        <textarea
          required
          id="messageValue"
          name="messageValue"
          className="form-control"
          value={msgForm}
          onChange={(e) => {
            setMsgForm(e.target.value);
          }}
          rows={6}
        />

        <Button type="submit" className="my-5 px-5" variant="light">
          {t("formButtonName")}
        </Button>
      </FormGroup>
    </Form>
  );
};

export default FormEmail;
