// src/components/sections/home/HeroSection.tsx
import Button from '../../ui/Button';

/**
 * Sekcja hero:
 * - kontener: .mx-container (max 1280px + responsywne paddingi X), .py-section (80px Y)
 * - typografia H1: Clash (display), uppercase, -0.02em letter-spacing
 * - odstępy: 24px pod H1, 20px nad blokiem przycisków
 * - przyciski: primary „NASZE INWESTYCJE”, secondary „POZNAJMY SIĘ”
 */
const HeroSection = () => {
  return (
    <section className="w-full bg-[var(--color-white)]">
      {/* container: max 1280, poziome 24→80, pionowe 80 */}
      <div className="mx-container flex w-full flex-col py-section">
        {/* kolumna z precyzyjnymi odstępami: 24 / 20 */}
        <div className="flex flex-col">
          <h1 className="h1-hero max-w-[1038px] font-display font-medium uppercase tracking-[-0.02em] text-[var(--color-dark)]">
            TWÓJ KLUCZ DO LEPSZEJ PRZYSZŁOŚCI
          </h1>

          {/* 24px pod H1 */}
          <div className="h-[24px]" aria-hidden="true" />

          <p className="body-xl max-w-[648px] tracking-[-0.02em] text-[var(--color-text)]">
            W RealEstate nieruchomości to coś więcej niż tylko budynki – to miejsca, w których powstają historie, rozwijają się
            biznesy i spełniają marzenia.
          </p>

          {/* 20px nad przyciskami */}
          <div className="h-[20px]" aria-hidden="true" />

          {/* przyciski: gap 10, wyrównane do lewej */}
          <div className="flex flex-col gap-[10px] sm:flex-row sm:flex-wrap sm:items-center">
            <Button
              as="link"
              href="#inwestycje"
              variant="primary"
              className="w-full max-w-[252px] sm:w-auto sm:max-w-none lg:w-auto"
            >
              NASZE INWESTYCJE
            </Button>

            {/* kotwica z offsetem jest w ContactSection → #poznajmy */}
            <Button
              as="link"
              href="#poznajmy"
              variant="secondary"
              className="w-full max-w-[252px] sm:w-auto sm:max-w-none lg:w-auto"
            >
              POZNAJMY SIĘ
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
