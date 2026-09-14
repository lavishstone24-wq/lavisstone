"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { RotateCcw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[Next.js Application Error]:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 bg-brand-black text-brand-ivory">
      <div className="max-w-md w-full text-center space-y-6 bg-brand-charcoal p-8 rounded-xl border border-brand-gold/30 shadow-2xl">
        <div className="w-14 h-14 mx-auto rounded-full bg-brand-gold/15 border border-brand-gold/40 flex items-center justify-center text-brand-gold">
          <RotateCcw className="w-6 h-6" />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-serif text-gold-gradient font-light">
            Something went wrong
          </h2>
          <p className="text-xs text-brand-muted leading-relaxed">
            {error?.message || "An unexpected error occurred while loading this page."}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-brand-gold text-brand-black text-xs uppercase tracking-wider font-semibold rounded hover:bg-brand-gold-light transition-all cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Try Again</span>
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-brand-black border border-brand-border text-brand-ivory text-xs uppercase tracking-wider rounded hover:border-brand-gold transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
