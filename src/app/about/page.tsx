import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";
import { Sparkles, Eye, Compass, Gem, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Lavish Stone | Premium Natural Decorative Stones",
  description:
    "Learn about Lavish Stone, a premium decorative stone brand dedicated to curated natural textures, colours and stone finishes for landscape, garden and architectural applications.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "About Us", item: "/about" },
  ];

  return (
    <div className="pt-28 pb-24 bg-brand-black min-h-screen">
      <BreadcrumbsJsonLd items={breadcrumbs} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "About Lavish Stone" }]} />

        {/* Hero Header */}
        <div className="py-12 sm:py-16 max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-charcoal border border-brand-gold/30 text-[11px] uppercase tracking-widest text-brand-gold font-sans font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Brand Profile & Philosophy</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-light text-brand-ivory leading-tight">
            About <span className="italic text-gold-gradient font-normal">Lavish Stone</span>
          </h1>

          <p className="text-lg sm:text-xl text-brand-ivory/85 font-light leading-relaxed pt-2">
            Lavish Stone is a premium decorative stone brand focused on bringing natural textures, colours and stone finishes to landscape, garden, architectural and decorative applications.
          </p>
        </div>

        {/* Visual Showcase Banner */}
        <div className="relative aspect-[21/9] min-h-[300px] sm:min-h-[420px] w-full rounded-xl overflow-hidden border border-brand-border/80 my-10 shadow-2xl flex items-center justify-center">
          <Image
            src="/images/products/natural-pebbles-stream.jpg"
            alt="Lavish Stone Natural Mineral Collection"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-black/60" />
          <div className="relative z-10 text-center space-y-3 p-6 max-w-lg">
            <div className="relative w-20 h-20 mx-auto">
              <Image
                src={siteConfig.logo}
                alt={siteConfig.name}
                fill
                className="object-contain"
              />
            </div>
            <p className="font-serif text-xl sm:text-2xl text-gold-gradient font-light uppercase tracking-[0.2em]">
              LAVISH STONE
            </p>
            <p className="text-xs text-brand-ivory/80 uppercase tracking-widest font-sans">
              Curated Decorative Minerals & Pebbles
            </p>
          </div>
        </div>

        {/* 4 Editable Editorial Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 my-20">
          {/* Section 1: Our Vision */}
          <div className="p-8 sm:p-10 rounded-xl bg-brand-charcoal border border-brand-border/80 space-y-4">
            <div className="w-12 h-12 rounded-lg bg-brand-black border border-brand-border flex items-center justify-center text-brand-gold">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-serif text-brand-ivory font-normal">
              Our Vision
            </h2>
            <p className="text-sm text-brand-muted leading-relaxed">
              To elevate stone from a secondary aggregate into a signature architectural medium. We envision residential, commercial, and hospitality spaces defined by the quiet grandeur and raw permanence that only natural mineral formations can impart.
            </p>
          </div>

          {/* Section 2: Our Approach */}
          <div className="p-8 sm:p-10 rounded-xl bg-brand-charcoal border border-brand-border/80 space-y-4">
            <div className="w-12 h-12 rounded-lg bg-brand-black border border-brand-border flex items-center justify-center text-brand-gold">
              <Compass className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-serif text-brand-ivory font-normal">
              Our Approach
            </h2>
            <p className="text-sm text-brand-muted leading-relaxed">
              We approach natural stone through a curator’s lens. Rather than dealing in unrefined rubble, we hand-inspect grain, polish grade, and sieve uniformity. Our team works hand-in-hand with architects and contractors to align batch consistency with specific design blueprints.
            </p>
          </div>

          {/* Section 3: Our Products */}
          <div className="p-8 sm:p-10 rounded-xl bg-brand-charcoal border border-brand-border/80 space-y-4">
            <div className="w-12 h-12 rounded-lg bg-brand-black border border-brand-border flex items-center justify-center text-brand-gold">
              <Gem className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-serif text-brand-ivory font-normal">
              Our Products
            </h2>
            <p className="text-sm text-brand-muted leading-relaxed">
              Our portfolio spans natural river pebbles, vibrant tumbled stones, large-format landscape boulders, and specialty luminescent glow stones. Each mineral line is washed, graded, and prepared for enduring outdoor weather resistance and interior biophilic luxury.
            </p>
          </div>

          {/* Section 4: Our Commitment */}
          <div className="p-8 sm:p-10 rounded-xl bg-brand-charcoal border border-brand-border/80 space-y-4">
            <div className="w-12 h-12 rounded-lg bg-brand-black border border-brand-border flex items-center justify-center text-brand-gold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-serif text-brand-ivory font-normal">
              Our Commitment
            </h2>
            <p className="text-sm text-brand-muted leading-relaxed">
              We are committed to honest commercial transparency, punctual logistics, and adaptable bulk packaging. Whether fulfilling container-load export consignments or bespoke estate requirements, we treat every order with exacting professional care.
            </p>
          </div>
        </div>

        {/* Talk to Our Team CTA Banner */}
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-brand-charcoal via-brand-black to-brand-charcoal border border-brand-gold/30 text-center space-y-6">
          <h3 className="text-2xl sm:text-4xl font-serif text-brand-ivory font-light">
            Ready to discuss your landscape or architectural vision?
          </h3>
          <p className="text-sm text-brand-muted max-w-xl mx-auto">
            Connect with our stone specialists to request material samples, technical specifications, and project-based supply terms.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold hover:bg-brand-gold-light text-brand-black text-xs uppercase tracking-widest font-semibold rounded shadow-gold-glow transition-all"
            >
              <span>Talk to Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-charcoal border border-brand-border hover:border-brand-gold text-brand-ivory text-xs uppercase tracking-widest font-medium rounded transition-all"
            >
              <span>Explore Products</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
