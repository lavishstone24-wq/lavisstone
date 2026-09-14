import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { applicationsData } from "@/data/applications";
import { siteConfig } from "@/config/siteConfig";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Applications & Spaces | Architectural & Landscape Stone Uses",
  description:
    "Discover how Lavish Stone products are applied in landscape design, gardens, water features, pathways, planters, resorts, commercial atriums, and architectural mosaic art.",
  alternates: {
    canonical: `${siteConfig.url}/applications`,
  },
};

export default function ApplicationsPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Applications", item: "/applications" },
  ];

  return (
    <div className="pt-28 pb-24 bg-brand-black min-h-screen">
      <BreadcrumbsJsonLd items={breadcrumbs} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Applications & Environments" }]} />

        {/* Page Header */}
        <div className="py-12 sm:py-16 max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-charcoal border border-brand-gold/30 text-[11px] uppercase tracking-widest text-brand-gold font-sans font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Architectural Environments</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-light text-brand-ivory leading-tight">
            Where Stone Meets <span className="italic text-gold-gradient font-normal">Design</span>
          </h1>

          <p className="text-base sm:text-lg text-brand-muted font-light leading-relaxed pt-2">
            Natural decorative stones provide permanence, sensory texture, and quiet architectural drama across diverse spatial typologies.
          </p>
        </div>

        {/* 9 Editorial Application Sections */}
        <div className="space-y-24">
          {applicationsData.map((app, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={app.id}
                id={app.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                {/* Image side */}
                <div
                  className={`lg:col-span-7 relative group ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-brand-charcoal border border-brand-border/80 shadow-2xl">
                    <Image
                      src={app.image}
                      alt={app.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  </div>
                </div>

                {/* Text description side */}
                <div
                  className={`lg:col-span-5 space-y-5 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-sans font-semibold block">
                      {app.subtitle}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-serif text-brand-ivory font-light leading-tight">
                      {app.title}
                    </h2>
                  </div>

                  <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
                    {app.description}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2 pt-2 border-t border-brand-border/60">
                    {app.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-ivory/85">
                        <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Recommended Stones */}
                  <div className="pt-2">
                    <span className="text-[11px] uppercase tracking-wider text-brand-muted block mb-2">
                      Recommended Materials:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {app.recommendedStones.map((stone, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2.5 py-1 rounded bg-brand-charcoal border border-brand-border text-brand-gold font-medium"
                        >
                          {stone}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-brand-gold hover:text-brand-gold-light transition-colors group"
                    >
                      <span>Consult on This Application</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-28 p-10 sm:p-14 rounded-2xl bg-gradient-to-br from-brand-charcoal to-brand-black border border-brand-gold/30 text-center space-y-6">
          <h3 className="text-2xl sm:text-4xl font-serif text-brand-ivory font-light">
            Planning a custom architectural or landscape installation?
          </h3>
          <p className="text-sm sm:text-base text-brand-muted max-w-xl mx-auto">
            Our stone project desk reviews architectural CAD files, landscape planting schemes, and material schedules to suggest ideal stone profiles and quantities.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-brand-black text-xs uppercase tracking-widest font-semibold rounded hover:bg-brand-gold-light transition-all shadow-gold-glow"
            >
              <span>Submit Project Specification</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
