import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Cursor } from "@/components/peakflow/ui/Cursor";
import { Navigation } from "@/components/peakflow/sections/Navigation";
import { ScrollProgress } from "@/components/peakflow/ui/ScrollProgress";
import { Grain } from "@/components/peakflow/ui/Grain";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arclyn Studio | Premier WordPress Design in Nepal",
  description: "Boutique web design studio specializing in high-performance WordPress themes for adventure tourism, hospitality, and global visionary brands. Based in Nepal.",
  keywords: ["WordPress Nepal", "Web Design Nepal", "Tourism Web Design", "Hotel Website Nepal", "Arclyn Studio", "Pokhara Web Design"],
  openGraph: {
    title: "Arclyn Studio | Premier WordPress Design in Nepal",
    description: "Boutique web design studio specializing in high-performance WordPress themes for adventure tourism and hospitality.",
    url: "https://arclyn.studio",
    siteName: "Arclyn Studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arclyn Studio | Premier WordPress Design in Nepal",
    description: "Boutique web design studio specializing in high-performance WordPress themes.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Arclyn Studio",
  "image": "https://arclyn.studio/logo.png",
  "@id": "https://arclyn.studio",
  "url": "https://arclyn.studio",
  "telephone": "+977-9800000000",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Main Street",
    "addressLocality": "Pokhara",
    "postalCode": "33700",
    "addressCountry": "NP"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 28.2335,
    "longitude": 83.9844
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://instagram.com/arclyn.studio",
    "https://linkedin.com/company/arclyn-studio"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ScrollProgress />
        <Grain />
        <Cursor />
        <Navigation />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
