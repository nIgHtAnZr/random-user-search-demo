import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEng from './locales/en/translation.json';
import translationZh from './locales/zh/translation.json';
import translationTa from './locales/ta/translation.json';
import translationSi from './locales/si/translation.json';

const DETECTION_OPTIONS = {
  order: ['navigator'],
  caches: ['localStorage'],
};

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translations: translationEng,
    },
    zh: {
      translations: translationZh,
    },
    ta: {
      translations: translationTa,
    },
    si: {
      translations: translationSi,
    },
  },
  load: 'languageOnly',
  saveMissingTo: 'current',
  fallbackLng: false,
  saveMissing: true,
  debug: false,
  ns: ['translations'],
  defaultNS: 'translations',
  nsSeparator: false,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
  },
  detection: DETECTION_OPTIONS,
  react: {
    wait: true,
  },
});

export default i18n;
