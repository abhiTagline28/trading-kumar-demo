'use client';

import { type ReactElement, useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'I have a demanding career. How much time do I need to commit?',
    answer: 'Most of our students are high-ranking professionals (Surgeons, CEOs, and Civil Servants). Our system is designed for High-Efficiency Execution. We focus on Pre-Market Preparation and Action Zones. Once you master the "Institutional Footprint," you only need to engage the market when the data validates your edge—removing the need for constant screen monitoring.',
  },
  {
    question: 'Is this mentorship suitable for a beginner in the markets?',
    answer: 'Yes. We follow a First-Principles approach. We begin with the market\'s "Structural Skeleton" (Price Action, Body/Wick Psychology) before moving into the "Deep End" (Orderflow, CVD, Footprints). We ensure your foundation is built on institutional logic, not retail myths.',
  },
  {
    question: 'Why is this called "Original Research" and how is it different from YouTube?',
    answer: 'The "Kumar Singh framework" is based on proprietary, data-backed research, contrasting with "lagging indicators and recycled patterns" found in retail education. It focuses on the \'why\' behind market movements by decoding "Order Flow, Volume Profiles, Trade Imbalances, and Fair Value Gaps." Mastery of "CVD and the Institutional Footprint" provides access to "high-end mechanics of the market."',
  },
  {
    question: 'Does the framework work on international markets like the Nasdaq or Crypto?',
    answer: 'Yes. The physics of liquidity and volume are universal. Whether you\'re trading Nifty F&O, Nasdaq, Bitcoin, or Gold, the framework applies. The same Institutional Footprint that works in Mumbai works in New York. You can trade any global asset class in any timezone.',
  },
  {
    question: 'What capital do I need to start?',
    answer: 'Focus on skill first, capital second. Start with what you can afford to risk. Our mentorship teaches you to trade like a business—whether you\'re managing 10 Lakhs or 10 Crores. The framework scales with your capital, but the logic remains the same. We teach data-backed risk management, not speculation.',
  },
];

export default function MentorshipFAQ(): ReactElement {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>

      <div className="mx-auto w-[85%] px-2 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              One Framework. Universal Liquidity.Deployed daily across NSE, BSE, NASDAQ, LSE, and Global Crypto Exchanges.
            </h2>
          </div>
        </div>
      </div>


      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 md:p-12 shadow-sm">
            <div className="text-center space-y-2 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">Strategic Clarity for the Informed Professional.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left flex items-center justify-between py-4"
                  >
                    <span className="text-lg font-bold text-gray-900 pr-4">
                      {index + 1}. {faq.question}
                    </span>
                    <svg
                      className={`h-5 w-5 text-gray-600 flex-shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openIndex === index && (
                    <div className="pb-4">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
