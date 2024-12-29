import React from 'react';
import { VehicleCard } from './VehicleCard';
import { vehicles } from '../../utils/constants/vehicles';

interface Props {
  onSelect?: (vehicleId: string) => void;
  selectedId?: string;
}

export function VehicleGrid({ onSelect, selectedId }: Props) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {vehicles.map((vehicle) => (
        <VehicleCard
          key={vehicle.id}
          vehicle={vehicle}
          onClick={() => onSelect?.(vehicle.id)}
          selected={vehicle.id === selectedId}
        />
      ))}
    </div>
  );
}