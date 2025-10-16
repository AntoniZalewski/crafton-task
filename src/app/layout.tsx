import "./globals.css";
import { clashDisplay, instrumentSans } from "./fonts";

export const metadata = {
  title: "Premium Real Estate Investment Opportunities | Crafton Poland",
  description:
    "Discover premium Polish real estate investments with Crafton. Explore Poznań Park development & expert property advisory services.",
  openGraph: {
    title: "Premium Real Estate Investment Opportunities | Crafton Poland",
    description:
      "Discover premium Polish real estate investments with Crafton. Explore Poznań Park development & expert property advisory services.",
    url: "https://crafton.pl",
    siteName: "Crafton Poland",
    locale: "pl_PL",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
} as const;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" className={`${clashDisplay.variable} ${instrumentSans.variable}`}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
