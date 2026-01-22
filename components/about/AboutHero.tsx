import Image from 'next/image';
import { type ReactElement } from 'react';

export default function AboutHero(): ReactElement {
  return (
    <section className="relative w-full">
      <div className="relative h-[60vh] w-full overflow-hidden sm:h-[70vh] lg:h-[80vh]">
        <Image
          src="/kumar_singh_banner.jpg"
          alt="Kumar Singh"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
