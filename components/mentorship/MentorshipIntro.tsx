import { type ReactElement } from 'react';
import Button from '@/components/programs/Button';

export default function MentorshipIntro(): ReactElement {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 uppercase">
            Master the Science of Institutional Orderflow
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Professional-grade trading mentorship built on original, data-backed research. Go beyond lagging retail patterns and indicators with high-accuracy strategies deployed by Institutional Market Movers.
            </p>
            <p>
              In an arena of uncertainty, we teach you to respect systems rather than luck—providing a rigorous framework designed for the analytical mind.
            </p>
          </div>
          <div className="pt-4">
            <Button href="/mentorship/enroll" variant="primary">
              Secure My Seat in The Mentorship
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
