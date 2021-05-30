import { GetServerSideProps } from "next";
import DefaultErrorPage from "next/error";
import { useTranslation } from "react-i18next";
import Layout from "../../components/Layout";
import PhotoList from "../../components/Photo/PhotoList";
import { PhotoInGallery } from "../../interfaces/Photo";
import { getPhotoInFolder } from "../../service/Cloudinary/managePhoto/managePhoto";

type Props = {
  photoList: PhotoInGallery[];
  folderName: string;
  statusCode: number;
};

const GalleryPage = ({ photoList, folderName, statusCode }: Props) => {
  const { t } = useTranslation(["gallery"]);

  if (statusCode === 404) {
    return <DefaultErrorPage statusCode={statusCode} />;
  }

  return (
    <Layout title={t("pageName", { folderName })}>
      <h1 className="display-4 mx-2 text-center title">{t("title", { folderName })}</h1>
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
      folderName: photos.length ? folder : null,
      photoList: photos.length ? photos : null,
    },
  };
};

export default GalleryPage;
