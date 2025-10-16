import localFont from "next/font/local";

/** Clash Display — tylko Medium (500) */
export const clashDisplay = localFont({
  src: [{ path: "./fonts/ClashDisplay-Medium.woff2", weight: "500", style: "normal" }],
  variable: "--font-clash",
  display: "swap",
});

/** Instrument Sans — zostawiam Regular + Medium + Semibold JEŚLI masz pliki;
    jeśli nie, usuń wiersze bez posiadanych plików. */
export const instrumentSans = localFont({
  src: [
    { path: "./fonts/InstrumentSans-Regular.ttf",  weight: "400", style: "normal" },
    { path: "./fonts/InstrumentSans-Medium.ttf",   weight: "500", style: "normal" },
    { path: "./fonts/InstrumentSans-SemiBold.ttf", weight: "600", style: "normal" },
  ],
  variable: "--font-instrument",
  display: "swap",
});
