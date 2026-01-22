import Link from 'next/link';
import Image from 'next/image';

export default function PopularPrograms() {
  return (
    <section className="bg-gradient-to-b from-blue-50 via-blue-100 to-blue-50 py-16 lg:py-24">
      <div className="mx-auto w-[85%] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[#2C7EF1] lg:text-4xl">
            Our Popular Programs
          </h2>
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
            {/* Content - Left Column with Centered Text */}
            <div className="space-y-6 text-center">
              <h3 className="text-2xl font-bold text-[#2C7EF1] lg:text-3xl">
                Institutional Order Flow and Volume Footprint Trading Strategist
              </h3>
              <p className="text-lg text-black">
                An original, research-driven trading program built on institutional
                order flow for disciplined, rule-based execution across multiple
                assets.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/programs/institutional-order-flow"
                  className="rounded-lg bg-[#2C7EF1] px-8 py-3 text-white transition-colors hover:bg-[#2563EB]"
                >
                  Learn more
                </Link>
                <Link
                  href="/mentorship/enroll"
                  className="rounded-lg bg-[#2C7EF1] px-8 py-3 text-white transition-colors hover:bg-[#2563EB]"
                >
                  Secure My Seat in The Mentorship
                </Link>
              </div>
            </div>

            {/* Chart Graphic - Right Column */}
            <div className="relative mx-auto h-auto w-full max-w-md lg:max-w-lg">
              <Image
                src="/dummy_graphic.jpg"
                alt="Trading Chart"
                width={600}
                height={400}
                className="rounded-lg object-contain"
                unoptimized
              />
              <p className="mt-2 text-center text-lg font-bold text-[#2C7EF1]">
                Dummy graphic
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
