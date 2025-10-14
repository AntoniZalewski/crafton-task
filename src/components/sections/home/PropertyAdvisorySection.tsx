import Image from 'next/image';
import Button from '../../ui/Button';

const advisoryArticles = [
  {
    id: 1,
    title:
      'Jak kupic nieruchomosc i nie zwariowac? Przewodnik dla poczatkujacych.',
    image: '/house2.png',
  },
  {
    id: 2,
    title:
      'Czym rozni sie inwestycja w nieruchomosc od zwyklego zakupu?',
    image: '/house3.png',
  },
  {
    id: 3,
    title:
      '5 technologii, ktore powinny miec nowoczesne domy w 2025 roku.',
    image: '/house4.png',
  },
];

const PropertyAdvisorySection = () => {
  return (
    <section className="w-full bg-secondary-white">
      <div className="mx-auto w-full max-w-[1280px] px-[clamp(24px,6vw,80px)] py-20">
        <div>
          <h2 className="max-w-[520px] font-[Clash Display] text-[32px] uppercase tracking-[0.32em] text-text-primary sm:text-[36px] md:text-[40px]">
            PORADNIK
            <br />
            PO NIERUCHOMOSCIACH
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 justify-items-center gap-[32px] lg:grid-cols-3">
          {advisoryArticles.map((article) => (
            <article
              key={article.id}
              className="flex min-h-[505px] w-full max-w-[405px] flex-col rounded-[12px] border border-border-light bg-secondary-card p-6 shadow-[0_16px_28px_rgba(17,_39,_61,_0.06)]"
            >
              <div className="overflow-hidden rounded-[8px]">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={357}
                  height={222}
                  className="h-[222px] w-full max-w-[357px] object-cover"
                />
              </div>
              <h3 className="mt-[24px] font-[Clash Display] text-xl uppercase tracking-[0.24em] text-text-primary">
                {article.title}
              </h3>
              <p className="mt-[10px] font-[var(--font-instrument-sans)] text-[16px] leading-[1.5] text-text-secondary">
                Dowiedz się, jakie kroki podjąć przed zakupem i jak ocenić
                potencjał inwestycyjny nieruchomości, aby podejmować świadome
                decyzje.
              </p>
              <div className="mt-[20px] flex flex-1 flex-col justify-end pt-[32px] pb-[18px]">
                <Button
                  as="link"
                  href="#"
                  variant="secondary"
                  className="h-[56px] justify-center px-[32px] py-[18px]"
                  rightIcon={null}
                >
                  PRZEJDZ DO ARTYKULU
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 flex w-full justify-center">
          <Button variant="primary" className="h-[56px] px-[32px] py-[18px]">
            WIECEJ PORADNIKOW
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PropertyAdvisorySection;
