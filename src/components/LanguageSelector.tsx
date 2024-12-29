import React from 'react';
import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { languages } from '../utils/translations';

export function LanguageSelector() {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = e.target.value as keyof typeof languages;
    setLanguage(newLanguage);
  };

  return (
    <div className="relative">
      <select
        value={language}
        onChange={handleLanguageChange}
        className="appearance-none bg-transparent text-white border border-gold rounded px-3 py-1.5 pr-8 cursor-pointer hover:border-gold/80 transition-colors focus:outline-none focus:ring-1 focus:ring-gold"
      >
        {Object.entries(languages).map(([code, name]) => (
          <option 
            key={code} 
            value={code}
            className="bg-black text-white"
          >
            {name}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
        </svg>
      </div>
    </div>
  );
}