"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductItem } from "@/data/products";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { Sparkles, ArrowRight, Tag } from "lucide-react";

interface ProductCardProps {
  product: ProductItem;
}

export function ProductCard({ product }: ProductCardProps) {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="group relative flex flex-col bg-brand-charcoal border border-brand-border/80 rounded-xl overflow-hidden glass-panel-hover">
      {/* Product Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-black">
        <Image
          src={product.heroImage}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent opacity-60" />

        {product.highlightBadge && (
          <span className="absolute top-3 right-3 text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded bg-black/80 border border-brand-gold/30 text-brand-gold-light backdrop-blur-md">
            {product.highlightBadge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-brand-gold font-sans font-medium">
            <Tag className="w-3 h-3" />
            <span>{product.category}</span>
          </div>

          <h3 className="text-xl font-serif text-brand-ivory font-normal group-hover:text-brand-gold transition-colors">
            {product.name}
          </h3>

          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed line-clamp-3">
            {product.shortDescription}
          </p>
        </div>

        {/* Feature tags */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {product.applications.slice(0, 3).map((app, idx) => (
            <span
              key={idx}
              className="text-[10px] px-2 py-0.5 rounded bg-brand-black/60 border border-brand-border text-brand-muted"
            >
              {app}
            </span>
          ))}
        </div>

        {/* Action Row */}
        <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between gap-3">
          <Link
            href={`/products/${product.slug}`}
            className="text-xs uppercase tracking-wider font-medium text-brand-ivory/90 hover:text-brand-gold transition-colors inline-flex items-center gap-1"
          >
            <span>View Collection</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <button
            onClick={() => openQuoteModal(product.name)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-brand-black border border-brand-gold/40 text-brand-gold text-[11px] uppercase tracking-wider font-semibold hover:bg-brand-gold hover:text-brand-black transition-all cursor-pointer shadow-gold-glow"
          >
            <Sparkles className="w-3 h-3" />
            <span>Request Pricing</span>
          </button>
        </div>
      </div>
    </div>
  );
}
