"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { MessageCircle, X } from "lucide-react";

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.contact.whatsappDefaultMessage
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end pointer-events-auto">
      {/* Tooltip prompt on hover or initial hint */}
      {showTooltip && (
        <div className="mb-2 bg-brand-charcoal text-brand-ivory border border-brand-gold/30 p-3 rounded-lg shadow-2xl max-w-xs text-xs animate-fadeIn relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-brand-muted hover:text-brand-ivory"
            aria-label="Close message"
          >
            <X className="w-3 h-3" />
          </button>
          <p className="font-medium text-brand-gold mb-1">Direct Stone Inquiries</p>
          <p className="text-brand-muted">
            Connect with our sales specialists for instant availability, sample kits, and bulk quotation.
          </p>
        </div>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366] focus:ring-offset-brand-black"
        aria-label="Chat with Lavish Stone on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white text-transparent transition-transform duration-300 group-hover:rotate-12" />

        {/* Pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping -z-10" />

        {/* Floating pill badge for desktop */}
        <span className="hidden md:block absolute right-full mr-3 px-3 py-1.5 bg-brand-charcoal/95 border border-brand-gold/30 text-brand-ivory text-xs whitespace-nowrap rounded-md shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Chat with Stone Specialist
        </span>
      </a>
    </div>
  );
}
