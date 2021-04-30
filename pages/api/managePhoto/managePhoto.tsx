import Folder from "../../../interfaces/Folder";
import Photo from "../../../interfaces/Photo";
import Cloudinary from "../service/Cloudinary/Cloudinary";

export const getFolder = async (): Promise<Folder[]> => {
  try {
    const folderList = await Cloudinary.getFolderList();
    const folders = new Array<Folder>();

    folderList.folders.forEach((element: { name: string; path: string }) => {
      const folder: Folder = {
        name: element.name,
        path: element.path,
      };
      folders.push(folder);
    });
    return folders;
  } catch (err) {
    throw Error("Failed to get list of folder");
  }
};

export const getPrimaryPhoto = async (folder: string): Promise<Photo> => {
  try {
    const imageList = await Cloudinary.getImageList(folder, "primary", 1);
    const photo: Photo = {
      publicId: imageList.resources[0].public_id,
      name: imageList.resources[0].filename,
      extension: imageList.resources[0].format,
      imageURL: imageList.resources[0].secure_url,
    };

    return photo;
  } catch (err) {
    throw Error("Failed to get primary photo");
  }
};

export const getPhotoInFolder = async (folder: string): Promise<Photo[]> => {
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

    return photoList;
  } catch (err) {
    throw Error(`Failed to get photos in folder ${folder}`);
  }
};
