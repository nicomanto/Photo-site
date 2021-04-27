import React from "react";
import { Card } from "react-bootstrap";
import { Image } from "cloudinary-react";
import Photo from "../../interfaces/Photo";

type Props = {
  folder: string;
  image: Photo;
};

const projectCard = ({ folder, image }: Props) => (
  <div className="col-md-4">
    <Card className="card-block text-center">
      <Image
        className="card-img-top"
        cloudName="dszun6oiu"
        alt={image.name}
        publicId={image.publicId}
        width="600"
        height="350"
        crop="fill"
        loading="lazy"
      />
      <Card.Body>
        <Card.Title className="my-3">{folder}</Card.Title>
        <a href={`/photoListFolder/${folder}`} className="btn btn-info" role="button">
          See more
        </a>
      </Card.Body>
    </Card>
  </div>
);

export default projectCard;
