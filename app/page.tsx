"use client";

import { Hero } from "@/components/Hero";
import { MenuGrid } from "@/components/MenuGrid";
import { OfferBanner } from "@/components/OfferBanner";
import { ContactStrip } from "@/components/ContactStrip";
import { BurgerScrollScene } from "@/components/BurgerScrollScene";
import { LoadingScreen } from "@/components/LoadingScreen";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <LoadingScreen />
      <div className="overflow-hidden">
        <Hero />
      </div>
      <div className="overflow-hidden">
        <MenuGrid />
      </div>
      <div className="overflow-hidden">
        <OfferBanner />
      </div>
      <div className="overflow-hidden">
        <section className="mx-auto max-w-7xl px-6 pt-12 pb-10 lg:px-8 lg:pt-12 lg:pb-10">
          <div className="rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.12),transparent_32%),rgba(10,10,10,0.92)] p-8 shadow-[0_25px_80px_rgba(0,0,0,0.25)] sm:p-10 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <div className="w-full lg:w-[45%] space-y-6 text-center lg:text-left">
                <p className="inline-flex max-w-full flex-wrap items-center justify-center whitespace-normal rounded-full border border-orange-400/20 bg-white/10 px-4 py-2 text-[0.6rem] sm:text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-orange-300 backdrop-blur-md">
                  Interactive 3D Experience
                </p>
                <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl md:text-5xl leading-[1.15]">
                  Experience our signature burger in interactive 3D.
                </h2>
                <p className="text-base leading-8 text-gray-300 sm:text-lg">
                  Rotate and inspect every angle of our masterfully crafted burger. Explore the perfect harmony of premium ingredients, flame-kissed layers, and culinary artistry in a fully interactive showcase.
                </p>
              </div>

              <div className="relative w-full lg:w-[55%] h-[22rem] rounded-[2rem] border border-white/[0.06] bg-linear-to-br from-orange-500/[0.04] via-transparent to-yellow-500/[0.02] p-2 shadow-[0_12px_30px_rgba(0,0,0,0.15)] sm:h-[26rem] lg:h-[32rem]">
                {/* Soft radial glow behind the burger */}
                <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.15),transparent_60%)] pointer-events-none" />
                <div className="absolute inset-2 rounded-[1.5rem] border border-white/[0.02] bg-transparent pointer-events-none" />
                <div className="relative z-10 h-full w-full overflow-hidden rounded-[1.5rem]">
                  <BurgerScrollScene />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="overflow-hidden">
        <ContactStrip />
      </div>
    </main>
  );
}
