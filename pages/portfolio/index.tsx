import { GetServerSideProps } from "next";
import React from "react";
import Layout from "../../components/Layout";
import ProjectCard from "../../components/Project/ProjectCard";
import Photo from "../../interfaces/Photo";
import Project from "../../interfaces/Project";

type Props = {
  dataProject: Project[];
};

const portfolioPage = ({ dataProject }: Props) => (
  <Layout title="Portfolio">
    <h1 className="display-3 text-center">Recent works</h1>
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
  const getPrimaryImage = async (folder: string): Promise<Photo> => {
    const data = await fetch(`${process.env.URL_SITE}/api/getPrimaryPhoto/${folder}`, {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    });

    if (data.status === 200) {
      return (await data.json()).photo;
    }
    throw Error("Primary Image not found");
  };

  const dataProject: Project[] = [
    {
      folder: "photo",
      description: "descrizione photo",
      primaryImage: await getPrimaryImage("photo"),
    },
    {
      folder: "place",
      description: "descrizione place",
      primaryImage: await getPrimaryImage("place"),
    },
    {
      folder: "gino",
      description: "descrizione place",
      primaryImage: await getPrimaryImage("place"),
    },
    {
      folder: "gino2",
      description: "descrizione place",
      primaryImage: await getPrimaryImage("place"),
    },
  ];

  return {
    props: {
      dataProject,
    },
  };
};
export default portfolioPage;
