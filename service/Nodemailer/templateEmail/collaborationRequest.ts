import { EmailInfo } from "../../../interfaces/Email";

export const collaborationHMTLTemplate = (emailInfo: EmailInfo): string => {
  const html: string = `<p>Ciao Aurora, hai ricevuto un nuovo messaggio di collaborazione:</p>
  <ul>
    <li>Nome: ${emailInfo.name}</li>
    <li>Cognome: ${emailInfo.surname}</li>
    <li>Email: ${emailInfo.email}</li>
    <li>Telefono: ${emailInfo.phone ? emailInfo.phone : "Non fornito"}</li>
    <li>Messaggio: <p>${emailInfo.message}</p></li>
  </ul>`;

  return html;
};

export const collaborationTXTTemplate = (emailInfo: EmailInfo): string => {
  const text: string = `Ciao Aurora, hai ricevuto un nuovo messaggio di collaborazione:\n\n
    - Nome: ${emailInfo.name}\n
    - Cognome: ${emailInfo.surname}\n
    - Email: ${emailInfo.email}\n
    - Telefono: ${emailInfo.phone ? emailInfo.phone : "Non fornito"}\n
    - Messaggio: \n${emailInfo.message}`;

  return text;
};
