// example  from https://github.com/marin-mar/marin-mar.github.io/blob/master/src/i18n.js
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import translationEN from './@locales/en/translation.json';
import translationUK from './@locales/uk/translation.json';

export const defaultNS = 'ns1';
export const resources = {
  en: {
    translation: translationEN,
  },
  uk: {
    translation: translationUK,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs: ['en', 'uk'],
    fallbackLng: ['en', 'uk'],
    // lng: "en",
    interpolation: {
      escapeValue: false,
    },
    // enable/disable console.log
    debug: false,
  });

// eslint-disable-next-line import/no-unused-modules
export default i18n;
