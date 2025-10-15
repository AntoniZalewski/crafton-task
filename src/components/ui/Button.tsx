/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import React from "react";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  as?: "button" | "a" | "link";
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  /** wyjątkowo, jeśli chcesz ukryć ikonę w primary */
  showIcon?: boolean;
};

const baseClasses =
  "inline-flex items-center justify-center gap-[10px] rounded-[9999px] font-display text-[15px] font-medium uppercase leading-[100%] tracking-[-0.02em] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-white)]";

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    `${baseClasses} btn btn-primary h-[var(--btn-h)] px-[32px] py-[18px] text-[var(--btn-text-color)]`,
  secondary:
    `${baseClasses} h-[var(--btn-h)] border border-[var(--color-stroke)] bg-[#FEFEFE] px-[32px] py-[18px] text-[var(--color-dark)] hover:bg-[var(--color-surface-subtle)]`,
};

const Button = ({
  as = "button",
  href,
  variant = "primary",
  className,
  children,
  showIcon = true,
  ...props
}: ButtonProps) => {
  const classes = [variantClasses[variant], className].filter(Boolean).join(" ");

  // 20x20 box + strzałka 13.2x13.2 w środku (zgodnie z Figma)
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
          width: "13.2px",
          height: "13.2px",
          objectFit: "contain",
          verticalAlign: "middle",
          display: "block",
        }}
      />
    </span>
  );

  const Inner = (
    <span className="inline-flex items-center gap-[10px]">
      {children}
      {variant === "primary" && showIcon ? Arrow : null}
    </span>
  );

  if (as === "link" && href) {
    return (
      <Link href={href} className={classes}>
        {Inner}
      </Link>
    );
  }
  if (as === "a" && href) {
    return (
      <a href={href} className={classes} {...props}>
        {Inner}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...props}>
      {Inner}
    </button>
  );
};

export default Button;
