"use client";

import { motion } from "framer-motion";
import { MenuCard } from "./MenuCard";
import { menuItems, MenuItem } from "@/types";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const MenuGrid = () => {
  return (
    <section id="menu" className="bg-[#070707] pt-20 pb-10 sm:pt-24 sm:pb-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mb-14 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: -18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-orange-300">Signature menu</p>
          <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
            Crafted to feel as luxurious as it tastes.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Every plate balances rich flavors, elegant texture, and a premium presentation that feels unmistakably elevated.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {menuItems.map((item, index) => (
            <MenuCard key={item.id} item={item} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
