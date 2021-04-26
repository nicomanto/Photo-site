import transporter from "./Config";
import EmailInfo from "../../../../interfaces/EmailInfo";
import {
  collaborationTXTTemplate,
  collaborationHMTLTemplate,
} from "../../sendEmail/templateEmail/collaborationRequest";

const Nodemailer = {
  sendEmail: (emailInfo: EmailInfo): Promise<boolean> => {
    // setup e-mail data with unicode symbols

    const mailOptions = {
      from: `"Aurora Leso Site" <${process.env.EMAIL}>`, // sender address
      to: process.env.EMAIL_TO_SEND, // list of receivers
      subject: "Offerta di collaborazione", // Subject line
      text: collaborationTXTTemplate(emailInfo), // plaintext body
      html: collaborationHMTLTemplate(emailInfo), // html body
    };

    return new Promise((resolve) => {
      transporter.sendMail(mailOptions, (error: any) => {
        if (error) {
          resolve(false);
        } else {
          resolve(true);
        }
      });
    });
  },
};

export default Nodemailer;
