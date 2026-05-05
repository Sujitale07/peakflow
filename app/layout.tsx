import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PeakFlow Web Studio | Premier WordPress Design in Nepal",
  description: "Boutique web design studio specializing in high-performance WordPress themes for adventure tourism, hospitality, and global visionary brands. Based in Nepal.",
  keywords: ["WordPress Nepal", "Web Design Nepal", "Tourism Web Design", "Hotel Website Nepal", "PeakFlow Web Studio", "Pokhara Web Design"],
  openGraph: {
    title: "PeakFlow Web Studio | Premier WordPress Design in Nepal",
    description: "Boutique web design studio specializing in high-performance WordPress themes for adventure tourism and hospitality.",
    url: "https://peakflow.studio",
    siteName: "PeakFlow Web Studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PeakFlow Web Studio | Premier WordPress Design in Nepal",
    description: "Boutique web design studio specializing in high-performance WordPress themes.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "PeakFlow Web Studio",
  "image": "https://peakflow.studio/logo.png",
  "@id": "https://peakflow.studio",
  "url": "https://peakflow.studio",
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
    "https://instagram.com/peakflow.studio",
    "https://linkedin.com/company/peakflow-studio"
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
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
