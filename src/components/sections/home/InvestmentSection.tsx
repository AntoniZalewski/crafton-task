'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import Button from '../../ui/Button';

type Slide = {
  city: string;
  title: string;
  desc: string;
  image: string;
};

const slides: Slide[] = [
  {
    city: 'Poznań, 20-300',
    title: 'POZNAŃ PARK',
    desc: 'Kameralne osiedle położone w sąsiedztwie zieleni i miejskich udogodnień. Komfortowe domy jednorodzinne z przestronnymi tarasami.',
    image: '/house1.png',
  },
  {
    city: 'Poznań, 20-300',
    title: 'NOWE OGRODY',
    desc: 'Zespół niskich budynków z prywatnymi ogródkami i strefą rekreacji. Idealne połączenie spokoju z miejską energią.',
    image: '/house2.png',
  },
  {
    city: 'Poznań, 20-300',
    title: 'ZIELONE TARASY',
    desc: 'Nowoczesna architektura, panoramiczne przeszklenia i widok na park. Wysoki standard wykończenia w każdym detalu.',
    image: '/house3.png',
  },
  {
    city: 'Poznań, 20-300',
    title: 'OSIEDLE PRZY PARKU',
    desc: 'Rodzinne osiedle inspirowane naturą. Bezpieczna przestrzeń z placem zabaw, strefą fitness i lokalnymi usługami.',
    image: '/house4.png',
  },
];

/** Okrągły przycisk nawigacji z ikoną strzałki.
 *  Stany:
 *   - default: biały bg, ciemna obwódka/ikona
 *   - hover: delikatny jasny bg
 *   - active: jeszcze jaśniejszy bg + jaśniejsza ikona/obwódka
 *   - disabled: szare obramowanie/ikona (brak hover/active, kursor not-allowed)
 */
function ArrowCircle({
  direction,
  onClick,
  ariaLabel,
  disabled = false,
}: {
  direction: 'prev' | 'next';
  onClick: () => void;
  ariaLabel: string;
  disabled?: boolean;
}) {
  const base =
    'flex h-[53px] w-[53px] items-center justify-center rounded-full border transition-colors duration-150 focus:outline-none focus-visible:outline-none';

  // hover: bardzo jasny niebieski, border i ikona ciemne
  // active: delikatnie jaśniejszy, bez niebieskiego ringa
  const able =
    'border-[#11273D] text-[#11273D] bg-[var(--color-white)] ' +
    'hover:bg-[#F3F8FE] active:bg-[#EAF2FB] ' +
    'active:text-[#6D8093] active:border-[#B7C8D8]';

  const dis =
    'cursor-not-allowed border-[#E6EEF6] text-[#E6EEF6] bg-[var(--color-white)]';

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      aria-disabled={disabled}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      className={`${base} ${disabled ? dis : able}`}
    >
      <svg
        width={12}
        height={14}
        viewBox="0 0 12 14"
        fill="none"
        className={direction === 'next' ? '' : 'rotate-180'}
        aria-hidden="true"
      >
        <path
          d="M1.5 1.75L9.25 7l-7.75 5.25"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}


export default function InvestmentSection() {
  const [index, setIndex] = useState(0);
  const current = slides[index];

  const isFirst = useMemo(() => index === 0, [index]);
  const isLast = useMemo(() => index === slides.length - 1, [index]);

  const goPrev = () => {
    if (!isFirst) setIndex((i) => i - 1);
  };
  const goNext = () => {
    if (!isLast) setIndex((i) => i + 1);
  };

  return (
    <section className="w-full bg-[var(--color-white)]">
      {/* nagłówek + lead */}
      <div className="mx-auto w-full max-w-[1280px] px-[clamp(24px,6vw,40px)] pb-[80px] pt-0 text-center">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-[20px]">
          <h2 className="font-display text-[42px] font-medium uppercase leading-[120%] text-[var(--color-dark)]">
            NASZE INWESTYCJE
          </h2>
          <p className="body-l font-sans mx-auto max-w-[750px] text-text-secondary">
            Nasze inwestycje to miejsca, które łączą nowoczesny design, funkcjonalność i trwałość. Każdy projekt realizowany przez RealEstate to wynik pasji, zaangażowania i dbałości o każdy szczegół.
          </p>
        </div>
      </div>

      <div className="px-[clamp(24px,6vw,80px)] pb-[80px] lg:px-[80px]">
        {/* zewnętrzna karta: radius 14px */}
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-[24px] overflow-hidden rounded-[14px] border border-[var(--color-stroke)] bg-[var(--color-white)] lg:min-h-[540px] lg:flex-row lg:items-center lg:gap-[32px]">
          {/* lewa kolumna: radius 12px */}
          <div className="flex w-full flex-col gap-[10px] rounded-[12px] bg-[var(--color-white)] p-[24px] lg:h-[540px] lg:w-[515px] lg:p-[36px]">
            <div className="flex flex-col gap-[10px]" aria-live="polite">
              {/* Lokalizacja: 50×50, ring 7, ikona 12×19 */}
              <div className="flex items-center gap-[10px]">
                <span className="relative inline-flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#BFD2E6] ring-[7px] ring-[#EEF6FF]">
                  <img
                    src="/icon-lokalizacja.svg"
                    alt=""
                    width={12}
                    height={19}
                    className="h-[19px] w-[12px] select-none"
                    aria-hidden="true"
                  />
                </span>
                <span className="font-display text-[15px] font-medium leading-[100%] text-[var(--color-dark)]">
                  {current.city}
                </span>
              </div>

              <h3 className="font-display text-[32px] font-medium uppercase leading-[140%] text-[var(--color-dark)]">
                {current.title}
              </h3>
              <p className="body-l font-sans max-w-[443px] text-text-secondary">
                {current.desc}
              </p>

              <Button
                as="link"
                href="#"
                variant="primary"
                className="mt-[36px] h-[56px] w-[252px] justify-center px-[32px] py-[18px]"
              >
                POZNAJ SZCZEGÓŁY
              </Button>
            </div>

            <div className="flex items-center gap-[12px] pt-[60px]">
              <ArrowCircle
                direction="prev"
                onClick={goPrev}
                ariaLabel="Poprzedni slajd"
                disabled={isFirst}
              />
              <ArrowCircle
                direction="next"
                onClick={goNext}
                ariaLabel="Następny slajd"
                disabled={isLast}
              />
            </div>
          </div>

          {/* obraz: radius 8px */}
          <div className="relative w-full overflow-hidden rounded-[8px] lg:h-[540px] lg:w-[738px]">
            {slides.map((slide, slideIndex) => (
              <Image
                key={slide.title}
                src={slide.image}
                alt={`Wizualizacja: ${slide.title}`}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                priority={slideIndex === 0}
                className={`object-cover transition-opacity duration-500 ${
                  slideIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
