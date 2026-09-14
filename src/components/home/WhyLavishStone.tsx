import React from "react";
import {
  Gem,
  CheckCheck,
  Sliders,
  Boxes,
  Compass,
  Ship,
} from "lucide-react";

export function WhyLavishStone() {
  const pillars = [
    {
      icon: Gem,
      title: "Curated Stone Collection",
      description:
        "Every batch is hand-sorted for uniform color saturation, smooth tactile contouring, and architectural presence.",
    },
    {
      icon: CheckCheck,
      title: "Consistent Quality",
      description:
        "Strict sorting protocols prevent unwanted quarry debris, excessive powder, or inconsistent stone grading.",
    },
    {
      icon: Sliders,
      title: "Custom Product Selection",
      description:
        "Tailored grading, sieve sizes, and bespoke color blend ratios aligned precisely to your project's architectural drawings.",
    },
    {
      icon: Boxes,
      title: "Bulk Supply",
      description:
        "Scalable volume capacity packaged in weather-resistant jumbo bulk bags or heavy-duty sacks for seamless site handling.",
    },
    {
      icon: Compass,
      title: "Project-Based Solutions",
      description:
        "Direct collaboration with landscape architects, developers, and hospitality contractors from specification to delivery.",
    },
    {
      icon: Ship,
      title: "Professional Export Support",
      description:
        "Dedicated container logistics, customized export packaging, and transparent documentation for international destinations.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-brand-charcoal border-y border-brand-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-gold font-sans block">
            B2B Material Partner
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-brand-ivory leading-tight">
            Why Partner with <span className="italic text-gold-gradient font-normal">Lavish Stone</span>
          </h2>
          <p className="text-sm sm:text-base text-brand-muted font-light leading-relaxed">
            Reliable decorative stone supply engineered for commercial rigor, design precision, and dependable project timelines.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-lg bg-brand-black/80 border border-brand-border hover:border-brand-gold/40 transition-all duration-300 space-y-4 group"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-charcoal border border-brand-border flex items-center justify-center text-brand-gold group-hover:border-brand-gold group-hover:bg-brand-gold/10 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-serif text-brand-ivory font-normal group-hover:text-brand-gold transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
