import cloudinary from "./Config";

const Cloudinary = {
  getImageList: (folderPath: string, tag: string = "", maxResult: number = 10): Promise<any> => {
    let expression: string = `folder:${folderPath}`;

    if (tag !== "") {
      expression += ` AND tags=${tag}`;
    }

    return cloudinary.search
      .expression(expression)
      .with_field("context")
      .max_results(maxResult)
      .execute()
      .then((result: any) => {
        return result;
      })
      .catch(() => {
        throw Error("Failed to get image from cloudinary");
      });
  },

  getFolderList: (): Promise<any> => {
    return cloudinary.api
      .root_folders()
      .then((result: any) => {
        return result;
      })
      .catch(() => {
        throw Error("Failed to get list of folder from cloudinary");
      });
  },

  getSubfolderList: (folder: string): Promise<any> => {
    return cloudinary.api
      .sub_folders(folder)
      .then((result: any) => {
        return result;
      })
      .catch(() => {
        throw Error(`Failed to get list of subfolder in ${folder} from cloudinary`);
      });
  },
};

export default Cloudinary;
