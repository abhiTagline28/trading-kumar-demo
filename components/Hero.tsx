import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full">
      <div className="relative h-[60vh] w-full overflow-hidden sm:h-[70vh] lg:h-[80vh]">
        <Image
          src="/home-page-banner.png"
          alt="Kumar Singh"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
