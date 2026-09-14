"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { GalleryImage } from "@/data/gallery";
import { X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";

interface LightboxModalProps {
  image: GalleryImage | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function LightboxModal({ image, onClose, onNext, onPrev }: LightboxModalProps) {
  const { openQuoteModal } = useQuoteModal();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    if (image) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [image, onClose, onNext, onPrev]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-brand-charcoal/80 text-brand-ivory hover:text-brand-gold border border-brand-border transition-colors cursor-pointer"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 sm:left-6 z-50 p-3 rounded-full bg-brand-charcoal/80 text-brand-ivory hover:text-brand-gold border border-brand-border transition-colors cursor-pointer"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 sm:right-6 z-50 p-3 rounded-full bg-brand-charcoal/80 text-brand-ivory hover:text-brand-gold border border-brand-border transition-colors cursor-pointer"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Modal Main Content */}
      <div
        className="relative max-w-5xl max-h-[88vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full max-h-[72vh] flex items-center justify-center overflow-hidden rounded-lg">
          <Image
            src={image.src}
            alt={image.alt}
            width={1200}
            height={900}
            className="object-contain max-h-[72vh] w-auto h-auto rounded-lg shadow-2xl border border-brand-border/40"
            priority
          />
        </div>

        {/* Caption & Category metadata */}
        <div className="mt-4 text-center max-w-xl px-4 space-y-2">
          <span className="text-[10px] uppercase tracking-[0.25em] text-brand-gold font-semibold font-sans">
            {image.category}
          </span>
          <h3 className="text-xl sm:text-2xl font-serif text-brand-ivory font-normal">
            {image.title}
          </h3>
          <p className="text-xs text-brand-muted leading-relaxed">
            {image.caption}
          </p>

          <div className="pt-2">
            <button
              onClick={() => {
                onClose();
                openQuoteModal(image.title);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold text-brand-black text-xs uppercase tracking-wider font-semibold rounded hover:bg-brand-gold-light transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Inquire About This Stone</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
