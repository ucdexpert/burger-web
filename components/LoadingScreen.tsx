"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const forceHideTimeout = window.setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    const interval = window.setInterval(() => {
      setProgress((value) => {
        const nextValue = Math.min(100, value + 8);

        if (nextValue >= 100) {
          window.clearInterval(interval);
          window.setTimeout(() => setIsVisible(false), 280);
        }

        return nextValue;
      });
    }, 120);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(forceHideTimeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-[#040404]">
          <div className="w-full max-w-sm rounded-[2rem] border border-white/10 bg-white/10 p-8 text-center shadow-2xl backdrop-blur-2xl">
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.4 }} className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-orange-500 to-yellow-400 text-2xl font-black text-black">
              B
            </motion.div>
            <p className="text-sm uppercase tracking-[0.35em] text-orange-300">Preparing experience</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">The Burger House</h2>
            <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
              <motion.div animate={{ width: `${progress}%` }} transition={{ ease: "linear" }} className="h-full rounded-full bg-linear-to-r from-orange-500 to-yellow-400" />
            </div>
            <p className="mt-4 text-sm text-gray-400">{progress}% loaded</p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
