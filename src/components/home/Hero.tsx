"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { ChevronDown, Sparkles, Compass } from "lucide-react";

export function Hero() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="relative w-full h-screen min-h-[640px] flex items-center justify-center overflow-hidden bg-brand-black">
      {/* Background Image with subtle Ken Burns effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/products/natural-river-pebbles-hero.jpg"
          alt="Curated premium natural decorative pebbles close-up in landscape environment"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center ken-burns"
        />

        {/* Sophisticated Dark Luxury Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/65 to-black/75" />
        <div className="absolute inset-0 bg-radial-vignette opacity-80" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 sm:pt-20">
        {/* Subtle Eyebrow Label */}
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-normal tracking-tight text-brand-ivory leading-[1.08] mb-6 sm:mb-8">
          Natural Beauty, <br className="hidden sm:inline" />
          <span className="text-gold-gradient italic font-light">Crafted</span> for Exceptional Spaces.
        </h1>

        {/* Supporting Line */}
        <p className="text-sm sm:text-base md:text-lg text-brand-ivory/85 font-light tracking-wide max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10">
          Premium decorative pebbles and landscape stones for gardens, landscapes, interiors and architectural applications.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <Link
            href="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-brand-gold hover:bg-brand-gold-light text-brand-black text-xs sm:text-sm uppercase tracking-widest font-semibold rounded transition-all duration-300 shadow-gold-glow-lg group"
          >
            <Compass className="w-4 h-4 transition-transform group-hover:rotate-45" />
            <span>Explore Our Collection</span>
          </Link>

          <button
            type="button"
            id="hero-quote-btn"
            onClick={() => openQuoteModal()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-black/40 hover:bg-black/70 text-brand-ivory hover:text-brand-gold border border-brand-gold/60 hover:border-brand-gold text-xs sm:text-sm uppercase tracking-widest font-semibold rounded backdrop-blur-md transition-all duration-300 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-brand-gold" />
            <span>Request a Quote</span>
          </button>
        </div>
      </div>

    </section>
  );
}
