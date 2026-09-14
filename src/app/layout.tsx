import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/config/siteConfig";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { QuickQuoteModal } from "@/components/contact/QuickQuoteModal";
import { QuoteModalProvider } from "@/context/QuoteModalContext";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";


export const viewport: Viewport = {
  themeColor: "#0B0B0B",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Lavish Stone | Premium Decorative Pebbles & Landscape Stones",
    template: "%s | Lavish Stone",
  },
  description: siteConfig.description,
  keywords: siteConfig.metaKeywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "./",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: ["en_US"],
    url: siteConfig.url,
    title: "Lavish Stone | Premium Decorative Pebbles & Landscape Stones",
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/images/products/natural-river-pebbles-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Lavish Stone - Premium Decorative Stones and Pebbles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lavish Stone | Premium Decorative Pebbles & Landscape Stones",
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/products/natural-river-pebbles-hero.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
      </head>
      <body className="bg-brand-black text-brand-ivory font-sans antialiased min-h-screen flex flex-col selection:bg-brand-gold selection:text-brand-black">
        <QuoteModalProvider>
          <Header />
          <main className="flex-grow pt-0">{children}</main>
          <Footer />
          <QuickQuoteModal />
          <FloatingWhatsApp />
        </QuoteModalProvider>
      </body>
    </html>
  );
}
