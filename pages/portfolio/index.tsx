import { GetStaticProps } from "next";
import React from "react";
import Layout from "../../components/Layout";
import ProjectCard from "../../components/Project/ProjectCard";
import Folder from "../../interfaces/Folder";
import Project from "../../interfaces/Project";
import { getFolder, getPrimaryPhoto } from "../api/managePhoto/managePhoto";

type Props = {
  dataProject: Project[];
};

const PortfolioPage = ({ dataProject }: Props) => (
  <Layout title="Portfolio">
    <h1 className="display-3 mx-2 text-center">Recent works</h1>
    <div className="py-5 px-5">
      <div className="row hiddem-md-up">
        {dataProject.map((item) => (
          <ProjectCard folder={item.folder.name} image={item.primaryImage} />
        ))}
      </div>
    </div>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const folders: Folder[] = await getFolder("Portfolio");

  const dataProject = Array<Project>();

  /* eslint-disable no-await-in-loop */
  for (let i = 0; i < folders.length; i++) {
    const proj: Project = {
      folder: folders[i],
      primaryImage: await getPrimaryPhoto(folders[i].path),
    };

    dataProject.push(proj);
  }
  /* eslint-enable no-await-in-loop */

  return {
    props: {
      dataProject,
    },
  };
};
export default PortfolioPage;
