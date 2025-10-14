'use client';

/* eslint-disable @next/next/no-img-element */

import { useState } from 'react';
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
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
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

        <nav
          aria-label="Glowne"
          className="hidden h-[24px] items-center gap-[28px] font-[var(--font-instrument-sans)] text-[15px] leading-[18px] text-[#0A2030] lg:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="inline-flex items-center gap-[2px] py-[3px] transition-opacity duration-150 hover:opacity-80"
            >
              {link.label}
              {link.hasDropdown ? (
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 20 20"
                  className="-rotate-90 text-[#0A2030]"
                  aria-hidden="true"
                  role="img"
                  fill="currentColor"
                >
                  <path d="M5 7.5 10 12.5 15 7.5H5Z" />
                </svg>
              ) : null}
            </a>
          ))}
        </nav>

        <div className="flex w-[296px] justify-end">
          <a
            href="#kontakt"
            aria-label="Kontakt"
            className="hidden h-[46px] items-center gap-[10px] rounded-[999px] bg-[#346EAE] px-[20px] pr-[13px] font-[Clash Display] text-[15px] font-medium text-white transition-colors duration-150 hover:bg-[#2e66a3] focus:outline-none focus:ring-2 focus:ring-[#346EAE] focus:ring-offset-2 focus:ring-offset-white lg:inline-flex"
          >
            KONTAKT
            <img
              src="/arrow_up_right.svg"
              alt=""
              width={20}
              height={20}
              className="h-[20px] w-[20px]"
              aria-hidden="true"
            />
          </a>

          <button
            type="button"
            aria-label={isMenuOpen ? 'Zamknij menu' : 'Otworz menu'}
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
            className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#D5DEE6] text-[#0A2030] transition-colors duration-150 hover:bg-[#f4f7fa] lg:hidden"
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
