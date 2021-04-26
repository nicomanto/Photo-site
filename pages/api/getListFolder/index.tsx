import { NextApiRequest, NextApiResponse } from "next";
import Cloudinary from "../service/Cloudinary/Cloudinary";

const getFolderPhoto = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { folders } = await Cloudinary.getFolderList();

    res.status(200).json({ folders });
  } catch (err) {
    res.status(502).json({ error: "Failed to get list of folder" });
  }
};

export default getFolderPhoto;
