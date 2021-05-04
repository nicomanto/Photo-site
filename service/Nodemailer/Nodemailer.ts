import transporter from "./Config";
import EmailOption from "../../interfaces/Email/EmailOption";

const Nodemailer = {
  sendEmail: (mailOption: EmailOption): Promise<boolean> => {
    // setup e-mail data with unicode symbols

    return new Promise((resolve) => {
      transporter.sendMail(mailOption, (error: any) => {
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
