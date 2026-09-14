import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy | Lavish Stone",
  description: "Privacy policy and client data handling principles of Lavish Stone.",
  alternates: {
    canonical: `${siteConfig.url}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-24 bg-brand-black min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

        <div className="py-8 border-b border-brand-border/60">
          <h1 className="text-3xl sm:text-5xl font-serif text-brand-ivory font-light">
            Privacy Policy
          </h1>
          <p className="text-xs text-brand-muted mt-2">
            Effective Date: January 2026 • Lavish Stone B2B Operations
          </p>
        </div>

        <div className="prose prose-invert max-w-none py-10 space-y-8 text-brand-muted text-sm sm:text-base leading-relaxed font-light">
          <section className="space-y-3">
            <h2 className="text-xl font-serif text-brand-ivory">1. Information We Collect</h2>
            <p>
              Lavish Stone collects information provided directly by clients, landscape architects, contractors, and distributors when submitting quotation requests, requesting sample kits, or communicating through electronic mail and WhatsApp. This includes contact name, business email, telephone numbers, company affiliation, destination country, and project specifications.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-brand-ivory">2. Purpose of Processing</h2>
            <p>
              Client data is processed exclusively to prepare commercial quotations, coordinate logistics and container dispatch, deliver material specifications, respond to sample requests, and facilitate legitimate business communications. We do not sell, rent, or monetize client data.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-brand-ivory">3. Commercial Confidentiality</h2>
            <p>
              Project specifications, architectural drawings, and custom color blend formulations shared with our export desk are treated as confidential commercial information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-brand-ivory">4. Contact & Inquiries</h2>
            <p>
              For inquiries regarding data handling or to request erasure of your contact details from our commercial registry, please reach out directly to <a href={`mailto:${siteConfig.contact.email}`} className="text-brand-gold hover:underline">{siteConfig.contact.email}</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
