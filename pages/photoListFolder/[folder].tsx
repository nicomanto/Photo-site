import { GetServerSideProps } from "next";
import Error from "next/error";
import Layout from "../../components/Layout";
import PhotoList from "../../components/Photo/PhotoList";
import Photo from "../../interfaces/Photo";

type Props = {
  photoList: Photo[];
  folderName: string;
  statusCode: number;
  errorMessage: string;
};

const GalleryPage = ({ photoList, folderName, statusCode, errorMessage }: Props) => {
  if (statusCode !== 200) {
    return <Error statusCode={statusCode} title={errorMessage} />;
  }

  return (
    <Layout title={`${folderName} Gallery`}>
      <h1 className="display-3 text-center">{`${folderName} Gallery`}</h1>
      <div className="py-5 px-5">
        <PhotoList items={photoList!} />
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const folder: string = params!.folder.toString();

  const data = await fetch(`${process.env.URL_SITE}/api/getPhotoList/${folder}`, {
    method: "GET",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  });

  return {
    props: {
      statusCode: data.status,
      errorMessage: data.status === 200 ? null : (await data.json()).error,
      folderName: data.status === 200 ? folder : null,
      photoList: data.status === 200 ? (await data.json()).photoList : null,
    },
  };
};

export default GalleryPage;
