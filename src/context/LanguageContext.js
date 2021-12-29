import React, { useState, useMemo } from 'react';
import { DEFAULT_LANGUAGE } from '../utils/const';
import { useTranslation } from 'react-i18next';

const languageContext = React.createContext();

export const LanguageProvider = (props) => {
  const { i18n } = useTranslation();

  const [language, setLanguage] = useState(
    localStorage.getItem('language')
      ? localStorage.getItem('language')
      : DEFAULT_LANGUAGE
  );

  const setCurrentLanguage = (language) => {
    localStorage.setItem('language', language ? language : DEFAULT_LANGUAGE);
    setLanguage(language ? language : DEFAULT_LANGUAGE);
    i18n.changeLanguage(language);
  };

  const getCurrentLanguage = () => {
    return localStorage.getItem('language')
      ? localStorage.getItem('language')
      : DEFAULT_LANGUAGE;
  };

  const value = useMemo(() => {
    return {
      setCurrentLanguage,
      getCurrentLanguage,
      language,
    };
  }, [language]);

  return <languageContext.Provider value={value} {...props} />;
};

export function UseLanguage() {
  const context = React.useContext(languageContext);
  if (!context) {
    throw new Error('Algo salio mal on language');
  }

  return context;
}
