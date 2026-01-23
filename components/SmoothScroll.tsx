"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, // যত বাড়াবে তত স্মুথ এবং স্লো হবে (Standard 1.2)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom Easing Function
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    // Animation Frame Loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}