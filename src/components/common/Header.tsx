// src/components/common/Header.tsx
'use client';

/* eslint-disable @next/next/no-img-element */

import { useState, type MouseEvent, type CSSProperties } from 'react';
import Button from '@/components/ui/Button';
import MobileMenu from './MobileMenu';

/**
 * Model pojedynczego linku w nawigacji.
 * - hasDropdown + items ⇒ link rozwijany.
 */
type NavLink = {
  label: string;
  href: string;
  hasDropdown?: boolean;
  items?: { label: string; href: string }[];
};

/** Stała lista pozycji z Figmy (brak zmian logiki/treści). */
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

/**
 * Header:
 * - desktop: menu centralne + CTA po prawej
 * - mobile: hamburger otwiera panel (MobileMenu)
 * - stany linków: default / hover / pressed (mouse down) / active (otwarty dropdown)
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openKey, setOpenKey] = useState<string | null>(null);     // active
  const [pressedKey, setPressedKey] = useState<string | null>(null); // clicked (moment wciśnięcia)

  const toggleMenu = () => setIsMenuOpen((open) => !open);
  const closeMenu = () => setIsMenuOpen(false);

  /** Klik w link rozwijany – tylko przełącza dropdown, nie nawiguje. */
  const handleNavClick = (link: NavLink, e: MouseEvent<HTMLAnchorElement>) => {
    if (!link.hasDropdown) return;
    e.preventDefault();
    setOpenKey((k) => (k === link.label ? null : link.label));
    setPressedKey(null);
  };

  // Baza metryk typograficznych linka (1:1 z Figmy)
  const linkBase =
    'nav-link inline-flex items-center py-[3px] whitespace-nowrap transition-colors duration-150';

  const desktopColumnVars: CSSProperties & { [key: `--${string}`]: string } = {
    '--header-side-col': 'clamp(200px, 23.125vw, 296px)',
    '--header-center-col': 'clamp(320px, 53.75vw, 688px)',
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-stroke-light)] bg-[var(--color-white)]">
      <div
        className="mx-container flex h-[82px] items-center lg:grid lg:grid-cols-[var(--header-side-col)_minmax(0,_var(--header-center-col))_var(--header-side-col)] lg:items-center"
        style={desktopColumnVars}
      >
        {/* LEFT: logo (kolumna symetryczna względem CTA) */}
        <div className="flex min-w-0 flex-1 items-center py-[10px] lg:flex-none lg:[width:var(--header-side-col)] lg:justify-start lg:justify-self-start">
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

        {/* CENTER: nawigacja desktop */}
        <nav
          aria-label="Główne"
          className="hidden h-[24px] min-w-0 flex-1 items-center justify-center text-[var(--color-dark)] lg:flex lg:w-full lg:[max-width:var(--header-center-col)] lg:justify-self-center"
        >
          <ul className="m-0 flex h-[24px] list-none items-center gap-[28px] p-0 [&>li>a::before]:content-none [&>li>a::after]:content-none">
            {NAV_LINKS.map((link) => {
              const isActive = openKey === link.label;
              const isPressed = pressedKey === link.label && !isActive;

              // 4 stany kolorów zgodnie z ustaleniami:
              // default -> --color-dark
              // hover   -> --color-text
              // pressed -> --color-stroke-on-dark
              // active  -> --color-primary
              const colorClass = isActive
                ? 'text-[var(--color-primary)]'
                : isPressed
                ? 'text-[var(--color-stroke-on-dark)]'
                : 'text-[var(--color-dark)] hover:text-[var(--color-text)]';

              // Dodatkowy odstęp na strzałkę przy dropdownach
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

                    {/* Strzałka 9×9 w kontenerze 18×18, kolor = currentColor (bez rotacji) */}
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

                  {/* Dropdown (pozycjonowany pod linkiem; zamyka się po wyjechaniu myszą) */}
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

        {/* RIGHT: CTA + hamburger (kolumna symetryczna względem logo) */}
        <div className="flex min-w-0 flex-1 items-center justify-end py-[10px] lg:flex-none lg:[width:var(--header-side-col)] lg:justify-self-end">
          {/* Link do sekcji kontakt (hash) */}
          <div className="hidden min-w-fit lg:flex">
            <Button
              as="link"
              href="#kontakt"
              variant="primary"
              className="lg:inline-flex"
            >
              Kontakt
            </Button>
          </div>

          {/* Hamburger – widoczny tylko na mobile */}
          <button
            type="button"
            aria-label={isMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
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

      {/* Panel mobilny */}
      <MobileMenu open={isMenuOpen} onClose={closeMenu} links={NAV_LINKS} />
    </header>
  );
};

export default Header;
