import { type ReactElement, type ReactNode } from 'react';

interface ProprietaryStackSectionProps {
  children: ReactNode;
}

export default function ProprietaryStackSection({
  children,
}: ProprietaryStackSectionProps): ReactElement {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              The &quot;Kumar Singh&quot; Proprietary Stack
            </h2>
            <p className="text-lg text-gray-600">
              Original findings that transform how you see the market.
            </p>
          </div>
          <div className="space-y-12">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
