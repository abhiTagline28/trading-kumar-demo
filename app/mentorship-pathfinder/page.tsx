import { type ReactElement } from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PathfinderHero from '@/components/mentorship-pathfinder/PathfinderHero';
import PathSelectionCards from '@/components/mentorship-pathfinder/PathSelectionCards';
import Path1InstitutionalMentorship from '@/components/mentorship-pathfinder/Path1InstitutionalMentorship';
import Path2SpecializedModules from '@/components/mentorship-pathfinder/Path2SpecializedModules';
import PricingSection from '@/components/mentorship-pathfinder/PricingSection';
import ContactSection from '@/components/mentorship-pathfinder/ContactSection';

export const metadata: Metadata = {
  title: 'Mentorship Pathfinder - Kumar Singh Trading Education',
  description:
    'Find your perfect mentorship path. Choose from Institutional Mentorship, Trading Titan, or Specialized Deep-Dive Modules. Stop following the crowd. Start trading the reality.',
};

export default function MentorshipPathfinderPage(): ReactElement {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PathfinderHero />
        <PathSelectionCards />
        <Path1InstitutionalMentorship />
        <Path2SpecializedModules />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
