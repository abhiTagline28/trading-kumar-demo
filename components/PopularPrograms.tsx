import Link from 'next/link';
import Image from 'next/image';

export default function PopularPrograms() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 lg:py-24">
      <div className="mx-auto w-[85%] px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-blue-900 lg:text-4xl">
            Our Popular Programs
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-blue-800 lg:text-3xl">
              Institutional Order Flow and Volume Footprint Trading Strategist
            </h3>
            <p className="text-lg text-gray-800">
              An original, research-driven trading program built on institutional
              order flow for disciplined, rule-based execution across multiple
              assets.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/programs/institutional-order-flow"
                className="rounded-full bg-blue-600 px-8 py-3 text-white transition-colors hover:bg-blue-700"
              >
                Learn more
              </Link>
              <Link
                href="/mentorship/secure-seat"
                className="rounded-full bg-blue-600 px-8 py-3 text-white transition-colors hover:bg-blue-700"
              >
                Secure My Seat in The Mentorship
              </Link>
            </div>
          </div>

          {/* Chart Graphic */}
          <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-200">
            <Image
              src="/trading-chart.jpg"
              alt="Trading Chart"
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
