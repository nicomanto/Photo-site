import { GetStaticProps } from "next";
import { Image } from "cloudinary-react";
import { useTranslation } from "react-i18next";
import Layout from "../components/Layout";
import { Photo } from "../interfaces/Photo";
import Citation from "../interfaces/Citation";
import { getPhotoInFolder } from "../service/Cloudinary/managePhoto/managePhoto";

type Props = {
  photos: Photo[];
};

const HomePage = ({ photos }: Props) => {
  const { t } = useTranslation(["home"]);

  const cit: Citation = {
    citation: t("citation.citation"),
    author: t("citation.author"),
  };

  return (
    <Layout title={t("pageName")}>
      <h1 lang="it" className="display-4 mx-2 text-center title">
        {t("title")}
      </h1>
      <h2 className="display-4 mx-2 text-center subtitle">{t("subtitle")}</h2>
      <div className="py-5 px-5">
        <div className="row text-center">
          <div className="col-md-5">
            <Image
              cloudName="dszun6oiu"
              className="photoPresentation rounded"
              alt=""
              publicId={photos[0].publicId}
              width="500"
              height="500"
              crop="fill"
              loading="lazy"
              gravity="face"
            />
          </div>

          <div className="my-auto col-md-7 citation">
            <blockquote cite="https://www.goodreads.com/quotes/tag/modeling">
              <p>{`"${cit.citation}"`}</p>
              <p>{cit.author}</p>
            </blockquote>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const photos: Photo[] = await getPhotoInFolder("Presentation/Home");

  return {
    props: {
      photos,
    },
    revalidate: 30,
  };
};

export default HomePage;
