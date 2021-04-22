import Nodemailer from "./utils/Nodemailer";
import EmailInfo from "../../interfaces/EmailInfo";

const sendEmail = async (infoEmail: EmailInfo): Promise<boolean> => {
  try {
    await Nodemailer.sendEmail(infoEmail);

    return true;
  } catch (err) {
    return false;
  }
};

export default sendEmail;
