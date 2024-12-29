import React, { createContext, useState } from 'react';
import type { LanguageCode } from '../utils/translations';

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {}
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<LanguageCode>('en');

  const handleLanguageChange = (newLanguage: LanguageCode) => {
    setLanguage(newLanguage);
    // Optionally save to localStorage for persistence
    localStorage.setItem('preferredLanguage', newLanguage);
  };

  // Load saved language preference on mount
  React.useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage') as LanguageCode;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange }}>
      {children}
    </LanguageContext.Provider>
  );
}