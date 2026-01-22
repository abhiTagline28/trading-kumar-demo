import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto w-[85%] px-4 sm:px-6 lg:px-8">
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

          {/* Right: Image */}
          <div className="order-1 lg:order-2">
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
