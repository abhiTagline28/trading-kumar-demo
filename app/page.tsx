import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TradingCategories from '@/components/TradingCategories';
import PopularPrograms from '@/components/PopularPrograms';
import MentorshipBanner from '@/components/MentorshipBanner';
import CommunitySection from '@/components/CommunitySection';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <TradingCategories />
        <PopularPrograms />
        <MentorshipBanner />
        <CommunitySection />
        <TestimonialsCarousel />
      </main>
      <Footer />
    </div>
  );
}
