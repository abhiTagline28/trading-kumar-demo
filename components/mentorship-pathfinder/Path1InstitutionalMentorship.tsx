import { type ReactElement } from 'react';

interface MentorshipOption {
  program: string;
  groupSpots: number;
  vipSpots: number;
  winningReason: string;
}

const mentorshipOptions: MentorshipOption[] = [
  {
    program: 'Institutional Order Flow & Volume Footprint Trading Strategist (#1 Choice)',
    groupSpots: 4,
    vipSpots: 2,
    winningReason:
      'The "Total Truth" System. Includes all 14 specialized modules + Footprint/Order Flow mastery. This is the only way to trade with the 1% and see the "unfilled orders" that move the world.',
  },
  {
    program: 'Trading Titan',
    groupSpots: 4,
    vipSpots: 2,
    winningReason:
      'The Professional Foundation. Master the core mechanics of market structure and institutional mapping. Built for traders who need a disciplined, rule-based execution framework.',
  },
];

export default function Path1InstitutionalMentorship(): ReactElement {
  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="mb-2 text-3xl font-bold text-black">
            Path 1: The Institutional Mentorship — Our #1 Program for Serious Traders
            (Most Popular)
          </h2>
          <p className="text-gray-700">
            For traders who want the complete institutional system and direct access to
            the mentor.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="px-4 py-4 text-left text-sm font-semibold text-black">
                  Program
                </th>
                <th className="px-4 py-4 text-center text-sm font-semibold text-black">
                  Group Mentorship
                </th>
                <th className="px-4 py-4 text-center text-sm font-semibold text-black">
                  1-on-1 VIP Mentorship
                </th>
                <th className="px-4 py-4 text-left text-sm font-semibold text-black">
                  The Winning Reason
                </th>
              </tr>
            </thead>
            <tbody>
              {mentorshipOptions.map((option, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50"
                >
                  <td className="px-4 py-4">
                    <p className="font-semibold text-black">{option.program}</p>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <div className="h-4 w-4 rounded-full border-2 border-gray-400"></div>
                      <span className="font-semibold text-black">
                        {option.groupSpots} SPOT OPEN
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <div className="h-4 w-4 rounded-full border-2 border-gray-400"></div>
                      <span className="font-semibold text-black">
                        {option.vipSpots} SPOT OPEN
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <p className="text-sm text-gray-700">{option.winningReason}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-xs text-gray-500">
          *Once this invitation is accepted, private access closes until next month.
        </p>
      </div>
    </section>
  );
}
