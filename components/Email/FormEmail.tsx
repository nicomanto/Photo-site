import * as React from "react";
import { FormGroup, FormLabel, Form, FormControl } from "react-bootstrap";

const FormEmail = () => (
  <div className="container">
    <Form>
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
              id="nameValue"
              name="nameValue"
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
              id="nameValue"
              name="nameValue"
            />
          </div>

          <div className="col">
            <FormLabel className="py-2">Numero di telefono</FormLabel>
            <FormControl type="tel" placeholder="la tua email" id="nameValue" name="nameValue" />
          </div>
        </div>

        <FormLabel className="py-2">Messaggio</FormLabel>
        <textarea
          required
          placeholder="la tua email"
          id="nameValue"
          name="nameValue"
          className="form-control"
          rows={3}
        />
      </FormGroup>
    </Form>
  </div>
);

export default FormEmail;
