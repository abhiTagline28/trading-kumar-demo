import { type ReactElement } from 'react';

export default function ResearchSuiteSection(): ReactElement {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            The Global Institutional Research Suite
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-medium">
            Proprietary Trading Systems & Market Intelligence
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Seven proprietary frameworks. One universal logic. Master the data-backed Source Code to future-forecast price and track institutional liquidity with surgical precision. Stop guessing—start executing with the world-class blueprint for global market mastery.
          </p>
        </div>
      </div>
    </section>
  );
}
