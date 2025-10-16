// src/components/ui/TextArea.tsx
'use client';

import type { CSSProperties, TextareaHTMLAttributes } from 'react';

/* -----------------------------------------------------------
   Utilsy pomocnicze
----------------------------------------------------------- */
const clsx = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(' ');

const toCssValue = (value?: string) => {
  if (!value) return undefined;
  const t = value.trim();
  if (t === '0') return '0';
  if (/[a-z%)]$/i.test(t) || t.includes('calc(')) return t;
  if (/^\d+(\.\d+)?$/.test(t)) return `${t}px`;
  return t;
};

const normalizeBorder = (value?: string) => {
  if (!value) return undefined;
  const seg = value.trim().split(/\s+/);
  if (seg.length >= 2 && /^\d+(\.\d+)?$/.test(seg[0])) {
    seg[0] = `${seg[0]}px`;
    return seg.join(' ');
  }
  return value;
};

/* -----------------------------------------------------------
   API i mapy styli
----------------------------------------------------------- */
type TextAreaVariant = 'default' | 'error' | 'success';
type TextAreaSize = 'small' | 'medium' | 'large';

const variantClasses: Record<TextAreaVariant, string> = {
  default:
    'border-[var(--color-stroke)] ' +
    'focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/30',
  error:
    'border-[var(--color-error)] focus:border-[var(--color-error)] focus:ring-2 focus:ring-[var(--color-error)]/30',
  success:
    'border-emerald-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200',
};

const sizeClasses: Record<TextAreaSize, string> = {
  small: 'font-sans body-m px-3 py-2 min-h-[120px] rounded-md',
  medium: 'font-sans body-l px-4 py-3 min-h-[140px] rounded-lg',
  large: 'font-sans body-xl px-5 py-4 min-h-[180px] rounded-xl',
};

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: TextAreaVariant;
  size?: TextAreaSize;

  // „wklejki” z Figmy
  text_font_size?: string;
  text_font_family?: string;
  text_font_weight?: string;
  text_line_height?: string;
  text_text_align?: CSSProperties['textAlign'];
  text_color?: string;
  fill_background_color?: string;
  border_border?: string;
  border_border_radius?: string;
  layout_width?: string;
  padding?: string;
  margin?: string;
  position?: CSSProperties['position'];
}

/* -----------------------------------------------------------
   Komponent
----------------------------------------------------------- */
const TextArea = ({
  className,
  variant = 'default',
  size = 'medium',

  text_font_size,
  text_font_family,
  text_font_weight,
  text_line_height,
  text_text_align,
  text_color,
  fill_background_color,
  border_border,
  border_border_radius,
  layout_width,
  padding,
  margin,
  position,

  style,
  ...props
}: TextAreaProps) => {
  const inlineStyle: CSSProperties = {
    ...style,
    width: layout_width,
    padding,
    margin,
    position,
    color: text_color,
    backgroundColor: fill_background_color,
    borderRadius: toCssValue(border_border_radius),
    border: normalizeBorder(border_border),
    fontFamily: text_font_family,
    fontWeight: text_font_weight as CSSProperties['fontWeight'],
    lineHeight: text_line_height,
    fontSize: toCssValue(text_font_size),
    textAlign: text_text_align,
  };

  return (
    <textarea
      className={clsx(
        'w-full border bg-[var(--color-white)] transition-all duration-200',
        'text-[var(--color-text)] placeholder:text-[var(--color-text)]/60',
        'focus:outline-none focus:text-[var(--color-dark)] resize-vertical',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      style={inlineStyle}
      {...props}
    />
  );
};

export default TextArea;
