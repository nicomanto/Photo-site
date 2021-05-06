import { GetServerSideProps } from "next";
import Error from "next/error";
import Layout from "../../components/Layout";
import PhotoList from "../../components/Photo/PhotoList";
import { PhotoInGallery } from "../../interfaces/Photo";
import { getPhotoInFolder } from "../../service/Cloudinary/managePhoto/managePhoto";

type Props = {
  photoList: PhotoInGallery[];
  folderName: string;
  statusCode: number;
  errorMessage: string;
};

const GalleryPage = ({ photoList, folderName, statusCode, errorMessage }: Props) => {
  if (statusCode !== 200) {
    return <Error statusCode={statusCode} title={errorMessage} />;
  }

  return (
    <Layout title={`${folderName} gallery`}>
      <h1 className="display-3 mx-2 text-center">{`${folderName} gallery`}</h1>
      <div className="py-5 px-5">
        <PhotoList items={photoList!} />
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const folder: string = params!.folder.toString();

  const photos: PhotoInGallery[] = await getPhotoInFolder(`Portfolio/${folder}`);

  return {
    props: {
      statusCode: photos.length ? 200 : 404,
      errorMessage: photos.length ? null : "Folder not exist or is empty",
      folderName: photos.length ? folder : null,
      photoList: photos.length ? photos : null,
    },
  };
};

export default GalleryPage;
