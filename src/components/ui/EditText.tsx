'use client';

import type { CSSProperties, InputHTMLAttributes } from 'react';

const clsx = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(' ');

const toCssValue = (value?: string) => {
  if (!value) return undefined;
  const trimmed = value.trim();
  if (trimmed === '0') return '0';
  if (/[a-z%)]$/i.test(trimmed) || trimmed.includes('calc(')) return trimmed;
  if (/^\d+(\.\d+)?$/.test(trimmed)) return `${trimmed}px`;
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

type EditTextVariant = 'default' | 'error' | 'success';
type EditTextSize = 'small' | 'medium' | 'large';

const variantClasses: Record<EditTextVariant, string> = {
  default:
    'border-border-light focus:border-primary-background focus:ring-2 focus:ring-primary-background/30 focus:border-opacity-100',
  error:
    'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200',
  success:
    'border-emerald-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200',
};

const sizeClasses: Record<EditTextSize, string> = {
  small: 'font-sans body-m px-3 py-2 rounded-md',
  medium: 'font-sans body-l px-4 py-3 rounded-lg',
  large: 'font-sans body-xl px-5 py-4 rounded-xl',
};

export interface EditTextProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** wariant obramowania / focus */
  variant?: EditTextVariant;
  /** rozmiar typograficzny komponentu (nie mylić z html-owym `size`) */
  size?: EditTextSize;

  /* inline style props z exportów z Figma (opcjonalne) */
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
  position?: CSSProperties['position'];
}

const EditText = ({
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
  position,
  style,
  ...props
}: EditTextProps) => {
  // --- Controlled/uncontrolled guard ---
  const isControlled = Object.prototype.hasOwnProperty.call(props, 'value');
  const { value, defaultValue, onChange, ...rest } = props;

  const inlineStyle: CSSProperties = {
    ...style,
    width: layout_width,
    padding,
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
    <input
      className={clsx(
        'w-full border bg-secondary-white text-text-secondary transition-all duration-200 placeholder:text-text-secondary/60 focus:outline-none',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      style={inlineStyle}
      {...(isControlled
        ? { value: (value as string | number | readonly string[] | undefined) ?? '' }
        : { defaultValue })}
      onChange={onChange}
      {...rest}
    />
  );
};

export default EditText;
