import { type ReactElement } from 'react';

const mediaPartners = [
  'BUSINESS INSIDER',
  'cheddar',
  'TheStreet',
  'CNN',
  'FOX BUSINESS',
];

export default function MediaPartnersSection(): ReactElement {
  return (
    <section className="bg-black py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center text-lg md:text-xl font-bold text-white uppercase">
          KUMAR SINGH HAS BEEN FEATURED ON
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {mediaPartners.map((partner, index) => (
            <div
              key={index}
              className="text-lg md:text-xl font-semibold text-white opacity-90 hover:opacity-100 transition-opacity"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
