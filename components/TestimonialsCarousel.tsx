'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Testimonial {
  name: string;
  location: string;
}

const testimonials: Testimonial[] = [
  { name: "Trader's Name here", location: 'Delhi, India' },
  { name: "Trader's Name here", location: 'London, UK' },
  { name: "Trader's Name here", location: 'Mumbai, India' },
  { name: "Trader's Name here", location: 'Capetown, Australia' },
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-white py-8 lg:py-12">
      <div className="mx-auto w-[85%] max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Cards Container - Show 4 cards side by side */}
          <div className="relative flex gap-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-1 min-w-0"
              >
                {/* Dark Card with Rounded Corners and Shadow */}
                <div className="relative overflow-hidden rounded-3xl bg-gray-900 shadow-xl">
                  {/* Image Container with Padding */}
                  <div className="relative aspect-3/4 w-full p-3">
                    <div className="relative h-full w-full overflow-hidden rounded-2xl">
                      <Image
                        src="/portrait.jpg"
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  </div>
                  {/* Text Below Image - White background section */}
                  <div className="bg-white px-3 pb-4 pt-3 text-center">
                    <p className="text-base font-semibold text-black">{testimonial.name}</p>
                    <p className="mt-1 text-sm text-black">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows - Overlapping the cards */}
          <button
            type="button"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black p-3 text-white shadow-lg transition-colors hover:bg-gray-800"
            aria-label="Previous testimonial"
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 z-10 translate-x-1/2 -translate-y-1/2 rounded-full bg-black p-3 text-white shadow-lg transition-colors hover:bg-gray-800"
            aria-label="Next testimonial"
          >
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
