// Importing Neccessary Packages //
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { website_url } from "@/app/constants";

// Creating Font for Website //
const font = Outfit({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], style: ['normal'], subsets: ['latin'], display: 'swap' });

// Exporting Metadata Root //
export const metadata: Metadata = {
  title: { default: "Shri Siddh Lakshmi Jyotish", template: "%s - Shri Siddh Lakshmi Jyotish" },
  description: "Discover accurate astrology predictions, horoscope analysis, and personalized guidance at Shri Siddh Lakshmi Jyotish. Expert astrologer services for love, career, marriage & more.",
  applicationName: "Shri Siddh Lakshmi Jyotish",
  authors: [{ name: "Shri Siddh Lakshmi Jyotish", url: website_url }],
  generator: "Rust",
  keywords: ["Shri Siddh Lakshmi Jyotish", "astrology services", "kundli analysis", "horoscope predictions", "vastu consultation", "gemstone recommendations", "Indian astrologer", "online astrologer", "love marriage astrology", "career prediction", "financial astrology", "kundli matching", "numerology consultation", "birth chart analysis", "vedic astrology", "relationship advice", "health astrology", "astrology remedies", "best astrologer in India", "personalized horoscope"],
  creator: "Shri Siddh Lakshmi Jyotish",
  publisher: "Shri Siddh Lakshmi Jyotish",
  referrer: "origin-when-cross-origin",
  formatDetection: { email: true, address: true, telephone: true },
  metadataBase: new URL(website_url),
  openGraph: {
    title: "Shri Siddh Lakshmi Jyotish",
    description: "Discover accurate astrology predictions, horoscope analysis, and personalized guidance at Shri Siddh Lakshmi Jyotish. Expert astrologer services for love, career, marriage & more.",
    url: website_url,
    siteName: "Shri Siddh Lakshmi Jyotish",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Shri Siddh Lakshmi Jyotish OG Image",
      },
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Shri Siddh Lakshmi Jyotish",
    description: "Discover accurate astrology predictions, horoscope analysis, and personalized guidance at Shri Siddh Lakshmi Jyotish. Expert astrologer services for love, career, marriage & more.",
    site: "@ShriSiddhLakshmiJyotish",
    creator: "@ShriSiddhLakshmiJyotish",
    images: ["/opengraph-image.png"]
  },
  alternates: { canonical: website_url, languages: { en: website_url } },
  category: "blog",
};

// Exporting Root Layout for Website //
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // Returning TSX //
  return (
    <html lang="en">
      <body className={`w-full bg-gray-100 text-gray-950 text-sm overflow-x-hidden ${font.className}`}>{children}<Footer /></body>
    </html>
  );
}