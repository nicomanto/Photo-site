import type { NextApiRequest, NextApiResponse } from "next";
import { EmailInfo } from "../../../interfaces/Email";
import sendCollaborationEmail from "../../../service/Nodemailer/manageEmail/collaborationEmail";

const sendCollaboration = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.body.name) {
    res.status(400).json("Name not found");
  } else if (!req.body.surname) {
    res.status(400).json("Surname not found");
  } else if (!req.body.email) {
    res.status(400).json("Email not found");
  } else if (!req.body.message) {
    res.status(400).json("Message not found");
  } else {
    const infoEmail: EmailInfo = {
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message,
    };

    const isSent = await sendCollaborationEmail(infoEmail);

    if (isSent) {
      res.status(200).json({ message: "Email sent correctly" });
    } else {
      res.status(502).json({ error: "Failed to send email" });
    }
  }
};

export default sendCollaboration;
