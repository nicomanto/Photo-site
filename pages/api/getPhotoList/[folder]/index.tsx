import { NextApiRequest, NextApiResponse } from "next";
import Cloudinary from "../../service/Cloudinary/Cloudinary";
import Photo from "../../../../interfaces/Photo";

const getFolderPhoto = async (req: NextApiRequest, res: NextApiResponse) => {
  const folder: string = String(req.query.folder);

  try {
    const imageList = await Cloudinary.getImageList(folder);
    const photoList = new Array<Photo>();

    imageList.resources.forEach(
      (element: { public_id: string; filename: string; format: string; secure_url: string }) => {
        const photo: Photo = {
          publicId: element.public_id,
          name: element.filename,
          extension: element.format,
          imageURL: element.secure_url,
        };
        photoList.push(photo);
      }
    );

    if (photoList.length) {
      res.status(200).json({ photoList });
    } else {
      res.status(404).json({ error: "Folder is empty or not exist" });
    }
  } catch (err) {
    res.status(502).json({ error: "Failed to get photos" });
  }
};

export default getFolderPhoto;
