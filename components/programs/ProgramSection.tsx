import { type ReactElement } from 'react';
import Button from './Button';

interface ProgramSectionProps {
  title: string;
  description: string;
  backgroundColor?: string;
  textAlign?: 'left' | 'center';
  fullWidth?: boolean;
}

export default function ProgramSection({
  title,
  description,
  backgroundColor = 'bg-[#E0FFF7]',
  textAlign = 'center',
  fullWidth = false,
}: ProgramSectionProps): ReactElement {
  const textAlignClass = textAlign === 'left' ? 'text-left' : 'text-center';
  const widthClass = fullWidth ? 'max-w-full' : 'max-w-4xl';

  return (
    <section className={`${backgroundColor} py-12 md:py-16`}>
      <div className="mx-auto w-[85%] px-4 sm:px-6 lg:px-8">
        <div className={`mx-auto ${widthClass} ${textAlignClass} space-y-6`}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 uppercase leading-tight">
            {title}
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            {description}
          </p>
          <div
            className={`flex flex-wrap gap-4 pt-4 ${textAlign === 'center' ? 'justify-center' : 'justify-start'}`}
          >
            <Button
              href="/programs/learn-more"
              variant="primary"
              className="min-w-[120px]"
            >
              Learn more
            </Button>
            <Button
              href="/programs/enroll"
              variant="outline"
              className="min-w-[240px]"
            >
              Secure My Seat in The Mentorship
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
