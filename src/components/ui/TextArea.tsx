'use client';

import type {
  CSSProperties,
  TextareaHTMLAttributes,
} from 'react';

const clsx = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(' ');

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

type TextAreaVariant = 'default' | 'error' | 'success';
type TextAreaSize = 'small' | 'medium' | 'large';

const variantClasses: Record<TextAreaVariant, string> = {
  default:
    'border-border-light focus:border-primary-background focus:ring-2 focus:ring-primary-background/30',
  error:
    'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200',
  success:
    'border-emerald-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200',
};

// Typography audit: align textarea text to Instrument Sans body scale.
const sizeClasses: Record<TextAreaSize, string> = {
  small: 'font-sans body-m px-3 py-2 min-h-[120px] rounded-md',
  medium: 'font-sans body-l px-4 py-3 min-h-[140px] rounded-lg',
  large: 'font-sans body-xl px-5 py-4 min-h-[180px] rounded-xl',
};

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: TextAreaVariant;
  size?: TextAreaSize;
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
        'w-full border bg-secondary-white text-text-secondary transition-all duration-200 placeholder:text-text-secondary/60 focus:outline-none resize-vertical',
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
// Typography audit: textarea content now follows Instrument Sans body scale across size variants.

