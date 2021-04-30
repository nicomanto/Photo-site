import { GetStaticProps } from "next";
import { Image } from "cloudinary-react";
import Layout from "../components/Layout";
import Photo from "../interfaces/Photo";
import { getPhotoInFolder } from "./api/managePhoto/managePhoto";

type Props = {
  title: string;
  subtitle: string;
  citation: string;
  photos: Photo[];
};

const IndexPage = ({ title, subtitle, citation, photos }: Props) => (
  <Layout title="Home">
    <h1 lang="it" className="display-3 mx-2 text-center title-home">
      {title}
    </h1>
    <h2 className="display-4 mx-2 text-center subtitle-home">{subtitle}</h2>
    <div className="row text-center py-5 px-5">
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
      <blockquote
        className="my-auto col-md-8"
        cite="https://www.lefrasi.com/frase/victor-hugo-quasi-tutto-segreto-delle-anime-grandi?bg=p42"
      >
        <p lang="it" className="citation">{`"${citation}"`}</p>
      </blockquote>
    </div>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const photos: Photo[] = await getPhotoInFolder("Presentation/Home");
  return {
    props: {
      title: "Aurora Leso",
      subtitle: "A model from Italy",
      citation:
        "Quasi tutto il segreto delle anime grandi si racchiude in questa parola: perseverando.",
      photos,
    },
  };
};

export default IndexPage;
