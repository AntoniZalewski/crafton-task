'use client';

import { useMemo, useState } from 'react';
import Button from '../../ui/Button';

const slides = [
  {
    id: 1,
    location: 'Poznań 20-300',
    title: 'Poznań Park',
    description:
      'Poznań Park to kameralne osiedle nowoczesnych domów, które harmonijnie łączy komfort życia z bliskością natury. Położone zaledwie 10 minut od centrum Poznania, oferuje ciszę i zieleń bez kompromisów - z łatwym dostępem do miejskich udogodnień.',
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 2,
    location: 'Warszawa 01-134',
    title: 'Skyline Residence',
    description:
      'Panoramiczne apartamenty zaprojektowane z myślą o komforcie i maksymalnym doświetleniu. Skyline Residence łączy kameralność z nowoczesnymi rozwiązaniami technologicznymi.',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 3,
    location: 'Gdańsk 80-178',
    title: 'Marina Vista',
    description:
      'Ekskluzywne mieszkania z widokiem na marinę i pełną infrastrukturą usługową. Miejsce, które celebruje nadmorski styl życia oraz nowoczesną architekturę.',
    image:
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80',
  },
];

const InvestmentSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const activeSlide = useMemo(
    () => slides[currentSlide % slides.length],
    [currentSlide]
  );

  const goPrevious = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : (prev - 1) % slides.length
    );
  };

  const goNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section id="inwestycje" className="w-full bg-secondary-white">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-24 lg:px-10">
        <div className="flex flex-col items-center gap-7 text-center">
          <h2 className="font-[Clash Display] text-[32px] font-medium uppercase tracking-[0.28em] text-text-primary sm:text-[36px] md:text-[40px]">
            Nasze inwestycje
          </h2>
          <p className="max-w-[720px] text-lg leading-7 text-text-secondary">
            Nasze inwestycje to miejsca, które łączą nowoczesny design,
            funkcjonalność i trwałość. Każdy projekt realizowany przez Crafton
            to wynik pasji, zaangażowania i dbałości o każdy szczegół.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[minmax(0,1fr)_1.3fr] lg:items-stretch">
          <div className="flex flex-col rounded-3xl border border-border-light bg-secondary-white p-12 shadow-[0_24px_48px_rgba(17,_39,_61,_0.08)]">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary-background">
                <svg
                  className="h-6 w-6 text-primary-background"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 4.87 5.57 11.34 6.03 11.87.26.28.68.28.94 0C13.43 20.34 19 13.87 19 9c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5Z" />
                </svg>
              </div>
              <span className="font-[Clash Display] text-md font-medium uppercase tracking-[0.24em] text-text-primary">
                {activeSlide.location}
              </span>
            </div>

            <h3 className="mt-6 font-[Clash Display] text-2xl font-medium uppercase tracking-[0.28em] text-text-primary">
              {activeSlide.title}
            </h3>

            <p className="mt-5 text-base leading-[26px] text-text-secondary">
              {activeSlide.description}
            </p>

            <Button
              variant="primary"
              size="large"
              className="mt-11 self-start px-9 py-4"
            >
              <span className="mr-3 font-[Clash Display] uppercase tracking-[0.24em]">
                POZNAJ SZCZEGÓŁY
              </span>
              <svg
                className="h-5 w-5 text-primary-foreground"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M5 19L19 5" />
                <path d="M9 5h10v10" />
              </svg>
            </Button>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border-light">
            <img
              src={`${activeSlide.image}&sat=-10`}
              alt={activeSlide.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-12 flex items-center justify-start gap-4">
          <button
            type="button"
            onClick={goPrevious}
            className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border-primary bg-secondary-white text-text-primary transition-colors duration-150 hover:bg-secondary-light"
            aria-label="Poprzednia inwestycja"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={goNext}
            className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border-primary bg-secondary-white text-text-primary transition-colors duration-150 hover:bg-secondary-light"
            aria-label="Następna inwestycja"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
