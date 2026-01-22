import { type ReactElement } from 'react';
import Button from '@/components/programs/Button';

interface SpecializedModule {
  number: number;
  title: string;
  description: string;
  spotsOpen: number;
}

const specializedModules: SpecializedModule[] = [
  {
    number: 1,
    title: 'The Volume Footprint: The Ultimate Truth',
    description:
      'The Ultimate Truth. Stop guessing and start seeing the actual buy/sell orders executed inside every candle.',
    spotsOpen: 4,
  },
  {
    number: 2,
    title: 'Order Flow Volume Profile: The Value Map',
    description:
      'The Map of the 1%. Locate the exact price levels where institutions have committed their largest capital.',
    spotsOpen: 4,
  },
  {
    number: 3,
    title: 'The Smart Money Trap (Order Blocks/FVG)',
    description:
      'Stop Being the Liquidity. Identify retail traps and enter exactly where the "Smart Money" manipulates the trend.',
    spotsOpen: 4,
  },
  {
    number: 4,
    title: 'The Volume Engine (Delta/CVD)',
    description:
      'Real-Time Conviction. Use Delta and CVD to confirm if the move is backed by real institutional aggressive buying.',
    spotsOpen: 4,
  },
  {
    number: 5,
    title: 'The Parallel Channel & Institutional Zones',
    description:
      'Instant Mapping. One-click identification of institutional supply and demand zones for surgical entries.',
    spotsOpen: 4,
  },
  {
    number: 6,
    title: 'Central Pivot Range (CPR)',
    description: 'Identify Key Market Levels Before Price Moves',
    spotsOpen: 4,
  },
  {
    number: 7,
    title: 'Pivot Points Mastery',
    description:
      'The Floor of the Market. Trade the high-probability "Hidden Levels" used by floor traders and algos.',
    spotsOpen: 4,
  },
  {
    number: 8,
    title: 'VWAP: The Institutional Benchmark',
    description:
      'The Benchmark. Execute at the same "fair value" price used by institutional execution desks worldwide.',
    spotsOpen: 4,
  },
  {
    number: 9,
    title: 'Anchored VWAP: Event-Based Power',
    description: 'Institutional Event-Based Levels That Control Price',
    spotsOpen: 4,
  },
  {
    number: 10,
    title: 'The Dual-Layer Trend Filter (EMA/SMA)',
    description: 'Track FII & DII Trend Direction with Precision',
    spotsOpen: 4,
  },
  {
    number: 11,
    title: 'Candle Wick & Body Psychology',
    description:
      "Read the Market's Mind. Decode the hidden exhaustion and strength behind every wick and body.",
    spotsOpen: 4,
  },
  {
    number: 12,
    title: 'Fibonacci: Institutional Discount',
    description: 'Institutional Price Levels for High-Probability Entries',
    spotsOpen: 4,
  },
  {
    number: 13,
    title: 'TradingView Mastery',
    description:
      'Precision Setup. Optimize your workstation with the exact institutional know-how required for fast execution.',
    spotsOpen: 4,
  },
  {
    number: 14,
    title: 'Strategic Risk Management',
    description: 'Protect Capital. Control Risk. Scale Confidently.',
    spotsOpen: 4,
  },
  {
    number: 15,
    title: 'Trading Psychology',
    description: 'Master Yourself Before You Master the Market.',
    spotsOpen: 4,
  },
];

export default function Path2SpecializedModules(): ReactElement {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="mb-2 text-3xl font-bold text-black">
            Path 2: Specialized Deep-Dive Modules
          </h2>
          <p className="text-gray-700">
            Focused mastery for specific technical gaps. (Group Class Only).
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="px-4 py-4 text-left text-sm font-semibold text-black">
                  Specialized Module
                </th>
                <th className="px-4 py-4 text-center text-sm font-semibold text-black">
                  Apply
                </th>
                <th className="px-4 py-4 text-left text-sm font-semibold text-black">
                  The Strategic Reason to Join
                </th>
              </tr>
            </thead>
            <tbody>
              {specializedModules.map((module) => (
                <tr
                  key={module.number}
                  className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50"
                >
                  <td className="px-4 py-4">
                    <p className="font-semibold text-black">
                      {module.number}. {module.title}
                    </p>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <div className="h-4 w-4 rounded-full border-2 border-gray-400"></div>
                      <span className="font-semibold text-black">
                        {module.spotsOpen} SPOT OPEN
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <p className="text-sm text-gray-700">{module.description}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <p className="mb-4 text-sm text-gray-600">Secure your seat now</p>
        </div>
      </div>
    </section>
  );
}
