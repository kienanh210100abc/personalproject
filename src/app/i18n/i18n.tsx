import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import REGISTER_EN from "@/app/locales/en/register.json";
import REGISTER_VI from "@/app/locales/vi/register.json";
import LOGIN_EN from "@/app/locales/en/login.json";
import LOGIN_VI from "@/app/locales/vi/login.json";
import HEADER_EN from "@/app/locales/en/header.json";
import HEADER_VI from "@/app/locales/vi/header.json";
import MENU_EN from "@/app/locales/en/menu.json";
import MENU_VI from "@/app/locales/vi/menu.json";

const resources = {
  en: {
    register: REGISTER_EN,
    login: LOGIN_EN,
    header: HEADER_EN,
    menu: MENU_EN,
  },
  vi: {
    register: REGISTER_VI,
    login: LOGIN_VI,
    header: HEADER_VI,
    menu: MENU_VI,
  },
};

const defaultNS = "login";

i18n.use(initReactI18next).init({
  resources,
  lng: "vi",
  ns: ["login", "register", "header", "menu"],
  defaultNS,
  fallbackLng: "vi",
  interpolation: {
    escapeValue: false,
  },
});
