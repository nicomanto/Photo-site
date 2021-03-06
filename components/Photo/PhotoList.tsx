import React, { useState } from "react";
import { Image } from "cloudinary-react";
import { useTranslation } from "react-i18next";
import { PhotoInGallery } from "../../interfaces/Photo";
import ModalPhoto from "../Modal/ModalPhoto";

type Props = {
  items: PhotoInGallery[];
};

const PhotoList = ({ items }: Props) => {
  const [modalShow, setModalShow] = useState(false);
  const [indexImageSelected, setIndexImageSelected] = useState(0);

  const { t } = useTranslation(["ph"]);

  return (
    <>
      <ModalPhoto
        show={modalShow}
        onHide={() => setModalShow(false)}
        indexImageShow={indexImageSelected}
        setIndexImageShow={setIndexImageSelected}
        items={items}
      />
      <div className="row text-center">
        {items.map((item, index) => (
          <div className="col-md-4 py-2">
            <Image
              onClick={() => {
                setModalShow(true);
                setIndexImageSelected(index);
              }}
              cloudName="dszun6oiu"
              className="photoInGallery shadow-1-strong rounded mb-4"
              alt=""
              publicId={item.publicId}
              width="500"
              height="500"
              crop="fill"
              gravity="face"
              loading="lazy"
            />
            <p>
              {`${t("ph")}: `}
              <em lang="it">{item.ph}</em>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default PhotoList;
