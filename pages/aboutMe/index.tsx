import { Badge } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Layout from "../../components/Layout";
import Measures from "../../interfaces/Measures";
import Map from "../../components/Map/Map";

const AboutMePage = () => {
  const { t } = useTranslation(["aboutMe"]);

  const map: google.maps.MapOptions = {
    zoom: 4,
    center: { lat: -25.363, lng: 131.044 },
  };

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
            <Map mapOptions={map} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutMePage;
