import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

export function About() {
  const t = useTranslation();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-12">{t.about.title}</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/about-image.jpg" 
                alt={t.about.title}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-4">{t.about.subtitle}</h3>
              <p className="text-gray-600 mb-4">{t.about.description}</p>
              <ul className="space-y-2 text-gray-600">
                <li>✓ {t.about.features.chauffeurs}</li>
                <li>✓ {t.about.features.fleet}</li>
                <li>✓ {t.about.features.availability}</li>
                <li>✓ {t.about.features.service}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}