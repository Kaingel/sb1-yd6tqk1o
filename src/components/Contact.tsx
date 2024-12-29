import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { carOptions } from '../utils/cars';

export function Contact() {
  const t = useTranslation();
  const [bookingType, setBookingType] = useState<'pickup' | 'hourly'>('pickup');
  const [selectedCar, setSelectedCar] = useState('');

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif mb-8 text-center">{t.booking.title}</h2>
          
          <form className="space-y-6">
            <div className="flex justify-center gap-4 mb-8">
              <button
                type="button"
                onClick={() => setBookingType('pickup')}
                className={`px-6 py-2 rounded ${
                  bookingType === 'pickup' 
                    ? 'bg-gold text-black' 
                    : 'bg-gray-800 text-white'
                }`}
              >
                {t.booking.pointToPoint}
              </button>
              <button
                type="button"
                onClick={() => setBookingType('hourly')}
                className={`px-6 py-2 rounded ${
                  bookingType === 'hourly' 
                    ? 'bg-gold text-black' 
                    : 'bg-gray-800 text-white'
                }`}
              >
                {t.booking.hourly}
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {carOptions.map((car) => (
                <div
                  key={car.id}
                  onClick={() => setSelectedCar(car.id)}
                  className={`p-4 border rounded cursor-pointer transition-colors ${
                    selectedCar === car.id
                      ? 'border-gold bg-gray-800'
                      : 'border-gray-700 hover:border-gold'
                  }`}
                >
                  <h3 className="font-semibold text-lg">
                    {t.fleet.cars[car.id as keyof typeof t.fleet.cars].name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {t.fleet.cars[car.id as keyof typeof t.fleet.cars].description}
                  </p>
                  <p className="text-gold mt-2">
                    {t.booking.from} €{car.basePrice}/hour
                  </p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder={t.booking.name}
                className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 focus:border-gold outline-none"
              />
              <input
                type="email"
                placeholder={t.booking.email}
                className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 focus:border-gold outline-none"
              />
            </div>

            <input
              type="tel"
              placeholder={t.booking.phone}
              className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 focus:border-gold outline-none"
            />

            {bookingType === 'pickup' ? (
              <>
                <input
                  type="text"
                  placeholder={t.booking.pickup}
                  className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 focus:border-gold outline-none"
                />
                <input
                  type="text"
                  placeholder={t.booking.destination}
                  className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 focus:border-gold outline-none"
                />
              </>
            ) : (
              <input
                type="number"
                placeholder={t.booking.hours}
                min="1"
                className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 focus:border-gold outline-none"
              />
            )}

            <input
              type="datetime-local"
              className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 focus:border-gold outline-none"
            />

            <textarea
              placeholder={t.booking.requirements}
              rows={4}
              className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 focus:border-gold outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-gold text-black px-8 py-3 rounded-lg text-lg hover:bg-gold/90 transition-colors"
            >
              {t.booking.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}