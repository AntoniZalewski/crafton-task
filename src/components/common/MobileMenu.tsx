'use client';

/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef } from 'react';
import Button from '@/components/ui/Button';

export type MobileMenuLink = {
  label: string;
  href: string;
  hasDropdown?: boolean;
};

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: MobileMenuLink[];
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

const MobileMenu = ({ open, onClose, links }: MobileMenuProps) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !panelRef.current) {
        return;
      }

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        FOCUSABLE_SELECTOR
      );

      if (!focusable.length) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      } else if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div className="lg:hidden">
      <div
        className="fixed inset-0 z-[55] bg-black/20"
        aria-hidden="true"
        onClick={onClose}
      />
      <div
        id="mobile-menu"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        className="fixed top-0 right-0 z-[60] flex h-screen w-[min(85vw,360px)] flex-col bg-[var(--color-white)] shadow-xl"
      >
        <div className="flex h-[82px] items-center justify-between px-[clamp(24px,6vw,80px)]">
          <a href="#" className="inline-flex items-center" aria-label="Crafton">
            <img
              src="/crafton_logo.svg"
              alt="Crafton"
              width={101}
              height={20}
              className="h-[20px] w-[101px]"
            />
          </a>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="flex h-12 w-12 items-center justify-center rounded-lg border border-[var(--color-stroke)] text-[var(--color-dark)] transition-colors duration-150 hover:bg-[var(--color-surface-subtle)]"
            aria-label="Zamknij menu"
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
              <path d="M6 6L18 18M18 6L6 18" />
            </svg>
          </button>
        </div>

        <nav aria-label="Glowne" className="flex-1 overflow-y-auto">
          <ul className="divide-y divide-[var(--color-stroke-light)] px-[clamp(24px,6vw,80px)]">
            {links.map((link) => (
              <li key={link.label}>
                {/* Typography audit: sync mobile nav item to body-Medium-L 16px/150% Instrument Sans. */}
                <a
                  href={link.href}
                  className="body-medium-l font-sans flex items-center justify-between py-3 uppercase tracking-[-0.02em] text-[var(--color-dark)] transition-opacity duration-150 hover:opacity-80"
                  onClick={onClose}
                >
                  <span>{link.label}</span>
                  {link.hasDropdown ? (
                    <svg
                      width={18}
                      height={18}
                      viewBox="0 0 20 20"
                      className="-rotate-90 text-[var(--color-dark)]"
                      aria-hidden="true"
                      role="img"
                      fill="currentColor"
                    >
                      <path d="M5 7.5 10 12.5 15 7.5H5Z" />
                    </svg>
                  ) : null}
                </a>
              </li>
            ))}
            <li>
              <Button
                as="link"
                href="/kontakt"
                variant="primary"
                onClick={onClose}
                className="mt-6 h-[46px] w-full justify-center gap-[10px] px-[20px] py-[13px]"
              >
                KONTAKT
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
