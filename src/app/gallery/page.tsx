import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Stone Gallery | Visual Portfolio of Natural & Decorative Stones",
  description:
    "Browse the Lavish Stone visual gallery. High-resolution imagery of decorative pebbles, colored stones, natural river pebbles, and real landscape architectural applications.",
  alternates: {
    canonical: `${siteConfig.url}/gallery`,
  },
};

export default function GalleryPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Stone Gallery", item: "/gallery" },
  ];

  return (
    <div className="pt-28 pb-24 bg-brand-black min-h-screen">
      <BreadcrumbsJsonLd items={breadcrumbs} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Stone Gallery" }]} />

        {/* Page Header */}
        <div className="py-12 sm:py-16 max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-charcoal border border-brand-gold/30 text-[11px] uppercase tracking-widest text-brand-gold font-sans font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>High-Resolution Material Gallery</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-light text-brand-ivory leading-tight">
            Visual <span className="italic text-gold-gradient font-normal">Gallery</span>
          </h1>

          <p className="text-base sm:text-lg text-brand-muted font-light leading-relaxed pt-2">
            Explore authentic minerals, tactile finishes, color nuances, and installed landscape projects. Click any stone image to inspect full dimensions and details.
          </p>
        </div>

        {/* Filterable Masonry Gallery */}
        <GalleryGrid showFilters={true} />
      </div>
    </div>
  );
}
