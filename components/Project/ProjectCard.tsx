import React from "react";
import { Card } from "react-bootstrap";
import { Photo } from "../../interfaces/Photo";

type Props = {
  folder: string;
  image: Photo;
  buttonName: string;
};

const projectCard = ({ folder, image, buttonName }: Props) => {
  // add style on image url
  const styledURL: string = image.imageURL.replace("upload/", "upload/c_fill,g_face,h_450,w_600/");

  return (
    <div className="col-md-4 py-2">
      <Card className="card-block text-center" border="none">
        <Card.Img variant="top" src={styledURL} alt="" />
        <Card.Body className="bg-lightCustom">
          <Card.Title lang="en" className="my-3 text-black bg-lightCustom">
            {folder}
          </Card.Title>
          <a href={`/gallery/${folder}`} className="btn btn-dark" role="button">
            {buttonName}
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default projectCard;
