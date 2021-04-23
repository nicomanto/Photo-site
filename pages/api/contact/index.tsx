import type { NextApiRequest} from "next";
import sendEmail from "../../../server/Nodemailer/manageEmail";

export default async (req: NextApiRequest) => {
  console.log(req.body);
  console.log(await sendEmail(req.body));
};
