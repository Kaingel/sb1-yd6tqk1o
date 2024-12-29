export interface Vehicle {
  id: string;
  name: string;
  model: string;
  description: string;
  basePrice: number;
  image: string;
  capacity: number;
  features: string[];
}

export type VehicleCategory = 'sedan' | 'luxury' | 'van';