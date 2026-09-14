"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { Globe2, Package, Container, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";

export function ExportTeaser() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="py-24 sm:py-32 bg-brand-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-brand-charcoal to-brand-black border border-brand-border/80 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 space-y-6">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-gold font-sans block">
                  Export & Bulk Supply
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-ivory font-light leading-tight">
                  Built for Projects. <br />
                  <span className="italic text-gold-gradient font-normal">
                    Ready for Global Supply.
                  </span>
                </h2>
              </div>

              <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
                Lavish Stone is organized to support regional and international commercial contractors, landscape developers, wholesalers, and import distributors with volume stone requirements.
              </p>

              {/* Discussion Points Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3">
                  <Container className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-xs font-semibold text-brand-ivory uppercase tracking-wider">
                      Bulk Quantities
                    </h4>
                    <p className="text-xs text-brand-muted">
                      Supplied in 1-ton jumbo bags, 25kg bags, or palletized crates.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Package className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-xs font-semibold text-brand-ivory uppercase tracking-wider">
                      Custom Packaging
                    </h4>
                    <p className="text-xs text-brand-muted">
                      Private labeling and custom packaging available upon consultation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe2 className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-xs font-semibold text-brand-ivory uppercase tracking-wider">
                      Destination Quotes
                    </h4>
                    <p className="text-xs text-brand-muted">
                      FOB, CIF, or site-delivered pricing quotes based on project logistics.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-xs font-semibold text-brand-ivory uppercase tracking-wider">
                      Quality Sieve Sizing
                    </h4>
                    <p className="text-xs text-brand-muted">
                      Washed, dust-screened, and graded to required project tolerances.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => openQuoteModal("Export & Bulk Supply")}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-gold hover:bg-brand-gold-light text-brand-black text-xs uppercase tracking-widest font-semibold rounded shadow-gold-glow transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Discuss Your Requirement</span>
                </button>

                <Link
                  href="/export"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-brand-charcoal hover:bg-brand-black border border-brand-border hover:border-brand-gold text-brand-ivory text-xs uppercase tracking-widest font-medium rounded transition-all"
                >
                  <span>Export Capabilities</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5 relative h-80 sm:h-96 lg:h-full min-h-[400px]">
              <Image
                src="/images/products/bulk-supply-pebbles-stockpile.jpg"
                alt="Bulk supply river pebbles stockpile and quarry sorting for commercial projects"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-brand-charcoal via-transparent to-transparent opacity-90 lg:opacity-70" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
