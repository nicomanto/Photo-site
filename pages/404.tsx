import { useTranslation } from "react-i18next";
import { RiEmotionSadLine } from "react-icons/ri";

const Page404 = () => {
  const { t } = useTranslation(["error"]);

  return (
    <div className="errorMessage">
      <h1>
        {`404 | ${t("404.errorMessage")} `}
        <RiEmotionSadLine title="Sad emoticon" />
      </h1>
      <a href="/" className="simpleLink" title="Home">
        {t("404.buttonBack")}
      </a>
    </div>
  );
};

export default Page404;
