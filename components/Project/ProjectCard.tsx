import React from "react";
import { Card } from "react-bootstrap";
import Photo from "../../interfaces/Photo";

type Props = {
  folder: string;
  description: string;
  image: Photo;
};

const projectCard = ({ folder, description, image }: Props) => (
  <div className="col-md-4">
    <Card className="card-block">
      <Card.Img variant="top" src={image.imageURL} alt={image.name} />
      <Card.Body>
        <Card.Title>{folder}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <a href={`/photoListFolder/${folder}`} className="btn btn-info" role="button">
          Link Button
        </a>
      </Card.Body>
    </Card>
  </div>
);

export default projectCard;
