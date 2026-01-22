import { type ReactElement } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProgramHero from '@/components/programs/ProgramHero';
import ProgramIntro from '@/components/programs/ProgramIntro';
import ProgramGrid from '@/components/programs/ProgramGrid';
import SectionTitleStrip from '@/components/programs/SectionTitleStrip';
import ProgramCard from '@/components/programs/ProgramCard';
import ProgramSection from '@/components/programs/ProgramSection';
import MediaPartnersSection from '@/components/programs/MediaPartnersSection';
import Button from '@/components/programs/Button';

export default function ProgramsPage(): ReactElement {
  const precisionTradingPrograms = [
    {
      title: 'ORDER FLOW VOLUME PROFILE: THE INSTITUTIONAL VALUE MAP',
      description:
        "See the market's true 'Value Zone.' Volume Profile is a core pillar of Order Flow that reveals exactly at what price institutional business is being conducted. While standard volume only shows when trades happen, Order Flow Volume Profile exposes where the big money is positioned. In our mentorship, you'll learn to use the Point of Control (POC) to find the market's fair value and identify 'Volume Vacuums' for high-velocity trades. Stop guessing at support and resistance—start trading the actual density of institutional orders.",
      backgroundColor: 'bg-white',
      textAlign: 'left' as const,
    },
    {
      title: 'THE VOLUME FOOTPRINT: THE ULTIMATE ORDER FLOW TRUTH IN PRECISION TRADING',
      description:
        "Stop trading blind. The Volume Footprint is the ultimate Order Flow truth, providing a microscopic view of the market that renders standard technical analysis obsolete. By looking inside the candle, you see the exact buy/sell imbalances and institutional absorption that drive price movement. This is the best-in-class methodology for real-time, data-driven execution. In our mentorship, we teach you to decode this 'tape' with clinical accuracy, allowing you to enter trades with the conviction of the banks and the precision of a professional.",
      backgroundColor: 'bg-white',
      textAlign: 'left' as const,
    },
  ];

  const pivotPrograms = [
    {
      title: 'CENTRAL PIVOT RANGE (CPR)',
      description:
        'A price-based structure that defines market balance, directional bias, and potential breakout zones before the trading day begins.',
      backgroundColor: 'bg-[#E8F8F5]',
    },
    {
      title: 'PIVOT POINTS',
      description:
        "Pinpoint high-conversion setups by syncing Yearly to Daily Pivot Points with institutional Supply & Demand zones. Establish your bias before the Market Open and capture explosive breakouts confirmed by the session's first candle. Trade with total clarity where the world's most powerful price levels align.",
      backgroundColor: 'bg-[#FBE9E7]',
    },
  ];

  const advancedConcepts = [
    {
      title: 'THE PARALLEL CHANNEL: INSTANT MARKET MAPPING',
      description:
        "Predict the market's next move in seconds. By projecting institutional Supply and Demand zones based on historical price data, the Parallel Channel allows you to plot high-accuracy key levels with clinical precision. Whether you are scalping intraday volatility or positioning for long-term trends, this tool identifies the future 'path of least resistance' across any timeframe—giving you the roadmap to trade before the move even begins.",
      backgroundColor: 'bg-[#E0FFF7]',
    },
    {
      title: 'THE SMART MONEY TRAP: ORDER BLOCKS & FAIR VALUE GAPS',
      description:
        'Master the ultimate institutional duo. Order Blocks reveal where the Big Money is "loading" their positions, while Fair Value Gaps (FVG) expose the market imbalances left behind by their velocity. When price returns to fill the FVG and "taps" the Order Block, it creates a high-conversion entry zone with surgical precision. Stop chasing the move—learn to anticipate the retrace and trade the institutional footprint.',
      backgroundColor: 'bg-[#E0FFF7]',
    },
    {
      title: 'VWAP: THE INSTITUTIONAL BENCHMARK',
      description:
        'Trade where the smart money is priced. VWAP is the ultimate "Line in the Sand" used by institutional desks to determine fair market value. By combining price action with volume, it reveals the true intraday trend bias with zero lag. Whether you\'re looking for a high-conversion "Mean Reversion" bounce or a breakout from the institutional average, VWAP provides the definitive roadmap for intraday momentum and trade execution.',
      backgroundColor: 'bg-[#E0FFF7]',
    },
    {
      title: 'ANCHORED VWAP: THE EVENT-BASED POWER LINE',
      description:
        'Take control of the trend from the moment it begins. Unlike standard indicators, the Anchored VWAP lets you pin institutional fair value to any specific market event—a major swing high, a panic low, or a high-volume breakout. By tracking the volume-weighted average price from these critical "anchors," you reveal the exact hidden support and resistance levels where big money is defending their positions. It is the ultimate tool for identifying trend strength and high-conversion entries in real-time.',
      backgroundColor: 'bg-[#E0FFF7]',
    },
  ];

  const technicalAnalysisPrograms = [
    {
      title: 'THE DUAL-LAYER TREND FILTER: EMA & SMA SYNERGY',
      description:
        'Combine Exponential Moving Averages (EMA) and Simple Moving Averages (SMA) to create a powerful trend-filtering system. This dual-layer approach provides precision entries, macro risk management, and eliminates false signals by aligning short-term momentum with long-term trend direction.',
      backgroundColor: 'bg-[#E0FFF7]',
    },
    {
      title: 'CANDLE WICK & BODY PSYCHOLOGY: READING THE MARKET\'S MIND',
      description:
        'Understand the institutional intent behind every candle body and wick. Learn to identify "Smart Money" traps, anticipate reversals, and decode the psychological battles between buyers and sellers that manifest in price action. This is the foundation of reading market sentiment with professional accuracy.',
      backgroundColor: 'bg-[#E0FFF7]',
    },
    {
      title: 'THE VOLUME ENGINE: MASTER VOLUME, DELTA, AND CVD',
      description:
        'Analyze volume, aggressive buying/selling (Delta), and Cumulative Volume Delta (CVD) to discern institutional player intent. Learn to trade with "Big Money" by understanding when institutions are accumulating or distributing positions, giving you the edge to enter trades with institutional conviction.',
      backgroundColor: 'bg-[#E0FFF7]',
    },
    {
      title: 'FIBONACCI TOOLS: TRADING THE INSTITUTIONAL DISCOUNT',
      description:
        'Use Fibonacci Retracements and Extensions to identify "Value Zones" and "Golden Pockets" where institutional traders take positions. Master the art of finding strategic entry points and profit targets based on the mathematical relationships that govern price movement.',
      backgroundColor: 'bg-[#E0FFF7]',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <ProgramHero />

        {/* Program Introduction */}
        <ProgramIntro title="From Retail to Institutional: The Complete Trading Mentorship Program" />

        {/* Institutional Order Flow Section */}
        <section className="bg-[#F8F0E3] py-16 md:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 uppercase leading-tight">
                  INSTITUTIONAL ORDER FLOW & VOLUME FOOTPRINT
                </h2>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 uppercase leading-tight">
                  TRADING STRATEGIST
                </h3>
              </div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                An original, institutional-grade research-driven trading program built on institutional order flow, enabling disciplined, rule-based trading execution across multiple assets.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-6">
                <Button
                  href="/programs/institutional-order-flow/learn-more"
                  variant="primary"
                  className="min-w-[140px]"
                >
                  Learn more
                </Button>
                <Button
                  href="/programs/enroll"
                  variant="primary"
                  className="min-w-[280px]"
                >
                  Secure My Seat In The Mentorship
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Trading Titan Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-blue-100 py-16 md:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 uppercase leading-tight">
                TRADING TITAN
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                An original, institutional-grade, deeply researched trading program built on pure price action and volume, designed for disciplined, rule-based trading execution.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-6">
                <Button
                  href="/programs/trading-titan/learn-more"
                  variant="primary"
                  className="min-w-[140px]"
                >
                  Learn more
                </Button>
                <Button
                  href="/programs/enroll"
                  variant="primary"
                  className="min-w-[280px]"
                >
                  Secure My Seat in The Mentorship
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Precision Trading Systems Section */}
        <SectionTitleStrip title="PRECISION TRADING SYSTEMS: PROPRIETARY, RESEARCH-BASED INSTITUTIONAL TECHNICAL PROGRAMS" />

        {/* Order Flow Programs */}
        <section className="bg-white py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ProgramGrid programs={precisionTradingPrograms} columns={2} />
          </div>
        </section>

        {/* Pivot Programs */}
        <section className="bg-white py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ProgramGrid programs={pivotPrograms} columns={2} />
          </div>
        </section>

        {/* Advanced Concepts */}
        <section className="bg-white py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ProgramGrid programs={advancedConcepts} columns={2} />
          </div>
        </section>

        {/* Technical Analysis Programs */}
        <section className="bg-white py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ProgramGrid programs={technicalAnalysisPrograms} columns={2} />
          </div>
        </section>

        {/* TradingView Mastery Section */}
        <ProgramSection
          title="TRADINGVIEW MASTERY: THE ESSENTIAL TOOLS AND INSTITUTIONAL KNOW-HOW EVERY TRADER MUST KNOW TO TRADE WITH PRECISION."
          description="Your platform is your cockpit—if it isn't tuned for the banks, you're flying blind. This is the definitive guide to TradingView Mastery, covering the essential tools and institutional know-how that every trade must know to execute with clinical precision. We don't just show you the buttons; we show you how to weaponize your charts. From professional Pivot Point configurations to advanced Order Flow layouts, learn to build a high-performance execution engine that reveals the market's true intent."
          backgroundColor="bg-[#E0FFF7]"
          textAlign="center"
          fullWidth={false}
        />

        {/* Risk Management & Psychology */}
        <section className="bg-white py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <ProgramCard
                title="STRATEGIC RISK MANAGEMENT: MASTER THE ART OF CAPITAL PRESERVATION TO UNLOCK UNLIMITED GROWTH."
                description="Your capital is your inventory; without it, you're out of business. Move beyond basic stop-losses and master the professional psychology of money management. We teach you how to protect your downside with surgical precision while leaving your upside open for explosive growth. Master the math of the 1% and trade like a fund manager."
                backgroundColor="bg-[#E0FFF7]"
                textAlign="left"
              />
              <ProgramCard
                title="TRADING PSYCHOLOGY: MASTER THE ART OF INSTITUTIONAL CONVICTION"
                description="The difference between a struggling retail trader and an elite professional isn't just the strategy—it's the conviction. Most traders fall short because they lack the mental framework to trust their data when the pressure is on. In our mentorship, we help you bridge the gap between analysis and execution by developing a 'cold,' institutional mindset. Learn to eliminate the hesitation, fear, and emotional inconsistency that sabotage your growth, and replace them with the data-driven conviction required to execute high-stakes Order Flow setups with absolute clarity."
                backgroundColor="bg-[#E0FFF7]"
                textAlign="left"
              />
            </div>
          </div>
        </section>

        {/* Trading Transformation */}
        <section className="bg-white py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 uppercase leading-tight">
                THE TRADING TRANSFORMATION: SECURE YOUR FUTURE AS A PROFESSIONAL
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                You aren&apos;t just choosing a mentorship—you are initiating a total Trading Transformation. Enter a world-class environment of data-driven education and rule-based discipline. Secure your future as a well-informed, high-conviction professional who trades with institutional precision. Stop watching the market and start commanding it.
              </p>
            </div>
          </div>
        </section>

        {/* Media Partners */}
        <MediaPartnersSection />
      </main>
      <Footer />
    </div>
  );
}
