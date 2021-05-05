import { GetStaticProps } from "next";
import { Badge } from "react-bootstrap";
import { Image } from "cloudinary-react";
import Layout from "../../components/Layout";
import Measures from "../../interfaces/Measures";
import Photo from "../../interfaces/Photo";
import { getPhotoInFolder } from "../../service/Cloudinary/managePhoto/managePhoto";

type Props = {
  biography: string;
  measures: Measures;
  photos: Photo[];
};

const AboutMePage = ({ biography, measures, photos }: Props) => (
  <Layout title="About me">
    <h1 className="display-3 text-center mx-2 title-home">Biography</h1>
    <div className="py-5 px-5">
      <div className="row text-center">
        <p className="my-auto col-md-8 biography">{biography}</p>
        <Image
          cloudName="dszun6oiu"
          className="photoPresentation aboutImage col-md-4 py-2"
          alt=""
          publicId={photos[0].publicId}
          width="500"
          height="500"
          crop="fill"
          loading="lazy"
        />
      </div>

      <div className="text-center">
        <h2 className="display-4 my-5">Measures</h2>

        <ul className="measureList">
          <li>
            {"Height: "}
            <Badge variant="light">{`${measures.height} cm`}</Badge>
          </li>
          <li>
            {"Breast: "}
            <Badge variant="light">{`${measures.breast} cm`}</Badge>
          </li>
          <li>
            {"Waist: "}
            <Badge variant="light">{`${measures.waist} cm`}</Badge>
          </li>
          <li>
            {"Hip: "}
            <Badge variant="light">{`${measures.hip} cm`}</Badge>
          </li>
          <li>
            {"Size: "}
            <Badge variant="light">{measures.size}</Badge>
          </li>
          <li>
            {"Foot: "}
            <Badge variant="light">{measures.foot}</Badge>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const photos: Photo[] = await getPhotoInFolder("Presentation/AboutMe");

  return {
    props: {
      biography: `Hi, my name is Aurora and I study physics. I started posing in 2018 just to try but I suddenly realised that I loved it. Since then, I posed for many photographers and amateurs too. 
      I am available for portraits, fashion, street, glamour, lingerie. 
      Preferred cities: Mantua , Verona, Padua, Milan.`,
      measures: {
        height: 168,
        breast: 89,
        waist: 61,
        hip: 91,
        size: 40,
        foot: 38.5,
      },
      photos,
    },
  };
};

export default AboutMePage;
