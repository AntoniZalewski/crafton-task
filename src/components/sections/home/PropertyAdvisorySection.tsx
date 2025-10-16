// components/sections/PropertyAdvisorySection.tsx
'use client';

import Image from 'next/image';
import Button from '../../ui/Button';

/**
 * Dane do kafelków poradnika (demo).
 * Uwaga: jeśli w przyszłości będzie CMS/API, podmień źródło i zostaw tę strukturę.
 */
const advisoryArticles = [
  {
    id: 1,
    title:
      'Jak kupić nieruchomość i nie zwariować? Przewodnik dla początkujących.',
    image: '/house2.png',
  },
  {
    id: 2,
    title: 'Czym różni się inwestycja w nieruchomość od zwykłego zakupu?',
    image: '/house3.png',
  },
  {
    id: 3,
    title:
      '5 technologii, które powinny mieć nowoczesne domy w 2025 roku.',
    image: '/house4.png',
  },
];

export default function PropertyAdvisorySection() {
  return (
    <section className="w-full bg-[var(--color-white)]">
      <div className="mx-container py-section">
        {/* Nagłówek sekcji — Clash Display Medium 42/120, uppercase */}
        <h2
          id="advisory-heading"
          className="h1 uppercase text-[var(--color-dark)]"
        >
          <span className="block">PORADNIK</span>
          <span className="block">PO NIERUCHOMOŚCIACH</span>
        </h2>

        {/* Siatka kart 1→3 kolumny */}
        <div className="mt-[32px] grid grid-cols-1 justify-items-center gap-[32px] lg:grid-cols-3">
          {advisoryArticles.map((article) => (
            <article
              key={article.id}
              aria-labelledby={`article-${article.id}-title`}
              className="flex w-full max-w-[405px] flex-col gap-[20px] rounded-card border border-[var(--color-stroke)] bg-[var(--color-white)] p-[24px] shadow-[0_16px_28px_rgba(17,_39,_61,_0.06)] lg:h-[505px]"
            >
              {/* Obraz 357×222 (responsywnie przez aspect-ratio) */}
              <div className="relative aspect-[357/222] overflow-hidden rounded-[8px]">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 357px, 100vw"
                  priority={false}
                />
              </div>

              {/* Tytuł kafelka — Clash Display Medium 18/160, uppercase */}
              <h3
                id={`article-${article.id}-title`}
                className="h4 uppercase text-[var(--color-dark)]"
              >
                {article.title}
              </h3>

              {/* Lead — Instrument Sans / body-l */}
              <p className="body-l text-text-secondary">
                Dowiedz się, jakie kroki podjąć przed zakupem i jak ocenić
                potencjał inwestycyjny nieruchomości, aby podejmować świadome decyzje.
              </p>

              {/* CTA wyrównane do dołu karty */}
              <div className="mt-auto">
                <Button
                  as="link"
                  href="#"
                  variant="secondary"
                  className="h-[56px] w-full justify-center gap-[10px] rounded-pill bg-[#FEFEFE] px-[32px] py-[18px]"
                >
                  PRZEJDŹ DO ARTYKUŁU
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Drugi blok: główne CTA sekcji */}
      <div className="mx-container pb-[80px] pt-0">
        <div className="flex w-full justify-center">
          <Button
            as="link"
            href="#"
            variant="primary"
            className="h-[56px] w-[260px] justify-center gap-[10px] rounded-pill px-[32px] py-[18px]"
          >
            WIĘCEJ PORADNIKÓW
          </Button>
        </div>
      </div>
    </section>
  );
}
