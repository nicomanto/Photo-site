import React from "react";
import { Carousel } from "react-bootstrap";
import { Image } from "cloudinary-react";
import { PhotoInGallery } from "../../interfaces/Photo";

type Props = {
  indexImageActive: number;
  setIndexImageActive: React.Dispatch<React.SetStateAction<number>>;
  items: PhotoInGallery[];
};

const CarouselPhoto = ({ indexImageActive, setIndexImageActive, items }: Props) => (
  <Carousel
    indicators={false}
    interval={null}
    activeIndex={indexImageActive}
    onSelect={(selectedIndex: number) => {
      setIndexImageActive(selectedIndex);
    }}
  >
    {items.map((item) => (
      <Carousel.Item>
        <Image
          // className="photoInGallery shadow-1-strong rounded mb-4"
          className="photoCarouselView"
          cloudName="dszun6oiu"
          alt=""
          publicId={item.publicId}
          crop="scale"
          loading="lazy"
        />
      </Carousel.Item>
    ))}
  </Carousel>
);

export default CarouselPhoto;
