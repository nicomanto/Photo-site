import * as React from "react";
import { Modal } from "react-bootstrap";
import { Image } from "cloudinary-react";
import Photo from "../../interfaces/Photo";

type Props = {
  show: boolean;
  onHide: any;
  imageContent: Photo;
};

const ModalPhoto = ({ show, onHide, imageContent }: Props) => (
  <Modal
    show={show}
    onHide={onHide}
    size="xl"
    tabIndex="-1"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton />
    <Modal.Body className="text-center">
      <Image
        cloudName="dszun6oiu"
        className="photoModalView"
        alt={imageContent.name}
        publicId={imageContent.publicId}
        crop="scale"
        loading="lazy"
      />
    </Modal.Body>
  </Modal>
);

export default ModalPhoto;
