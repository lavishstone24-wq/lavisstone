import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import { Mail, Phone, MapPin, Clock, ArrowUpRight, Shield, MessageCircle } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-brand-black border-t border-brand-border/80 text-brand-ivory/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-brand-border/60">
          {/* Col 1: Brand & Logo */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-block" aria-label="Lavish Stone Home">
              <div className="relative h-20 sm:h-24 w-auto aspect-[1334/1179] transition-transform duration-300 hover:scale-105">
                <Image
                  src={siteConfig.logo}
                  alt={siteConfig.name}
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed max-w-md">
              Lavish Stone brings together a curated range of decorative pebbles, landscape stones and specialty mineral products designed to add texture, character and timeless beauty to residential, commercial and landscape environments.
            </p>

            <div className="pt-2 flex items-center gap-3">
              {siteConfig.socials.linkedin && (
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded text-xs bg-brand-charcoal border border-brand-border hover:border-brand-gold text-brand-muted hover:text-brand-gold transition-colors inline-flex items-center gap-1"
                >
                  LinkedIn <ArrowUpRight className="w-3 h-3" />
                </a>
              )}
              {siteConfig.socials.instagram && (
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded text-xs bg-brand-charcoal border border-brand-border hover:border-brand-gold text-brand-muted hover:text-brand-gold transition-colors inline-flex items-center gap-1"
                >
                  Instagram <ArrowUpRight className="w-3 h-3" />
                </a>
              )}
              {siteConfig.socials.facebook && (
                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded text-xs bg-brand-charcoal border border-brand-border hover:border-brand-gold text-brand-muted hover:text-brand-gold transition-colors inline-flex items-center gap-1"
                >
                  Facebook <ArrowUpRight className="w-3 h-3" />
                </a>
              )}
              {siteConfig.socials.youtube && (
                <a
                  href={siteConfig.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded text-xs bg-brand-charcoal border border-brand-border hover:border-brand-gold text-brand-muted hover:text-brand-gold transition-colors inline-flex items-center gap-1"
                >
                  YouTube <ArrowUpRight className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-gold font-sans">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/" className="hover:text-brand-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-gold transition-colors">
                  About Lavish Stone
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-brand-gold transition-colors">
                  Stone Collections
                </Link>
              </li>
              <li>
                <Link href="/applications" className="hover:text-brand-gold transition-colors">
                  Applications & Spaces
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-brand-gold transition-colors">
                  Visual Gallery
                </Link>
              </li>
              <li>
                <Link href="/export" className="hover:text-brand-gold transition-colors">
                  Export & Bulk Supply
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-brand-gold transition-colors">
                  Architectural Guides
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-gold transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Collections */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-gold font-sans">
              Product Lines
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/products/decorative-pebbles" className="hover:text-brand-gold transition-colors">
                  Decorative Pebbles
                </Link>
              </li>
              <li>
                <Link href="/products/colored-pebbles" className="hover:text-brand-gold transition-colors">
                  Colored Decorative Pebbles
                </Link>
              </li>
              <li>
                <Link href="/products/natural-pebbles" className="hover:text-brand-gold transition-colors">
                  Natural Pebbles
                </Link>
              </li>
              <li>
                <Link href="/products/river-pebbles" className="hover:text-brand-gold transition-colors">
                  River Pebbles
                </Link>
              </li>
              <li>
                <Link href="/products/landscape-stones" className="hover:text-brand-gold transition-colors">
                  Landscape Stones
                </Link>
              </li>
              <li>
                <Link href="/products/garden-stones" className="hover:text-brand-gold transition-colors">
                  Garden Stones
                </Link>
              </li>
              <li>
                <Link href="/products/glow-stones" className="hover:text-brand-gold transition-colors">
                  Glow Stones
                </Link>
              </li>
              <li>
                <Link href="/products/mixed-pebbles" className="hover:text-brand-gold transition-colors">
                  Mixed Pebbles
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: B2B Desk & Contact */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-gold font-sans">
              B2B Desk & Orders
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-brand-muted">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                <div>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-brand-ivory hover:text-brand-gold transition-colors">
                    {siteConfig.contact.email}
                  </a>
                  <p className="text-[11px] text-brand-muted">Direct Quotation Inquiries</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                    className="text-brand-ivory hover:text-brand-gold transition-colors font-medium text-xs block"
                  >
                    {siteConfig.contact.phone}
                  </a>
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                      siteConfig.contact.whatsappDefaultMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] hover:underline transition-colors font-medium inline-flex items-center gap-1 text-xs mt-0.5"
                  >
                    <span>WhatsApp Desk</span>
                    <ArrowUpRight className="w-3 h-3 text-[#25D366]" />
                  </a>
                  <p className="text-[11px] text-brand-muted">Instant Quotations & Assistance</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                <div className="text-xs">
                  <p className="text-brand-ivory">{siteConfig.contact.addressLine1}</p>
                  {siteConfig.contact.addressLine2 ? (
                    <p className="text-[11px] text-brand-muted">{siteConfig.contact.addressLine2}</p>
                  ) : null}
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                <div className="text-xs">
                  <p className="text-brand-ivory">{siteConfig.contact.businessHours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-muted">
          <p>© {currentYear} {siteConfig.name}. All Rights Reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-brand-gold transition-colors">
              Privacy Policy
            </Link>
            <span className="text-brand-border">•</span>
            <Link href="/terms-and-conditions" className="hover:text-brand-gold transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-brand-border">•</span>
            <Link href="/sitemap.xml" className="hover:text-brand-gold transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
