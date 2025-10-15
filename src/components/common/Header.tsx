'use client';

/* eslint-disable @next/next/no-img-element */

import { useState } from 'react';
import Button from '@/components/ui/Button';
import MobileMenu from './MobileMenu';

type NavLink = {
  label: string;
  href: string;
  hasDropdown?: boolean;
};

const NAV_LINKS: NavLink[] = [
  { label: 'HOME', href: '#' },
  { label: 'O NAS', href: '#', hasDropdown: true },
  { label: 'NASZE INWESTYCJE', href: '#', hasDropdown: true },
  { label: 'PORADNIK', href: '#' },
  { label: 'WYNAJMIJ', href: '#' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((open) => !open);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--color-white)] shadow-sm">
      <div className="mx-auto flex h-[82px] max-w-[1280px] items-center justify-between px-[clamp(24px,6vw,80px)]">
        <div className="flex w-[296px] items-center">
          <a href="#" className="inline-flex items-center" aria-label="Crafton">
            <img
              src="/crafton_logo.svg"
              alt="Crafton"
              width={101}
              height={20}
              className="h-[20px] w-[101px]"
            />
          </a>
        </div>

        {/* desktop nav */}
        <nav
          aria-label="Glowne"
          className="hidden h-[24px] items-center gap-[28px] text-[var(--color-dark)] lg:flex"
        >
          <ul className="m-0 flex h-[24px] list-none items-center gap-[28px] p-0 [&>li>a::before]:content-none [&>li>a::after]:content-none">
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="m-0 p-0">
                <a
                  href={link.href}
                  className="
                    inline-flex items-center gap-[6px] py-[3px]
                    font-display text-[15px] font-medium uppercase leading-[100%] tracking-[-0.02em]
                    whitespace-nowrap transition-opacity duration-150 hover:opacity-80
                  "
                >
                  <span>{link.label}</span>

                  {/* Mała strzałka jak w Figmie:
                     - kontener 18x18
                     - wektor ~9x9 (mniejszy w środku)
                     - kolor dziedziczony (currentColor = --color-dark)
                  */}
                  {link.hasDropdown ? (
                    <span
                      className="inline-flex translate-y-[1px] items-center justify-center"
                      style={{
                        width: 18,
                        height: 18,
                        flexShrink: 0,
                        flexGrow: 0,
                      }}
                      aria-hidden="true"
                    >
                      <img
                        src="/nav_little_arrow.svg"
                        alt=""
                        width={9}
                        height={9}
                        style={{
                          width: '9px',   // ~50% z 18 zgodnie z rysunkiem (wektor mniejszy w boxie)
                          height: '9px',
                          display: 'block',
                          objectFit: 'contain',
                        }}
                      />
                    </span>
                  ) : null}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex w-[296px] justify-end">
          <Button
            as="link"
            href="/kontakt"
            variant="primary"
            className="hidden lg:inline-flex"
          >
            Kontakt
          </Button>

          <button
            type="button"
            aria-label={isMenuOpen ? 'Zamknij menu' : 'Otworz menu'}
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
            className="ml-4 flex h-12 w-12 items-center justify-center rounded-lg border border-[var(--color-stroke)] text-[var(--color-dark)] transition-colors duration-150 hover:bg-[var(--color-surface-subtle)] lg:hidden"
          >
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              role="img"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <path d="M6 6L18 18M18 6L6 18" />
              ) : (
                <>
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      <MobileMenu open={isMenuOpen} onClose={closeMenu} links={NAV_LINKS} />
    </header>
  );
};

export default Header;
