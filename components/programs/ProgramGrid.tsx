import { type ReactElement } from 'react';
import ProgramCard from './ProgramCard';

interface ProgramItem {
  title: string;
  description: string;
  backgroundColor?: string;
  textAlign?: 'left' | 'center';
}

interface ProgramGridProps {
  programs: ProgramItem[];
  columns?: 1 | 2;
}

export default function ProgramGrid({
  programs,
  columns = 2,
}: ProgramGridProps): ReactElement {
  const gridCols = columns === 2 ? 'md:grid-cols-2' : 'grid-cols-1';

  return (
    <div className={`grid ${gridCols} gap-8 md:gap-12`}>
      {programs.map((program, index) => (
        <ProgramCard
          key={index}
          title={program.title}
          description={program.description}
          backgroundColor={program.backgroundColor}
          textAlign={program.textAlign}
        />
      ))}
    </div>
  );
}
