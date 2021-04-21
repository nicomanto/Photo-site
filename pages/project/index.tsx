import { GetServerSideProps } from "next";
import ProjectCard from "../../components/Project/ProjectCard";
import Project from "../../interfaces/Project";
import { getPrimaryPhoto } from "../../server/Cloudinary/managePhoto";

type Props = {
  dataProject: Project[];
};

const projectPage = ({ dataProject }: Props) => (
  <>
    {dataProject.map((item) => (
      <ProjectCard folder={item.folder} description={item.description} image={item.primaryImage} />
    ))}
  </>
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
  ];

  return {
    props: {
      dataProject,
    },
  };
};
export default projectPage;
