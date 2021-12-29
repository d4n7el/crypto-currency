import i18n from 'i18next';
import translation_es from '../translations/es/translation.json';
import translation_en from '../translations/en/translation.json';
import { DEFAULT_LANGUAGE, LIST_LANGUAGES } from '../utils/const';

export const i18nInit = () => {
  i18n.init({
    interpolation: { escapeValue: false },
    lng: localStorage.getItem('language')
      ? localStorage.getItem('language')
      : DEFAULT_LANGUAGE,
    fallbackLng: LIST_LANGUAGES,
    resources: {
      es: { translation: translation_es },
      en: { translation: translation_en },
    },
  });
  return i18n;
};
