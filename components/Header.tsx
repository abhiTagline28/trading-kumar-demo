'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-black">Kumar Singh</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <div className="relative">
              <button
                type="button"
                onMouseEnter={() => setIsCoursesOpen(true)}
                onMouseLeave={() => setIsCoursesOpen(false)}
                className="flex items-center gap-1 text-gray-700 hover:text-black"
              >
                All Courses
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isCoursesOpen && (
                <div
                  onMouseEnter={() => setIsCoursesOpen(true)}
                  onMouseLeave={() => setIsCoursesOpen(false)}
                  className="absolute left-0 top-full mt-2 w-48 rounded-md bg-white shadow-lg"
                >
                  <Link
                    href="/courses/stocks"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Stocks
                  </Link>
                  <Link
                    href="/courses/futures-options"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Futures & Options
                  </Link>
                  <Link
                    href="/courses/commodity"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Commodity
                  </Link>
                  <Link
                    href="/courses/crypto"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Crypto
                  </Link>
                  <Link
                    href="/courses/forex"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Forex
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/programs"
              className="text-gray-700 hover:text-black"
            >
              Programs
            </Link>
            <Link
              href="/mentorship"
              className="text-gray-700 hover:text-black"
            >
              Mentorship
            </Link>
            <Link
              href="/strategies"
              className="text-gray-700 hover:text-black"
            >
              Strategies & Research
            </Link>
            <Link
              href="/mentorship-pathfinder"
              className="text-gray-700 hover:text-black"
            >
              Mentorship Pathfinder
            </Link>
            <Link
              href="/traders-tax"
              className="text-gray-700 hover:text-black"
            >
              Trader&apos;s Tax Advantage
            </Link>
          </nav>

          {/* Search and Auth */}
          <div className="hidden items-center gap-4 md:flex">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Or Ask"
                className="w-64 rounded-full border border-gray-300 bg-gray-50 px-4 py-2 pl-10 text-sm focus:border-black focus:outline-none"
              />
              <svg
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="/signin"
                className="text-sm text-gray-700 hover:text-black"
              >
                Sign In
              </Link>
              <span className="text-gray-400">|</span>
              <Link
                href="/signup"
                className="text-sm text-gray-700 hover:text-black"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-gray-200 py-4 md:hidden">
            <nav className="flex flex-col gap-4">
              <Link
                href="/courses"
                className="text-gray-700 hover:text-black"
                onClick={() => setIsMenuOpen(false)}
              >
                All Courses
              </Link>
              <Link
                href="/programs"
                className="text-gray-700 hover:text-black"
                onClick={() => setIsMenuOpen(false)}
              >
                Programs
              </Link>
              <Link
                href="/mentorship"
                className="text-gray-700 hover:text-black"
                onClick={() => setIsMenuOpen(false)}
              >
                Mentorship
              </Link>
              <Link
                href="/strategies"
                className="text-gray-700 hover:text-black"
                onClick={() => setIsMenuOpen(false)}
              >
                Strategies & Research
              </Link>
              <Link
                href="/mentorship-pathfinder"
                className="text-gray-700 hover:text-black"
                onClick={() => setIsMenuOpen(false)}
              >
                Mentorship Pathfinder
              </Link>
              <Link
                href="/traders-tax"
                className="text-gray-700 hover:text-black"
                onClick={() => setIsMenuOpen(false)}
              >
                Trader&apos;s Tax Advantage
              </Link>
              <div className="mt-4 flex flex-col gap-2">
                <Link
                  href="/signin"
                  className="text-gray-700 hover:text-black"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="text-gray-700 hover:text-black"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
