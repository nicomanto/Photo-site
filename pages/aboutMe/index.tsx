import { Badge } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Layout from "../../components/Layout";
import Measures from "../../interfaces/Measures";
import GoogleMapOptions from "../../interfaces/GoogleMapOptions";
import Map from "../../components/Map/Map";

const getWorkshopLocation = (): GoogleMapOptions => {
  const mapOptions: google.maps.MapOptions = {
    zoom: 7,
    center: { lat: 45.160116479846614, lng: 10.7750824992415386 } /* Mantova lat and lng */,
  };

  const markerOptions: google.maps.MarkerOptions[] = [
    {
      position: { lat: 45.160116479846614, lng: 10.775082499241538 },
      title: "Mantova",
    },
    {
      position: { lat: 45.46536206668347, lng: 9.175503680802969 },
      title: "Milano",
    },
    {
      position: { lat: 45.41021406053265, lng: 11.880835139668408 },
      title: "Padova",
    },
    {
      position: { lat: 45.4394807602597, lng: 11.004732910141918 },
      title: "Verona",
    },
  ];

  return {
    mapOptions,
    markerOptions,
  };
};

const AboutMePage = () => {
  const { t } = useTranslation(["aboutMe"]);

  const workshopLocation: GoogleMapOptions = getWorkshopLocation();

  const measures: Measures = {
    height: 168,
    breast: 89,
    waist: 61,
    hip: 91,
    size: 40,
    foot: 38.5,
  };

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

export default AboutMePage;
