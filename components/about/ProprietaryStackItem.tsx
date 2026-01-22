import { type ReactElement } from 'react';

interface ProprietaryStackItemProps {
  title: string;
  description: string;
}

export default function ProprietaryStackItem({
  title,
  description,
}: ProprietaryStackItemProps): ReactElement {
  return (
    <div className="bg-gray-50 rounded-lg p-8 space-y-4">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
        {title}
      </h3>
      <p className="text-lg text-gray-700 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
