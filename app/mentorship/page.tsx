import { type ReactElement } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MentorshipHero from '@/components/mentorship/MentorshipHero';
import MentorshipIntro from '@/components/mentorship/MentorshipIntro';
import ProfessionalProfiles from '@/components/mentorship/ProfessionalProfiles';
import WhyChooseUs from '@/components/mentorship/WhyChooseUs';
import EliteBadgeRow from '@/components/mentorship/EliteBadgeRow';
import MentorshipRoadmap from '@/components/mentorship/MentorshipRoadmap';
import SystemOverview from '@/components/mentorship/SystemOverview';
import GlobalExchangesMap from '@/components/mentorship/GlobalExchangesMap';
import MessageToProfessional from '@/components/mentorship/MessageToProfessional';
import MentorshipFAQ from '@/components/mentorship/MentorshipFAQ';

export const metadata = {
  title: 'Mentorship - Kumar Singh Trading Education',
  description: 'Professional-grade trading mentorship built on original, data-backed research. Master institutional order flow and transform from retail trader to professional.',
};

export default function MentorshipPage(): ReactElement {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <MentorshipHero />
        <MentorshipIntro />
        <ProfessionalProfiles />
        <WhyChooseUs />
        <EliteBadgeRow />
        <MentorshipRoadmap />
        <SystemOverview />
        <GlobalExchangesMap />
        <MessageToProfessional />
        <MentorshipFAQ />
      </main>
      <Footer />
    </div>
  );
}
