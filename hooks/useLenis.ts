"use client";

import { useEffect } from "react";

export function useLenis() {
  useEffect(() => {
    // Dynamically import lenis to ensure it only runs client-side
    import("lenis").then((lenisModule) => {
      const Lenis = lenisModule.default;
      
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    }).catch((err) => {
      console.error("Failed to load Lenis:", err);
    });
  }, []);
}
