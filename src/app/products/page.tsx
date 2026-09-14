import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { productsData } from "@/data/products";
import { siteConfig } from "@/config/siteConfig";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { ProductCard } from "@/components/products/ProductCard";

export const metadata: Metadata = {
  title: "Stone Collection | Premium Decorative Pebbles & Landscape Stones",
  description:
    "Explore the complete Lavish Stone collection: decorative pebbles, river stones, colored pebbles, landscape aggregates, and luminescent glow stones for commercial and residential projects.",
  alternates: {
    canonical: `${siteConfig.url}/products`,
  },
};

export default function ProductsPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Stone Collection", item: "/products" },
  ];

  return (
    <div className="pt-28 pb-24 bg-brand-black min-h-screen">
      <BreadcrumbsJsonLd items={breadcrumbs} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Stone Collection" }]} />

        {/* Page Header */}
        <div className="py-12 sm:py-16 max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-charcoal border border-brand-gold/30 text-[11px] uppercase tracking-widest text-brand-gold font-sans font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Stone Portfolio</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-light text-brand-ivory leading-tight">
            Our Stone <span className="italic text-gold-gradient font-normal">Collections</span>
          </h1>

          <p className="text-base sm:text-lg text-brand-muted font-light leading-relaxed pt-2">
            Explore textures, colours, shapes and finishes designed to transform ordinary spaces. All stone lines are available in bulk commercial volumes with custom gradation upon request.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* B2B Custom Spec Note */}
        <div className="mt-20 p-8 sm:p-10 rounded-xl bg-brand-charcoal border border-brand-border flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-xl font-serif text-brand-ivory">
              Need a Custom Sieve Size or Specific Blend?
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
              Available sizes and colours can be customized based on project requirements. We work directly with site engineers, landscape architects, and procurement teams.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-gold text-brand-black text-xs uppercase tracking-widest font-semibold rounded hover:bg-brand-gold-light transition-all shadow-gold-glow whitespace-nowrap"
          >
            <span>Discuss Custom Sizing</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
