import { GetStaticProps } from "next";
import React from "react";
import Layout from "../../components/Layout";
import ProjectCard from "../../components/Project/ProjectCard";
import Photo from "../../interfaces/Photo";
import Project from "../../interfaces/Project";

type Props = {
  dataProject: Project[];
};

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

const PortfolioPage = ({ dataProject }: Props) => (
  <Layout title="Portfolio">
    <h1 className="display-3 text-center">Recent works</h1>
    <div className="py-5 px-5">
      <div className="row hiddem-md-up">
        {dataProject.map((item) => (
          <ProjectCard folder={item.folder} image={item.primaryImage} />
        ))}
      </div>
    </div>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetch(`${process.env.URL_SITE}/api/getListFolder/`, {
    method: "GET",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  });

  const { folders } = await data.json();

  const dataProject = Array<Project>();

  for await (const element of folders) {
    const proj: Project = {
      folder: element.path,
      primaryImage: await getPrimaryImage(element.path),
    };

    dataProject.push(proj);
  }

  return {
    props: {
      dataProject,
    },
  };
};
export default PortfolioPage;
