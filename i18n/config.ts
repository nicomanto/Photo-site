import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import aboutMeEN from "./en/aboutMe.json";
import homeEN from "./en/home.json";
import contactsEN from "./en/contacts.json";
import portfolioEN from "./en/portfolio.json";
import errorEN from "./en/error.json";
import aboutMeIT from "./it/aboutMe.json";
import homeIT from "./it/home.json";
import contactsIT from "./it/contacts.json";
import portfolioIT from "./it/portfolio.json";
import errorIT from "./it/error.json";

const resources = {
  en: {
    aboutMe: aboutMeEN,
    home: homeEN,
    contacts: contactsEN,
    portfolio: portfolioEN,
    error: errorEN,
  },
  it: {
    aboutMe: aboutMeIT,
    home: homeIT,
    contacts: contactsIT,
    portfolio: portfolioIT,
    error: errorIT,
  },
};

i18n.use(initReactI18next).init({
  lng: "en",
  ns: ["aboutMe", "home", "contacts", "portfolio", "error"],
  resources,
});

export default i18n;
