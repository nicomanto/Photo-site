import { GetStaticProps } from "next";
import { Badge } from "react-bootstrap";
import Layout from "../../components/Layout";
import Measures from "../../interfaces/Measures";
/* import Photo from "../../interfaces/Photo"; */

type Props = {
  biography: string;
  measures: Measures;
};

const AboutMePage = ({ biography, measures }: Props) => (
  <Layout title="About me">
    <h1 className="display-3 text-center title-home">Biography</h1>
    <p>{biography}</p>
    <ul>
      <li>
        Height:
        <Badge variant="light">{`${measures.height} cm`}</Badge>
      </li>
      <li>
        Breast:
        <Badge variant="light">{`${measures.breast} cm`}</Badge>
      </li>
      <li>
        Waist:
        <Badge variant="light">{`${measures.waist} cm`}</Badge>
      </li>
      <li>
        Hip:
        <Badge variant="light">{`${measures.hip} cm`}</Badge>
      </li>
      <li>
        Size:
        <Badge variant="light">{measures.size}</Badge>
      </li>
      <li>
        Foot:
        <Badge variant="light">{measures.foot}</Badge>
      </li>
    </ul>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      biography: `Sono una ragazza che posa come fotomodella da circa 4 anni, ma in primis sono una studentessa universitaria presso la facoltà di fisica di Padova.
      Amo la fotografia in tutte le sue sfumature: posare mi è sempre piaciuto, sono a mio agio davanti all'obiettivo e mi diverto a farlo.
      Sono disponibile nel ritratto, street, fashion e glamour. Come zone sono disponibile a Padova, Verona, Mantova, Brescia.`,
      measures: {
        height: 168,
        breast: 89,
        waist: 61,
        hip: 91,
        size: 38,
        foot: 38.5,
      },
    },
  };
};

export default AboutMePage;
