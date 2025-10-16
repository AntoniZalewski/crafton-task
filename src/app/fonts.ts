import localFont from "next/font/local";

export const clashDisplay = localFont({
  src: [{ path: "./fonts/ClashDisplay-Medium.woff2", weight: "500", style: "normal" }],
  variable: "--font-clash",
  display: "swap",
});

export const instrumentSans = localFont({
  src: [
    { path: "./fonts/InstrumentSans-Regular.ttf",  weight: "400", style: "normal" },
    { path: "./fonts/InstrumentSans-Medium.ttf",   weight: "500", style: "normal" },
    { path: "./fonts/InstrumentSans-SemiBold.ttf", weight: "600", style: "normal" },
  ],
  variable: "--font-instrument",
  display: "swap",
});
