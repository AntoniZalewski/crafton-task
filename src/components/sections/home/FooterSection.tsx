// src/components/sections/home/FooterSection.tsx

/**
 * Stopka strony:
 * - layout: jeden kontener wycentrowany (.mx-container)
 * - bez .px-page (unikamy podwójnych bocznych paddingów)
 * - typografia pozostaje spójna z resztą (body-* + kolory text-*)
 */
const FooterSection = () => {
  return (
    <footer
      className="w-full bg-[var(--color-white)] pb-[40px] pt-[20px]"
      aria-label="Stopka strony"
    >
      <div className="mx-container flex w-full flex-col items-center gap-[16px] text-center">
        {/* Linia praw autorskich */}
        <p className="body-m font-sans max-w-[750px] text-text-secondary">
          Copyright 2025 RealEstate Sp. z o.o. Wszelkie prawa zastrzeżone.
        </p>

        {/* Atrybucja wykonania */}
        <p className="body-m font-sans max-w-[750px] text-text-secondary">
          <span>Projekt i realizacja: </span>
          <span className="font-semibold text-text-primary">Crafton</span>
        </p>

        {/* Klauzula informacyjna (poglądowy charakter materiałów) */}
        <p className="body-s font-sans max-w-[694px] text-text-secondary">
          Materiały zawarte na stronie WWW mają charakter poglądowy i nie mogą być traktowane jako
          ostateczne projekty realizacyjne. Deweloper zastrzega sobie prawo zmian. Niniejsza
          informacja nie stanowi oferty w rozumieniu przepisów Kodeksu Cywilnego i ma wyłącznie
          charakter informacyjny.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
