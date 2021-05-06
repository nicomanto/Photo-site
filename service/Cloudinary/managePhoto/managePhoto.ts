import Folder from "../../../interfaces/Folder";
import { Photo, PhotoInGallery } from "../../../interfaces/Photo";
import Cloudinary from "../Cloudinary";

export const getFolder = async (folder: string = ""): Promise<Folder[]> => {
  const folderList =
    folder === "" ? await Cloudinary.getFolderList() : await Cloudinary.getSubfolderList(folder);
  const folders = new Array<Folder>();

  folderList.folders.forEach((element: { name: string; path: string }) => {
    const folderElement: Folder = {
      name: element.name,
      path: element.path,
    };
    folders.push(folderElement);
  });

  return folders;
};

export const getPrimaryPhoto = async (folder: string): Promise<Photo> => {
  const imageList = await Cloudinary.getImageList(folder, "primary", 1);
  const photo: Photo = {
    publicId: imageList.resources[0].public_id,
    name: imageList.resources[0].filename,
    extension: imageList.resources[0].format,
    imageURL: imageList.resources[0].secure_url,
  };

  return photo;
};

export const getPhotoInFolder = async (folder: string): Promise<PhotoInGallery[]> => {
  const imageList = await Cloudinary.getImageList(folder);
  const photoList = new Array<PhotoInGallery>();

  imageList.resources.forEach(
    (element: {
      public_id: string;
      filename: string;
      format: string;
      secure_url: string;
      context: any;
    }) => {
      const photo: PhotoInGallery = {
        publicId: element.public_id,
        name: element.filename,
        extension: element.format,
        imageURL: element.secure_url,
        ph: element.context ? element.context.photographer : "Anonymous",
      };
      photoList.push(photo);
    }
  );

  return photoList;
};
