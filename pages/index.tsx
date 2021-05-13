import { GetStaticProps } from "next";
import { Image } from "cloudinary-react";
import Layout from "../components/Layout";
import { Photo } from "../interfaces/Photo";
import Citation from "../interfaces/Citation";
import { getPhotoInFolder } from "../service/Cloudinary/managePhoto/managePhoto";

type Props = {
  title: string;
  subtitle: string;
  cit: Citation;
  photos: Photo[];
};

const IndexPage = ({ title, subtitle, cit, photos }: Props) => (
  <Layout title="Home">
    <h1 lang="it" className="display-4 mx-2 text-center title">
      {title}
    </h1>
    <h2 className="display-4 mx-2 text-center subtitle">{subtitle}</h2>
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

export const getStaticProps: GetStaticProps = async () => {
  const photos: Photo[] = await getPhotoInFolder("Presentation/Home");

  const cit: Citation = {
    citation:
      "Modeling is the culmination of lighting, texture, body movement, and your soul's expression.",
    author: "Adrienne Posey",
  };

  return {
    props: {
      title: "Aurora Leso",
      subtitle: "A model from Italy",
      cit,
      photos,
    },
  };
};

export default IndexPage;
