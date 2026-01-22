import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Tagline */}
        <div className="mb-12 text-center">
          <p className="text-lg text-gray-700 lg:text-xl">
            Experience unmatched, world-class trading education built to develop
            disciplined, high-performance traders.
          </p>
        </div>

        {/* Main Hero Content */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          {/* Left: Headline */}
          <div className="order-2 lg:order-1">
            <h1 className="text-5xl font-bold leading-tight text-black lg:text-7xl">
              CHANGE THE WAY YOU
              <br />
              <span className="text-black">TRADE</span>
            </h1>
          </div>

          {/* Right: Image and Contact */}
          <div className="order-1 lg:order-2">
            <div className="mb-6 flex items-center justify-end gap-2 text-sm text-gray-700">
              <span>Global Mentorship Support</span>
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <a
                href="tel:+919999866667"
                className="font-semibold text-black hover:underline"
              >
                +91 9999866667
              </a>
            </div>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-gray-200">
              <Image
                src="/kumar-singh.jpg"
                alt="Kumar Singh"
                fill
                className="object-cover"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
