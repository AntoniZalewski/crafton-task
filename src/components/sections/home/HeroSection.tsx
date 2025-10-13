const HeroSection = () => {
  return (
    <section className="w-full bg-secondary-white">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-9 px-6 pb-20 pt-24 lg:px-10 lg:pb-28 lg:pt-32">
        <h1 className="w-full font-[Clash Display] text-[44px] leading-[50px] text-text-primary sm:text-[56px] sm:leading-[62px] md:text-[68px] md:leading-[74px] lg:w-[80%] lg:text-[76px] lg:leading-[82px]">
          TWÓJ KLUCZ DO LEPSZEJ PRZYSZŁOŚCI
        </h1>

        <p className="max-w-[640px] text-lg leading-7 text-text-secondary">
          W RealEstate nieruchomości to coś więcej niż tylko budynki - to miejsca,
          w których powstają historie, rozwijają się biznesy i spełniają marzenia.
        </p>

        <div className="mt-2 flex w-full flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#inwestycje"
            className="inline-flex items-center gap-3 rounded-full bg-primary-background px-8 py-4 font-[Clash Display] text-md font-medium uppercase tracking-[0.2em] text-primary-foreground shadow-[0_14px_32px_rgba(49,_111,_175,_0.28)] transition-transform duration-200 hover:scale-[1.02]"
          >
            NASZE INWESTYCJE
            <svg
              className="h-5 w-5 rotate-[-45deg]"
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
          </a>

          <a
            href="#kontakt"
            className="inline-flex items-center justify-center rounded-full border border-border-light px-8 py-4 font-[Clash Display] text-md font-medium uppercase tracking-[0.2em] text-text-primary transition-colors duration-200 hover:bg-secondary-light"
          >
            POZNAJMY SIĘ
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
