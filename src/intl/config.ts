import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en_US } from "./en_US";
import { pt_BR } from "./pt_BR";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en_US,
    },
    pt_BR: {
      translation: pt_BR,
    },
  },
  lng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
