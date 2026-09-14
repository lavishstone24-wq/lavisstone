import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import { ArrowRight, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-black flex items-center justify-center px-4 pt-20 pb-16">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="relative w-20 h-20 mx-auto opacity-80">
          <Image
            src={siteConfig.logo}
            alt={siteConfig.name}
            fill
            className="object-contain"
          />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-sans font-semibold">
            404 Error
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif text-brand-ivory font-light">
            Space Not Found
          </h1>
          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
            The architectural stone collection or page you requested cannot be located. It may have been relocated or updated.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-gold text-brand-black text-xs uppercase tracking-widest font-semibold rounded hover:bg-brand-gold-light transition-all shadow-gold-glow"
          >
            <Compass className="w-4 h-4" />
            <span>Return Home</span>
          </Link>

          <Link
            href="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-charcoal border border-brand-border hover:border-brand-gold text-brand-ivory text-xs uppercase tracking-widest font-medium rounded transition-all"
          >
            <span>Browse Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
