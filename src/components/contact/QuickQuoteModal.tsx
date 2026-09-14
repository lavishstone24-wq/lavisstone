"use client";

import React, { useState, useEffect } from "react";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { siteConfig } from "@/config/siteConfig";
import { X, CheckCircle, ShieldCheck, Send, ArrowRight } from "lucide-react";
import Image from "next/image";

export function QuickQuoteModal() {
  const { isOpen, productPrefill, closeQuoteModal } = useQuoteModal();

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    country: "",
    productInterest: "",
    requiredQuantity: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (productPrefill) {
      setFormData((prev) => ({ ...prev, productInterest: productPrefill }));
    }
  }, [productPrefill]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeQuoteModal();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeQuoteModal]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg("Please provide your name, email address, and project requirements.");
      return;
    }
    setErrorMsg("");
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          source: `Quick Quote Modal${formData.productInterest ? ` - ${formData.productInterest}` : ""}`,
        }),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.error || "Failed to submit quote request. Please try again.");
      }

      setIsSubmitted(true);
    } catch (err: any) {
      setErrorMsg(
        err.message ||
          "An error occurred while submitting your quote request. Please try again or reach out on WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      country: "",
      productInterest: "",
      requiredQuantity: "",
      message: "",
    });
    closeQuoteModal();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
    >
      <div
        className="relative w-full max-w-2xl bg-brand-charcoal border border-brand-gold/30 rounded-lg shadow-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto text-brand-ivory"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeQuoteModal}
          className="absolute top-4 right-4 p-2 text-brand-muted hover:text-brand-gold transition-colors"
          aria-label="Close quote modal"
        >
          <X className="w-6 h-6" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-10 space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-brand-gold/10 border border-brand-gold/40 flex items-center justify-center text-brand-gold">
              <CheckCircle className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-serif text-gold-gradient font-light">
                Quotation Request Received
              </h3>
              <p className="text-brand-muted text-sm md:text-base max-w-md mx-auto">
                Thank you, <span className="text-brand-ivory font-medium">{formData.fullName}</span>. Our stone specialists will review your project requirements and respond with specifications and pricing.
              </p>
            </div>

            <div className="p-4 bg-brand-black/60 rounded border border-brand-border text-xs text-brand-muted max-w-md mx-auto">
              Need immediate assistance? You can also connect directly with our export desk on WhatsApp.
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                  `Hello Lavish Stone, I submitted an enquiry for ${formData.productInterest || "decorative stones"}. My name is ${formData.fullName}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-black font-semibold text-sm rounded hover:bg-[#20bd5a] transition-colors"
              >
                Chat on WhatsApp <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={handleReset}
                className="px-6 py-3 bg-brand-black border border-brand-border text-brand-ivory text-sm rounded hover:border-brand-gold transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 border-b border-brand-border pb-4 mb-6">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src={siteConfig.logo}
                  alt={siteConfig.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h2 id="quote-modal-title" className="text-xl md:text-2xl font-serif text-brand-ivory font-normal">
                  Request B2B Quotation
                </h2>
                <p className="text-xs text-brand-muted">
                  Custom project specifications, sample requests, and bulk container supply.
                </p>
              </div>
            </div>

            {errorMsg && (
              <div className="p-3 mb-4 rounded bg-red-950/50 border border-red-800/60 text-red-200 text-xs">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-brand-muted mb-1">
                    Full Name <span className="text-brand-gold">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. David Vance"
                    className="w-full bg-brand-black/70 border border-brand-border focus:border-brand-gold px-3.5 py-2.5 text-sm rounded text-brand-ivory outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-brand-muted mb-1">
                    Company / Architectural Firm
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Vance Landscape Architecture"
                    className="w-full bg-brand-black/70 border border-brand-border focus:border-brand-gold px-3.5 py-2.5 text-sm rounded text-brand-ivory outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-brand-muted mb-1">
                    Business Email <span className="text-brand-gold">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="david@company.com"
                    className="w-full bg-brand-black/70 border border-brand-border focus:border-brand-gold px-3.5 py-2.5 text-sm rounded text-brand-ivory outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-brand-muted mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-brand-black/70 border border-brand-border focus:border-brand-gold px-3.5 py-2.5 text-sm rounded text-brand-ivory outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-brand-muted mb-1">
                    Country / Destination
                  </label>
                  <input
                    type="text"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder="e.g. United States, UAE, UK"
                    className="w-full bg-brand-black/70 border border-brand-border focus:border-brand-gold px-3.5 py-2.5 text-sm rounded text-brand-ivory outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-brand-muted mb-1">
                    Product Interest
                  </label>
                  <select
                    value={formData.productInterest}
                    onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                    className="w-full bg-brand-black/70 border border-brand-border focus:border-brand-gold px-3.5 py-2.5 text-sm rounded text-brand-ivory outline-none transition-colors"
                  >
                    <option value="">Select a Stone Category</option>
                    <option value="Decorative Pebbles">Decorative Pebbles</option>
                    <option value="Colored Decorative Pebbles">Colored Decorative Pebbles</option>
                    <option value="Natural Pebbles">Natural Pebbles</option>
                    <option value="River Pebbles">River Pebbles</option>
                    <option value="Landscape Stones">Landscape Stones</option>
                    <option value="Garden Stones">Garden Stones</option>
                    <option value="Glow Stones">Glow Stones</option>
                    <option value="Mixed Pebbles">Mixed Pebbles</option>
                    <option value="Custom Project Inquiry">Custom Project Blend / Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-brand-muted mb-1">
                  Required Volume / Project Scope
                </label>
                <input
                  type="text"
                  value={formData.requiredQuantity}
                  onChange={(e) => setFormData({ ...formData, requiredQuantity: e.target.value })}
                  placeholder="e.g. 5 Metric Tons, 2 Full Containers, 500 Bags, or Sample Kit"
                  className="w-full bg-brand-black/70 border border-brand-border focus:border-brand-gold px-3.5 py-2.5 text-sm rounded text-brand-ivory outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-brand-muted mb-1">
                  Project Details & Specifications <span className="text-brand-gold">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please specify size preferences, finish, intended application, and project timeline..."
                  className="w-full bg-brand-black/70 border border-brand-border focus:border-brand-gold px-3.5 py-2.5 text-sm rounded text-brand-ivory outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-brand-border">
                <div className="flex items-center gap-1.5 text-xs text-brand-muted">
                  <ShieldCheck className="w-4 h-4 text-brand-gold" />
                  <span>Direct supplier pricing. Commercial confidentiality assured.</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 bg-brand-gold text-brand-black font-semibold text-sm rounded hover:bg-brand-gold-light transition-all shadow-gold-glow disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Submitting Enquiry...</span>
                  ) : (
                    <>
                      <span>Send Enquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
