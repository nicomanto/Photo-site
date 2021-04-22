import Cloudinary from "./utils/Cloudinary";
import Photo from "../../interfaces/Photo";

export const getPhotoList = async (folderPath: string): Promise<Photo[]> => {
  try {
    const imageList = await Cloudinary.getImageList(folderPath);
    const PhotoList = new Array<Photo>();

    imageList.resources.forEach(
      (element: { public_id: string; filename: string; format: string; secure_url: string }) => {
        const photo: Photo = {
          publicId: element.public_id,
          name: element.filename,
          extension: element.format,
          imageURL: element.secure_url,
        };
        PhotoList.push(photo);
      }
    );

    return PhotoList;
  } catch (err) {
    return err.message;
  }
};

export const getPrimaryPhoto = async (folderPath: string): Promise<Photo> => {
  try {
    const imageList = await Cloudinary.getImageList(folderPath, "primary", 1);
    const photo: Photo = {
      publicId: imageList.resources[0].public_id,
      name: imageList.resources[0].filename,
      extension: imageList.resources[0].format,
      imageURL: imageList.resources[0].secure_url,
    };

    return photo;
  } catch (err) {
    return err.message;
  }
};
