"use client";

import { motion } from "framer-motion";
import { Star, Utensils } from "lucide-react";
import { MenuItem } from "@/types";
import { useState } from "react";

type MenuCardProps = {
  item: MenuItem;
  index: number;
};

export const MenuCard: React.FC<MenuCardProps> = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const asymmetry = index % 2 === 0 ? "sm:-translate-y-2" : "sm:translate-y-2";

  return (
    <motion.div
      className={`group relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-3 shadow-[0_20px_70px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all duration-300 ${asymmetry}`}
      variants={{
        hidden: { opacity: 0, scale: 0.92, y: 40 },
        visible: { opacity: 1, scale: 1, y: 0 },
      }}
      whileHover={{ y: -8, scale: 1.01, boxShadow: "0 30px 80px rgba(249, 115, 22, 0.18)" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      transition={{ type: "spring", stiffness: 280, damping: 24 }}
      style={{ perspective: 1200 }}
    >
      <div className="absolute inset-0 rounded-4xl bg-linear-to-br from-orange-500/10 via-transparent to-yellow-400/10" />

      <motion.img
        src={item.image || "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"}
        alt={item.name}
        className="relative h-56 w-full rounded-3xl object-cover shadow-[0_18px_60px_rgba(0,0,0,0.28)] sm:h-64"
        style={{
          scale: isHovered ? 1.06 : 1,
          filter: isHovered ? "brightness(0.95) saturate(1.1)" : "brightness(0.82) saturate(0.95)",
          rotateX: isHovered ? 3 : 0,
          rotateY: isHovered ? -3 : 0,
        }}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80";
        }}
      />

      <div className="relative z-10 flex flex-col p-4 pt-5">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <h3 className="text-2xl font-semibold text-white">{item.name}</h3>
            <p className="mt-2 text-sm leading-7 text-gray-400">{item.description}</p>
          </div>
          <div className="rounded-full border border-orange-400/25 bg-orange-500/15 px-3 py-2 text-sm font-semibold text-orange-200 shadow-[0_8px_24px_rgba(249,115,22,0.15)]">
            ${item.price.toFixed(2)}
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-yellow-300">
            <Star className="h-4 w-4 fill-yellow-300 text-yellow-300" />
            <span>{item.rating.toFixed(1)}</span>
          </div>

          <a
            href={`https://wa.me/3170219387?text=I%20want%20to%20order%20the%20${item.name.replace(/ /g, '+')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 rounded-full bg-linear-to-r from-orange-500 to-yellow-500 px-4 py-2 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.02]"
          >
            <Utensils className="w-4 h-4" />
            Order
          </a>
        </div>
      </div>
    </motion.div>
  );
};