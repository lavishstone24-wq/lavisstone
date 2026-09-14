import React from "react";
import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Introduction } from "@/components/home/Introduction";
import { FeaturedCollection } from "@/components/home/FeaturedCollection";
import { VisualShowcase } from "@/components/home/VisualShowcase";
import { ApplicationsPreview } from "@/components/home/ApplicationsPreview";
import { WhyLavishStone } from "@/components/home/WhyLavishStone";
import { ExportTeaser } from "@/components/home/ExportTeaser";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { FAQSection } from "@/components/home/FAQSection";
import { InquiryBanner } from "@/components/home/InquiryBanner";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Lavish Stone | Premium Decorative Pebbles & Landscape Stones",
  description:
    "Explore premium decorative pebbles, natural stones, colored pebbles, landscape stones and specialty stone products for gardens, landscaping, architecture and outdoor spaces.",
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <>
      {/* 2. Full-Screen Cinematic Hero */}
      <Hero />

      {/* 3. Introduction ("Stone, Selected for Distinction.") */}
      <Introduction />

      {/* 4. Featured Stone Collections (8 Product Categories) */}
      <FeaturedCollection />

      {/* 5. Visual Stone Showcase */}
      <VisualShowcase />

      {/* 6. Applications Section */}
      <ApplicationsPreview />

      {/* 7. Why Lavish Stone */}
      <WhyLavishStone />

      {/* 8. Export / Bulk Supply */}
      <ExportTeaser />

      {/* 9. Curated Gallery Teaser */}
      <section className="py-24 sm:py-32 bg-brand-charcoal border-t border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-gold font-sans block">
                Visual Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-brand-ivory leading-tight">
                Curated Stone <span className="italic text-gold-gradient font-normal">Gallery</span>
              </h2>
              <p className="text-sm sm:text-base text-brand-muted font-light leading-relaxed">
                A visual showcase of mineral textures, pebble gradations, and real architectural installations.
              </p>
            </div>

            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-brand-gold hover:text-brand-gold-light transition-colors group"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <GalleryGrid limit={6} showFilters={false} />
        </div>
      </section>

      {/* 10. Inquiry CTA Banner & FAQ Section */}
      <InquiryBanner />
      <FAQSection />
    </>
  );
}
