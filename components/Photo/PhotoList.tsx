import { useState } from "react";
import { Image } from "cloudinary-react";
import { PhotoInGallery } from "../../interfaces/Photo";
import ModalPhoto from "../Modal/ModalPhoto";

type Props = {
  items: PhotoInGallery[];
};

const PhotoList = ({ items }: Props) => {
  const [modalShow, setModalShow] = useState(false);
  const [imageContent, setImageContent] = useState({
    publicId: "",
    name: "",
    extension: "",
    imageURL: "",
    ph: "",
  });

  return (
    <>
      <ModalPhoto show={modalShow} onHide={() => setModalShow(false)} imageContent={imageContent} />
      <div className="row text-center">
        {items.map((item) => (
          <div className="col-md-4 py-2">
            <Image
              onClick={() => {
                setModalShow(true);
                setImageContent(item);
              }}
              cloudName="dszun6oiu"
              className="photoInGallery shadow-1-strong rounded mb-4"
              alt=""
              publicId={item.publicId}
              width="500"
              height="500"
              crop="fill"
              loading="lazy"
            />
            <p>
              {"Photographer: "}
              <em>{item.ph}</em>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default PhotoList;
