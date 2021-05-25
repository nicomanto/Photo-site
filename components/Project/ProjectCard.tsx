import React from "react";
import { Card } from "react-bootstrap";
import { Photo } from "../../interfaces/Photo";

type Props = {
  folder: string;
  image: Photo;
};

const projectCard = ({ folder, image }: Props) => (
  <div className="col-md-4 py-2">
    <Card className="card-block text-center">
      <Card.Img variant="top" src={image.imageURL} alt="" />
      <Card.Body className="bg-light">
        <Card.Title className="my-3 text-black bg-light">{folder}</Card.Title>
        <a href={`/gallery/${folder}`} className="btn btn-dark" role="button">
          See more
        </a>
      </Card.Body>
    </Card>
  </div>
);

export default projectCard;
