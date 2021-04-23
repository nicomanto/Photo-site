import EmailInfo from "../../interfaces/EmailInfo";

const sendInformation = async (event: any) => {
  event.preventDefault();

  const infoEmail: EmailInfo = {
    name: event.target.nameValue.value,
    surname: event.target.surnameValue.value,
    email: event.target.emailValue.value,
    number: event.target.phoneValue.value ? event.target.phoneValue.value : null,
    message: event.target.messageValue.value,
  };

  fetch("/api/contact", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(infoEmail),
  });
};

export default sendInformation;
