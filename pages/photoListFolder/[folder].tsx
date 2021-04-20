import { GetServerSideProps } from "next";
import Layout from "../../components/Layout";
import PhotoList from "../../components/Photo/PhotoList";
import getPhotoList from "../api/Cloudinary";
import Photo from "../../interfaces/Photo";

type Props = {
  photoList: Photo[];
  folderName: string;
};

const GalleryPage = ({ photoList, folderName }: Props) => (
  <Layout title={`Home | ${folderName} Gallery`}>
    <h1>
      Galleria di
      {folderName}
    </h1>
    <PhotoList items={photoList} />
  </Layout>
);

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const folder: string = params!.folder.toString();
  return {
    props: {
      photoList: await getPhotoList(folder),
      folderName: folder,
    },
  };
};

export default GalleryPage;
