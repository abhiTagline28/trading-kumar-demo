import { type ReactElement } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from '@/components/about/AboutHero';
import AboutIntro from '@/components/about/AboutIntro';
import ProprietaryStackSection from '@/components/about/ProprietaryStackSection';
import ProprietaryStackItem from '@/components/about/ProprietaryStackItem';
import AboutQuote from '@/components/about/AboutQuote';

export const metadata = {
  title: 'About Kumar Singh - World-Class Trading Education',
  description: 'Kumar Singh is the founder of a world-class trading framework designed for the analytical elite. Discover the architect of institutional intelligence and his proprietary trading methodologies.',
};

export default function AboutPage(): ReactElement {
  const proprietaryStackItems = [
    {
      title: 'The Engulf Cycle Strategy: The Market\'s Backbone',
      description: 'Discover the true engine of price delivery. This original finding decodes how the market actually runs and how candles behave across every timeframe. It is the "Master Key" to understanding institutional cycles before they unfold.',
    },
    {
      title: 'L1, L2, & L3 Data: The Wick & Body Psychology',
      description: 'Kumar\'s research into Mitigated and Unmitigated Wicks allows you to read real executed orders directly from the candlesticks. By mastering this psychology, you bypass spoofing and manipulation, trading only on real-time liquidity rather than guesses.',
    },
    {
      title: 'The 1-2-3 Formula: Volume Footprint Mastery',
      description: 'A world-class synthesis of Periodic Volume Profile and Volume Footprints. This original formula allows traders to see inside the candle, identifying exactly where "Big Money" is positioned.',
    },
    {
      title: 'Predictive Structural Forecasting: Parallel Channel Logic',
      description: 'A proprietary logic-based strategy that allows you to future-forecast supply and demand zones. This isn\'t just a pattern; it is the science of predicting the next major market move across any timeframe.',
    },
    {
      title: 'Advanced Institutional Frameworks: FVG & Order Block Validation',
      description: 'Not all gaps are created equal. Kumar teaches the unbeatable science of identifying which Fair Value Gaps (FVG) and Order Blocks are institutional-grade and which are mere retail traps.',
    },
    {
      title: 'Multi-Timeframe Precision: Catching the "Big Move"',
      description: 'Kumar\'s mentorship provides the "Golden Zone" logic—a real-time system to predict next-day, next-week, and even next-year entry and re-entry zones. By mastering multi-timeframe confluence, you learn to catch the macro moves that define professional portfolios.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <AboutHero />
        <AboutIntro />
        <ProprietaryStackSection>
          {proprietaryStackItems.map((item, index) => (
            <ProprietaryStackItem
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </ProprietaryStackSection>
        <AboutQuote />
      </main>
      <Footer />
    </div>
  );
}
