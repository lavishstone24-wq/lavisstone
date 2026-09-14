"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { Sparkles, ArrowRight } from "lucide-react";

export function VisualShowcase() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="py-24 bg-brand-charcoal border-y border-brand-border/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-gold font-sans block">
            Natural Geological Texture
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-brand-ivory leading-tight">
            Curated Formations, <span className="italic text-gold-gradient font-normal">Infinite Character</span>
          </h2>
          <p className="text-sm sm:text-base text-brand-muted font-light leading-relaxed">
            Every geological formation carries a distinct mineral fingerprint. From crystalline quartz and sedimentary banded sandstone to obsidian basalt and luminescent crystals.
          </p>
        </div>

        {/* Dynamic Architectural Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Sandstone Banded Texture (Large Highlight) */}
          <div className="md:col-span-7 relative group rounded-lg overflow-hidden bg-brand-black border border-brand-border min-h-[380px] sm:min-h-[440px] flex flex-col justify-end p-6 sm:p-8">
            <Image
              src="/images/products/sandstone-striped-pebbles.jpg"
              alt="Banded rainbow sandstone pebbles showing geological strata"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="relative z-10 space-y-2 max-w-md">
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-semibold font-sans">
                Sedimentary Wonder
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-brand-ivory">
                Rainbow Sandstone Strata
              </h3>
              <p className="text-xs sm:text-sm text-brand-ivory/80 leading-relaxed">
                Naturally striated sedimentary pebbles showcasing organic geological bands in rich desert ochre and blush hues.
              </p>
              <div className="pt-2">
                <Link
                  href="/products/natural-pebbles"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-brand-gold hover:text-brand-gold-light"
                >
                  Explore Natural Pebbles <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Nocturnal Luminescent Glow Stones (Dark Special Section) */}
          <div className="md:col-span-5 relative group rounded-lg overflow-hidden bg-black border border-brand-border min-h-[380px] sm:min-h-[440px] flex flex-col justify-end p-6 sm:p-8">
            <Image
              src="/images/products/glow-stones-luminescent.jpg"
              alt="Luminescent glow stones for night pathways"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105 glow-pulse"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

            <div className="relative z-10 space-y-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#2fe8a6] font-semibold font-sans">
                Specialty Luminescence
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-white">
                Nocturnal Glow Stones
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Self-charging luminescent stones bringing ethereal evening light to pathways, pool surrounds, and garden borders.
              </p>
              <div className="pt-2 flex items-center justify-between">
                <Link
                  href="/products/glow-stones"
                  className="text-xs uppercase tracking-wider font-semibold text-[#2fe8a6] hover:underline"
                >
                  Glow Stone Details →
                </Link>
                <button
                  onClick={() => openQuoteModal("Glow Stones")}
                  className="px-3 py-1 bg-black/60 border border-[#2fe8a6]/40 text-[#2fe8a6] text-[11px] uppercase tracking-wider font-semibold rounded hover:bg-[#2fe8a6] hover:text-black transition-colors cursor-pointer"
                >
                  Inquire
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: 9-Grid Mineral Swatches */}
          <div className="md:col-span-5 relative group rounded-lg overflow-hidden bg-brand-black border border-brand-border min-h-[320px] flex flex-col justify-end p-6 sm:p-8">
            <Image
              src="/images/products/stone-swatches-grid.jpg"
              alt="Nine-panel mineral swatch grid featuring marble, onyx, and sandstone"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

            <div className="relative z-10 space-y-1.5">
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-semibold font-sans">
                Material Swatches
              </span>
              <h3 className="text-xl sm:text-2xl font-serif text-brand-ivory">
                Curated Mineral Library
              </h3>
              <p className="text-xs text-brand-muted">
                Inspect finishes ranging from high-polish basalt to matte tumbled quartzite.
              </p>
            </div>
          </div>

          {/* Card 4: Garden Stepping Stone Pathway */}
          <div className="md:col-span-7 relative group rounded-lg overflow-hidden bg-brand-black border border-brand-border min-h-[320px] flex flex-col justify-end p-6 sm:p-8">
            <Image
              src="/images/products/garden-pebble-stepping-path.jpg"
              alt="Garden stepping stone walkway with tumbled marble pebbles"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="relative z-10 space-y-1.5">
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-semibold font-sans">
                Landscape Architecture
              </span>
              <h3 className="text-xl sm:text-2xl font-serif text-brand-ivory">
                Walkway & Stepping Infill
              </h3>
              <p className="text-xs text-brand-ivory/80 max-w-md">
                Textured pebble infills combining timeless slate stepping flags with high-contrast tumbled marble.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
