import { type ReactElement } from 'react';

interface Topic {
  title: string;
  description: string;
}

interface Phase {
  phaseNumber: string;
  title: string;
  objective: string;
  topics: Topic[];
}

const phases: Phase[] = [
  {
    phaseNumber: '01',
    title: 'The Structural Blueprint',
    objective: 'Master the market\'s "Skeleton." Before we look at data, we must understand the environment.',
    topics: [
      {
        title: 'The Institutional Eye',
        description: 'Training your mind to see the chart as a battleground of liquidity, not just lines.',
      },
      {
        title: 'Pure Price Action & Psychology',
        description: 'Decoding Candlestick Body & Wick Psychology—understanding the "why" behind the move.',
      },
      {
        title: 'Advanced Frameworks',
        description: 'Mastering Parallel Channels, Pivot Confluence, and the Central Pivot Range (CPR) to define high-probability boundaries.',
      },
      {
        title: 'Institutional Supply & Demand',
        description: 'Mapping the true zones where big money enters, far beyond basic retail support and resistance.',
      },
    ],
  },
  {
    phaseNumber: '02',
    title: 'The Mathematical Edge',
    objective: 'Layering quantitative tools to find \'Gold Zones\' with surgical precision.',
    topics: [
      {
        title: 'The Institutional Eye',
        description: 'Training your mind to see the chart as a battleground of liquidity, not just lines.',
      },
      {
        title: 'Precision Anchoring',
        description: 'Mastering VWAP and Anchored VWAP—the only tools that truly link price to institutional volume.',
      },
      {
        title: 'The Geometry of Trading',
        description: 'Using Fibonacci Extensions and Pivot points to identify mathematical exhaustion in the market.',
      },
      {
        title: 'The Fair Value Gap (FVG)',
        description: 'Spotting institutional imbalances and \'magnetic\' price voids that the market is forced to fill.',
      },
      {
        title: 'Static & Dynamic Volume',
        description: 'Utilizing Volume Profiles to identify high-interest price nodes where institutions are building positions.',
      },
    ],
  },
  {
    phaseNumber: '03',
    title: 'Institutional Intelligence (The "Deep End")',
    objective: 'Decoding the \'Tape\' with the original strategies that no one else teaches.',
    topics: [
      {
        title: 'The Volume Footprint',
        description: 'Going inside the candle to see real-time aggressive buying and selling.',
      },
      {
        title: 'CVD (Cumulative Volume Delta)',
        description: 'Tracking the net flow of institutional money to spot hidden trend reversals before they happen.',
      },
      {
        title: 'Orderflow Delta & Liquidity Maps',
        description: 'Identifying where big players are \'resting\' their orders and where retail \'liquidity\' is about to be swept.',
      },
      {
        title: 'The Science of Absorption',
        description: 'Learning to spot when \'Big Money\' is quietly absorbing retail panic to launch the next major trend.',
      },
    ],
  },
];

export default function MentorshipRoadmap(): ReactElement {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto w-[85%] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            The Mentorship Roadmap: The Path to Institutional Mastery
          </h2>
          <p className="text-lg text-gray-700">
            A three-tier evolution from foundational structure to high-end market intelligence.
          </p>
        </div>

        <div className="space-y-12">
          {phases.map((phase) => (
            <div key={phase.phaseNumber} className="bg-gray-50 rounded-lg p-8 md:p-12">
              <div className="space-y-8">
                <div>
                  <span className="text-sm font-semibold text-gray-600">Phase {phase.phaseNumber}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
                    {phase.title}
                  </h3>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-gray-900">The Objective:</h4>
                  <p className="text-gray-700 leading-relaxed">{phase.objective}</p>
                </div>

                <div className="space-y-6 pt-4">
                  {phase.topics.map((topic) => (
                    <div key={topic.title} className="space-y-2">
                      <h5 className="text-lg font-bold text-gray-900">{topic.title}:</h5>
                      <p className="text-gray-700 leading-relaxed">{topic.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
