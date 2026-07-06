"use client";

import { useState, useEffect, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { LazyCanvas } from "./LazyCanvas";

const Hero3DScene = lazy(() => import("./Hero3DScene"));

const Particle = ({ delay }: { delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{
        opacity: [0, 1, 0],
        y: [-20, -60],
        scale: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
      className="hero-particles absolute h-2 w-2 rounded-full bg-linear-to-r from-orange-400 to-yellow-400 blur-sm"
    />
  );
};

export const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handle = requestAnimationFrame(() => {
      setIsMounted(true);
    });

    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);

    return () => {
      cancelAnimationFrame(handle);
      mediaQuery.removeEventListener("change", update);
    };
  }, []);

  return (
    <section id="hero" className="relative isolate flex min-h-[calc(100dvh-4.5rem)] items-center overflow-hidden bg-[#040404]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-soft-glow absolute left-[-8%] top-[-8%] h-104 w-104 rounded-full bg-orange-500/25 blur-[140px] hidden md:block" />
        <div className="hero-soft-glow absolute bottom-[-6%] right-[-4%] h-96 w-96 rounded-full bg-yellow-500/20 blur-[140px] hidden md:block" />
        <div className="hero-cinematic-ring absolute right-[6%] top-1/2 h-136 w-136 -translate-y-1/2 rounded-full border border-white/10 hidden md:block" />
        <div className="hero-grid-overlay absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      </div>

      {isMounted && !isMobile && (
        <div className="hero-particles pointer-events-none absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <Particle key={i} delay={i * 0.3} />
          ))}
        </div>
      )}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-6 sm:px-8 sm:py-8 lg:px-8 lg:py-10">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl text-center lg:text-left"
          >
            <motion.p
              className="mb-6 inline-flex rounded-full border border-orange-400/20 bg-white/10 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-orange-300 backdrop-blur-md"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              Crafted for the modern connoisseur
            </motion.p>

            <div className="space-y-4">
              <motion.h1
                className="text-4xl font-semibold leading-[0.9] tracking-[-0.035em] text-white sm:text-5xl md:text-6xl lg:text-7xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
              >
                <span className="block">The burger</span>
                <span className="block bg-linear-to-r from-orange-300 via-orange-500 to-yellow-300 bg-clip-text text-transparent">
                  experience,
                </span>
                <span className="block">redefined.</span>
              </motion.h1>
            </div>

            <motion.p
              className="mx-auto mt-6 max-w-xl text-base leading-8 text-gray-300 sm:text-lg lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
            >
              Premium ingredients, flame-kissed layers, and a cinematic finish in every bite.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href="https://wa.me/3170219387?text=I%20want%20to%20order%20now!"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-linear-to-r from-orange-500 to-yellow-500 px-8 py-4 text-center text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(249,115,62,0.35)]"
              >
                Order Now
              </a>
              <a
                href="#menu"
                className="rounded-full border border-white/20 bg-white/10 px-8 py-4 text-center text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:bg-white/20"
              >
                Explore Menu
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="hero-panel relative h-[24rem] w-full max-w-145 rounded-[2.5rem] border border-white/[0.06] bg-linear-to-br from-orange-500/[0.06] via-transparent to-yellow-500/[0.04] p-3 shadow-[0_14px_40px_rgba(0,0,0,0.2)] backdrop-blur-2xl sm:h-[28rem] lg:h-[34rem] lg:w-160">
              <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_65%)]" />
              <div className="absolute inset-3 rounded-[1.75rem] border border-white/[0.03] bg-transparent" />
              <div className="relative z-10 h-full w-full overflow-hidden rounded-[1.75rem]">
                <LazyCanvas className="h-full w-full" aspectRatio="4/3">
                  <Suspense fallback={null}>
                    <Hero3DScene />
                  </Suspense>
                </LazyCanvas>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};