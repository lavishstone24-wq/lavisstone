"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { siteConfig } from "@/config/siteConfig";
import { Sparkles, MessageSquare, ArrowRight } from "lucide-react";

export function InquiryBanner() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="py-24 sm:py-28 bg-brand-black relative overflow-hidden">
      {/* Background Subtle Stone Ambient Texture */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="/images/products/natural-pebbles-stream.jpg"
          alt="Natural stone stream texture"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-brand-black/90" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6 sm:space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-charcoal border border-brand-gold/40 text-brand-gold text-xs uppercase tracking-widest font-semibold font-sans">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Commercial & Project Inquiries</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-brand-ivory font-light leading-tight">
          Let’s Create Something <br />
          <span className="italic text-gold-gradient font-normal">Remarkable Together.</span>
        </h2>

        <p className="text-sm sm:text-base text-brand-muted max-w-xl mx-auto font-light leading-relaxed">
          Whether you are specifying for a boutique landscape, private residence, 5-star hospitality retreat, or containerized wholesale distribution.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => openQuoteModal()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-brand-gold hover:bg-brand-gold-light text-brand-black text-xs uppercase tracking-widest font-semibold rounded shadow-gold-glow-lg transition-all duration-300 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Request a Quote</span>
          </button>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-charcoal hover:bg-brand-black border border-brand-border hover:border-brand-gold text-brand-ivory text-xs uppercase tracking-widest font-semibold rounded transition-all"
          >
            <MessageSquare className="w-4 h-4 text-brand-gold" />
            <span>Contact Our Team</span>
          </Link>

          <a
            href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
              siteConfig.contact.whatsappDefaultMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] text-xs uppercase tracking-widest font-semibold rounded transition-all"
          >
            <span>WhatsApp Chat</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
