'use client';

/* eslint-disable @next/next/no-img-element */

import { useState } from 'react';
import Button from '@/components/ui/Button';
import MobileMenu from './MobileMenu';

type NavLink = {
  label: string;
  href: string;
  hasDropdown?: boolean;
  items?: { label: string; href: string }[];
};

const NAV_LINKS: NavLink[] = [
  { label: 'HOME', href: '#' },
  {
    label: 'O NAS',
    href: '#',
    hasDropdown: true,
    items: [
      { label: 'Kim jesteśmy', href: '#' },
      { label: 'Zespół', href: '#' },
      { label: 'Kariera', href: '#' },
      { label: 'Kontakt dla mediów', href: '#' },
    ],
  },
  {
    label: 'NASZE INWESTYCJE',
    href: '#',
    hasDropdown: true,
    items: [
      { label: 'Poznań Park', href: '#' },
      { label: 'Nowe Ogrody', href: '#' },
      { label: 'Zielone Tarasy', href: '#' },
      { label: 'Mapa inwestycji', href: '#' },
    ],
  },
  { label: 'PORADNIK', href: '#' },
  { label: 'WYNAJMIJ', href: '#' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openKey, setOpenKey] = useState<string | null>(null); // active
  const [pressedKey, setPressedKey] = useState<string | null>(null); // clicked

  const toggleMenu = () => setIsMenuOpen((open) => !open);
  const closeMenu = () => setIsMenuOpen(false);

  const handleNavClick = (link: NavLink, e: React.MouseEvent) => {
    if (!link.hasDropdown) return;
    e.preventDefault();
    setOpenKey((k) => (k === link.label ? null : link.label));
    setPressedKey(null);
  };

  // 1:1 z Figmą – spina metryki typograficzne
  const linkBase =
    'nav-link inline-flex items-center py-[3px] whitespace-nowrap transition-colors duration-150';

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--color-white)] border-b border-[var(--color-stroke-light)]">
      <div className="mx-container flex h-[82px] items-center justify-between">
        {/* LEFT column — 296px */}
        <div className="flex w-[296px] items-center py-[10px]">
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

        {/* CENTER nav */}
        <nav
          aria-label="Glowne"
          className="hidden lg:flex flex-1 h-[24px] items-center justify-center text-[var(--color-dark)]"
        >
          <ul className="m-0 flex h-[24px] list-none items-center gap-[28px] p-0 [&>li>a::before]:content-none [&>li>a::after]:content-none">
            {NAV_LINKS.map((link) => {
              const isActive = openKey === link.label;
              const isPressed = pressedKey === link.label && !isActive;

              // 4 stany kolorów
              const colorClass = isActive
                ? 'text-[var(--color-primary)]'
                : isPressed
                ? 'text-[var(--color-stroke-on-dark)]'
                : 'text-[var(--color-dark)] hover:text-[var(--color-text)]';

              const gapForItem = link.hasDropdown ? 'gap-[2px]' : 'gap-[6px]';

              return (
                <li key={link.label} className="relative m-0 p-0">
                  <a
                    href={link.href}
                    className={`${linkBase} ${gapForItem} ${colorClass}`}
                    aria-expanded={link.hasDropdown ? isActive : undefined}
                    aria-haspopup={link.hasDropdown ? 'menu' : undefined}
                    onClick={(e) => handleNavClick(link, e)}
                    onMouseDown={() => setPressedKey(link.label)}
                    onMouseUp={() => setPressedKey(null)}
                    onMouseLeave={() => setPressedKey(null)}
                  >
                    <span>{link.label}</span>

                    {/* ▼ dokładnie taki jak w pliku — bez rotacji; kolor = currentColor */}
                    {link.hasDropdown ? (
                      <span
                        className="inline-flex translate-y-[1px] items-center justify-center"
                        style={{
                          width: 18,
                          height: 18,
                          flexShrink: 0,
                          flexGrow: 0,
                          backgroundColor: 'currentColor',
                          WebkitMask:
                            'url(/nav_little_arrow.svg) no-repeat center / 9px 9px',
                          mask:
                            'url(/nav_little_arrow.svg) no-repeat center / 9px 9px',
                        }}
                        aria-hidden="true"
                      />
                    ) : null}
                  </a>

                  {/* dropdown */}
                  {link.hasDropdown && isActive && link.items?.length ? (
                    <div
                      role="menu"
                      className="absolute left-0 top-[calc(100%+12px)] min-w-[220px] rounded-[12px] border border-[var(--color-stroke)] bg-[var(--color-white)] py-2 shadow-md"
                      onMouseLeave={() => setOpenKey(null)}
                    >
                      {link.items.map((it) => (
                        <a
                          key={it.label}
                          href={it.href}
                          role="menuitem"
                          className="body-m block px-4 py-2 text-[var(--color-dark)] hover:bg-[var(--color-surface-subtle)]"
                          onClick={() => setOpenKey(null)}
                        >
                          {it.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* RIGHT column — CTA 296px */}
        <div className="flex w-[296px] items-center justify-end py-[10px]">
          {/* tu była przyczyna 404: '/kontakt' → zmiana na '#kontakt' */}
          <Button
            as="link"
            href="#kontakt"
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
