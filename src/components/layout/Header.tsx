"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/siteConfig";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const { openQuoteModal } = useQuoteModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);

  const isHomepage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdown(false);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Products",
      href: "/products",
      hasDropdown: true,
      subLinks: [
        { label: "All Stone Collections", href: "/products" },
        { label: "Decorative Pebbles", href: "/products/decorative-pebbles" },
        { label: "Colored Pebbles", href: "/products/colored-pebbles" },
        { label: "Natural Pebbles", href: "/products/natural-pebbles" },
        { label: "River Pebbles", href: "/products/river-pebbles" },
        { label: "Landscape Stones", href: "/products/landscape-stones" },
        { label: "Garden Stones", href: "/products/garden-stones" },
        { label: "Glow Stones", href: "/products/glow-stones" },
        { label: "Mixed Pebbles", href: "/products/mixed-pebbles" },
      ],
    },
    { label: "Applications", href: "/applications" },
    { label: "Gallery", href: "/gallery" },
    { label: "Export", href: "/export" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const headerBgClass = isHomepage
    ? isScrolled
      ? "bg-brand-black/95 backdrop-blur-md border-b border-brand-border/80 shadow-2xl py-3.5"
      : "bg-gradient-to-b from-black/80 via-black/40 to-transparent border-b border-transparent py-5"
    : "bg-brand-black/95 backdrop-blur-md border-b border-brand-border/80 shadow-2xl py-3.5";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${headerBgClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official Brand Logo */}
          <Link
            href="/"
            className="group flex items-center relative focus:outline-none py-0.5"
            aria-label="Lavish Stone Home"
          >
            <div className="relative h-14 sm:h-16 w-auto aspect-[1334/1179] transition-transform duration-300 group-hover:scale-105">
              <Image
                src={siteConfig.logo}
                alt="Lavish Stone"
                fill
                priority
                sizes="(max-width: 640px) 75px, 90px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.hasDropdown && pathname.startsWith(link.href));

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setProductsDropdown(true)}
                    onMouseLeave={() => setProductsDropdown(false)}
                  >
                    <Link
                      href={link.href}
                      className={`inline-flex items-center gap-1 px-3 py-2 text-xs xl:text-sm uppercase tracking-wider font-medium transition-colors duration-200 ${
                        isActive
                          ? "text-brand-gold"
                          : "text-brand-ivory/80 hover:text-brand-gold"
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                    </Link>

                    {/* Dropdown Menu */}
                    {productsDropdown && (
                      <div className="absolute top-full left-0 w-64 pt-2 animate-fadeIn">
                        <div className="bg-brand-charcoal/95 backdrop-blur-xl border border-brand-border rounded-lg shadow-2xl py-2 overflow-hidden">
                          {link.subLinks?.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className={`block px-4 py-2 text-xs transition-colors ${
                                pathname === sub.href
                                  ? "text-brand-gold bg-brand-black/50 font-semibold"
                                  : "text-brand-ivory/80 hover:text-brand-gold hover:bg-brand-black/30"
                              }`}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-2 text-xs xl:text-sm uppercase tracking-wider font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-brand-gold font-semibold"
                      : "text-brand-ivory/80 hover:text-brand-gold"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => openQuoteModal()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-xs uppercase tracking-widest font-semibold border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all duration-300 shadow-gold-glow cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Request a Quote</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => openQuoteModal()}
              className="px-3 py-1.5 rounded text-[11px] uppercase tracking-wider font-semibold border border-brand-gold/80 text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all"
            >
              Quote
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-brand-ivory hover:text-brand-gold transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-brand-ivory" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] z-30 bg-brand-black/98 backdrop-blur-2xl border-t border-brand-border overflow-y-auto px-6 py-8">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <div key={link.label} className="border-b border-brand-border/40 pb-3">
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-serif tracking-wide block ${
                    pathname === link.href ? "text-brand-gold font-medium" : "text-brand-ivory/90"
                  }`}
                >
                  {link.label}
                </Link>

                {link.hasDropdown && (
                  <div className="grid grid-cols-2 gap-2 mt-2 pl-3">
                    {link.subLinks?.slice(1).map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`text-xs py-1 transition-colors ${
                          pathname === sub.href ? "text-brand-gold" : "text-brand-muted hover:text-brand-ivory"
                        }`}
                      >
                        • {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-4 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openQuoteModal();
                }}
                className="w-full py-3.5 bg-brand-gold text-brand-black text-center font-semibold uppercase tracking-widest text-xs rounded shadow-gold-glow"
              >
                Request a Quote
              </button>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                  siteConfig.contact.whatsappDefaultMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-center font-medium text-xs rounded flex items-center justify-center gap-2"
              >
                Direct WhatsApp Inquiries
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
