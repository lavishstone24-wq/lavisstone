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
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const isHomepage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdown(false);
    setMobileProductsOpen(false);
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

  const headerBgClass = mobileMenuOpen
    ? "bg-brand-black border-b border-brand-border shadow-2xl"
    : isHomepage
    ? isScrolled
      ? "bg-brand-black/95 backdrop-blur-md border-b border-brand-border/80 shadow-2xl"
      : "bg-gradient-to-b from-black/85 via-black/45 to-transparent border-b border-transparent"
    : "bg-brand-black/95 backdrop-blur-md border-b border-brand-border/80 shadow-2xl";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 h-16 sm:h-20 flex items-center ${headerBgClass}`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full">
          {/* Official Brand Logo */}
          <Link
            href="/"
            className="group flex items-center relative focus:outline-none py-0.5 flex-shrink-0"
            aria-label="Lavish Stone Home"
          >
            <div className="relative h-11 sm:h-14 md:h-16 w-auto aspect-[1334/1179] transition-transform duration-300 group-hover:scale-105">
              <Image
                src={siteConfig.logo}
                alt="Lavish Stone"
                fill
                priority
                sizes="(max-width: 640px) 70px, 90px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 2xl:gap-2">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href || (link.hasDropdown && pathname.startsWith(link.href));

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
                      className={`inline-flex items-center gap-1 px-2 xl:px-3 py-2 text-[11px] xl:text-xs 2xl:text-sm uppercase tracking-wider font-medium transition-colors duration-200 ${
                        isActive
                          ? "text-brand-gold font-semibold"
                          : "text-brand-ivory/80 hover:text-brand-gold"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-3 h-3 transition-transform duration-200 ${
                          productsDropdown ? "rotate-180 text-brand-gold" : ""
                        }`}
                      />
                    </Link>

                    {/* Dropdown Menu */}
                    {productsDropdown && (
                      <div className="absolute top-full left-0 w-64 pt-2 animate-fadeIn z-50">
                        <div className="bg-brand-charcoal/95 backdrop-blur-xl border border-brand-border rounded-lg shadow-2xl py-2 overflow-hidden">
                          {link.subLinks?.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className={`block px-4 py-2 text-xs transition-colors ${
                                pathname === sub.href
                                  ? "text-brand-gold bg-brand-black/60 font-semibold"
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
                  className={`px-2 xl:px-3 py-2 text-[11px] xl:text-xs 2xl:text-sm uppercase tracking-wider font-medium transition-colors duration-200 ${
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
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => openQuoteModal()}
              className="inline-flex items-center gap-1.5 px-4 xl:px-5 py-2.5 rounded text-[11px] xl:text-xs uppercase tracking-widest font-semibold border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all duration-300 shadow-gold-glow cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Request a Quote</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden">
            <button
              onClick={() => openQuoteModal()}
              className="px-2.5 sm:px-3 py-1.5 rounded text-[10px] sm:text-xs uppercase tracking-wider font-semibold border border-brand-gold/90 text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all cursor-pointer"
            >
              Quote
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 text-brand-ivory hover:text-brand-gold transition-colors focus:outline-none rounded"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-brand-gold" />
              ) : (
                <Menu className="w-6 h-6 text-brand-ivory" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 sm:top-20 z-50 bg-[#090a0c]/98 backdrop-blur-2xl border-t border-brand-border/60 overflow-y-auto px-5 sm:px-6 py-6 pb-28 shadow-2xl animate-fadeIn">
          <nav className="flex flex-col space-y-1.5 max-w-md mx-auto">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href || (link.hasDropdown && pathname.startsWith(link.href));

              if (link.hasDropdown) {
                return (
                  <div key={link.label} className="border-b border-brand-border/30 pb-2">
                    <div className="flex items-center justify-between py-2">
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`text-base font-serif tracking-wide ${
                          isActive ? "text-brand-gold font-medium" : "text-brand-ivory/95"
                        }`}
                      >
                        {link.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                        className="p-2 text-brand-gold hover:text-brand-gold-light focus:outline-none"
                        aria-label="Toggle products dropdown"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            mobileProductsOpen ? "rotate-180 text-brand-gold" : "text-brand-muted"
                          }`}
                        />
                      </button>
                    </div>

                    {mobileProductsOpen && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 pl-2 py-2 mb-1 bg-brand-charcoal/50 rounded-lg border border-brand-border/40">
                        {link.subLinks?.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`text-xs py-2 px-3 rounded transition-colors ${
                              pathname === sub.href
                                ? "text-brand-gold bg-brand-black/80 font-medium"
                                : "text-brand-muted hover:text-brand-ivory"
                            }`}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <div key={link.label} className="border-b border-brand-border/30 pb-2">
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-base font-serif tracking-wide block py-2 ${
                      isActive ? "text-brand-gold font-medium" : "text-brand-ivory/95"
                    }`}
                  >
                    {link.label}
                  </Link>
                </div>
              );
            })}

            {/* Mobile Actions */}
            <div className="pt-5 space-y-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openQuoteModal();
                }}
                className="w-full py-3.5 bg-brand-gold text-brand-black text-center font-semibold uppercase tracking-widest text-xs rounded shadow-gold-glow flex items-center justify-center gap-2 cursor-pointer hover:bg-brand-gold-light transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Request a Quote</span>
              </button>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                  siteConfig.contact.whatsappDefaultMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#25D366]/20 border border-[#25D366]/50 text-[#25D366] text-center font-medium text-xs rounded flex items-center justify-center gap-2 hover:bg-[#25D366]/30 transition-all"
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
