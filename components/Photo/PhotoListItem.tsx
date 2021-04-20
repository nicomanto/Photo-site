import React from "react";
import { Image } from "cloudinary-react";
import Photo from "../../interfaces/Photo";

type Props = {
  data: Photo;
};

const PhotoListItem = ({ data }: Props) => (
  <Image cloudName="dszun6oiu" alt={data.name} publicId={data.publicId} width="500" crop="scale" />
);

export default PhotoListItem;
