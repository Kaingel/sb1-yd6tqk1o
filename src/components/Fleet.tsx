import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { VehicleGrid } from './fleet/VehicleGrid';

export function Fleet() {
  const t = useTranslation();

  return (
    <section id="fleet" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-12">{t.fleet.title}</h2>
        <VehicleGrid />
      </div>
    </section>
  );
}