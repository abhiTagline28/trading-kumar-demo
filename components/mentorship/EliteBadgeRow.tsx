import { type ReactElement } from 'react';

interface EliteBadge {
  icon: string;
  label: string;
}

const badges: EliteBadge[] = [
  { icon: 'Law', label: 'Legal Experts' },
  { icon: 'Heart', label: 'Medical Specialists' },
  { icon: 'Shield', label: 'Civil Servants' },
  { icon: 'Tech', label: 'Tech Leads' },
  { icon: 'Finance', label: 'Finance Heads' },
];

export default function EliteBadgeRow(): ReactElement {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto w-[85%] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm text-gray-600 mb-2">[The &quot;Elite Badge&quot; Row]</p>
          <p className="text-gray-700 font-medium">
            Place a row of animated professional icons here to make it scannable:
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="flex flex-col items-center space-y-3 group"
            >
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center group-hover:bg-gray-300 transition-colors duration-200">
                <span className="text-xs text-gray-600 font-semibold">[{badge.icon}]</span>
              </div>
              <span className="text-sm font-medium text-gray-700 text-center">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
