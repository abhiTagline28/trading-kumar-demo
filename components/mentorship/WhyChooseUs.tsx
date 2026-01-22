import { type ReactElement } from 'react';
import Button from '@/components/programs/Button';

interface Benefit {
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    title: 'Zero-Fluff Methodology',
    description: 'We don\'t use lagging "retail" indicators. We teach you how to read the Institutional Footprint, the same way banks and hedge funds view the market.',
  },
  {
    title: 'Time-Efficient Execution',
    description: 'Designed for the busy schedules of surgeons and executives. Learn to identify high-probability setups without staring at screens for 8 hours.',
  },
  {
    title: 'Original Research',
    description: 'You are learning concepts that are not on YouTube or in textbooks. This is original, data-backed intelligence that works across Stocks, Future & Options, Crypto, Forex, and Commodities.',
  },
  {
    title: 'Peer-Level Environment',
    description: 'Join a room where the person sitting next to you is a fellow professional— an IT Director, a Senior Advocate, a Banker, a Math Guru, or a Chartered Accountant.',
  },
];

export default function WhyChooseUs(): ReactElement {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto w-[85%] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 ">
            Why These Professionals Choose Us:
          </h2>
          <div>
            {benefits.map((benefit) => (
              <div key={benefit.title} className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
