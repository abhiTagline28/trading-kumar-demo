import { type ReactElement } from 'react';
import Button from './Button';

interface ProgramCardProps {
  title: string;
  description: string;
  backgroundColor?: string;
  textAlign?: 'left' | 'center';
  onLearnMore?: () => void;
  onSecureSeat?: () => void;
}

export default function ProgramCard({
  title,
  description,
  backgroundColor = 'bg-white',
  textAlign = 'center',
  onLearnMore,
  onSecureSeat,
}: ProgramCardProps): ReactElement {
  const textAlignClass = textAlign === 'left' ? 'text-left' : 'text-center';

  return (
    <div
      className={`${backgroundColor} rounded-lg p-8 md:p-12 transition-shadow duration-200 hover:shadow-lg`}
    >
      <div className={`${textAlignClass} space-y-6`}>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase leading-tight">
          {title}
        </h3>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-none">
          {description}
        </p>
        <div
          className={`flex flex-wrap gap-4 ${textAlign === 'center' ? 'justify-center' : 'justify-start'}`}
        >
          <Button
            onClick={onLearnMore}
            variant="primary"
            className="min-w-[120px]"
          >
            Learn more
          </Button>
          <Button
            onClick={onSecureSeat}
            variant="primary"
            className="min-w-[240px]"
          >
            Secure My Seat in The Mentorship
          </Button>
        </div>
      </div>
    </div>
  );
}
