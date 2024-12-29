import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

export function useTranslation() {
  const { language } = useContext(LanguageContext);
  return translations[language];
}