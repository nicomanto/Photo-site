import React from "react";
import { Image } from "cloudinary-react";
import Photo from "../../interfaces/Photo";

type Props = {
  data: Photo;
};

const PhotoListItem = ({ data }: Props) => (
  <Image cloudName={process.env.CLOUDINARY_CLOUD_NAME} alt={data.name} publicId={data.publicId} width="500" crop="scale" />
);

export default PhotoListItem;
