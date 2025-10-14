/* eslint-disable @next/next/no-img-element */

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
    city: 'Poznań 20-300',
    title: 'Poznań Park',
    desc: 'Kameralne osiedle położone w sąsiedztwie zieleni i miejskich udogodnień. Komfortowe domy jednorodzinne z przestronnymi tarasami.',
    image: '/house1.png',
  },
  {
    city: 'Poznań 20-300',
    title: 'Nowe Ogrody',
    desc: 'Zespół niskich budynków z prywatnymi ogródkami i strefą rekreacji. Idealne połączenie spokoju z miejską energią.',
    image: '/house2.png',
  },
  {
    city: 'Poznań 20-300',
    title: 'Zielone Tarasy',
    desc: 'Nowoczesna architektura, panoramiczne przeszklenia i widok na park. Wysoki standard wykończenia w każdym detalu.',
    image: '/house3.png',
  },
  {
    city: 'Poznań 20-300',
    title: 'Osiedle Przy Parku',
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
    className="flex h-[53px] w-[53px] items-center justify-center rounded-full border border-[#D9DEE5] bg-white text-[#0A2030]/80 transition-colors duration-150 hover:bg-[#F7FAFC] focus:outline-none focus:ring-2 focus:ring-[#346EAE] focus:ring-offset-2"
  >
    <svg
      width={12}
      height={14}
      viewBox="0 0 12 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
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

  const goPrev = () => {
    setIndex((i) => (i + slides.length - 1) % slides.length);
  };

  const goNext = () => {
    setIndex((i) => (i + 1) % slides.length);
  };

  return (
    <section className="w-full bg-secondary-white">
      <div className="mx-auto w-full max-w-[1280px] px-[clamp(24px,6vw,80px)] py-20">
        <div className="text-center">
          <h2 className="font-[Clash Display] text-[42px] leading-[1.2] text-[#0A2030]">
            Nasze inwestycje
          </h2>
          <p className="mx-auto mt-5 max-w-[750px] font-[var(--font-instrument-sans)] text-[16px] leading-[1.5] text-[#0A2030]/80">
            Wybierz inwestycję Crafton dopasowaną do Twojego stylu życia. Każdy
            projekt to dokładnie zaprojektowana przestrzeń, w której komfort,
            design i lokalizacja tworzą spójną całość.
          </p>
        </div>

        <div
          role="region"
          aria-label="Nasze inwestycje"
          className="mt-20 grid gap-6 lg:grid-cols-2 lg:gap-[32px]"
        >
          <div className="order-2 flex flex-col rounded-[12px] border border-[#E6EDF5] bg-white p-[36px] lg:order-1">
            <div aria-live="polite" className="flex flex-col gap-[10px]">
              <div className="flex items-center gap-[10px]">
                <img
                  src="/icon-lokalizacja.svg"
                  alt=""
                  aria-hidden="true"
                  className="h-[50px] w-[50px]"
                />
                <span className="font-[Clash Display] text-[15px] leading-[15px] text-[#0A2030]">
                  {current.city}
                </span>
              </div>

              <h3 className="font-[Clash Display] text-[32px] leading-[1.2] text-[#0A2030] md:text-[36px]">
                {current.title}
              </h3>

              <p className="max-w-[443px] font-[var(--font-instrument-sans)] text-[16px] leading-[1.5] text-[#0A2030]/80">
                {current.desc}
              </p>

              <Button
                as="link"
                href="#"
                variant="primary"
                className="mt-[36px]"
              >
                Poznaj szczegóły
              </Button>
            </div>

            <div className="mt-[60px] flex h-[64px] items-center gap-[10px]">
              <ArrowCircle
                direction="prev"
                onClick={goPrev}
                ariaLabel="Poprzedni slajd"
              />
              <ArrowCircle
                direction="next"
                onClick={goNext}
                ariaLabel="Następny slajd"
              />
            </div>
          </div>

          <div className="order-1 overflow-hidden rounded-[14px] lg:order-2">
            <div className="relative h-[320px] w-full rounded-[14px] lg:h-[680px]">
              {slides.map((slide, slideIndex) => (
                <Image
                  key={slide.title}
                  src={slide.image}
                  alt={`Wizualizacja: ${slide.title}`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority={slideIndex === 0}
                  className={`rounded-[14px] object-cover transition-opacity duration-500 ${
                    slideIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
