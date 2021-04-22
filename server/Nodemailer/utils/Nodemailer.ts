import transporter from "./Config";
import EmailInfo from "../../../interfaces/EmailInfo";
import { TXTTemplate, HMTLTemplate } from "../templateEmail/infoTemplate";

const Nodemailer = {
  sendEmail: (emailInfo: EmailInfo): void => {
    // setup e-mail data with unicode symbols

    const mailOptions = {
      from: `"Aurora Leso Site" <${process.env.EMAIL}>`, // sender address
      to: "lesoaurora@gmail.com", // list of receivers
      subject: "Offerta di collaborazione", // Subject line
      text: TXTTemplate(emailInfo), // plaintext body
      html: HMTLTemplate(emailInfo), // html body
    };

    const resp = new Promise((resolve) => {
      transporter.sendMail(mailOptions, (error: any) => {
        if (error) {
          resolve(false);
        } else {
          resolve(true);
        }
      });
    });

    if (!resp) {
      throw Error("Failed to send email of order");
    }
  },
};

export default Nodemailer;
