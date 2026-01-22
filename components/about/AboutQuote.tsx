import { type ReactElement } from 'react';
import Button from '@/components/programs/Button';

export default function AboutQuote(): ReactElement {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-8 text-center">
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-relaxed">
            I don&apos;t teach you to trade. I teach you to decode the intent of money.
            <br />
            <br />
            In this mentorship, we respect the system, we analyze the data, and we ignore
            the noise. This is the transition from a retail participant to an
            Institutional Strategist.
          </blockquote>
          <p className="text-xl text-gray-600 font-semibold">
            — Kumar Singh
          </p>
          <div className="pt-4">
            <Button href="/mentorship/enroll" variant="primary" className="bg-blue-600 hover:bg-blue-700">
              Secure My Seat In The Mentorship
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
