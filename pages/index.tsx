import { GetStaticProps } from "next";
import { Image } from "cloudinary-react";
import Layout from "../components/Layout";
import Photo from "../interfaces/Photo";
import Citation from "../interfaces/Citation";
import { getPhotoInFolder } from "./api/managePhoto/managePhoto";

type Props = {
  title: string;
  subtitle: string;
  cit: Citation;
  photos: Photo[];
};

const IndexPage = ({ title, subtitle, cit, photos }: Props) => (
  <Layout title="Home">
    <h1 lang="it" className="display-3 mx-2 text-center title-home">
      {title}
    </h1>
    <h2 className="display-4 mx-2 text-center subtitle-home">{subtitle}</h2>
    <div className="py-5 px-5">
      <div className="row text-center">
        <Image
          cloudName="dszun6oiu"
          className="photoPresentation col-md-4 py-2"
          alt={photos[0].name}
          publicId={photos[0].publicId}
          width="500"
          height="500"
          crop="fill"
          loading="lazy"
        />
        <div className="my-auto col-md-8 citation">
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
