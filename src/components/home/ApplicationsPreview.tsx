import React from "react";
import Image from "next/image";
import Link from "next/link";
import { applicationsData } from "@/data/applications";
import { ArrowRight } from "lucide-react";

export function ApplicationsPreview() {
  // Show 6 featured applications on the homepage preview
  const featuredApps = applicationsData.slice(0, 6);

  return (
    <section className="py-24 sm:py-32 bg-brand-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-gold font-sans block">
              Architectural Environments
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-brand-ivory leading-tight">
              Designed for <span className="italic text-gold-gradient font-normal">Exceptional Spaces</span>
            </h2>
            <p className="text-sm sm:text-base text-brand-muted font-light leading-relaxed">
              From private residential sanctuaries and botanical atriums to expansive commercial masterplans and five-star resort grounds.
            </p>
          </div>

          <Link
            href="/applications"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-brand-gold hover:text-brand-gold-light transition-colors group"
          >
            <span>View All Applications</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredApps.map((app) => (
            <Link
              key={app.id}
              href="/applications"
              className="group relative flex flex-col bg-brand-charcoal border border-brand-border rounded-lg overflow-hidden glass-panel-hover"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-black">
                <Image
                  src={app.image}
                  alt={app.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent opacity-80" />
              </div>

              <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-1.5">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-sans block">
                    {app.subtitle}
                  </span>
                  <h3 className="text-xl font-serif text-brand-ivory font-normal group-hover:text-brand-gold transition-colors">
                    {app.title}
                  </h3>
                  <p className="text-xs text-brand-muted line-clamp-2 leading-relaxed">
                    {app.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-brand-border/60 flex items-center justify-between text-xs text-brand-gold font-medium">
                  <span>Explore Application</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
