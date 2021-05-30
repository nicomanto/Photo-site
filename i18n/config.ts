import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import aboutMeEN from "./en/pages/aboutMe.json";
import homeEN from "./en/pages/home.json";
import contactsEN from "./en/pages/contacts.json";
import portfolioEN from "./en/pages/portfolio.json";
import errorEN from "./en/pages/error.json";
import formEmailEN from "./en/components/formEmail.json";
import photographerEN from "./en/components/photographer.json";
import layoutEN from "./en/components/layout.json";
import galleryEN from "./en/pages/gallery.json";
import aboutMeIT from "./it/pages/aboutMe.json";
import homeIT from "./it/pages/home.json";
import contactsIT from "./it/pages/contacts.json";
import portfolioIT from "./it/pages/portfolio.json";
import errorIT from "./it/pages/error.json";
import formEmailIT from "./it/components/formEmail.json";
import layoutIT from "./it/components/layout.json";
import photographerIT from "./it/components/photographer.json";
import galleryIT from "./it/pages/gallery.json";

const resources = {
  en: {
    aboutMe: aboutMeEN,
    home: homeEN,
    contacts: contactsEN,
    portfolio: portfolioEN,
    error: errorEN,
    formEmail: formEmailEN,
    layout: layoutEN,
    ph: photographerEN,
    gallery: galleryEN,
  },
  it: {
    aboutMe: aboutMeIT,
    home: homeIT,
    contacts: contactsIT,
    portfolio: portfolioIT,
    error: errorIT,
    formEmail: formEmailIT,
    layout: layoutIT,
    ph: photographerIT,
    gallery: galleryIT,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    ns: [
      "aboutMe",
      "home",
      "contacts",
      "portfolio",
      "error",
      "formEmail",
      "layout",
      "ph",
      "gallery",
    ],
    resources,
    fallbackLng: "en",
    supportedLngs: ["en", "it"],
    interpolation: {
      escapeValue: true,
    },
  });



export default i18n;
