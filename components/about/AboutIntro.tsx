import { type ReactElement } from 'react';
import Button from '@/components/programs/Button';

export default function AboutIntro(): ReactElement {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Kumar Singh
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              is the founder of a world-class trading framework designed for the analytical elite. Moving beyond the recycled retail patterns found in the public domain, Kumar has dedicated his career to uncovering the &quot;Source Code&quot; of the financial markets.
            </p>
            <p>
              His mentorship is built on a foundation of Original Research—proprietary strategies that are not taught anywhere else in the world. From the opening bell in Mumbai to the high-stakes liquidity of New York, London, and Tokyo, Kumar&apos;s findings provide a mathematical edge across all asset classes.
            </p>
          </div>
          <div className="pt-4 text-center">
            <Button href="/mentorship/enroll" variant="primary" className="bg-blue-600 hover:bg-blue-700">
              Secure My Seat in The Mentorship
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
