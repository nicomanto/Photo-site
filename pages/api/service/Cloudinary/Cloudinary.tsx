import cloudinary from "./Config";

const Cloudinary = {
  getImageList: (folderPath: string, tag: string = "", maxResult: number = 10): Promise<any> => {
    let expression: string = `folder:${folderPath}`;

    if (tag !== "") {
      expression += ` AND tags=${tag}`;
    }

    return cloudinary.search
      .expression(expression)
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
