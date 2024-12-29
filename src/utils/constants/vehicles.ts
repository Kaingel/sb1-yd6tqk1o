import type { Vehicle } from '../../types/vehicles';

export const vehicles: Vehicle[] = [
  {
    id: 'mercedes-e',
    name: 'Mercedes E',
    model: 'Mercedes E Class',
    description: 'Elegant and comfortable sedan',
    basePrice: 80,
    image: '/vehicles/mercedes-e.jpg',
    capacity: 3,
    features: ['Leather seats', 'Climate control', 'WiFi']
  },
  {
    id: 'bmw-5',
    name: 'BMW Serie 5',
    model: 'BMW 5 Series',
    description: 'Dynamic business sedan',
    basePrice: 80,
    image: '/vehicles/bmw-5.jpg',
    capacity: 3,
    features: ['Leather seats', 'Climate control', 'WiFi']
  },
  {
    id: 'mercedes-s',
    name: 'Mercedes S',
    model: 'Mercedes S Class',
    description: 'Ultimate luxury sedan',
    basePrice: 120,
    image: '/vehicles/mercedes-s.jpg',
    capacity: 3,
    features: ['Premium leather', 'Executive seats', 'WiFi', 'Mini bar']
  },
  {
    id: 'bmw-7',
    name: 'BMW Serie 7',
    model: 'BMW 7 Series',
    description: 'Flagship luxury sedan',
    basePrice: 120,
    image: '/vehicles/bmw-7.jpg',
    capacity: 3,
    features: ['Premium leather', 'Executive seats', 'WiFi', 'Mini bar']
  },
  {
    id: 'mercedes-v',
    name: 'Mercedes V Extralong',
    model: 'Mercedes V Class',
    description: 'Spacious luxury van',
    basePrice: 150,
    image: '/vehicles/mercedes-v.jpg',
    capacity: 7,
    features: ['Extended wheelbase', 'Conference seating', 'WiFi', 'Mini bar']
  }
];