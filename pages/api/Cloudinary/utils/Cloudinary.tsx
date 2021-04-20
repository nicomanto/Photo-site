import cloudinary from "./Config";

const Cloudinary = {
  getImageList: (folderPath: string, maxResult: number = 10) => {
    return cloudinary.search
      .expression(
        `folder:${folderPath}/*` // add your folder
      )
      .max_results(maxResult)
      .execute()
      .then((result: any) => {
        return result;
      })
      .catch(() => {
        throw Error("Failed to get image from cloudinary");
      });
  },
};

export default Cloudinary;
