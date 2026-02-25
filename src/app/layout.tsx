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
  title: "Ilham — Islamic Wisdom & Quran Verses App",
  description:
    "Discover 103 curated Islamic wisdom quotes paired with Quran verses. Free app for daily spiritual inspiration.",
  keywords: [
    "islamic quotes app",
    "quran verses app",
    "islamic wisdom",
    "muslim motivation",
    "ilham app",
    "daily islamic quotes",
    "quran quotes",
    "islamic inspiration",
  ],
  authors: [{ name: "Ilham" }],
  metadataBase: new URL("https://getilham.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ilham — Islamic Wisdom & Quran Verses App",
    description:
      "Discover 103 curated Islamic wisdom quotes paired with Quran verses. Free app for daily spiritual inspiration.",
    url: "https://getilham.com",
    siteName: "Ilham",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ilham — Islamic Wisdom & Quran Verses App",
    description:
      "Discover 103 curated Islamic wisdom quotes paired with Quran verses. Free app for daily spiritual inspiration.",
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
        "Discover 103 curated Islamic wisdom quotes paired with Quran verses.",
    },
    {
      "@type": "MobileApplication",
      name: "Ilham",
      operatingSystem: "Android",
      applicationCategory: "LifestyleApplication",
      description:
        "Daily Islamic Wisdom & Quran Verses. 103 curated quotes paired with relevant Quran verses across 7 categories.",
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
