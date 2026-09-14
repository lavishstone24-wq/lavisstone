"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { Send, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

export function ContactForm() {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg("Please complete all required fields (Full Name, Business Email, and Message).");
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
          source: "Contact Page Form",
        }),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.error || "Failed to submit enquiry. Please try again.");
      }

      setIsSubmitted(true);
    } catch (err: any) {
      setErrorMsg(
        err.message ||
          "An error occurred while submitting your enquiry. Please reach out directly on WhatsApp or try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="p-8 sm:p-12 rounded-xl bg-brand-charcoal border border-brand-gold/40 text-center space-y-6 shadow-2xl">
        <div className="w-16 h-16 mx-auto rounded-full bg-brand-gold/15 border border-brand-gold/40 flex items-center justify-center text-brand-gold">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2 max-w-md mx-auto">
          <h3 className="text-2xl sm:text-3xl font-serif text-gold-gradient font-light">
            Enquiry Successfully Transmitted
          </h3>
          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
            Thank you, <span className="text-brand-ivory font-semibold">{formData.fullName}</span>. Our technical stone desk has received your project parameters and will respond within 24 business hours.
          </p>
        </div>

        <div className="p-4 bg-brand-black/60 rounded border border-brand-border text-xs text-brand-muted max-w-md mx-auto">
          Urgent project requirements? You can also connect directly with our export desk on WhatsApp.
        </div>

        <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
          <a
            href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
              `Hello Lavish Stone, I submitted a project enquiry on your website. My name is ${formData.fullName} (${formData.companyName || "Architectural Specifier"}).`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-black font-semibold text-xs uppercase tracking-wider rounded hover:bg-[#20bd5a] transition-colors"
          >
            Open WhatsApp Chat <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={() => {
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
            }}
            className="px-6 py-3 bg-brand-black border border-brand-border text-brand-ivory text-xs uppercase tracking-wider rounded hover:border-brand-gold transition-colors"
          >
            Submit Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 sm:p-10 rounded-xl bg-brand-charcoal border border-brand-border shadow-2xl space-y-5"
    >
      <div className="border-b border-brand-border/60 pb-4 mb-2">
        <h3 className="text-xl font-serif text-brand-ivory font-normal">
          Project Specification & Quotation Request
        </h3>
        <p className="text-xs text-brand-muted mt-1">
          Complete the details below for a comprehensive B2B quotation and material schedule.
        </p>
      </div>

      {errorMsg && (
        <div className="p-3.5 rounded bg-red-950/60 border border-red-800/80 text-red-200 text-xs">
          {errorMsg}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-brand-muted mb-1.5 font-sans">
            Full Name <span className="text-brand-gold">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g. Richard Sterling"
            className="w-full bg-brand-black/80 border border-brand-border focus:border-brand-gold px-4 py-3 text-sm rounded text-brand-ivory outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-brand-muted mb-1.5 font-sans">
            Company Name / Design Practice
          </label>
          <input
            type="text"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            placeholder="e.g. Sterling Landscape Architecture"
            className="w-full bg-brand-black/80 border border-brand-border focus:border-brand-gold px-4 py-3 text-sm rounded text-brand-ivory outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-brand-muted mb-1.5 font-sans">
            Business Email <span className="text-brand-gold">*</span>
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="richard@sterling.com"
            className="w-full bg-brand-black/80 border border-brand-border focus:border-brand-gold px-4 py-3 text-sm rounded text-brand-ivory outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-brand-muted mb-1.5 font-sans">
            Phone / WhatsApp Number
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+1 (555) 123-4567"
            className="w-full bg-brand-black/80 border border-brand-border focus:border-brand-gold px-4 py-3 text-sm rounded text-brand-ivory outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-brand-muted mb-1.5 font-sans">
            Country / Project Location
          </label>
          <input
            type="text"
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            placeholder="e.g. United States, UAE, United Kingdom"
            className="w-full bg-brand-black/80 border border-brand-border focus:border-brand-gold px-4 py-3 text-sm rounded text-brand-ivory outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-brand-muted mb-1.5 font-sans">
            Product Interest
          </label>
          <select
            value={formData.productInterest}
            onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
            className="w-full bg-brand-black/80 border border-brand-border focus:border-brand-gold px-4 py-3 text-sm rounded text-brand-ivory outline-none transition-colors"
          >
            <option value="">Select Stone Collection</option>
            <option value="Decorative Pebbles">Decorative Pebbles</option>
            <option value="Colored Decorative Pebbles">Colored Decorative Pebbles</option>
            <option value="Natural Pebbles">Natural Pebbles</option>
            <option value="River Pebbles">River Pebbles</option>
            <option value="Landscape Stones">Landscape Stones</option>
            <option value="Garden Stones">Garden Stones</option>
            <option value="Glow Stones">Glow Stones</option>
            <option value="Mixed Pebbles">Mixed Pebbles</option>
            <option value="Custom Project Inquiry">Multiple Categories / Project Blend</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-brand-muted mb-1.5 font-sans">
          Required Quantity / Volume Scope
        </label>
        <input
          type="text"
          value={formData.requiredQuantity}
          onChange={(e) => setFormData({ ...formData, requiredQuantity: e.target.value })}
          placeholder="e.g. 10 Metric Tons, 2 x 20ft Containers, 800 Bags, or Sample Box"
          className="w-full bg-brand-black/80 border border-brand-border focus:border-brand-gold px-4 py-3 text-sm rounded text-brand-ivory outline-none transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-brand-muted mb-1.5 font-sans">
          Message & Specifications <span className="text-brand-gold">*</span>
        </label>
        <textarea
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Describe your project, size gradations needed, finish preferences, delivery deadline, and target port or delivery address..."
          className="w-full bg-brand-black/80 border border-brand-border focus:border-brand-gold px-4 py-3 text-sm rounded text-brand-ivory outline-none transition-colors resize-none"
        />
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-brand-muted">
          <ShieldCheck className="w-4 h-4 text-brand-gold flex-shrink-0" />
          <span>Strict commercial privacy. Direct manufacturer & exporter quotes.</span>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-gold hover:bg-brand-gold-light text-brand-black text-xs uppercase tracking-widest font-semibold rounded shadow-gold-glow transition-all cursor-pointer disabled:opacity-50"
        >
          {isSubmitting ? (
            <span>Sending Enquiry...</span>
          ) : (
            <>
              <span>Send Enquiry</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
