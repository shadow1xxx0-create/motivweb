import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { APP_STORE_URL } from "@/lib/constants";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant-var",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter-var",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "I pray — Lock Your Apps Until You Pray | Salah, Athan & Qibla",
  description:
    "The Muslim prayer app that locks the apps stealing your salah — until you actually pray. Accurate prayer times, authentic adhan, qibla compass and streaks. Free on iPhone.",
  keywords: [
    "prayer app",
    "app blocker for muslims",
    "salah app",
    "athan app",
    "adhan app",
    "qibla compass",
    "prayer times app",
    "never miss a prayer",
    "muslim focus app",
    "lock apps until you pray",
    "screen time prayer app",
  ],
  authors: [{ name: "I pray" }],
  metadataBase: new URL("https://getilham.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/app-icon.png",
    apple: "/app-icon.png",
  },
  openGraph: {
    title: "I pray — Lock Your Apps Until You Pray",
    description:
      "Your phone keeps stealing your salah. I pray gives it back — it locks distracting apps the moment the adhan calls, until you pray.",
    url: "https://getilham.com",
    siteName: "I pray",
    locale: "en_US",
    type: "website",
    images: [{ url: "/app-icon.png", width: 1024, height: 1024, alt: "I pray app icon" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "I pray — Lock Your Apps Until You Pray",
    description:
      "The Muslim prayer app that locks distracting apps until you pray. Free on iPhone.",
    images: ["/app-icon.png"],
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
      name: "I pray",
      url: "https://getilham.com",
      description:
        "The Muslim prayer app that locks distracting apps until you pray.",
    },
    {
      "@type": "MobileApplication",
      name: "I pray: Salah Athan Qibla Lock",
      operatingSystem: "iOS",
      applicationCategory: "LifestyleApplication",
      description:
        "I pray locks the apps pulling you away from Allah the moment the adhan is called — until you pray. Accurate prayer times, authentic adhan, qibla compass, hijri calendar and streak tracking.",
      installUrl: APP_STORE_URL,
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
      <body className={`${cormorant.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
