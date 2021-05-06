import * as React from "react";
import { Modal } from "react-bootstrap";
import { Image } from "cloudinary-react";
import { PhotoInGallery } from "../../interfaces/Photo";

type Props = {
  show: boolean;
  onHide: any;
  imageContent: PhotoInGallery;
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
    <Modal.Header closeButton>
      <Modal.Title>{`Photographer: ${imageContent.ph}`}</Modal.Title>
    </Modal.Header>
    <Modal.Body className="text-center">
      <Image
        cloudName="dszun6oiu"
        className="photoModalView"
        alt=""
        publicId={imageContent.publicId}
        crop="scale"
        loading="lazy"
      />
    </Modal.Body>
  </Modal>
);

export default ModalPhoto;
