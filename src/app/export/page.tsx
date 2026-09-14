"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";
import {
  Globe2,
  Package,
  Container,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  FileCheck,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";

export default function ExportPage() {
  const { openQuoteModal } = useQuoteModal();

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Export & Bulk Supply", item: "/export" },
  ];

  return (
    <div className="pt-28 pb-24 bg-brand-black min-h-screen">
      <BreadcrumbsJsonLd items={breadcrumbs} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Export & Bulk Supply" }]} />

        {/* Hero Section */}
        <div className="py-12 sm:py-16 max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-charcoal border border-brand-gold/30 text-[11px] uppercase tracking-widest text-brand-gold font-sans font-semibold">
            <Globe2 className="w-3.5 h-3.5" />
            <span>Commercial & Global Logistics</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-light text-brand-ivory leading-tight">
            Built for Projects. <br />
            <span className="italic text-gold-gradient font-normal">
              Ready for Global Supply.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-brand-muted font-light leading-relaxed pt-2">
            Lavish Stone is structured to partner with international distributors, landscape contractors, infrastructure developers, and importers requiring reliable stone supply and dedicated commercial handling.
          </p>
        </div>

        {/* Hero Visual Banner with Bulk Stockpile Image */}
        <div className="relative aspect-[21/9] min-h-[320px] sm:min-h-[440px] w-full rounded-xl overflow-hidden border border-brand-border/80 my-8 shadow-2xl">
          <Image
            src="/images/products/bulk-supply-pebbles-stockpile.jpg"
            alt="Macro quarry stockpiles of washed river pebbles ready for containerized bulk supply"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-70" />
        </div>

        {/* Commercial Supply Capabilities Grid */}
        <div className="my-16 space-y-8">
          <div className="border-b border-brand-border/60 pb-4">
            <h2 className="text-2xl sm:text-3xl font-serif text-brand-ivory font-light">
              What We Discuss & Structure for Your Project
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted mt-1">
              Every shipment is calibrated to the logistical realities of your jobsite or distribution network:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-brand-charcoal border border-brand-border space-y-3">
              <Container className="w-6 h-6 text-brand-gold" />
              <h3 className="text-lg font-serif text-brand-ivory font-normal">
                Bulk Project Requirements
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                Whether supplying 5 metric tons for an estate courtyard or multi-container consignments for civic developments, we align inventory and delivery cadence.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-brand-charcoal border border-brand-border space-y-3">
              <Package className="w-6 h-6 text-brand-gold" />
              <h3 className="text-lg font-serif text-brand-ivory font-normal">
                Packaging Solutions
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                Options include heavy-duty 1-ton UV-stabilized jumbo bulk bags, 25kg / 50lb retail-ready bags, wooden crates, and shrink-wrapped palletization.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-brand-charcoal border border-brand-border space-y-3">
              <FileCheck className="w-6 h-6 text-brand-gold" />
              <h3 className="text-lg font-serif text-brand-ivory font-normal">
                Private Labeling
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                For retail brands and distributors, customized branding, barcoding, and custom bag printing can be coordinated for qualifying volume runs.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-brand-charcoal border border-brand-border space-y-3">
              <Globe2 className="w-6 h-6 text-brand-gold" />
              <h3 className="text-lg font-serif text-brand-ivory font-normal">
                Destination-Based Quotations
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                Transparent international commercial quotations provided on FOB, CIF, CFR, or door-to-door delivery frameworks based on your logistical preference.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-brand-charcoal border border-brand-border space-y-3">
              <ShieldCheck className="w-6 h-6 text-brand-gold" />
              <h3 className="text-lg font-serif text-brand-ivory font-normal">
                Product Specifications & Sieve Grading
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                Screened for strict dimensional boundaries, dust wash compliance, and mechanical integrity prior to container stuffing.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-brand-charcoal border border-brand-border space-y-3">
              <Sparkles className="w-6 h-6 text-brand-gold" />
              <h3 className="text-lg font-serif text-brand-ivory font-normal">
                Sample Pre-Shipment Approval
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                Courier sample boxes and high-res batch photographs are dispatched prior to bulk dispatch to assure aesthetic alignment with project blueprints.
              </p>
            </div>
          </div>
        </div>

        {/* Editable Business Placeholders Notice Box */}
        <div className="my-12 p-6 sm:p-8 rounded-xl bg-brand-charcoal/60 border border-brand-gold/30 space-y-3">
          <div className="flex items-center gap-2 text-brand-gold text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Commercial Supply & Logistics Profile (Editable Placeholders)</span>
          </div>
          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
            Detailed commercial parameters (such as dispatch loading ports, standard container payload capacities, certified material test reports, standard payment instruments like Letter of Credit or Wire, and transit timelines) are configured to client destination requirements and will be updated as company operations formally establish regional terminals.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs text-brand-ivory/80">
            <div className="p-3 bg-brand-black/60 rounded border border-brand-border">
              <span className="text-brand-gold block font-medium mb-1">Standard Packaging:</span>
              <span>1000kg Jumbo Bags / 20kg Sacks</span>
            </div>
            <div className="p-3 bg-brand-black/60 rounded border border-brand-border">
              <span className="text-brand-gold block font-medium mb-1">Dispatch Terms:</span>
              <span>FOB / CIF / Project Site Delivery</span>
            </div>
            <div className="p-3 bg-brand-black/60 rounded border border-brand-border">
              <span className="text-brand-gold block font-medium mb-1">Project Support:</span>
              <span>Direct Material Consultation Desk</span>
            </div>
          </div>
        </div>

        {/* Discuss Your Requirement Action Banner */}
        <div className="my-16 p-10 sm:p-14 rounded-2xl bg-gradient-to-r from-brand-charcoal via-brand-black to-brand-charcoal border border-brand-border text-center space-y-6">
          <h3 className="text-2xl sm:text-4xl font-serif text-brand-ivory font-light">
            Ready to quote your commercial requirement?
          </h3>
          <p className="text-sm sm:text-base text-brand-muted max-w-xl mx-auto">
            Provide your destination port or city, estimated volume in metric tons or square feet, and product category for a detailed proforma quotation.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openQuoteModal("Export & Bulk Supply Quotation")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold hover:bg-brand-gold-light text-brand-black text-xs uppercase tracking-widest font-semibold rounded shadow-gold-glow transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Discuss Your Requirement</span>
            </button>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-charcoal border border-brand-border hover:border-brand-gold text-brand-ivory text-xs uppercase tracking-widest font-medium rounded transition-all"
            >
              <span>Contact Export Desk</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
