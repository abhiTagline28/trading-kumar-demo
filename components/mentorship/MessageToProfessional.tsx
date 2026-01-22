import { type ReactElement } from 'react';
import Button from '@/components/programs/Button';

export default function MessageToProfessional(): ReactElement {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto w-[85%] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="bg-gray-50 rounded-lg p-6 md:p-8 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Anchored VWAP, Fair Value Gaps (FVG), Cumulative Volume Delta, Volume Profile, and more to identify exactly where &apos;Smart Money&apos; is active, giving you a transparent view of the market&apos;s internal mechanics.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              A Message to the Professional Trader
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                I built this mentorship for the analytical mind—the person who refuses to trade on hope. My goal is to transform you from a retail participant into an Institutional Strategist. In my room, we don&apos;t look for &apos;signals&apos;; we understand the Intent of Money.
              </p>
              <p>
                Whether you are trading Nifty, Bitcoin, or Gold, I provide the lens to see what others cannot.
              </p>
            </div>
          </div>

          <div className="pt-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The quick brown fox jumps over the little lazy dog. The quick brown fox jumps over the little lazy dog. The quick brown fox jumps over the little lazy dog. The quick brown fox jumps over the little lazy dog. The quick brown fox jumps over the little lazy dog.
              </p>
              <p>
                The quick brown fox jumps over the little lazy dog. The quick brown fox jumps over the little lazy dog. The quick brown fox jumps over the little lazy dog. The quick brown fox jumps over the little lazy dog. The quick brown fox jumps over the little lazy dog.
              </p>
              <p>
                The quick brown fox jumps over the little lazy dog. The quick brown fox jumps over the little lazy dog. The quick brown fox jumps over the little lazy dog. The quick brown fox jumps over the little lazy dog. The quick brown fox jumps over the little lazy dog.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
