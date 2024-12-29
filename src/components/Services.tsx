import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

export function Services() {
  const t = useTranslation();

  const services = [
    {
      key: 'corporate',
      icon: "🏢"
    },
    {
      key: 'airport',
      icon: "✈️"
    },
    {
      key: 'events',
      icon: "🎉"
    },
    {
      key: 'tours',
      icon: "🏛️"
    }
  ] as const;

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-12">{t.services.title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.key} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">
                {t.services[service.key].title}
              </h3>
              <p className="text-gray-600">
                {t.services[service.key].description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}