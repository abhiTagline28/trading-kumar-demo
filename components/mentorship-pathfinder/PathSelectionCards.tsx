import { type ReactElement } from 'react';
import Button from '@/components/programs/Button';

interface PathCard {
  userStatement: string;
  programTitle: string;
  programDescription: string;
  ctaText: string;
  isRecommended?: boolean;
}

const pathCards: PathCard[] = [
  {
    userStatement: 'I want to trade like the big banks using data, not guesses.',
    programTitle: 'Institutional Order Flow & Volume Footprint Trading Strategist Program',
    programDescription:
      'Trade the Institutional Reality: An A-Z Research-Based Protocol to Master the transition from Retail Guesswork to Volume Footprint Mastery.',
    ctaText: 'Claim Your Institutional Edge',
    isRecommended: true,
  },
  {
    userStatement:
      'I want to avoid lagging indicators, eliminate the noise, and build a professional foundation through structural clarity and rule-based execution.',
    programTitle: 'The Trading Titan',
    programDescription:
      'Replace retail complexity with institutional logic. Master an original, research-based framework that allows you to read raw price delivery and execute with data-backed precision.',
    ctaText: 'Build Your Professional Foundation',
  },
  {
    userStatement: "I know the basics, but I'm tired of losing with retail indicators.",
    programTitle: 'Target Your Trading Gaps',
    programDescription:
      'Select Specialized Execution Layers to master a single component of the Institutional Trade Logic. Refine your strategy with original, research-based precision.',
    ctaText: 'Build Your Specialist Toolkit',
  },
];

export default function PathSelectionCards(): ReactElement {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto w-[85%] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {pathCards.map((card, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <p className="mb-4 text-sm text-gray-700">{card.userStatement}</p>
              <h3 className="mb-3 text-xl font-bold text-black">
                {card.programTitle}
                {card.isRecommended && (
                  <span className="ml-2 text-sm font-normal text-blue-600">
                    (Recommended)
                  </span>
                )}
              </h3>
              <p className="mb-6 text-sm text-gray-600">{card.programDescription}</p>
              <Button href="/mentorship/enroll" variant="primary" className="w-full">
                {card.ctaText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
