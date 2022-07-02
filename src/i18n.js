import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import Language from './constants/language';
import translationEN from "./i18n/en.json";
import translationFR from "./i18n/fr.json";

let defaultLanguage = Language.FR;

// the translations
const resources = {
    en: {
        translation: translationEN,
    },
    fr: {
        translation: translationFR,
    },
};

i18n.use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        fallbackLng: Language.FR,
        debug: true,
        resources,
        lng: defaultLanguage,
        keySeparator: ".",  // to support nested translations
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    });

export default i18n;
