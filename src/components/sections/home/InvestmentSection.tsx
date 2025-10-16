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
    desc:
      'Poznań Park to kameralne osiedle nowoczesnych domów, które harmonijnie łączy komfort życia z bliskością natury. Położone zaledwie 10 minut od centrum Poznania, oferuje ciszę i zieleń bez kompromisów – z łatwym dostępem do miejskich udogodnień.',
    image: '/house1.png',
  },
  {
    city: 'Warszawa – Wilanów, 02-969',
    title: 'SŁONECZNE TARASY',
    desc:
      'Rodzinne domy z ogródkami w cichej, zielonej okolicy. Szkoła i park w zasięgu 10 minut spacerem — idealne miejsce do życia z dziećmi.',
    image: '/house5.jpg',
  },
  {
    city: 'Dąbrowa nad Wisłą, 27-130',
    title: 'DOMY NAD WAŁEM',
    desc:
      'Bielone elewacje i dachówka w ciepłym odcieniu. Widok na dolinę rzeki, spokój i dostęp do tras rowerowych tuż za furtką.',
    image: '/house6.jpg',
  },
  {
    city: 'Suchy Las, 62-002',
    title: 'NOWOCZESNE OGRODY',
    desc:
      'Współczesna bryła z dużymi przeszkleniami, garaż w bryle budynku i ogród od południa dla maksimum światła przez cały dzień.',
    image: '/house7.jpg',
  },
];

/** Okrągły przycisk nawigacji (‹ ›) ze stanami kolorów zgodnie z UI Kit */
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

  const able = [
    'bg-[var(--color-white)] border-[var(--color-dark)] text-[var(--color-dark)]',
    'hover:border-[var(--color-stroke-on-dark)] hover:text-[var(--color-stroke-on-dark)]',
    'active:border-[var(--color-text-on-dark)] active:text-[var(--color-text-on-dark)]',
  ].join(' ');

  const dis =
    'cursor-default border-[var(--color-stroke-light)] text-[var(--color-stroke-light)] bg-[var(--color-white)]';

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
    // ID + offset pod sticky header (82px)
    <section id="inwestycje" className="w-full bg-[var(--color-white)] scroll-mt-[82px]">
      {/* nagłówek + lead */}
      <div className="mx-container pb-[80px] pt-0 text-center">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-[20px]">
          <h2 className="h1 uppercase text-[var(--color-dark)]">NASZE INWESTYCJE</h2>
          <p className="body-l font-sans mx-auto max-w-[750px] text-text-secondary">
            Nasze inwestycje to miejsca, które łączą nowoczesny design, funkcjonalność i trwałość.
            Każdy projekt realizowany przez RealEstate to wynik pasji, zaangażowania i dbałości o każdy szczegół.
          </p>
        </div>
      </div>

      {/* karta – spójny wrapper tylko mx-container */}
      <div className="mx-container pb-[80px]">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-[24px] overflow-hidden rounded-[14px] border border-[var(--color-stroke)] bg-[var(--color-white)] lg:min-h-[540px] lg:flex-row lg:items-stretch lg:gap-[32px]">
          {/* lewa kolumna */}
          <div className="relative flex w-full flex-col rounded-[12px] bg-[var(--color-white)] p-[24px] lg:h-[540px] lg:w-[515px] lg:p-[36px]">
            <div className="flex flex-col gap-[10px]" aria-live="polite">
              <div className="flex items-center gap-[10px]">
                <span className="inline-flex h-[50px] w-[50px] items-center justify-center rounded-full border-[7px] border-[var(--color-stroke-subtle)] bg-[var(--color-surface-medium)]">
                  <img
                    src="/icon-lokalizacja.svg"
                    alt=""
                    width={12}
                    height={19}
                    className="h-[19px] w-[12px] select-none"
                    aria-hidden="true"
                  />
                </span>
                <span className="label-city text-[var(--color-dark)]">{current.city}</span>
              </div>

              <h3 className="h2 uppercase text-[var(--color-dark)] mt-[10px]">{current.title}</h3>

              <p className="body-l font-sans max-w-[443px] text-text-secondary mt-[4px]">
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

            {/* Strzałki */}
            <div className="mt-[60px] flex items-center gap-[12px] lg:mt-0 lg:absolute lg:left-[36px] lg:bottom-[37px]">
              <ArrowCircle direction="prev" onClick={goPrev} ariaLabel="Poprzedni slajd" disabled={isFirst} />
              <ArrowCircle direction="next" onClick={goNext} ariaLabel="Następny slajd" disabled={isLast} />
            </div>
          </div>

          {/* obraz */}
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
