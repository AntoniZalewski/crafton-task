/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';
import React from 'react';

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  /** Renderuj jako <button>, <a> lub <Link>. */
  as?: 'button' | 'a' | 'link';
  /** Docelowy adres – wymagany, gdy as === 'a' | 'link'. */
  href?: string;
  /** Wariant stylistyczny zgodny z tokenami w globals.css. */
  variant?: 'primary' | 'secondary';
  className?: string;
  /** Ukryj ikonę w wariancie primary: showIcon={false} */
  showIcon?: boolean;
};

/**
 * Fundament typograficzny 1:1 z Figmy:
 * Clash Display / Medium(500) / 15px / line-height: 100% / uppercase
 * Uwaga: a11y – czytelne ringi focus (kontrast na białym tle).
 */
const baseClasses =
  'inline-flex items-center justify-center gap-[10px] rounded-[9999px] ' +
  'font-display text-[15px] leading-[1] uppercase ' +
  'transition-colors duration-150 ' +
  'focus-visible:outline-none focus-visible:ring-2 ' +
  'focus-visible:ring-[var(--color-primary)] ' +
  'focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-white)]';

/**
 * Mapowanie wariantów na klasy.
 * - primary bazuje na utilach .btn .btn-primary (globals.css) + metryki
 * - secondary: tylko kolory tekstu zmieniają się w :hover / :active
 */
const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: [
    baseClasses,
    'btn btn-primary',               // kolory/stany z globals.css
    'h-[var(--btn-h)] px-[32px] py-[18px]',
  ].join(' '),

  secondary: [
    baseClasses,
    'h-[var(--btn-h)] px-[32px] py-[18px]',
    // default
    'border border-[var(--color-stroke)] bg-[var(--color-surface-light)] text-[var(--color-dark)]',
    // hover -> tylko tekst
    'hover:text-[var(--color-text-on-dark)]',
    // active/clicked -> tylko tekst
    'active:text-[var(--color-surface-medium)]',
    // disabled
    'disabled:opacity-60 disabled:cursor-not-allowed',
  ].join(' '),
};

const Button = ({
  as = 'button',
  href,
  variant = 'primary',
  className,
  children,
  showIcon = true,
  disabled,
  onClick,
  ...props
}: ButtonProps) => {
  const classes = [variantClasses[variant], className].filter(Boolean).join(' ');

  // 20×20 kontener + strzałka 13.2×13.2 (wyłącznie dla primary)
  const Arrow = (
    <span
      className="inline-flex items-center justify-center"
      style={{ width: 20, height: 20, flexShrink: 0, flexGrow: 0 }}
      aria-hidden="true"
    >
      <img
        src="/arrow_up_right.svg"
        alt=""
        className="btn__icon"
        width={13.2}
        height={13.2}
        style={{
          width: '13.2px',
          height: '13.2px',
          objectFit: 'contain',
          verticalAlign: 'middle',
          display: 'block',
        }}
      />
    </span>
  );

  /**
   * Wewnętrzny wrapper tekstu – twardo trzymamy metryki, żeby nic
   * „po drodze” nie podbiło wagi, interlinii ani kerningu.
   */
  const Inner = (
    <span className="inline-flex items-center gap-[10px] font-display font-medium tracking-[0] leading-[1]">
      {children}
      {variant === 'primary' && showIcon ? Arrow : null}
    </span>
  );

  // Lekka a11y: „wyłączone linki” – ignoruj klik i oznacz aria-disabled.
  const handleMaybeDisabledClick: React.MouseEventHandler<
    HTMLAnchorElement | HTMLButtonElement
  > = (e) => {
    if (disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    onClick?.(e as any);
  };

  if (as === 'link' && href) {
    return (
      <Link
        href={href}
        className={classes}
        aria-disabled={disabled || undefined}
        onClick={handleMaybeDisabledClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
      >
        {Inner}
      </Link>
    );
  }

  if (as === 'a' && href) {
    // zawężamy props do atrybutów <a>, żeby nie rozlewać buttonowych pól
    const aProps = props as React.ComponentPropsWithoutRef<'a'>;
    return (
      <a
        href={href}
        className={classes}
        aria-disabled={disabled || undefined}
        onClick={handleMaybeDisabledClick as React.MouseEventHandler<HTMLAnchorElement>}
        {...aProps}
      >
        {Inner}
      </a>
    );
  }

  // domyślnie <button> – zawężamy props do buttona
  const buttonProps = props as React.ComponentPropsWithoutRef<'button'>;

  return (
    <button
      type="button"
      className={classes}
      disabled={disabled}
      onClick={handleMaybeDisabledClick as React.MouseEventHandler<HTMLButtonElement>}
      {...buttonProps}
    >
      {Inner}
    </button>
  );
};

export default Button;
