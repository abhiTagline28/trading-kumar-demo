import Link from 'next/link';

interface CategoryCardProps {
  title: string;
  href: string;
}

function CategoryCard({ title, href }: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group flex min-h-[300px] items-center justify-center rounded-lg bg-gray-100 transition-all hover:bg-gray-200 hover:shadow-lg lg:min-h-[400px]"
    >
      <h2 className="text-center text-4xl font-bold text-black transition-transform group-hover:scale-105 lg:text-5xl">
        {title}
      </h2>
    </Link>
  );
}

export default function TradingCategories() {
  const categories = [
    { title: 'STOCKS', href: '/categories/stocks' },
    { title: 'FUTURE & OPTIONS', href: '/categories/futures-options' },
    { title: 'COMMODITY', href: '/categories/commodity' },
    { title: 'CRYPTO', href: '/categories/crypto' },
    { title: 'FOREX', href: '/categories/forex' },
    { title: 'ETFS AND MORE', href: '/categories/etfs' },
  ];

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto w-[85%] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard
              key={category.href}
              title={category.title}
              href={category.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
