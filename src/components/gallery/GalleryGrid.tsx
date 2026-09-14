"use client";

import React, { useState } from "react";
import Image from "next/image";
import { galleryItems, galleryCategories, GalleryImage } from "@/data/gallery";
import { LightboxModal } from "./LightboxModal";
import { Maximize2 } from "lucide-react";

interface GalleryGridProps {
  limit?: number;
  showFilters?: boolean;
}

export function GalleryGrid({ limit, showFilters = true }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredItems = galleryItems.filter((item) => {
    if (activeCategory === "All") return true;
    return item.category === activeCategory;
  });

  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  const handleNext = () => {
    if (!selectedImage) return;
    const currentIndex = displayedItems.findIndex((i) => i.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % displayedItems.length;
    setSelectedImage(displayedItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedImage) return;
    const currentIndex = displayedItems.findIndex((i) => i.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + displayedItems.length) % displayedItems.length;
    setSelectedImage(displayedItems[prevIndex]);
  };

  return (
    <div>
      {/* Category Filter Tabs */}
      {showFilters && (
        <div className="flex items-center justify-start sm:justify-center flex-wrap gap-2 mb-12 overflow-x-auto pb-2">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-brand-gold text-brand-black shadow-gold-glow"
                  : "bg-brand-charcoal text-brand-muted hover:text-brand-ivory border border-brand-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Masonry-Style Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {displayedItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedImage(item)}
            className="group relative break-inside-avoid rounded-lg overflow-hidden bg-brand-charcoal border border-brand-border/80 cursor-pointer shadow-lg transition-all duration-300 hover:border-brand-gold/50"
          >
            <div className="relative w-full overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                width={800}
                height={600}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5">
                <div className="self-end">
                  <span className="p-2 rounded-full bg-black/60 border border-brand-gold/40 text-brand-gold inline-flex">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-brand-gold font-sans font-semibold">
                    {item.category}
                  </span>
                  <h4 className="text-base sm:text-lg font-serif text-brand-ivory">
                    {item.title}
                  </h4>
                  <p className="text-xs text-brand-muted line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
}
