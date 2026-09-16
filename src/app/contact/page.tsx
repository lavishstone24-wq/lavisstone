import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";
import { ContactForm } from "@/components/contact/ContactForm";
import { Mail, Phone, MessageSquare, MapPin, Clock, ArrowUpRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Quotation Inquiries | Lavish Stone",
  description:
    "Connect with Lavish Stone for decorative stone quotes, bulk container supply, and custom landscape project specifications.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Contact & Inquiries", item: "/contact" },
  ];

  return (
    <div className="pt-28 pb-24 bg-brand-black min-h-screen">
      <BreadcrumbsJsonLd items={breadcrumbs} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Contact & Inquiries" }]} />

        {/* Header */}
        <div className="py-12 sm:py-16 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-charcoal border border-brand-gold/30 text-[11px] uppercase tracking-widest text-brand-gold font-sans font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Commercial Consultation</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-light text-brand-ivory leading-tight">
            Let&apos;s Create Something <br />
            <span className="italic text-gold-gradient font-normal">Remarkable.</span>
          </h1>

          <p className="text-base sm:text-lg text-brand-muted font-light leading-relaxed pt-2">
            Submit your project parameters, volume requirements, or technical stone questions below. Our quotation desk will promptly prepare custom proforma specifications.
          </p>
        </div>

        {/* 2-Column Layout: Form + Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right: Editable Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Stone Desk */}
            <div className="p-6 sm:p-8 rounded-xl bg-brand-charcoal border border-brand-border space-y-4">
              <h2 className="text-xl font-serif text-brand-ivory">
                Direct Contact Points
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-brand-muted">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-brand-ivory font-medium block">Commercial Enquiries:</span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-brand-gold hover:underline break-all"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-brand-ivory font-medium block">Direct Phone & WhatsApp:</span>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-0.5">
                      <a
                        href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                        className="text-brand-gold hover:underline font-medium"
                      >
                        {siteConfig.contact.phone}
                      </a>
                      <span className="text-brand-muted">•</span>
                      <a
                        href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                          siteConfig.contact.whatsappDefaultMessage
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#25D366] hover:underline inline-flex items-center gap-1 font-medium"
                      >
                        <span>WhatsApp Desk</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                    <p className="text-[11px] text-brand-muted mt-1">Direct calls, instant WhatsApp quotes & material specs</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-brand-ivory font-medium block">Office & Dispatch:</span>
                    <p className="text-brand-ivory/90">{siteConfig.contact.addressLine1}</p>
                    {siteConfig.contact.addressLine2 ? (
                      <p className="text-[11px] text-brand-muted mt-0.5">{siteConfig.contact.addressLine2}</p>
                    ) : null}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-brand-ivory font-medium block">Business Hours:</span>
                    <p className="text-brand-ivory/80">{siteConfig.contact.businessHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Editable Configuration Notice */}
            <div className="p-5 rounded-xl bg-brand-charcoal/50 border border-brand-border/80 text-xs text-brand-muted space-y-1.5">
              <p className="text-brand-gold font-medium font-sans">
                Configuration & Privacy Note
              </p>
              <p>
                All company contact endpoints, phone lines, and physical office addresses are centralized in <code className="text-brand-ivory font-mono text-[11px]">siteConfig.ts</code> for straightforward operational updating.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
