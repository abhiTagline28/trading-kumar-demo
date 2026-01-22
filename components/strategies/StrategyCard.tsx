import { type ReactElement } from 'react';
import Link from 'next/link';

interface StrategyCardProps {
  title: string;
  description: string;
}

export default function StrategyCard({
  title,
  description,
}: StrategyCardProps): ReactElement {
  return (
    <div className="bg-white rounded-lg p-8 md:p-12 shadow-sm border border-gray-100 transition-shadow duration-200 hover:shadow-md">
      <div className="space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
          {title}
        </h3>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify">
          {description}
        </p>
        <div className="flex justify-end pt-4">
          <Link
            href="/mentorship/enroll"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Secure My Seat in The Mentorship
          </Link>
        </div>
      </div>
    </div>
  );
}
