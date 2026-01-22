import { type ReactElement } from 'react';
import Button from '@/components/programs/Button';

export default function MentorshipHero(): ReactElement {
  return (
    <section className="bg-black text-white py-16 md:py-24">
      <div className="mx-auto w-[85%] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Stop Guessing with Retail Illusions. Start Operating with Institutional Data.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Master the transition from retail trader to modern, full-time professional. Replace lagging indicators with Market Footprint and Institutional Order Flow to decode real liquidity, intent, and participation. Command a rule-based framework built on pure market logic to dominate Stocks, Options, Futures, Crypto, and Forex.
          </p>
        </div>
      </div>
    </section>
  );
}
