import Image from 'next/image';
import Button from '../../ui/Button';

const advisoryArticles = [
  {
    id: 1,
    title: 'Jak kupic nieruchomosc i nie zwariowac? Przewodnik dla poczatkujacych.',
    image: '/house2.png',
  },
  {
    id: 2,
    title: 'Czym rozni sie inwestycja w nieruchomosc od zwyklego zakupu?',
    image: '/house3.png',
  },
  {
    id: 3,
    title: '5 technologii, ktore powinny miec nowoczesne domy w 2025 roku.',
    image: '/house4.png',
  },
];

const PropertyAdvisorySection = () => {
  return (
    <section className="w-full bg-[var(--color-white)]">
      <div className="mx-auto w-full max-w-[1280px] px-[clamp(24px,6vw,80px)] py-[80px]">
        <h2 className="font-display text-[42px] font-medium uppercase leading-[120%] text-[var(--color-dark)]">
          PORADNIK PO NIERUCHOMOSCIACH
        </h2>

        <div className="mt-[32px] grid grid-cols-1 justify-items-center gap-[32px] lg:grid-cols-3">
          {advisoryArticles.map((article) => (
            <article
              key={article.id}
              className="flex h-[505px] w-full max-w-[405px] flex-col gap-[20px] rounded-card border border-[var(--color-stroke)] bg-[var(--color-white)] p-[24px] shadow-[0_16px_28px_rgba(17,_39,_61,_0.06)]"
            >
              <div className="overflow-hidden rounded-[8px]">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={357}
                  height={222}
                  className="h-[222px] w-full object-cover"
                />
              </div>
              <h3 className="font-display text-[18px] font-medium uppercase leading-[160%] text-[var(--color-dark)]">
                {article.title}
              </h3>
              <p className="body-l font-sans text-text-secondary">
                Dowiedz sie, jakie kroki podjac przed zakupem i jak ocenic potencjal inwestycyjny nieruchomosci, aby podejmowac swiadome decyzje.
              </p>
              <div className="mt-auto">
                <Button
                  as="link"
                  href="#"
                  variant="secondary"
                  className="h-[56px] w-full justify-center gap-[10px] rounded-pill px-[32px] py-[18px] bg-[#FEFEFE]"
                >
                  PRZEJDZ DO ARTYKULU
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="px-[clamp(24px,6vw,80px)] pb-[80px] pt-0 lg:px-[80px]">
        <div className="mx-auto flex w-full max-w-[1280px] justify-center">
          <Button
            as="link"
            href="#"
            variant="primary"
            className="h-[56px] w-[260px] justify-center gap-[10px] rounded-pill px-[32px] py-[18px]"
          >
            WIECEJ PORADNIKOW
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PropertyAdvisorySection;

