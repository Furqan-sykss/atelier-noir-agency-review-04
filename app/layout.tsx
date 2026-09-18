import type { Metadata } from "next";
import "./globals.css";
import { Inter, Instrument_Serif } from "next/font/google";
import SmoothScroll from "../components/SmoothScroll";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
  display: "swap"
});

export const metadata: Metadata = {
  title: "[AGENCY NAME] — Independent Creative Studio",
  description: "A cinematic creative agency website.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${serif.variable}`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
