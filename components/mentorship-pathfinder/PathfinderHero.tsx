import { type ReactElement } from 'react';
import Button from '@/components/programs/Button';

export default function PathfinderHero(): ReactElement {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
            Stop Following the Crowd. Start Trading the Reality.
          </h1>
          <p className="text-lg md:text-xl text-black">
            Select the depth of your Institutional Edge:
          </p>
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
