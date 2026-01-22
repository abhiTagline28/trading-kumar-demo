import { type ReactElement } from 'react';

interface SectionTitleStripProps {
  title: string;
  className?: string;
}

export default function SectionTitleStrip({
  title,
  className = '',
}: SectionTitleStripProps): ReactElement {
  return (
    <div className={`bg-black py-12 md:py-16 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold text-white uppercase leading-tight">
          {title}
        </h2>
      </div>
    </div>
  );
}
