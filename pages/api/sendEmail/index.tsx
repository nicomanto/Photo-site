import type { NextApiRequest, NextApiResponse } from "next";
import Nodemailer from "../service/Nodemailer/Nodemailer";

const sendCollaboration = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.body) {
    res.status(403).json("Access denied");
  } else {
    try {
      await Nodemailer.sendEmail(req.body);

      res.status(200).json({ message: "Email sent correctly" });
    } catch (err) {
      res.status(502).json({ error: "Failed to send email" });
    }
  }
};

export default sendCollaboration;
