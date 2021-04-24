import { NextApiRequest, NextApiResponse } from "next";
import Cloudinary from "../../service/Cloudinary/Cloudinary";
import Photo from "../../../../interfaces/Photo";

const getPrimaryPhoto = async (req: NextApiRequest, res: NextApiResponse) => {
  const folder: string = String(req.query.folder);

  try {
    const imageList = await Cloudinary.getImageList(folder, "primary", 1);
    const photo: Photo = {
      publicId: imageList.resources[0].public_id,
      name: imageList.resources[0].filename,
      extension: imageList.resources[0].format,
      imageURL: imageList.resources[0].secure_url,
    };

    res.status(200).json({ photo });
  } catch (err) {
    res.status(502).json({ error: "Failed to get primary photo" });
  }
};

export default getPrimaryPhoto;
