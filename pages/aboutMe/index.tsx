import { Badge } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { GetStaticProps } from "next";
import Layout from "../../components/Layout";
import Measures from "../../interfaces/Measures";
import GoogleMapOptions from "../../interfaces/GoogleMapOptions";
import Map from "../../components/Map/Map";
import measure from "../../data/aboutMe/measures.json";
import mapsData from "../../data/aboutMe/mapsData.json";

type Props = {
  workshopLocation: GoogleMapOptions;
  measures: Measures;
};

const AboutMePage = ({ workshopLocation, measures }: Props) => {
  const { t } = useTranslation(["aboutMe"]);

  return (
    <Layout title={t("pageName")}>
      <h1 className="display-4 text-center mx-2 title">{t("title")}</h1>
      <div className="py-5 px-5">
        <div className="row text-center">
          <div className="my-auto col-md-7">
            <p className="biography">{t("biography")}</p>

            <div className="my-5">
              <h2 className="display-4 title-min">{t("measures.title")}</h2>

              <ul className="measureList">
                <li>
                  {`${t("measures.data.height")}: `}
                  <Badge variant="light">{`${measures.height} cm`}</Badge>
                </li>
                <li>
                  {`${t("measures.data.breast")}: `}
                  <Badge variant="light">{`${measures.breast} cm`}</Badge>
                </li>
                <li>
                  {`${t("measures.data.waist")}: `}
                  <Badge variant="light">{`${measures.waist} cm`}</Badge>
                </li>
                <li>
                  {`${t("measures.data.hip")}: `}
                  <Badge variant="light">{`${measures.hip} cm`}</Badge>
                </li>
                <li>
                  {`${t("measures.data.size")}: `}
                  <Badge variant="light">{measures.size}</Badge>
                </li>
                <li>
                  {`${t("measures.data.foot")}: `}
                  <Badge variant="light">{measures.foot}</Badge>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-5">
            <h2 className="display-4 title-min">{t("map.title")}</h2>
            <Map mapOptions={workshopLocation} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const measures: Measures = {
    height: measure.height,
    breast: measure.breast,
    waist: measure.waist,
    hip: measure.hip,
    size: measure.size,
    foot: measure.foot,
  };

  const mapOptions: google.maps.MapOptions = {
    zoom: mapsData.options.zoom,
    center: {
      lat: mapsData.options.center.lat,
      lng: mapsData.options.center.lng,
    } /* Mantova lat and lng */,
  };

  const markerOptions: google.maps.MarkerOptions[] = [];

  mapsData.marker.forEach((element) => {
    markerOptions.push(element);
  });

  const workshopLocation: GoogleMapOptions = {
    mapOptions,
    markerOptions,
  };

  return {
    props: {
      workshopLocation,
      measures,
    },
  };
};

export default AboutMePage;
