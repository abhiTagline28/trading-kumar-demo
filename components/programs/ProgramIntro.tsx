import { type ReactElement } from 'react';

interface ProgramIntroProps {
  title: string;
  className?: string;
}

export default function ProgramIntro({
  title,
  className = '',
}: ProgramIntroProps): ReactElement {
  return (
    <section className={`bg-white py-16 md:py-24 lg:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight text-center">
          {title}
        </h2>
      </div>
    </section>
  );
}
