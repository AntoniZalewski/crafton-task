'use client';

/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = {
  as?: 'button' | 'link';
  href?: string;
  variant?: 'primary' | 'secondary';
  size?: 'md';
  rightIcon?: ReactNode;
  className?: string;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const clsx = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(' ');

const sizeClasses: Record<string, string> = {
  md: 'h-[56px] px-[32px]',
};

const variantClasses: Record<'primary' | 'secondary', string> = {
  primary:
    'bg-[#346EAE] text-white border-0 hover:bg-[#2e66a3] focus-visible:ring-[#346EAE]',
  secondary:
    'bg-white text-[#0A2030] border border-[1.5px] border-[#D9DEE5] hover:bg-[#F7FAFC] focus-visible:ring-[#346EAE]',
};

const defaultIcon = (
  <img
    src="/arrow_up_right.svg"
    alt=""
    aria-hidden="true"
    className="h-[20px] w-[20px]"
  />
);

const Button = ({
  as = 'button',
  href = '#',
  variant = 'primary',
  size = 'md',
  rightIcon,
  className,
  children,
  ...rest
}: ButtonProps) => {
  const { onClick, ...buttonProps } = rest;
  const iconElement =
    rightIcon === undefined
      ? variant === 'primary'
        ? defaultIcon
        : null
      : rightIcon;
  const showIcon =
    iconElement !== null && iconElement !== false && iconElement !== undefined;

  const classes = clsx(
    'inline-flex items-center justify-center whitespace-nowrap font-[Clash Display] text-[15px] font-medium leading-[1.2] rounded-[999px] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
    sizeClasses[size] ?? sizeClasses.md,
    variantClasses[variant],
    showIcon ? 'gap-[10px]' : undefined,
    className
  );

  if (as === 'link') {
    return (
      <Link href={href} onClick={onClick} className={classes}>
        <span>{children}</span>
        {showIcon ? iconElement : null}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...buttonProps}>
      <span>{children}</span>
      {showIcon ? iconElement : null}
    </button>
  );
};

export default Button;
