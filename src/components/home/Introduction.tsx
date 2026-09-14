import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Introduction() {
  return (
    <section className="relative py-24 sm:py-32 bg-brand-charcoal border-b border-brand-border/60 overflow-hidden">
      {/* Subtle background ambient light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Brand Emblem & Visual Plaque */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative group">
              {/* Outer decorative gold frame */}
              <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-brand-gold/30 via-transparent to-brand-gold/20 blur-sm opacity-60 group-hover:opacity-100 transition duration-700" />

              <div className="relative rounded-lg overflow-hidden bg-brand-black border border-brand-gold/30 shadow-2xl">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/products/natural-pebbles-stream.jpg"
                    alt="Curated Natural Decorative Pebbles and Stream Stones"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 left-4 flex items-center gap-2.5 px-3 py-1.5 rounded-md bg-black/75 border border-brand-gold/30 backdrop-blur-md">
                    <div className="relative w-6 h-6">
                      <Image src={siteConfig.logo} alt={siteConfig.name} fill className="object-contain" />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-brand-gold font-sans font-semibold">
                      Curated Minerals
                    </span>
                  </div>
                </div>

                <div className="p-5 bg-brand-black/95 border-t border-brand-border flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-brand-gold font-medium">
                      The Natural Standard
                    </p>
                    <p className="text-[11px] text-brand-muted mt-0.5">
                      Hand-inspected pebbles & landscape minerals
                    </p>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-brand-muted px-2.5 py-1 rounded bg-brand-charcoal border border-brand-border">
                    B2B Supply
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-gold block font-sans">
                Curated Natural Minerals
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-ivory font-light leading-tight">
                Stone, Selected for <span className="italic text-gold-gradient font-normal">Distinction.</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-brand-ivory/80 font-light leading-relaxed">
              Lavish Stone brings together a curated range of decorative pebbles, landscape stones and specialty stone products designed to add texture, character and timeless beauty to residential, commercial and landscape environments.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs sm:text-sm text-brand-muted">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                <span>Selected for uniform grain and tactile surface finish</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                <span>Naturally suited for interior and exterior environments</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                <span>Customizable gradations tailored to project requirements</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                <span>Dedicated commercial packaging and bulk logistics</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-3 text-xs sm:text-sm uppercase tracking-widest font-semibold text-brand-gold hover:text-brand-gold-light group transition-colors"
              >
                <span>Discover Lavish Stone</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
