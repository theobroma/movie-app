// example  from https://github.com/marin-mar/marin-mar.github.io/blob/master/src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

import translationEN from './@locales/en/translation.json';
import translationRU from './@locales/ru/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs: ['en', 'ru'],
    fallbackLng: ['en', 'ru'],
    // lng: "en",
    interpolation: {
      escapeValue: false,
    },
    debug: true,
  });

export default i18n;
