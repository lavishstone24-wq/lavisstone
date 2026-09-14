"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";

export function InitialLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Check if already shown in this browser session
    const hasLoaded = sessionStorage.getItem("lavish_stone_initial_load");
    if (hasLoaded) {
      setLoading(false);
      return;
    }

    // Disable scrolling during loader
    document.body.style.overflow = "hidden";

    // Progress counter animation (5 seconds)
    const startTime = Date.now();
    const duration = 5000; // 5 seconds load animation

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progressPercent = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(progressPercent);

      if (progressPercent >= 100) {
        clearInterval(interval);
        // Begin exit transition
        setTimeout(() => {
          setIsExiting(true);
          sessionStorage.setItem("lavish_stone_initial_load", "true");

          // Restore scrolling and unmount after transition completes
          setTimeout(() => {
            document.body.style.overflow = "unset";
            setLoading(false);
          }, 700);
        }, 200);
      }
    }, 25);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#07080a] text-brand-ivory transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isExiting ? "-translate-y-full opacity-90" : "translate-y-0 opacity-100"
      }`}
      aria-hidden="true"
    >
      {/* Background Luxury Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-sm w-full px-6 text-center space-y-6">
        {/* Animated Brand Crest Logo */}
        <div className="relative">
          {/* Subtle gold pulsing halo */}
          <div className="absolute -inset-3 rounded-full bg-brand-gold/15 blur-xl animate-pulse" />

          <div className="relative w-24 h-24 sm:w-28 sm:h-28 aspect-[1334/1179] transition-transform duration-500 scale-100 hover:scale-105">
            <Image
              src={siteConfig.logo}
              alt="Lavish Stone"
              fill
              priority
              className="object-contain drop-shadow-[0_10px_25px_rgba(212,175,55,0.35)]"
            />
          </div>
        </div>

        {/* Brand Typography */}
        <div className="space-y-1.5 pt-2">
          <h1 className="text-xl sm:text-2xl font-serif tracking-[0.25em] text-brand-ivory font-normal uppercase">
            LAVISH <span className="text-gold-gradient font-light">STONE</span>
          </h1>
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-brand-muted font-sans font-light">
            Natural Beauty · Crafted For Distinction
          </p>
        </div>

        {/* Progress Bar & Percentage */}
        <div className="w-full max-w-[220px] pt-4 space-y-2.5">
          {/* Bar container */}
          <div className="relative h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-brand-gold via-[#f5d77f] to-brand-gold transition-all duration-75 ease-out rounded-full shadow-[0_0_12px_rgba(212,175,55,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Percentage display */}
          <div className="flex justify-between items-center text-[10px] tracking-widest text-brand-muted font-mono">
            <span className="text-brand-gold/60 uppercase">Loading</span>
            <span className="text-brand-ivory font-medium">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
