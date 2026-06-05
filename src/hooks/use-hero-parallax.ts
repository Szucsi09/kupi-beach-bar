"use client";

import { useEffect, useRef, useState } from "react";

export function useHeroParallax() {
  const heroRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      const heroRect = heroRef.current.getBoundingClientRect();
      const heroHeight = heroRect.height;
      const scrolled = -heroRect.top;

      // Calculate progress from 0 to 1 as user scrolls through hero
      // Start at 0 when hero top is at viewport top, reach 1 when hero bottom reaches viewport top
      const progress = Math.max(0, Math.min(1, scrolled / (heroHeight * 0.8)));
      
      setScrollProgress(progress);
    };

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate transform values based on scroll progress
  // Scale from 1 to ~1.8 (enough to fill viewport)
  const scale = 1 + scrollProgress * 0.8;
  
  // Slight upward translation to keep focus centered
  const translateY = scrollProgress * -5;

  return {
    heroRef,
    scrollProgress,
    imageStyle: {
      transform: `scale(${scale}) translateY(${translateY}%)`,
      transformOrigin: "center center",
    },
  };
}
