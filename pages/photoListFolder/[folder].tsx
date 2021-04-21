import { GetServerSideProps } from "next";
import Error from "next/error";
import Layout from "../../components/Layout";
import PhotoList from "../../components/Photo/PhotoList";
import { getPhotoList } from "../../server/Cloudinary/managePhoto";
import Photo from "../../interfaces/Photo";

type Props = {
  photoList: Photo[];
  folderName: string;
  errorCode: boolean;
};

const GalleryPage = ({ errorCode, photoList, folderName }: Props) => {
  if (errorCode) {
    return <Error statusCode={404} />;
  }

  return (
    <Layout title={`Home | ${folderName} Gallery`}>
      <h1>
        Galleria di
        {` ${folderName}`}
      </h1>
      <PhotoList items={photoList} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const folder: string = params!.folder.toString();
  const photoList: Photo[] = await getPhotoList(folder);
  let errorCode = false;

  if (photoList.length === 0) {
    errorCode = true;
  }

  return {
    props: {
      photoList,
      folderName: folder,
      errorCode,
    },
  };
};

export default GalleryPage;
