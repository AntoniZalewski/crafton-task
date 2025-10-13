import Button from '../../ui/Button';

const advisoryArticles = [
  {
    id: 1,
    title:
      'Jak kupić nieruchomość i nie zwariować? Przewodnik dla początkujących.',
    image:
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    title: 'Czym różni się inwestycja w nieruchomość od zwykłego zakupu?',
    image:
      'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    title:
      '5 technologii, które powinny mieć nowoczesne domy w 2025 roku.',
    image:
      'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200&q=80',
  },
];

const PropertyAdvisorySection = () => {
  return (
    <section className="w-full bg-secondary-white">
      <div className="mx-auto w-full max-w-[1280px] px-6 pb-24 pt-24 lg:px-10">
        <div className="flex w-full flex-col gap-4">
          <h2 className="max-w-[520px] font-[Clash Display] text-[32px] uppercase tracking-[0.32em] text-text-primary sm:text-[36px] md:text-[40px]">
            PORADNIK
            <br />
            PO NIERUCHOMOŚCIACH
          </h2>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {advisoryArticles.map((article) => (
            <article
              key={article.id}
              className="flex h-full flex-col rounded-3xl border border-border-light bg-secondary-card p-7 shadow-[0_16px_28px_rgba(17,_39,_61,_0.06)] transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={`${article.image}&sat=-8`}
                  alt={article.title}
                  className="h-[220px] w-full object-cover"
                />
              </div>
              <h3 className="mt-9 font-[Clash Display] text-xl uppercase tracking-[0.24em] text-text-primary">
                {article.title}
              </h3>
              <Button
                variant="outline"
                size="medium"
                className="mt-9 w-full justify-center border border-border-light bg-secondary-white py-3 text-sm font-semibold tracking-[0.16em]"
              >
                PRZEJDŹ DO ARTYKUŁU
              </Button>
            </article>
          ))}
        </div>

        <div className="mt-16 flex w-full justify-center">
          <Button
            variant="primary"
            size="large"
            className="px-10 py-4 font-[Clash Display] uppercase tracking-[0.2em]"
          >
            WIĘCEJ PORADNIKÓW
            <svg
              className="ml-3 h-5 w-5 rotate-[-45deg]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PropertyAdvisorySection;
