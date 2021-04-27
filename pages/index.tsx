import { GetStaticProps } from "next";
import Layout from "../components/Layout";

type Props = {
  title: string;
  subtitle: string;
  citation: string;
};

const IndexPage = ({ title, subtitle, citation }: Props) => (
  <Layout title="Home">
    <h1 lang="it" className="display-3 text-center title-home">
      {title}
    </h1>
    <h2 className="display-4 text-center subtitle-home">{subtitle}</h2>

    <div className="py-5 px-5 text-center">
      <blockquote
        className="my-5 mx-5"
        cite="https://www.lefrasi.com/frase/victor-hugo-quasi-tutto-segreto-delle-anime-grandi?bg=p42"
      >
        <p lang="it" className="citation">{`"${citation}"`}</p>
      </blockquote>
    </div>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "Aurora Leso",
      subtitle: "A model from Italy",
      citation:
        "Quasi tutto il segreto delle anime grandi si racchiude in questa parola: perseverando.",
    },
  };
};

export default IndexPage;
