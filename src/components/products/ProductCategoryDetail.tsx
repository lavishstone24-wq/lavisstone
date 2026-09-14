"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductItem } from "@/data/products";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ProductJsonLd, BreadcrumbsJsonLd } from "@/components/seo/JsonLd";
import {
  Sparkles,
  CheckCircle2,
  Layers,
  Palette,
  Maximize,
  ArrowRight,
  ShieldCheck,
  Package,
} from "lucide-react";

interface ProductCategoryDetailProps {
  product: ProductItem;
  customHeading?: string;
  customCtaLabel?: string;
  isDarkTheme?: boolean;
}

export function ProductCategoryDetail({
  product,
  customHeading,
  customCtaLabel = "Request a Quote",
  isDarkTheme = false,
}: ProductCategoryDetailProps) {
  const { openQuoteModal } = useQuoteModal();
  const [activeImage, setActiveImage] = useState(product.heroImage);

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Products", item: "/products" },
    { name: product.name, item: `/products/${product.slug}` },
  ];

  return (
    <div className={`pt-28 pb-24 min-h-screen ${isDarkTheme ? "bg-black" : "bg-brand-black"}`}>
      <ProductJsonLd
        name={product.name}
        description={product.description}
        image={product.heroImage}
        category={product.category}
      />
      <BreadcrumbsJsonLd items={breadcrumbs} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Products", href: "/products" },
            { label: product.name },
          ]}
        />

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start py-8">
          {/* Visual Gallery Column */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Stage Image */}
            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-brand-charcoal border border-brand-border/80 shadow-2xl">
              <Image
                src={activeImage}
                alt={`${product.name} - Detailed View`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className={`object-cover object-center transition-all duration-500 ${
                  isDarkTheme ? "glow-pulse" : ""
                }`}
              />

              {product.highlightBadge && (
                <span className="absolute top-4 right-4 text-xs uppercase tracking-wider font-semibold px-3 py-1.5 rounded bg-black/85 border border-brand-gold/40 text-brand-gold-light backdrop-blur-md">
                  {product.highlightBadge}
                </span>
              )}
            </div>

            {/* Thumbnail Carousel / Selector */}
            <div className="grid grid-cols-4 gap-3 sm:gap-4">
              {product.galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`relative aspect-[4/3] rounded-lg overflow-hidden border transition-all duration-200 cursor-pointer ${
                    activeImage === img
                      ? "border-brand-gold ring-2 ring-brand-gold/40 scale-100"
                      : "border-brand-border opacity-70 hover:opacity-100"
                  }`}
                  aria-label={`View photo ${idx + 1}`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    fill
                    sizes="20vw"
                    className="object-cover object-center"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details & Specifications Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-gold font-sans block">
                {product.category}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-brand-ivory leading-tight">
                {customHeading || product.name}
              </h1>
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
                {product.description}
              </p>
            </div>

            {/* Sizing & Finishes Badges */}
            <div className="p-5 rounded-lg bg-brand-charcoal border border-brand-border space-y-4">
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-brand-gold mb-1.5 font-sans">
                  <Maximize className="w-3.5 h-3.5" />
                  <span>Available Gradations & Sizing</span>
                </div>
                <p className="text-xs text-brand-ivory/80 leading-relaxed">
                  {product.availableSizes}
                </p>
              </div>

              <div className="border-t border-brand-border/60 pt-3">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-brand-gold mb-2 font-sans">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Surface Finishes</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.finishes.map((finish, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-1 rounded bg-brand-black border border-brand-border text-brand-muted"
                    >
                      {finish}
                    </span>
                  ))}
                </div>
              </div>

              {/* Available Colours */}
              {product.availableColours && product.availableColours.length > 0 && (
                <div className="border-t border-brand-border/60 pt-3">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-brand-gold mb-2 font-sans">
                    <Palette className="w-3.5 h-3.5" />
                    <span>Available Colours</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {product.availableColours.map((color, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2.5 py-1 rounded-full bg-brand-black/80 border border-brand-border/80 text-brand-ivory"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                  <p className="text-[10px] text-brand-muted mt-2 italic">
                    Available colours can be customized based on project requirements.
                  </p>
                </div>
              )}
            </div>

            {/* Primary Action Button */}
            <div className="space-y-3 pt-2">
              <button
                onClick={() => openQuoteModal(product.name)}
                className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-brand-gold hover:bg-brand-gold-light text-brand-black text-xs uppercase tracking-widest font-semibold rounded shadow-gold-glow transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>{customCtaLabel}</span>
              </button>

              <p className="text-center text-[11px] text-brand-muted flex items-center justify-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
                <span>Direct B2B supply, bulk quotes, and custom packaging support.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Application Areas & Technical Attributes */}
        <div className="mt-16 pt-16 border-t border-brand-border/60 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Applications list */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif text-brand-ivory font-normal">
              Recommended Applications
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted">
              Engineered and proven for diverse architectural, interior, and landscape installations:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {product.applications.map((app, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-brand-ivory/90">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  <span>{app}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif text-brand-ivory font-normal">
              Performance & Characteristics
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted">
              Mineral characteristics selected for demanding outdoor and commercial conditions:
            </p>
            <div className="space-y-2.5 pt-2">
              {product.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-brand-muted">
                  <Package className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-xl bg-brand-charcoal border border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-lg font-serif text-brand-ivory">
              Need technical advice or project samples?
            </h4>
            <p className="text-xs text-brand-muted mt-1">
              Our stone consultation desk provides specification guidance and sample boxes.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 bg-brand-black border border-brand-border hover:border-brand-gold text-brand-ivory text-xs uppercase tracking-wider font-medium rounded transition-all whitespace-nowrap"
          >
            Contact Stone Desk
          </Link>
        </div>
      </div>
    </div>
  );
}
