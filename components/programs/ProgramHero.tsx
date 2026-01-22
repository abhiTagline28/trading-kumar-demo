import { type ReactElement } from 'react';
import Button from './Button';

export default function ProgramHero(): ReactElement {
  return (
    <section className="bg-black py-16 md:py-24 lg:py-32">
      <div className="mx-auto w-[85%] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-green-500 leading-tight">
            Learn the skill once.
          </h1>
          
          <div className="space-y-4 text-white">
            <p className="text-lg md:text-xl">
              Apply it across Stocks, Futures, Options, Commodities, Crypto, Forex, ETFs, and more
            </p>
            <p className="text-lg md:text-xl">
              -for a lifetime of disciplined, rule-based, informed trading.
            </p>
          </div>

          <div className="space-y-6 pt-4">
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Whether you are a beginner or an experienced trader, learn directly from Kumar Singh through a practical, hands-on, research-based, data-driven global trading academy designed to elevate real-world trading performance.
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Join from anywhere in the world from the comfort of your home—or choose offline, in-person training if you prefer a classroom experience.
            </p>
          </div>

          <div className="pt-8">
            <Button
              href="/programs/enroll"
              variant="secondary"
              className="text-lg px-8 py-4 min-w-[300px]"
            >
              Secure My Seat in The Mentorship
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
