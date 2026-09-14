import React from "react";
import { siteConfig } from "@/config/siteConfig";

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "WholesaleStore"],
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    image: `${siteConfig.url}/images/products/natural-river-pebbles-hero.jpg`,
    description: siteConfig.description,
    priceRange: "$$",
    currenciesAccepted: "INR, USD, EUR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer, Wire Transfer",
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "State", name: "Gujarat" },
      { "@type": "City", name: "Rajkot" },
      { "@type": "AdministrativeArea", name: "Worldwide Export" },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: "22.3039",
      longitude: "70.8022",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      contactType: "customer service and sales",
      availableLanguage: ["English", "Hindi", "Gujarati"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.addressLine1,
      addressLocality: "Rajkot",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:30",
      },
    ],
    sameAs: Object.values(siteConfig.socials).filter(Boolean),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: `${siteConfig.url}${siteConfig.logo}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FaqJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProductJsonLd({
  name,
  description,
  image,
  category,
  sku,
}: {
  name: string;
  description: string;
  image: string;
  category: string;
  sku?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: `${siteConfig.url}${image}`,
    category,
    sku: sku || name.toLowerCase().replace(/\s+/g, "-"),
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      price: "0",
      description: "Custom commercial quotation available upon project specifications.",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbsJsonLd({
  items,
}: {
  items: { name: string; item: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: crumb.name,
      item: crumb.item.startsWith("http") ? crumb.item : `${siteConfig.url}${crumb.item}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
