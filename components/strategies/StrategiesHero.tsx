import { type ReactElement } from 'react';
import Link from 'next/link';

export default function StrategiesHero(): ReactElement {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            The Global Standard in Institutional Trading Strategies & Research
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Master proprietary, data-backed systems designed for the modern professional. Led by Kumar Singh.
          </p>
          <div className="pt-6">
            <Link
              href="/mentorship/enroll"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Secure My Seat in The Mentorship
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
