import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { JsonLdLocalBusiness } from "@/components/JsonLd";
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
        url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Halo Beauty Salon — salon de înfrumusețare Iași",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.siteName} | Salon de înfrumusețare în Iași`,
    description:
      "Epilare laser, tratamente faciale, manichiură și coafor în Iași — Halo Beauty Salon.",
    images: [
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&h=630&fit=crop",
    ],
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
    <html lang="ro" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <JsonLdLocalBusiness />
        {children}
      </body>
    </html>
  );
}
