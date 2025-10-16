// tailwind.config.ts
import type { Config } from "tailwindcss";

/**
 * Uwaga na content globs:
 * - używamy App Routera i plików w ./src, więc wystarczy jeden glob.
 * - jeśli masz jeszcze coś poza ./src, dodaj odpowiedni wzorzec.
 */
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],

  theme: {
    extend: {
      /**
       * Font families – mapujemy na CSS zmienne z next/font
       * (definiowane w <html> przez layout.tsx).
       */
      fontFamily: {
        display: ["var(--font-clash)"],
        sans: ["var(--font-instrument)"],
      },

      /**
       * Kolory semantyczne spięte z tokenami w :root (globals.css).
       * Dzięki temu możesz używać np.:
       *  - text-text-secondary
       *  - text-text-primary
       *  - bg-secondary-white
       *  - border-stroke-light
       *  - text-dark / text-primary
       */
      colors: {
        primary: "var(--color-primary)",
        "primary-hover": "var(--color-primary-hovered)",
        "primary-pressed": "var(--color-primary-clicked)",

        dark: "var(--color-dark)",
        white: "var(--color-white)",

        text: {
          DEFAULT: "var(--color-text)",
          secondary: "var(--color-text)", // alias semantyczny
          "on-dark": "var(--color-text-on-dark)",
          primary: "var(--color-primary)", // użyte w stopce
        },

        surface: {
          subtle: "var(--color-surface-subtle)",
          alt: "var(--color-surface-alt)",
          "inner-dark": "var(--color-surface-inner-dark)",
          light: "var(--color-surface-light)",
          medium: "var(--color-surface-medium)",
        },

        stroke: {
          DEFAULT: "var(--color-stroke)",
          light: "var(--color-stroke-light)",
          subtle: "var(--color-stroke-subtle)",
          "on-dark": "var(--color-stroke-on-dark)",
          "icon-on-dark": "var(--color-icon-stroke-on-dark)",
        },

        // wygodny alias używany w inputach/textarea
        "secondary-white": "var(--color-surface-light)",
      },

      /**
       * Spacingi i promienie – podpięte pod tokeny z :root.
       * Pozwala użyć np. rounded-panel / rounded-card / rounded-input.
       */
      spacing: {
        "page-x": "var(--page-pad-x)", // jeśli potrzebujesz w utilach
        "section-y": "var(--section-pad-y)",
      },
      borderRadius: {
        panel: "var(--panel-radius)",
        card: "var(--card-radius)",
        input: "var(--input-radius)",
        pill: "var(--btn-radius-pill)",
      },
    },
  },

  plugins: [],
};

export default config;
