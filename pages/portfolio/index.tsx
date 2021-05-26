import { GetStaticProps } from "next";
import React from "react";
import i18n from '../../i18n/config'
import { useTranslation } from "react-i18next";
import Layout from "../../components/Layout";
import ProjectCard from "../../components/Project/ProjectCard";
import Folder from "../../interfaces/Folder";
import Project from "../../interfaces/Project";
import { getFolder, getPrimaryPhoto } from "../../service/Cloudinary/managePhoto/managePhoto";

type Props = {
  dataProject: Project[];
};

const PortfolioPage = ({ dataProject }: Props) => {
  const { t } = useTranslation(['portfolio'],{i18n});
  
  return(
    <Layout title={t('pageName')}>
      <h1 className="display-4 mx-2 text-center title">{t('title')}</h1>
      <div className="py-5 px-5">
        <div className="row hiddem-md-up">
          {dataProject.map((item) => (
            <ProjectCard buttonName={t('button')} folder={item.folder.name} image={item.primaryImage} />
          ))}
        </div>
      </div>
    </Layout>
  )
};

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
    revalidate: 30,
  };
};
export default PortfolioPage;
