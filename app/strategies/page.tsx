import { type ReactElement } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import StrategiesHero from '@/components/strategies/StrategiesHero';
import StrategyCard from '@/components/strategies/StrategyCard';
import ResearchSuiteSection from '@/components/strategies/ResearchSuiteSection';

export const metadata = {
  title: 'Strategies & Research - Kumar Singh Trading Education',
  description: 'Master proprietary, data-backed institutional trading strategies and research. Learn from Kumar Singh\'s original research and transform your trading approach.',
};

interface Strategy {
  title: string;
  description: string;
}

const strategies: Strategy[] = [
  {
    title: 'The Engulf Cycle: The Market\'s Source Code',
    description: 'The Engulf Cycle is a proprietary discovery of the fundamental law governing price delivery. Moving beyond patterns, this research reveals the structural skeleton of institutional liquidity. It is the universal engine behind every market move—from Nifty to Nasdaq—allowing you to predict the "Master Move" with surgical precision.',
  },
  {
    title: 'Order Flow & Volume Footprint: The Institutional X-Ray',
    description: 'Master the "Tape" by seeing inside the candle. Our proprietary 1-2-3 Formula uses Volume Footprints and CVD to reveal real executed orders, not retail guesses. Decode institutional absorption and trade imbalances with surgical precision, gaining a transparent view of "Big Money" intent in real-time.',
  },
  {
    title: 'Periodic Volume Profile: The High-Probability Map',
    description: 'Identify the exact price levels where institutions are building positions. Our Periodic Volume Profile research reveals the market\'s "Value Areas," allowing you to trade at high-interest nodes with mathematical certainty. Pinpoint Golden Zones and institutional supply/demand to align your execution with the world\'s deepest liquidity.',
  },
  {
    title: 'Parallel Channels: Predictive Structural Forecasting',
    description: 'Beyond basic trendlines, our proprietary channel logic reveals the market\'s hidden geometric path. By decoding the science of supply and demand corridors, you can future-forecast major pivots with institutional accuracy. It is a world-class predictive framework to identify the next market move across any asset or timeframe.',
  },
  {
    title: 'Fibonacci Precision: The Geometry of Price',
    description: 'Master Plans A, B, and C—proprietary research-backed rules designed to forecast trending moves before they happen. Predict the market\'s next move with high accuracy from the very first candle. Using historical data and swing logic, pinpoint perfect entry and re-entry zones across any bullish or bearish trend.',
  },
  {
    title: 'Fair Value Gaps: The Institutional Imbalance Logic',
    description: 'Master the science of identifying valid Fair Value Gaps (FVG). Our proprietary research differentiates high-probability institutional imbalances from retail traps. Decode where "Smart Money" leaves footprints to predict magnetic price draws and high-accuracy entries, ensuring you trade only where real liquidity and momentum align.',
  },
  {
    title: 'The Candle Body & Wick Psychology: Reading L1-L3 Data',
    description: 'Decode the market\'s "Source Code" through candle anatomy. Our research reveals the psychology of mitigated and unmitigated wicks, exposing real executed orders hidden from retail eyes. By reading L1, L2, and L3 data through pure price action, you bypass manipulation to trade with absolute institutional clarity.',
  },
];

export default function StrategiesPage(): ReactElement {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumbs
        items={[
          { label: 'Kumar Singh', href: '/' },
          { label: 'Strategies & Research' },
        ]}
      />
      <main>
        <StrategiesHero />
        
        <section className="bg-gray-50 py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-8 md:space-y-12">
              {strategies.map((strategy, index) => (
                <StrategyCard
                  key={index}
                  title={strategy.title}
                  description={strategy.description}
                />
              ))}
            </div>
          </div>
        </section>

        <ResearchSuiteSection />
      </main>
      <Footer />
    </div>
  );
}
