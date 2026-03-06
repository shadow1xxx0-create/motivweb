import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora-var",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter-var",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ilham — Motivational Wisdom & Quran Verses App",
  description:
    "Discover beautifully curated Motivational wisdom quotes paired with Quran verses. Free app for daily spiritual inspiration.",
  keywords: [
    "motivational quotes app",
    "quran verses app",
    "motivational wisdom",
    "muslim motivation",
    "ilham app",
    "daily motivational quotes",
    "quran quotes",
    "motivational inspiration",
  ],
  authors: [{ name: "Ilham" }],
  metadataBase: new URL("https://getilham.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ilham — Daily Motivational Wisdom & Quran Verses",
    description:
      "Discover beautifully curated Motivational wisdom quotes paired with Quran verses. Free app for daily spiritual inspiration.",
    url: "https://getilham.com",
    siteName: "Ilham",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ilham — Daily Motivational Wisdom & Quran Verses",
    description:
      "Discover beautifully curated Motivational wisdom quotes paired with Quran verses. Free app for daily spiritual inspiration.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "Ilham",
      url: "https://getilham.com",
      description:
        "Discover beautifully curated Motivational wisdom quotes paired with Quran verses.",
    },
    {
      "@type": "MobileApplication",
      name: "Ilham",
      operatingSystem: "Android",
      applicationCategory: "LifestyleApplication",
      description:
        "Daily Motivational Wisdom & Quran Verses. Beautifully curated quotes paired with relevant Quran verses.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      installUrl:
        "https://play.google.com/store/apps/details?id=com.ilham.app",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${lora.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
