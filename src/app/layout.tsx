import type { Metadata } from "next";
import { Cardo, Urbanist } from "next/font/google";
import "./globals.css";

const cardo = Cardo({
  variable: "--font-cardo",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Asatha Luxury - Webflow HTML website template",
  description:
    "Asatha is a luxury Webflow template for resorts, private villas, and wellness retreats. Crafted to highlight suites, spa experiences, dining, and curated packages — with elegant design that inspires direct bookings.",
  openGraph: {
    title: "Asatha Luxury - Webflow HTML website template",
    description:
      "Asatha is a luxury Webflow template for resorts, private villas, and wellness retreats. Crafted to highlight suites, spa experiences, dining, and curated packages — with elegant design that inspires direct bookings.",
    images: [
      {
        url: "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/6905b16f4666d726ed543320_3504d98fd235f65862824642600d0957_asatha-open-graph.webp",
      },
    ],
  },
  icons: {
    icon: "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/69059c72becb2e7b0243860e_favicon.png",
    apple: "https://cdn.prod.website-files.com/68f0d3dd9d3c1fec17146b9f/69059c746b6a7c95e8d5a6e7_webclip.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cardo.variable} ${urbanist.variable} scroll-smooth`}
    >
      <body className="font-urbanist bg-[#ffffff] text-[#3D3D3D] antialiased selection:bg-[#71553b] selection:text-white">
        {children}
      </body>
    </html>
  );
}
