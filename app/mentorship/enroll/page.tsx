import { type ReactElement } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Enroll in Mentorship - Kumar Singh Trading Education',
  description: 'Secure your seat in the professional trading mentorship program.',
};

export default function MentorshipEnrollPage(): ReactElement {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Secure Your Seat in The Mentorship
            </h1>
            <p className="text-lg text-gray-700">
              Enrollment form and payment options will be available here.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
