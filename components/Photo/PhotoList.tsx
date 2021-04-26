import { useState } from "react";
import { Image } from "cloudinary-react";
import Photo from "../../interfaces/Photo";
import ModalPhoto from "../Modal/ModalPhoto";

type Props = {
  items: Photo[];
};

const PhotoList = ({ items }: Props) => {
  const [modalShow, setModalShow] = useState(false);
  const [imageContent, setImageContent] = useState({
    publicId: "",
    name: "",
    extension: "",
    imageURL: "",
  });

  return (
    <>
      <ModalPhoto show={modalShow} onHide={() => setModalShow(false)} imageContent={imageContent} />
      <div className="row text-center">
        {items.map((item) => (
          <div className="col-md-4 px-5">
            <Image
              onClick={() => {
                setModalShow(true);
                setImageContent(item);
              }}
              cloudName="dszun6oiu"
              className="photoInGallery shadow-1-strong rounded mb-4"
              alt={item.name}
              publicId={item.publicId}
              width="500"
              crop="scale"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default PhotoList;
