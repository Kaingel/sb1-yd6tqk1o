import React, { useState } from 'react';
import { scrollToSection } from '../utils/scroll';
import { navigationItems } from '../utils/navigation';
import { LanguageSelector } from './LanguageSelector';
import { useTranslation } from '../hooks/useTranslation';

export function Navbar() {
  const t = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black/90 text-white fixed w-full z-50 top-0 left-0">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="text-2xl font-serif">NCC Luxury</div>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map(({ id }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="hover:text-gold transition-colors"
              >
                {t.nav[id as keyof typeof t.nav]}
              </button>
            ))}
            <LanguageSelector />
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gold text-black px-6 py-2 rounded hover:bg-gold/90 transition-colors"
            >
              {t.nav.bookNow}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden pb-4`}>
          <div className="flex flex-col space-y-4">
            {navigationItems.map(({ id }) => (
              <button
                key={id}
                onClick={() => {
                  scrollToSection(id);
                  setIsMenuOpen(false);
                }}
                className="hover:text-gold transition-colors py-2"
              >
                {t.nav[id as keyof typeof t.nav]}
              </button>
            ))}
            <LanguageSelector />
            <button 
              onClick={() => {
                scrollToSection('contact');
                setIsMenuOpen(false);
              }}
              className="bg-gold text-black px-6 py-2 rounded hover:bg-gold/90 transition-colors"
            >
              {t.nav.bookNow}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}