import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: "var(--font-clash)",
        sans: "var(--font-instrument)",
      },
      spacing: {
        "page-x": "80px",
      },
      borderRadius: {
        panel: "14px",
        card: "12px",
        input: "8px",
        pill: "999px",
      },
    },
  },
  plugins: [],
};

export default config;
