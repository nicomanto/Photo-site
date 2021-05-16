import React, { useState } from "react";
import { FormGroup, FormLabel, Form, FormControl, Button, FormText } from "react-bootstrap";
import { EmailInfo } from "../../interfaces/Email";

const FormEmail = () => {
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
      phone: event.target.phoneValue.value ? event.target.phoneValue.value : null,
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
        <p className="my-5">Fill the form to contact me.</p>
        <FormText>Fills with * are necessary.</FormText>
        <FormGroup>
          <div className="form-row">
            <div className="col">
              <FormLabel>Name*</FormLabel>
              <FormControl
                type="text"
                required
                placeholder="e.g. Mario"
                id="nameValue"
                name="nameValue"
              />
            </div>

            <div className="col">
              <FormLabel>Surname*</FormLabel>
              <FormControl
                type="text"
                required
                placeholder="e.g. Rossi"
                id="surnameValue"
                name="surnameValue"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col">
              <FormLabel>Email*</FormLabel>
              <FormControl
                type="email"
                required
                placeholder="e.g. mario@address.com"
                id="emailValue"
                name="emailValue"
              />
            </div>

            <div className="col">
              <FormLabel>Phone</FormLabel>
              <FormControl
                type="tel"
                placeholder="e.g. 1234567890"
                id="phoneValue"
                name="phoneValue"
                pattern="[0-9]{10}"
              />
            </div>
          </div>

          <FormLabel>Message*</FormLabel>
          <textarea
            required
            placeholder="Type your collaboration message here..."
            id="messageValue"
            name="messageValue"
            className="form-control"
            rows={3}
          />

          <Button type="submit" className="my-5 px-5" variant="light">
            Send
          </Button>
        </FormGroup>
      </Form>
    );
  }
  if (loading) {
    return (
      <div className="spinner-border text-light my-5" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  let classMessage: string = "text-success";
  let message: string = "Email successfully sent, wait for a response.";

  if (failed) {
    classMessage = "text-danger";
    message = "Sending the email failed, retry later.";
  }

  return (
    <div className="my-5">
      <p className={classMessage}>{message}</p>

      <a href="/" className="btn btn-light" role="button">
        Back to the home page
      </a>
    </div>
  );
};

export default FormEmail;
