"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { productsData } from "@/data/products";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { ArrowRight, Sparkles, Layers } from "lucide-react";

export function FeaturedCollection() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="py-24 sm:py-32 bg-brand-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-gold font-sans block">
              Architectural Materials
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-brand-ivory leading-tight">
              Our Stone <span className="italic text-gold-gradient font-normal">Collection</span>
            </h2>
            <p className="text-sm sm:text-base text-brand-muted font-light leading-relaxed">
              Explore textures, colours, shapes and finishes designed to transform ordinary spaces into environments of timeless architectural permanence.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-brand-gold hover:text-brand-gold-light transition-colors group"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 8 Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {productsData.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col bg-brand-charcoal border border-brand-border/80 rounded-lg overflow-hidden glass-panel-hover"
            >
              {/* Image Container with subtle zoom */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-black">
                <Image
                  src={product.heroImage}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent opacity-60" />

                {/* Badge if available */}
                {product.highlightBadge && (
                  <span className="absolute top-3 right-3 text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded bg-black/75 border border-brand-gold/30 text-brand-gold-light backdrop-blur-md">
                    {product.highlightBadge}
                  </span>
                )}
              </div>

              {/* Card Content */}
              <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-brand-muted block font-sans">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-serif text-brand-ivory font-normal group-hover:text-brand-gold transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-brand-muted line-clamp-2 leading-relaxed">
                    {product.shortDescription}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 border-t border-brand-border/60 flex items-center justify-between gap-2">
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-xs uppercase tracking-wider font-medium text-brand-ivory/80 hover:text-brand-gold transition-colors"
                  >
                    View Collection
                  </Link>

                  <button
                    onClick={() => openQuoteModal(product.name)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-brand-black/60 border border-brand-gold/40 text-brand-gold text-[11px] uppercase tracking-wider font-semibold hover:bg-brand-gold hover:text-brand-black transition-all cursor-pointer"
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>Request Pricing</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
