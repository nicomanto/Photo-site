import EmailInfo from "../../../interfaces/EmailInfo";

export const HMTLTemplate = (emailInfo: EmailInfo): string => {
  const html: string = `<h1>Ciao Aurora</h1><h2>Hai ricevuto un nuovo messaggio di collaborazione</h2><br>
  <ul>
    <li>Nome: ${emailInfo.name}</li>
    <li>Cognome: ${emailInfo.surname}</li>
    <li>Email: ${emailInfo.email}</li>
    <li>Numero: ${emailInfo.number ? emailInfo.number : "Non fornito"}</li>
    <li>Messaggio: ${emailInfo.message}</li>
  </ul>`;

  return html;
};

export const TXTTemplate = (emailInfo: EmailInfo): string => {
  const text: string = `Ciao Aurora, hai ricevuto un nuovo messaggio di collaborazione\n\n
    - Nome: ${emailInfo.name}\n
    - Cognome: ${emailInfo.surname}\n
    - Email: ${emailInfo.email}\n
    - Numero: ${emailInfo.number ? emailInfo.number : "Non fornito"}\n
    - Messaggio: ${emailInfo.message}`;

  return text;
};
