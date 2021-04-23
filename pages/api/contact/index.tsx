import type { NextApiRequest, NextApiResponse } from "next";
import sendEmail from "../../../server/Nodemailer/manageEmail";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.body);
  console.log(await sendEmail(req.body));
};
