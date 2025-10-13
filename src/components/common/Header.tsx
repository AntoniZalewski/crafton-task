'use client';

import { useState } from 'react';

const primaryLinks = [
  { label: 'HOME', href: '#' },
  {
    label: 'O NAS',
    href: '#',
    children: [
      { label: 'O firmie', href: '#' },
      { label: 'Nasz zespół', href: '#' },
      { label: 'Historia', href: '#' },
    ],
  },
  {
    label: 'NASZE INWESTYCJE',
    href: '#',
    children: [
      { label: 'Aktualne projekty', href: '#' },
      { label: 'Zrealizowane inwestycje', href: '#' },
      { label: 'Planowane projekty', href: '#' },
    ],
  },
  { label: 'PORADNIK', href: '#' },
  { label: 'WYNAJMIJ', href: '#' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-secondary-white shadow-[0_1px_0_rgba(17,_39,_61,_0.08)]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between py-6">
          <a
            href="#"
            className="flex items-center font-[Clash Display] text-[24px] font-semibold uppercase tracking-[0.32em] text-primary-text"
          >
            crafton
          </a>

          <button
            type="button"
            aria-label={menuOpen ? 'Zamknij menu' : 'Otwórz menu'}
            className="flex h-12 w-12 items-center justify-center rounded-lg border border-border-light text-text-primary transition-colors duration-200 hover:bg-secondary-light lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">
              {menuOpen ? 'Zamknij menu' : 'Otwórz menu'}
            </span>
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              {menuOpen ? (
                <path d="M6 6l12 12M18 6l-12 12" />
              ) : (
                <>
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </>
              )}
            </svg>
          </button>

          <nav
            className={[
              'absolute left-0 top-full w-full border-t border-border-light bg-secondary-white px-6 pb-6 pt-4 shadow-[0_16px_32px_rgba(17,_39,_61,_0.12)] transition-all duration-200 lg:static lg:block lg:w-auto lg:border-none lg:bg-transparent lg:p-0 lg:shadow-none',
              menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0 lg:pointer-events-auto lg:opacity-100',
            ].join(' ')}
          >
            <ul className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-9">
              {primaryLinks.map((link) => {
                const hasChildren = Array.isArray(link.children);

                return (
                  <li
                    key={link.label}
                    className={hasChildren ? 'relative group' : undefined}
                  >
                    <a
                      href={link.href}
                      className="inline-flex items-center gap-2 text-md font-medium tracking-[0.16em] text-text-primary transition-opacity duration-200 hover:opacity-70"
                    >
                      {link.label}
                      {hasChildren ? (
                        <svg
                          className="h-4 w-4 text-text-secondary"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      ) : null}
                    </a>

                    {hasChildren ? (
                      <ul className="mt-2 hidden min-w-[220px] rounded-2xl border border-border-light bg-secondary-white p-2 shadow-[0_16px_40px_rgba(17,_39,_61,_0.08)] group-hover:block lg:absolute lg:left-0 lg:top-[calc(100%+12px)]">
                        {link.children?.map((child) => (
                          <li key={child.label}>
                            <a
                              href={child.href}
                              className="block rounded-xl px-4 py-3 text-sm font-normal text-text-secondary transition-colors duration-150 hover:bg-secondary-light"
                            >
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                );
              })}

              <li className="lg:hidden">
                <a
                  href="#kontakt"
                  className="inline-flex items-center gap-2 rounded-full bg-primary-background px-6 py-3 text-md font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-[0_12px_24px_rgba(49,_111,_175,_0.28)] transition-transform duration-200 hover:scale-[1.02]"
                >
                  KONTAKT
                  <svg
                    className="h-4 w-4 rotate-45"
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
                </a>
              </li>
            </ul>
          </nav>

          <a
            href="#kontakt"
            className="hidden items-center gap-2 rounded-full bg-primary-background px-7 py-3 text-md font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-[0_12px_24px_rgba(49,_111,_175,_0.28)] transition-transform duration-200 hover:scale-[1.02] lg:inline-flex"
          >
            KONTAKT
            <svg
              className="h-4 w-4 rotate-45"
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
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
