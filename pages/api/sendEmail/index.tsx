import type { NextApiRequest, NextApiResponse } from "next";
import sendCollaborationEmail from "../../../service/Nodemailer/manageEmail/collaborationEmail";

const sendCollaboration = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.body) {
    res.status(403).json("Access denied");
  } else {
    const isSent = await sendCollaborationEmail(req.body);

    if (isSent) {
      res.status(200).json({ message: "Email sent correctly" });
    } else {
      res.status(502).json({ error: "Failed to send email" });
    }
  }
};

export default sendCollaboration;
