'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Contact Info Bar */}
        <div className="flex items-center justify-center border-b border-gray-200 py-2">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Global Mentorship Support</span>
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
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <a href="tel:+919999866667" className="hover:text-black">
              +91 9999866667
            </a>
          </div>
        </div>

        {/* Tagline */}
        <div className="flex items-center justify-center py-3">
          <p className="text-center text-sm text-gray-600">
            Experience unmatched, world-class trading education built to develop disciplined, high-performance traders.
          </p>
        </div>

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
                  className="absolute left-0 top-full mt-2 w-[1000px] rounded-md bg-white shadow-xl border border-gray-100"
                >
                  <div className="p-8">
                    {/* Main Courses Section */}
                    <div className="mb-8 space-y-5">
                      {/* Institutional Order Flow */}
                      <div className="grid grid-cols-[1fr_auto] items-start gap-8">
                        <Link
                          href="/courses/institutional-order-flow"
                          className="group flex items-center text-sm font-medium text-gray-900 hover:text-black"
                        >
                          <span>
                            Institutional Order Flow & Volume Footprint Trading
                            Strategist (#1 Choice)
                          </span>
                          <svg
                            className="ml-2 h-4 w-4 text-gray-400"
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
                        </Link>
                        <div className="flex flex-col gap-2.5">
                          <Link
                            href="/mentorship/vip?course=institutional-order-flow"
                            className="whitespace-nowrap rounded border border-gray-300 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-900 transition-all hover:bg-gray-50 hover:border-gray-400"
                          >
                            1-on-1 VIP Mentorship
                          </Link>
                          <Link
                            href="/mentorship/group?course=institutional-order-flow"
                            className="whitespace-nowrap rounded border border-gray-300 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-900 transition-all hover:bg-gray-50 hover:border-gray-400"
                          >
                            Group Mentorship
                          </Link>
                        </div>
                      </div>

                      {/* Trading Titan */}
                      <div className="grid grid-cols-[1fr_auto] items-start gap-8">
                        <Link
                          href="/courses/trading-titan"
                          className="group flex items-center text-sm font-medium text-gray-900 hover:text-black"
                        >
                          <span>Trading Titan</span>
                          <svg
                            className="ml-2 h-4 w-4 text-gray-400"
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
                        </Link>
                        <div className="flex flex-col gap-2.5">
                          <Link
                            href="/mentorship/vip?course=trading-titan"
                            className="whitespace-nowrap rounded border border-gray-300 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-900 transition-all hover:bg-gray-50 hover:border-gray-400"
                          >
                            1-on-1 VIP Mentorship
                          </Link>
                          <Link
                            href="/mentorship/group?course=trading-titan"
                            className="whitespace-nowrap rounded border border-gray-300 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-900 transition-all hover:bg-gray-50 hover:border-gray-400"
                          >
                            Group Mentorship
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Specialized Modules Section */}
                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="mb-5 text-xs font-semibold uppercase tracking-wider text-gray-500">
                        SPECIALIZED MODULE
                      </h3>
                      <div className="space-y-3.5">
                        {[
                          {
                            title: 'The Volume Footprint: The Ultimate Truth',
                            href: '/courses/volume-footprint',
                            mentorshipHref: '/mentorship/group?module=volume-footprint',
                          },
                          {
                            title: 'Order Flow Volume Profile: The Value Map',
                            href: '/courses/order-flow-volume-profile',
                            mentorshipHref: '/mentorship/group?module=order-flow-volume-profile',
                          },
                          {
                            title: 'The Smart Money Trap (Order Blocks/FVG)',
                            href: '/courses/smart-money-trap',
                            mentorshipHref: '/mentorship/group?module=smart-money-trap',
                          },
                          {
                            title: 'The Volume Engine (Delta/CVD)',
                            href: '/courses/volume-engine',
                            mentorshipHref: '/mentorship/group?module=volume-engine',
                          },
                          {
                            title: 'The Parallel Channel & Institutional Zones',
                            href: '/courses/parallel-channel',
                            mentorshipHref: '/mentorship/group?module=parallel-channel',
                          },
                          {
                            title: 'Central Pivot Range (CPR)',
                            href: '/courses/central-pivot-range',
                            mentorshipHref: '/mentorship/group?module=central-pivot-range',
                          },
                          {
                            title: 'Pivot Points Mastery',
                            href: '/courses/pivot-points',
                            mentorshipHref: '/mentorship/group?module=pivot-points',
                          },
                          {
                            title: 'VWAP: The Institutional Benchmark',
                            href: '/courses/vwap',
                            mentorshipHref: '/mentorship/group?module=vwap',
                          },
                          {
                            title: 'Anchored VWAP: Event-Based Power',
                            href: '/courses/anchored-vwap',
                            mentorshipHref: '/mentorship/group?module=anchored-vwap',
                          },
                          {
                            title: 'The Dual-Layer Trend Filter (EMA/SMA)',
                            href: '/courses/dual-layer-trend-filter',
                            mentorshipHref: '/mentorship/group?module=dual-layer-trend-filter',
                          },
                          {
                            title: 'Candle Wick & Body Psychology',
                            href: '/courses/candle-psychology',
                            mentorshipHref: '/mentorship/group?module=candle-psychology',
                          },
                          {
                            title: 'Fibonacci: Institutional Discount',
                            href: '/courses/fibonacci',
                            mentorshipHref: '/mentorship/group?module=fibonacci',
                          },
                          {
                            title: 'TradingView Mastery',
                            href: '/courses/tradingview-mastery',
                            mentorshipHref: '/mentorship/group?module=tradingview-mastery',
                          },
                          {
                            title: 'Strategic Risk Management',
                            href: '/courses/risk-management',
                            mentorshipHref: '/mentorship/group?module=risk-management',
                          },
                          {
                            title: 'Trading Psychology',
                            href: '/courses/trading-psychology',
                            mentorshipHref: '/mentorship/group?module=trading-psychology',
                          },
                          {
                            title: "Trader's Tax Advantage",
                            href: '/courses/traders-tax-advantage',
                            mentorshipHref: '/traders-tax',
                            mentorshipLabel: "Trader's Tax Strategist",
                          },
                        ].map((module) => (
                          <div
                            key={module.href}
                            className="grid grid-cols-[1fr_auto] items-center gap-8"
                          >
                            <Link
                              href={module.href}
                              className="group flex items-center text-sm text-gray-700 hover:text-black"
                            >
                              <span>{module.title}</span>
                              <svg
                                className="ml-2 h-4 w-4 text-gray-400"
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
                            </Link>
                            <Link
                              href={module.mentorshipHref}
                              className="whitespace-nowrap rounded border border-gray-300 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-900 transition-all hover:bg-gray-50 hover:border-gray-400"
                            >
                              {module.mentorshipLabel || 'Group Mentorship'}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
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
