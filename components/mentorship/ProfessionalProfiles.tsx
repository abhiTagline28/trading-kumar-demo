import { type ReactElement } from 'react';
import Button from '@/components/programs/Button';

interface ProfessionalProfile {
  title: string;
  targetAudience: string;
  description: string;
}

const profiles: ProfessionalProfile[] = [
  {
    title: 'The Analytical Professional',
    targetAudience: 'Doctors, Bankers, CAs & Advocates',
    description: 'You value precision and "Evidence-Based" results. You need a strategy that cuts through the noise and respects your limited time.',
  },
  {
    title: 'The Strategic Leader',
    targetAudience: 'CEOs, Founders & Ex-IPS Officers',
    description: 'You understand risk management and institutional play. You seek a proprietary edge that isn\'t available in the public domain.',
  },
  {
    title: 'The Future Architect',
    targetAudience: 'IT Engineers & Data Scientists',
    description: 'You thrive on logic and data. You want to understand the mechanics of the market—Orderflow, Delta, and Volume.',
  },
];

export default function ProfessionalProfiles(): ReactElement {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center space-y-6 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Why Kumar Singh is the best mentor to learn professional trading.
          </h2>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-800">The Professional Profile</h3>
            <p className="text-lg text-gray-700">
              We don&apos;t just teach traders; we mentor high-performers who demand a systematic edge.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {profiles.map((profile) => (
            <div
              key={profile.title}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow duration-200"
            >
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{profile.title}</h4>
                  <h5 className="text-2xl font-bold text-gray-900 mb-4">{profile.targetAudience}</h5>
                  <p className="text-gray-700 leading-relaxed">{profile.description}</p>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-sm text-gray-500">Illustration will go here</span>
                  </div>
                  <Button href="/mentorship/enroll" variant="primary" className="w-full">
                    Secure My Seat in The Mentorship
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
