import { GetStaticProps } from "next";
import { Badge } from "react-bootstrap";
import { Image } from "cloudinary-react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n/config";
import Layout from "../../components/Layout";
import Measures from "../../interfaces/Measures";
import { Photo } from "../../interfaces/Photo";
import { getPhotoInFolder } from "../../service/Cloudinary/managePhoto/managePhoto";

type Props = {
  photos: Photo[];
};

const AboutMePage = ({ photos }: Props) => {
  const { t } = useTranslation(["aboutMe"], { i18n });

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
            <Image
              cloudName="dszun6oiu"
              className="photoPresentation aboutImage rounded"
              alt=""
              publicId={photos[0].publicId}
              width="500"
              height="500"
              crop="fill"
              loading="lazy"
              gravity="face"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const photos: Photo[] = await getPhotoInFolder("Presentation/AboutMe");

  return {
    props: {
      photos,
    },
    revalidate: 30,
  };
};

export default AboutMePage;
