import { useTranslation } from "react-i18next";

const Page404 = () => {
  const { t } = useTranslation(["error"]);

  return (
    <div className="px-2 text-center mvh-hcenter">
      <h1>{`404 - ${t("404.errorMessage")}`}</h1>
      <a href="/" className="simpleLink" title="Home">
        {t("404.buttonBack")}
      </a>
    </div>
  );
};

export default Page404;
