import * as React from "react";
import { Modal } from "react-bootstrap";
import { PhotoInGallery } from "../../interfaces/Photo";
import CarouselPhoto from "../Carousel/CarouselPhoto";

type Props = {
  show: boolean;
  onHide: any;
  indexImageShow: number;
  setIndexImageShow: React.Dispatch<React.SetStateAction<number>>;
  items: PhotoInGallery[];
};

const ModalPhoto = ({ show, onHide, indexImageShow, setIndexImageShow, items }: Props) => (
  <div className="noOutline">
    <Modal
      show={show}
      onHide={onHide}
      size="xl"
      tabIndex="-1"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{`Photographer: ${items[indexImageShow].ph}`}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <CarouselPhoto
          indexImageActive={indexImageShow}
          setIndexImageActive={setIndexImageShow}
          items={items}
        />
      </Modal.Body>
    </Modal>
  </div>
);

export default ModalPhoto;
