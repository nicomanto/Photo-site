import type { NextApiRequest, NextApiResponse } from "next";
import { EmailInfo } from "../../../interfaces/Email";
import sendCollaborationEmail from "../../../service/Nodemailer/manageEmail/collaborationEmail";

const validateHuman = async (token: string): Promise<boolean> => {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
    {
      method: "POST",
    }
  );

  const data = await response.json();
  return data.success;
};

const validateForm = (infoForm: EmailInfo): boolean => {
  if (!infoForm.name || !infoForm.surname || !infoForm.email || !infoForm.message) {
    return false;
  }
  return true;
};

const sendCollaboration = async (req: NextApiRequest, res: NextApiResponse) => {
  const human: boolean = await validateHuman(req.body.token);

  if (!human) {
    return res.status(400).json("Bot not allowed!");
  }

  const infoEmail: EmailInfo = {
    name: req.body.infoEmail.name,
    surname: req.body.infoEmail.surname,
    email: req.body.infoEmail.email,
    phone: req.body.infoEmail.phone,
    message: req.body.infoEmail.message,
  };

  if (!validateForm(infoEmail)) {
    return res.status(400).json("Fill in all the required data.");
  }

  const isSent = await sendCollaborationEmail(infoEmail);

  if (!isSent) {
    return res.status(502).json({ error: "Failed to send email" });
  }

  return res.status(200).json({ message: "Email sent correctly" });
};

export default sendCollaboration;
