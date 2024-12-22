import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import pt from "./src/public/locales/pt/pt.json";
import en from "./src/public/locales/en/en.json";

const savedLanguage = localStorage.getItem("language") || "pt";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: pt },
      en: { translation: en },
    }, 
    lng: savedLanguage,
    fallbackLng: "pt",
    interpolation: { escapeValue: false },
  });

export default i18n;