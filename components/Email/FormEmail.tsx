import * as React from "react";

import { FormGroup, FormLabel, Form, FormControl, Button } from "react-bootstrap";
import sendInformation from "./manageInfoEmail";

const FormEmail = () => (
  <div className="container">
    <Form onSubmit={sendInformation}>
      <FormGroup>
        <div className="form-row">
          <div className="col">
            <FormLabel className="py-2">Nome</FormLabel>
            <FormControl
              type="text"
              required
              placeholder="Il tuo nome"
              id="nameValue"
              name="nameValue"
            />
          </div>

          <div className="col">
            <FormLabel className="py-2">Cognome</FormLabel>
            <FormControl
              type="text"
              required
              placeholder="Il tuo cognome"
              id="surnameValue"
              name="surnameValue"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <FormLabel className="py-2">Email</FormLabel>
            <FormControl
              type="email"
              required
              placeholder="la tua email"
              id="emailValue"
              name="emailValue"
            />
          </div>

          <div className="col">
            <FormLabel className="py-2">Numero di telefono</FormLabel>
            <FormControl type="tel" placeholder="la tua email" id="phoneValue" name="phoneValue" />
          </div>
        </div>

        <FormLabel className="py-2">Messaggio</FormLabel>
        <textarea
          required
          placeholder="la tua email"
          id="messageValue"
          name="messageValue"
          className="form-control"
          rows={3}
        />

        <Button type="submit" variant="primary">
          Invio
        </Button>
      </FormGroup>
    </Form>
  </div>
);

export default FormEmail;
