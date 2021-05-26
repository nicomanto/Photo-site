import { GetServerSideProps } from "next";
import Error from "next/error";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n/config";
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
  if (statusCode === 404) {
    const { t } = useTranslation(["error"], { i18n });
    return <Error statusCode={statusCode} title={t("404Folder")} />;
  }

  let titlePage: string;
  let title: string;

  if (i18n.language === "en") {
    titlePage = `${folderName} gallery | Aurora Leso`;
    title = `${folderName} gallery`;
  } else {
    titlePage = `Galleria ${folderName} | Aurora Leso`;
    title = `Galleria ${folderName}`;
  }

  return (
    <Layout title={titlePage}>
      <h1 className="display-4 mx-2 text-center title">{title}</h1>
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
