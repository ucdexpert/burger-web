"use client";

import { motion } from "framer-motion";
import { Clock, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

type TimeLeft = {
  hours: number;
  minutes: number;
  seconds: number;
};

const getTargetEndTime = () => new Date(Date.now() + 72 * 60 * 60 * 1000);

const getTimeLeft = (targetTime: Date): TimeLeft => {
  const difference = targetTime.getTime() - Date.now();

  if (difference <= 0) {
    return { hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

export const OfferBanner = () => {
  const [targetTime] = useState(getTargetEndTime);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(targetTime));
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const timer = window.setInterval(() => {
      setTimeLeft(getTimeLeft(targetTime));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [targetTime]);

  const timerVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  };

  if (!isMounted) return null;

  return (
    <section className="bg-[#0b0b0b] pt-8 pb-10 sm:pt-8 sm:pb-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="relative overflow-hidden rounded-4xl border border-orange-400/20 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.22),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.06),rgba(0,0,0,0.7))] p-8 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-10 lg:p-12"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.16),transparent_30%)]" />

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-orange-200">
                <Sparkles className="h-3.5 w-3.5" />
                Limited evening offer
              </div>
              <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                A candlelit dinner moment with 20% off our signature experience.
              </h2>
              <p className="max-w-xl text-base leading-8 text-gray-300 sm:text-lg">
                Reserve your table for a refined evening of bold flavors, polished service, and signature indulgence.
              </p>
            </div>

            <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-black/30 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.2)] backdrop-blur-xl lg:min-w-90">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-orange-200">
                <Clock className="h-4 w-4" />
                Offer ends in
              </div>

              <div className="flex items-center gap-2 text-white sm:gap-3">
                <div className="flex min-w-17 flex-col items-center rounded-2xl border border-white/10 bg-white/10 px-3 py-3">
                  <motion.span key={'hours-' + timeLeft.hours} variants={timerVariants} initial="initial" animate="animate" className="text-2xl font-semibold text-orange-300 sm:text-3xl">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </motion.span>
                  <span className="text-[0.65rem] uppercase tracking-[0.25em] text-gray-400">Hours</span>
                </div>
                <span className="text-2xl text-gray-500">:</span>
                <div className="flex min-w-17 flex-col items-center rounded-2xl border border-white/10 bg-white/10 px-3 py-3">
                  <motion.span key={'minutes-' + timeLeft.minutes} variants={timerVariants} initial="initial" animate="animate" className="text-2xl font-semibold text-orange-300 sm:text-3xl">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </motion.span>
                  <span className="text-[0.65rem] uppercase tracking-[0.25em] text-gray-400">Minutes</span>
                </div>
                <span className="text-2xl text-gray-500">:</span>
                <div className="flex min-w-17 flex-col items-center rounded-2xl border border-white/10 bg-white/10 px-3 py-3">
                  <motion.span key={'seconds-' + timeLeft.seconds} variants={timerVariants} initial="initial" animate="animate" className="text-2xl font-semibold text-orange-300 sm:text-3xl">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </motion.span>
                  <span className="text-[0.65rem] uppercase tracking-[0.25em] text-gray-400">Seconds</span>
                </div>
              </div>

              <a
                href="https://wa.me/3170219387?text=I%20want%20to%20claim%20the%2020%%20OFF%20flash%20sale!"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-linear-to-r from-orange-500 to-amber-400 px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.02]"
              >
                Reserve now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};