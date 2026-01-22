import { type ReactElement } from 'react';

export default function GlobalExchangesMap(): ReactElement {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="bg-gray-900 rounded-lg p-12 md:p-16 flex items-center justify-center min-h-[400px]">
            <div className="text-center space-y-4">
              <p className="text-white text-lg md:text-xl">
                all mazor exchanges map goes here with animated highlights of the exchanges
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
