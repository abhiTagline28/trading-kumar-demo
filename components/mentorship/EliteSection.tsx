import { type ReactElement } from 'react';

export default function EliteSection(): ReactElement {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto w-[85%] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-12">
          {/* Centered Main Title and Subtitle */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Built for the Intellectual Elite.
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-900 font-normal leading-relaxed">
              A mentorship designed for those who value logic, data, and time.
            </p>
          </div>

          {/* Left-aligned Professional Profile Section */}
          <div className="space-y-4 pt-8">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
              The Professional Profile
            </h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We don&apos;t just teach traders; we mentor high-performers who demand a systematic edge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
