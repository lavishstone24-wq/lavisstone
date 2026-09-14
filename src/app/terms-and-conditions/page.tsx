import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms & Conditions | Lavish Stone",
  description: "Terms and conditions governing the commercial use of Lavish Stone digital services and quotations.",
  alternates: {
    canonical: `${siteConfig.url}/terms-and-conditions`,
  },
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-24 bg-brand-black min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Terms & Conditions" }]} />

        <div className="py-8 border-b border-brand-border/60">
          <h1 className="text-3xl sm:text-5xl font-serif text-brand-ivory font-light">
            Terms & Conditions
          </h1>
          <p className="text-xs text-brand-muted mt-2">
            Effective Date: January 2026 • Lavish Stone B2B Supply
          </p>
        </div>

        <div className="prose prose-invert max-w-none py-10 space-y-8 text-brand-muted text-sm sm:text-base leading-relaxed font-light">
          <section className="space-y-3">
            <h2 className="text-xl font-serif text-brand-ivory">1. Commercial Scope</h2>
            <p>
              Lavish Stone supplies natural decorative stones, pebbles, landscaping aggregates, and specialty materials under commercial contracts. Website listings, digital swatches, and catalog previews serve as representative material indications and do not constitute binding unilateral offers until formal proforma agreements are executed.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-brand-ivory">2. Natural Mineral Variations</h2>
            <p>
              Natural stones are geological products formed by nature. Slight variations in color tones, veining, mineral inclusions, and contours across quarry batches are inherent characteristics of authentic stone materials and are celebrated as marks of organic authenticity.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-brand-ivory">3. Quotations & Validity</h2>
            <p>
              All price quotations, freight estimates, and delivery schedules issued through our quotation desk are governed by specific commercial proforma invoices stipulating currency, validity periods, Incoterms, and dispatch milestones.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-brand-ivory">4. Governing Law</h2>
            <p>
              Supply contracts and export transactions are governed by the mutually designated commercial jurisdiction stipulated in finalized sales agreements.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
