import { GetServerSideProps } from "next";
import Layout from "../../components/Layout";
import PhotoList from "../../components/Photo/PhotoList";
import getPhotoList from "../api/Cloudinary";
import Photo from "../../interfaces/Photo";

type Props = {
  photoList: Photo[];
};

const IndexPage = ({ photoList }: Props) => (
  <Layout title="Home | Image Gallery">
    <h1>Galleria</h1>
    <PhotoList items={photoList} />
  </Layout>
);

export const getServerSideProps: GetServerSideProps = async ({params}) => {
  return {
    props: {
      photoList: await getPhotoList(params!.folder.toString()),
    },
  };
};

export default IndexPage;
