"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock3, MapPin, PhoneCall, Sparkles } from "lucide-react";

export const ContactStrip = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#050505] pt-10 pb-8 sm:pt-10 sm:pb-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.1),transparent_24%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mb-10 flex flex-col gap-4 text-center lg:mb-12"
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center gap-2 self-center rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-orange-200">
            <Sparkles className="h-3.5 w-3.5" />
            Visit us
          </div>
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
            Visit us or order directly with confidence.
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Whether you are planning a table for the evening or a late-night order, every detail feels polished from first contact.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr_1fr]">
          <motion.div
            className="rounded-4xl border border-white/10 bg-white/8 p-7 shadow-[0_20px_70px_rgba(0,0,0,0.2)] backdrop-blur-xl"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-300">
              <MapPin className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-semibold text-white">Location</h3>
            <p className="mt-3 text-sm leading-7 text-gray-300">123 Gourmet Lane, Luxury City, FL 90210</p>
          </motion.div>

          <motion.div
            className="rounded-4xl border border-white/10 bg-white/8 p-7 shadow-[0_20px_70px_rgba(0,0,0,0.2)] backdrop-blur-xl"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-300">
              <Clock3 className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-semibold text-white">Hours</h3>
            <p className="mt-3 text-sm leading-7 text-gray-300">Tuesday – Sunday: 11:00 AM – 10:00 PM</p>
            <p className="mt-2 text-sm text-gray-400">Closed Mondays</p>
          </motion.div>

          <motion.div
            className="flex flex-col justify-between rounded-4xl border border-orange-400/25 bg-[linear-gradient(135deg,rgba(249,115,22,0.22),rgba(251,191,36,0.12))] p-7 shadow-[0_24px_80px_rgba(249,115,22,0.16)]"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-black/25 text-orange-200">
              <PhoneCall className="h-5 w-5" />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white">Reserve or order</h3>
              <p className="text-sm leading-7 text-gray-200">We are ready to help with tables, private dining, or direct orders.</p>
            </div>
            <a
              href="https://wa.me/3170219387?text=I%20saw%20your%20website%20and%20want%20to%20inquire%20about%20a%20booking!"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.01]"
            >
              Contact us on WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
