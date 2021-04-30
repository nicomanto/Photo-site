import React from "react";
import { Card } from "react-bootstrap";
import Photo from "../../interfaces/Photo";

type Props = {
  folder: string;
  image: Photo;
};

const projectCard = ({ folder, image }: Props) => (
  <div className="col-md-4 py-2">
    <Card className="card-block text-center">
      <Card.Img variant="top" src={image.imageURL} alt={image.name} />
      <Card.Body>
        <Card.Title className="my-3">{folder}</Card.Title>
        <a href={`/gallery/${folder}`} className="btn btn-light" role="button">
          See more
        </a>
      </Card.Body>
    </Card>
  </div>
);

export default projectCard;
