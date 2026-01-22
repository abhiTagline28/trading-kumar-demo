import Image from 'next/image';
import { type ReactElement } from 'react';

export default function AboutHero(): ReactElement {
  return (
    <section className="bg-black text-white py-16 md:py-24">
      <div className="mx-auto w-[85%] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              THE ARCHITECT OF
              <br />
              INSTITUTIONAL INTELLIGENCE:
              <br />
              <span className="text-white">KUMAR SINGH</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Redefining Global Trading through Original Research and Data-Backed Precision.
            </p>
          </div>

          {/* Right: Image */}
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-gray-900">
            <Image
              src="/kumar-singh.jpg"
              alt="Kumar Singh"
              fill
              className="object-cover"
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>
        </div>
      </div>
    </section>
  );
}
