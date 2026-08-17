import type { Metadata } from "next";
import { Barlow_Semi_Condensed, Barlow } from "next/font/google";
import "./globals.css";

const barlowSemiCondensed = Barlow_Semi_Condensed({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const barlow = Barlow({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Espresso Bolognese",
  description: "Espresso Bolognese — Premium Italian Espresso Bar & Modern Dining.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${barlowSemiCondensed.variable} ${barlow.variable} scroll-smooth`}
    >
      <body className="font-body bg-[var(--brand-cream)] text-[var(--brand-dark)] antialiased selection:bg-[var(--brand-brown)] selection:text-white">
        {children}
      </body>
    </html>
  );
}
