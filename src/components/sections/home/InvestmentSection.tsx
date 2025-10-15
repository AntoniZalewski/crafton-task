'use client';

import Image from 'next/image';
import { useState } from 'react';
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

const ArrowCircle = ({
  direction,
  onClick,
  ariaLabel,
}: {
  direction: 'prev' | 'next';
  onClick: () => void;
  ariaLabel: string;
}) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={ariaLabel}
    className="flex h-[53px] w-[53px] items-center justify-center rounded-full border border-[#11273D] bg-[var(--color-white)] text-[#11273D] transition-colors duration-150 hover:bg-[var(--color-surface-subtle)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2"
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

const InvestmentSection = () => {
  const [index, setIndex] = useState(0);
  const current = slides[index];

  const goPrev = () => setIndex((i) => (i + slides.length - 1) % slides.length);
  const goNext = () => setIndex((i) => (i + 1) % slides.length);

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
              {/* Lokalizacja: 50×50, border 7px, ikona 12×19 */}
              <div className="flex items-center gap-[10px]">
                <span
                  className="
                    relative inline-flex h-[50px] w-[50px] items-center justify-center
                    rounded-full bg-[#BFD2E6] border-[7px] border-[#EEF6FF]
                  "
                  aria-hidden="true"
                >
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
              <ArrowCircle direction="prev" onClick={goPrev} ariaLabel="Poprzedni slajd" />
              <ArrowCircle direction="next" onClick={goNext} ariaLabel="Następny slajd" />
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
};

export default InvestmentSection;
