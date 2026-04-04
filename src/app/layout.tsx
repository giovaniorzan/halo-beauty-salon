import type { Metadata } from "next";
import { Inter, Josefin_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { JsonLdLocalBusiness } from "@/components/JsonLd";
import { RoseGoldCursor } from "@/components/RoseGoldCursor";
import { getSiteUrl, site } from "@/lib/site";

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const josefin = Josefin_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-josefin",
  display: "swap",
  weight: ["400", "500", "600"],
});

const baseUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: "/icon.png",
  },
  title: {
    default: `${site.siteName} | Salon de înfrumusețare premium în Iași`,
    template: `%s | ${site.siteName}`,
  },
  description:
    "Halo Beauty Salon — salonul tău de înfrumusețare din Iași: epilare definitivă laser, tratamente faciale, manichiură, coafor și machiaj profesional. Programează-te!",
  keywords: [
    "salon frumusețe Iași",
    "epilare definitivă laser Iași",
    "tratamente faciale Iași",
    "manichiură Iași",
    "Halo Beauty",
    "Copou",
  ],
  authors: [{ name: site.siteName }],
  creator: site.siteName,
  openGraph: {
    type: "website",
    locale: site.locale.replace("_", "-"),
    url: baseUrl,
    siteName: site.siteName,
    title: `${site.siteName} | Salon de înfrumusețare premium în Iași`,
    description:
      "Frumusețe și eleganță într-un cadru luxos. Epilare definitivă, tratamente faciale, manichiură, coafor și machiaj profesional în Iași.",
    images: [
      {
        url: "/images/hero/hero_image.webp",
        width: 1200,
        height: 630,
        alt: "Halo Beauty Salon — interior salon Iași",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.siteName} | Salon de înfrumusețare în Iași`,
    description:
      "Epilare laser, tratamente faciale, manichiură și coafor în Iași — Halo Beauty Salon.",
    images: ["/images/hero/hero_image.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={`${playfair.variable} ${inter.variable} ${josefin.variable}`}>
      <body>
        <JsonLdLocalBusiness />
        <RoseGoldCursor />
        {children}
      </body>
    </html>
  );
}
