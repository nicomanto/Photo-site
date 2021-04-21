import { GetServerSideProps } from "next";
import React from "react";
import Layout from "../../components/Layout";
import ProjectCard from "../../components/Project/ProjectCard";
import Project from "../../interfaces/Project";
import { getPrimaryPhoto } from "../../server/Cloudinary/managePhoto";

type Props = {
  dataProject: Project[];
};

const portfolioPage = ({ dataProject }: Props) => (
  <Layout title="Portfolio">
    <h1 className="display-3">Recent works</h1>
    <div className="py-5 px-5">
      <div className="row hiddem-md-up">
        {dataProject.map((item) => (
          <ProjectCard
            folder={item.folder}
            description={item.description}
            image={item.primaryImage}
          />
        ))}
      </div>
    </div>
  </Layout>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const dataProject: Project[] = [
    {
      folder: "photo",
      description: "descrizione photo",
      primaryImage: await getPrimaryPhoto("photo"),
    },
    {
      folder: "place",
      description: "descrizione place",
      primaryImage: await getPrimaryPhoto("place"),
    },
    {
      folder: "gino",
      description: "descrizione place",
      primaryImage: await getPrimaryPhoto("place"),
    },
    {
      folder: "gino2",
      description: "descrizione place",
      primaryImage: await getPrimaryPhoto("place"),
    },
  ];

  return {
    props: {
      dataProject,
    },
  };
};
export default portfolioPage;
