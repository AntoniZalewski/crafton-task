'use client';

import type { ButtonHTMLAttributes, CSSProperties } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'small' | 'medium' | 'large';

const clsx = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(' ');

const spacingToken = (value?: string) => {
  if (!value) return undefined;
  const tokenMap: Record<string, string> = {
    xs: 'var(--spacing-xs)',
    sm: 'var(--spacing-sm)',
    md: 'var(--spacing-md)',
    lg: 'var(--spacing-lg)',
    xl: 'var(--spacing-xl)',
    '2xl': 'var(--spacing-2xl)',
    '3xl': 'var(--spacing-3xl)',
    '4xl': 'var(--spacing-4xl)',
    '5xl': 'var(--spacing-5xl)',
    '6xl': 'var(--spacing-6xl)',
    '7xl': 'var(--spacing-7xl)',
    '8xl': 'var(--spacing-8xl)',
    '9xl': 'var(--spacing-9xl)',
    '10xl': 'var(--spacing-10xl)',
    '11xl': 'var(--spacing-11xl)',
    '12xl': 'var(--spacing-12xl)',
    '13xl': 'var(--spacing-13xl)',
    '14xl': 'var(--spacing-14xl)',
    '15xl': 'var(--spacing-15xl)',
    '16xl': 'var(--spacing-16xl)',
  };

  return tokenMap[value] ?? value;
};

const toCssValue = (value?: string) => {
  if (!value) return undefined;
  const trimmed = value.trim();
  if (trimmed === '0') return '0';
  if (/[a-z%)]$/i.test(trimmed) || trimmed.includes('calc(')) {
    return trimmed;
  }
  if (/^\d+(\.\d+)?$/.test(trimmed)) {
    return `${trimmed}px`;
  }
  return trimmed;
};

const normalizeBorder = (value?: string) => {
  if (!value) return undefined;
  const segments = value.trim().split(/\s+/);
  if (segments.length >= 2 && /^\d+(\.\d+)?$/.test(segments[0])) {
    segments[0] = `${segments[0]}px`;
    return segments.join(' ');
  }
  return value;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-primary-background text-primary-foreground hover:bg-[#255a92] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-background',
  secondary:
    'bg-secondary-card text-text-primary border border-border-light hover:bg-secondary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-light',
  outline:
    'bg-transparent text-text-primary border border-border-light hover:bg-secondary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-light',
};

const sizeClasses: Record<ButtonSize, string> = {
  small: 'text-sm px-5 py-2 rounded-xl',
  medium: 'text-md px-7 py-3 rounded-2xl',
  large: 'text-lg px-9 py-4 rounded-3xl',
};

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  text_font_size?: string;
  text_font_family?: string;
  text_font_weight?: string;
  text_line_height?: string;
  text_text_align?: CSSProperties['textAlign'];
  text_text_transform?: CSSProperties['textTransform'];
  text_color?: string;
  fill_background_color?: string;
  border_border_radius?: string;
  border_border?: string;
  layout_align_self?: CSSProperties['alignSelf'];
  layout_gap?: string;
  layout_width?: string;
  padding?: string;
  position?: CSSProperties['position'];
  margin?: string;
}

const Button = ({
  text = 'PRZEJDŹ DO ARTYKUŁU',
  variant = 'primary',
  size = 'medium',
  className,
  text_font_size,
  text_font_family,
  text_font_weight,
  text_line_height,
  text_text_align,
  text_text_transform = 'uppercase',
  text_color,
  fill_background_color,
  border_border_radius,
  border_border,
  layout_align_self,
  layout_gap,
  layout_width,
  padding,
  position,
  margin,
  style,
  children,
  ...props
}: ButtonProps) => {
  const inlineStyle: CSSProperties = {
    ...style,
    color: text_color,
    backgroundColor: fill_background_color,
    borderRadius: toCssValue(border_border_radius),
    border: normalizeBorder(border_border),
    fontFamily: text_font_family,
    fontWeight: text_font_weight as CSSProperties['fontWeight'],
    lineHeight: text_line_height,
    fontSize: toCssValue(text_font_size),
    textAlign: text_text_align,
    textTransform: text_text_transform,
    alignSelf: layout_align_self,
    width: layout_width,
    gap: spacingToken(layout_gap),
    padding,
    margin,
    position,
  };

  const transformClass =
    text_text_transform === 'uppercase'
      ? 'uppercase'
      : text_text_transform === 'lowercase'
      ? 'lowercase'
      : text_text_transform === 'capitalize'
      ? 'capitalize'
      : undefined;

  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center gap-sm font-medium tracking-[0.08em] transition-all duration-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60',
        variantClasses[variant],
        sizeClasses[size],
        transformClass,
        className
      )}
      style={inlineStyle}
      {...props}
    >
      {children ?? text}
    </button>
  );
};

export default Button;
