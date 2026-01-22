import { type ReactElement } from 'react';

export default function SystemOverview(): ReactElement {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto w-[85%] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Why this is the only system you will ever need:
            </h2>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 space-y-4">
            <h3 className="text-xl font-bold text-gray-900">Logic over Indicators:</h3>
            <p className="text-gray-700 leading-relaxed">
              We don&apos;t use lagging &quot;Buy/Sell&quot; signals. We teach you to interpret the Market&apos;s Source Code.
            </p>
          </div>

          <div className="text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              One System. Every Market. No Exceptions.
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you are navigating the opening volatility of Mumbai and Tokyo, or tracking the high-stakes liquidity of London, New York, and Hong Kong, the physics of the market never changes. We provide the original, data-backed blueprint to decode institutional money in real-time—across every major exchange and every timezone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
