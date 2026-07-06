"use client";

import { motion } from "framer-motion";
import { menuItems } from "@/types";
import { Star, Sparkles } from "lucide-react";

export const MenuPageContent = () => {
  return (
    <section className="bg-[#040404] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Improved Hero */}
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-16 space-y-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">Full Menu</p>
          <h1 className="text-5xl font-semibold tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
            Indulgence, <span className="text-orange-500">defined</span>.
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-400">
            From flame-grilled masterpieces to seasonal specials, explore our curated selection of gourmet burgers and signature sides.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 pt-4 text-sm font-medium text-gray-300">
            <span className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-orange-400"/> Premium Wagyu</span>
            <span className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-orange-400"/> Farm Fresh Produce</span>
            <span className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-orange-400"/> Handcrafted Buns</span>
          </div>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {menuItems.map((item, index) => {
            const isFeatured = item.id === "1"; // Signature Stack
            const isBestSeller = item.id === "6"; // House Double
            const isLimited = item.id === "2"; // Truffle Velvet

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 transition-all duration-300 hover:border-orange-500/50 hover:bg-white/10 hover:shadow-[0_20px_40px_rgba(249,115,22,0.1)]"
              >
                {/* Badges */}
                {(isFeatured || isBestSeller || isLimited) && (
                  <div className="absolute left-6 top-6 z-10 flex gap-2">
                    {isFeatured && <span className="rounded-full bg-orange-500 px-3 py-1 text-[0.6rem] font-bold uppercase tracking-widest text-black">Chef&apos;s Choice</span>}
                    {isBestSeller && <span className="rounded-full bg-white px-3 py-1 text-[0.6rem] font-bold uppercase tracking-widest text-black">Best Seller</span>}
                    {isLimited && <span className="rounded-full bg-yellow-500 px-3 py-1 text-[0.6rem] font-bold uppercase tracking-widest text-black">Limited</span>}
                  </div>
                )}

                <div className="relative overflow-hidden rounded-[1.5rem]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-64 w-full object-cover transition duration-500 group-hover:brightness-110 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-white">{item.name}</h2>
                    <span className="font-semibold text-orange-400">${item.price.toFixed(2)}</span>
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-7 text-gray-400">{item.description}</p>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <span className="flex items-center gap-1 text-sm text-yellow-400">
                      <Star className="h-4 w-4 fill-current" /> {item.rating.toFixed(1)}
                    </span>
                    <a
                      href="https://wa.me/3170219387"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-orange-500/30 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-500 hover:text-black"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 rounded-[2.5rem] border border-orange-400/20 bg-linear-to-b from-black/50 to-orange-950/20 p-12 text-center shadow-2xl backdrop-blur-md"
        >
          <h2 className="text-3xl font-semibold text-white">Craving more?</h2>
          <p className="mt-4 text-gray-400">Reserve your table today for a truly elevated dining experience.</p>
          <div className="mt-8">
            <a
              href="https://wa.me/3170219387"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-linear-to-r from-orange-500 to-yellow-500 px-10 py-4 font-semibold text-black transition hover:scale-[1.02]"
            >
              Reserve Your Table
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
