import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import EN from "@/app/locales/en/language.json";
import VI from "@/app/locales/vi/language.json";

const resources = {
  en: {
    language: EN,
  },
  vi: {
    language: VI,
  },
};

const defaultNS = "login";

i18n.use(initReactI18next).init({
  resources,
  lng: "vi",
  ns: ["language"],
  defaultNS,
  fallbackLng: "vi",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
