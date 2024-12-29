import React from 'react';
import type { Vehicle } from '../../types/vehicles';
import { useTranslation } from '../../hooks/useTranslation';

interface Props {
  vehicle: Vehicle;
  onClick?: () => void;
  selected?: boolean;
}

export function VehicleCard({ vehicle, onClick, selected }: Props) {
  const t = useTranslation();

  return (
    <div
      onClick={onClick}
      className={`group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 ${
        selected ? 'ring-2 ring-gold' : ''
      }`}
    >
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="text-center text-white p-4">
          <h3 className="text-xl font-semibold mb-2">{vehicle.name}</h3>
          <p className="text-sm mb-2">{vehicle.description}</p>
          <ul className="text-sm space-y-1">
            {vehicle.features.map((feature) => (
              <li key={feature}>• {feature}</li>
            ))}
          </ul>
          <p className="mt-2 text-gold">
            {t.booking.from} €{vehicle.basePrice}
          </p>
        </div>
      </div>
    </div>
  );
}