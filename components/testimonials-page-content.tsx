"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Quote, Sparkles, Star } from "lucide-react";

const testimonials = [
  {
    quote: "The flavors were bold, the presentation was exquisite, and the service felt truly premium.",
    author: "Mina R.",
    role: "Food writer",
    rating: 5,
    accent: "from-orange-500/25 to-amber-400/10",
  },
  {
    quote: "Every burger felt handcrafted. The truffle burger was unforgettable.",
    author: "Daniel P.",
    role: "Local regular",
    rating: 5,
    accent: "from-amber-400/20 to-yellow-300/10",
  },
  {
    quote: "Luxury comfort food done right — beautiful plating and unforgettable taste.",
    author: "Sofia L.",
    role: "Event host",
    rating: 5,
    accent: "from-orange-400/20 to-rose-400/10",
  },
  {
    quote: "The ambiance, the craft, the flavors—everything is simply top-tier.",
    author: "Elena M.",
    role: "Event host",
    rating: 5,
    accent: "from-orange-500/20 to-amber-400/10",
  },
  {
    quote: "Finally, a burger place that treats the burger as a fine dining craft.",
    author: "James T.",
    role: "Local regular",
    rating: 5,
    accent: "from-rose-500/20 to-orange-400/10",
  },
  {
    quote: "Unbelievable service and the fries are just as addictive as the burgers.",
    author: "Sarah B.",
    role: "Food critic",
    rating: 5,
    accent: "from-amber-500/20 to-yellow-400/10",
  },
];

export const TestimonialsPageContent = () => {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(251,191,36,0.14),_transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-orange-200">
              <Sparkles className="h-3.5 w-3.5" />
              Testimonials
            </div>
            <h1 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              Guests return for the feeling as much as the flavor.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-gray-300">
              See why our signature burgers and polished service continue to earn loyal praise from locals, food lovers, and hosts alike.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl">
            <div className="flex items-center gap-2 text-yellow-300">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-yellow-300" />)}
            </div>
            <p className="mt-3 text-3xl font-semibold text-white">4.9/5</p>
            <p className="text-sm text-gray-400">Based on 1,200+ verified guest reviews</p>
          </div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.blockquote
              key={item.author}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#0f0f0f]/80 p-7 shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:border-orange-500/30 hover:shadow-[0_20px_50px_rgba(249,115,22,0.15)] backdrop-blur-xl"
            >
              <div className={`absolute inset-0 bg-linear-to-br ${item.accent} opacity-50`} />
              <div className="absolute right-5 top-5 rounded-full border border-white/10 bg-black/30 p-2 text-orange-200">
                <Quote className="h-4 w-4" />
              </div>

              <div className="relative z-10 flex flex-1 flex-col">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-orange-500 to-amber-400 font-semibold text-black">
                    {item.author.split(" ").map(p => p[0]).join("")}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-white">{item.author}</p>
                      <BadgeCheck className="h-4 w-4 text-orange-300" />
                    </div>
                    <p className="text-sm text-gray-400">{item.role}</p>
                  </div>
                </div>

                <p className="flex-1 text-lg leading-8 text-gray-100">“{item.quote}”</p>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <div className="flex items-center gap-1 text-sm font-medium text-yellow-300">
                    {[...Array(item.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-300" />)}
                  </div>
                  <span className="rounded-full border border-orange-400/25 bg-orange-500/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-orange-200">
                    Verified review
                  </span>
                </div>
              </div>
            </motion.blockquote>
          ))}
        </div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 rounded-[3rem] border border-orange-400/20 bg-linear-to-b from-black to-orange-950/20 p-12 text-center shadow-2xl backdrop-blur-md"
        >
          <h2 className="text-3xl font-semibold text-white">Ready to experience why guests keep coming back?</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="/menu" className="rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/20">Explore Menu</a>
            <a href="https://wa.me/1234567890" className="rounded-full bg-linear-to-r from-orange-500 to-yellow-500 px-8 py-4 text-sm font-semibold text-black transition hover:scale-[1.02]">Reserve Table</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
