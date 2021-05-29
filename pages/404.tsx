import { useTranslation } from "react-i18next";
import i18n from "../i18n/config";

const Page404 = () => {
  const { t } = useTranslation(["error"], { i18n });

  return (
    <div className="px-2 text-center mvh-hcenter">
      <h1>{`404 - ${t("404.errorMessage")}`}</h1>
      <a href="/" className="simpleLink">
        {t("404.buttonBack")}
      </a>
    </div>
  );
};

export default Page404;
