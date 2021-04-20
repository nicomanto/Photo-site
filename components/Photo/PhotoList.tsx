import * as React from "react";
import { ListGroup } from "react-bootstrap";
import Photo from "../../interfaces/Photo";
import PhotoListItem from "./PhotoListItem";

type Props = {
  items: Photo[];
};

const PhotoList = ({ items }: Props) => (
  <ListGroup>
    {items.map((item) => (
      <ListGroup.Item key={item.name}>
        <PhotoListItem data={item} />
      </ListGroup.Item>
    ))}
  </ListGroup>
);

export default PhotoList;
