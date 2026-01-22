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
    <section className={`bg-white py-12 md:py-16 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
          {title}
        </h2>
      </div>
    </section>
  );
}
