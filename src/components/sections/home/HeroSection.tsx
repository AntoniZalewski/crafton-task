import Button from '../../ui/Button';

const HeroSection = () => {
  return (
    <section className="w-full bg-[var(--color-white)]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-[20px] px-[clamp(24px,6vw,80px)] py-[clamp(64px,12vw,80px)] lg:px-[120px] lg:py-[80px]">
        <h1 className="h1-hero font-display font-medium uppercase tracking-[-0.02em] text-[var(--color-dark)] max-w-[1038px]">
          TWÓJ KLUCZ DO LEPSZEJ PRZYSZŁOŚCI
        </h1>

        <p className="body-xl font-sans max-w-[648px] tracking-[-0.02em] text-text-secondary">
          W RealEstate nieruchomości to coś więcej niż tylko budynki - to miejsca, w których powstają historie, rozwijają się biznesy i spełniają marzenia.
        </p>

        <div className="flex w-full flex-col items-start gap-[20px] pt-[10px] lg:w-[1280px] lg:flex-row lg:items-center">
          <Button
            as="link"
            href="#inwestycje"
            variant="primary"
            className="w-full max-w-[252px] lg:w-auto"
          >
            NASZE INWESTYCJE
          </Button>
          <Button
            as="link"
            href="#poznajmy"
            variant="secondary"
            className="w-full max-w-[252px] lg:w-auto"
            /* secondary nie ma ikony — nie trzeba nic podawać */
          >
            POZNAJMY SIĘ
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
