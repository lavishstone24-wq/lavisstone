"use client";

import React, { useState } from "react";
import { faqsData } from "@/data/faqs";
import { FaqJsonLd } from "@/components/seo/JsonLd";
import { ChevronDown } from "lucide-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 sm:py-32 bg-brand-charcoal border-b border-brand-border/60 relative">
      <FaqJsonLd faqs={faqsData} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-gold font-sans block">
            Common Questions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-brand-ivory leading-tight">
            Frequently Asked <span className="italic text-gold-gradient font-normal">Questions</span>
          </h2>
          <p className="text-sm sm:text-base text-brand-muted font-light leading-relaxed">
            Essential information regarding product grades, sizing, bulk orders, and commercial procurement.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqsData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                className="rounded-lg bg-brand-black/70 border border-brand-border/80 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 text-brand-ivory hover:text-brand-gold transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-normal">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-brand-gold flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-brand-muted leading-relaxed border-t border-brand-border/30">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
