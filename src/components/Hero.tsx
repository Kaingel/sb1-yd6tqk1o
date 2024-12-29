import React from 'react';
import { scrollToSection } from '../utils/scroll';
import { useTranslation } from '../hooks/useTranslation';

export function Hero() {
  const t = useTranslation();

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative h-full flex items-center justify-center text-white">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">{t.hero.title}</h1>
          <p className="text-xl md:text-2xl mb-8">{t.hero.subtitle}</p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-gold text-black px-8 py-3 rounded-lg text-lg hover:bg-gold/90 transition-colors"
          >
            {t.hero.cta}
          </button>
        </div>
      </div>
    </div>
  );
}