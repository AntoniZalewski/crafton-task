// src/app/layout.tsx

// Globalne style (Tailwind + tokeny + komponenty)
import "./globals.css";

// Lokalnie hostowane fonty wystawione jako zmienne CSS (--font-clash, --font-instrument)
import { clashDisplay, instrumentSans } from "./fonts";

import type { Metadata } from "next";

/**
 * Metadata strony (Next.js App Router).
 * Wspiera generowanie <head> oraz tagów Open Graph/Twitter.
 * Uwaga: wartości są stałe – jeśli będziesz generować dynamiczne,
 * rozważ export funkcji generateMetadata().
 */
export const metadata: Metadata = {
  title: "Crafton Poland",
  description:
    "Discover premium Polish real estate investments with Crafton. Explore Poznań Park development & expert property advisory services.",
  openGraph: {
    title: "Crafton Poland",
    description:
      "Discover premium Polish real estate investments with Crafton. Explore Poznań Park development & expert property advisory services.",
    url: "https://crafton.pl",
    siteName: "Crafton Poland",
    locale: "pl_PL",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

/**
 * Root layout – jedyne miejsce, gdzie definiujemy <html> i <body>.
 * - atrybut lang="pl" dla poprawnej lokalizacji
 * - className na <html> z zmiennymi fontów; dalej używamy ich w CSS (globals.css)
 * - brak dodatkowego wrappera, aby nie zmieniać struktury DOM (logika zostaje nietknięta)
 */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pl"
      className={`${clashDisplay.variable} ${instrumentSans.variable}`}
    >
      {/* head może pozostać minimalny – resztą zarządza Metadata API */}
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      {/* Antialiasing globalnie; reszta stylów w globals.css */}
      <body className="antialiased">{children}</body>
    </html>
  );
}
