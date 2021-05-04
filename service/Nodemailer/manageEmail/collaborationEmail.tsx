import EmailInfo from "../../../interfaces/Email/EmailInfo";
import EmailOption from "../../../interfaces/Email/EmailOption";
import Nodemailer from "../Nodemailer";
import {
  collaborationHMTLTemplate,
  collaborationTXTTemplate,
} from "../templateEmail/collaborationRequest";

const sendCollaborationEmail = async (emailInfo: EmailInfo): Promise<boolean> => {
  const mailOption: EmailOption = {
    from: `"Aurora Leso Site" <${process.env.EMAIL}>`, // sender address
    to: process.env.EMAIL_TO_SEND!, // list of receivers
    subject: "Offerta di collaborazione", // Subject line
    text: collaborationTXTTemplate(emailInfo), // plaintext body
    html: collaborationHMTLTemplate(emailInfo), // html body
  };

  return Nodemailer.sendEmail(mailOption);
};

export default sendCollaborationEmail;
