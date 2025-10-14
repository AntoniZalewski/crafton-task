import { Inter, Instrument_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${instrumentSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
