"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";

export function InitialLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [activeSegment, setActiveSegment] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Disable scrolling during loader
    document.body.style.overflow = "hidden";

    // Snappy, luxurious loader duration (~2.2 seconds total)
    const startTime = Date.now();
    const duration = 2200;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progressPercent = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(progressPercent);

      // Segment calculation (4 segments: 0-25%, 26-50%, 51-75%, 76-100%)
      const segmentIndex = Math.min(Math.floor(progressPercent / 25), 3);
      setActiveSegment(segmentIndex);

      if (progressPercent >= 100) {
        clearInterval(interval);
        // Short pause at 100% for visual completion
        setTimeout(() => {
          setIsExiting(true);
          // Restore scrolling and unmount after smooth exit animation
          setTimeout(() => {
            document.body.style.overflow = "unset";
            setLoading(false);
          }, 650);
        }, 150);
      }
    }, 20);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!loading) return null;

  // Status phrasing that smoothly aligns with progress
  const getStatusText = () => {
    if (progress < 30) return "CURATING NATURAL STONE";
    if (progress < 65) return "SHAPING ARCHITECTURAL BEAUTY";
    if (progress < 95) return "REFINING LUXURY DETAILS";
    return "WELCOME TO LAVISH STONE";
  };

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#070708] text-brand-ivory select-none transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${isExiting
          ? "opacity-0 scale-[1.03] pointer-events-none filter blur-sm"
          : "opacity-100 scale-100"
        }`}
      aria-hidden="true"
    >
      {/* Background Ambience: Deep Obsidian Canvas with Gold Core Radiance */}
      <div className="absolute inset-0 bg-[#070708]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(201,162,74,0.14)_0%,rgba(11,11,11,0.95)_65%,#070708_100%)] pointer-events-none" />

      {/* Architectural Corner Inset Frame (Inspired by Krivatec's glowing border, elevated with architectural stone framing) */}
      <div className="absolute inset-4 sm:inset-8 border border-brand-gold/15 rounded-sm pointer-events-none transition-opacity duration-500">
        {/* Corner Accents */}
        <span className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-brand-gold/70" />
        <span className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-brand-gold/70" />
        <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-brand-gold/70" />
        <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-brand-gold/70" />

        {/* Ambient Border Glow Pulses */}
        <div className="absolute inset-0 rounded-sm shadow-[inset_0_0_35px_rgba(201,162,74,0.06)] animate-pulse" />
      </div>

      {/* Central Content Container */}
      <div className="relative z-10 flex flex-col items-center max-w-md w-full px-6 text-center">
        {/* Brand Crest with Dynamic Shimmer Sweep */}
        <div className="relative mb-6">
          {/* Backlight Aura */}
          <div className="absolute -inset-6 rounded-full bg-brand-gold/15 blur-2xl animate-pulse" />

          <div className="relative w-24 h-24 sm:w-28 sm:h-28 aspect-[1334/1179] mx-auto overflow-hidden">
            <Image
              src={siteConfig.logo}
              alt="Lavish Stone"
              fill
              priority
              className="object-contain drop-shadow-[0_8px_30px_rgba(201,162,74,0.4)]"
            />

            {/* Shimmer Light Beam Sweep across logo */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full animate-[loaderShimmer_2s_infinite] pointer-events-none" />
          </div>
        </div>

        {/* Brand Identity Typography */}
        <div className="space-y-1.5">
          <h1 className="text-2xl sm:text-3xl font-serif tracking-[0.25em] text-brand-ivory font-normal uppercase">
            LAVISH <span className="text-gold-gradient font-light">STONE</span>
          </h1>
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-brand-gold/75 font-sans font-light">
            Architectural Pebbles & Natural Stones
          </p>
        </div>

        {/* Luxury Segmented Indicator (4-Segment Architectural Progress Bar) */}
        <div className="w-full max-w-[260px] mt-8 space-y-3">
          {/* 4 Segment Bars */}
          <div className="grid grid-cols-4 gap-2 w-full">
            {[0, 1, 2].map((idx) => {
              // Calculate segment progress (0 to 100% within its 25% slice)
              const segmentStart = idx * 25;
              const segmentFill = Math.max(
                0,
                Math.min(100, ((progress - segmentStart) / 25) * 100)
              );
              const isFilled = progress >= segmentStart + 25;

              return (
                <div
                  key={idx}
                  className="relative h-[3px] bg-white/10 rounded-full overflow-hidden"
                >
                  <div
                    className={`absolute inset-y-0 left-0 bg-gradient-to-r from-[#C9A24A] via-[#E0C47A] to-[#F5D77F] transition-all duration-75 rounded-full ${isFilled ? "shadow-[0_0_8px_rgba(201,162,74,0.9)]" : ""
                      }`}
                    style={{ width: `${segmentFill}%` }}
                  />
                </div>
              );
            })}
          </div>

          {/* Micro Status Bar & Counter */}
          <div className="flex justify-between items-center text-[10px] tracking-[0.2em] font-sans text-brand-muted">
            <div className="flex items-center space-x-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-gold animate-ping" />
              <span className="text-brand-ivory/80 uppercase font-light text-[9px] sm:text-[10px]">
                {getStatusText()}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Inline Animation Style for smooth Shimmer Sweep */}
      <style jsx>{`
        @keyframes loaderShimmer {
          0% {
            transform: translateX(-150%) skewX(-20deg);
          }
          50%, 100% {
            transform: translateX(150%) skewX(-20deg);
          }
        }
      `}</style>
    </div>
  );
}
