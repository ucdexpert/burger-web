"use client";

import { motion } from "framer-motion";
import { Sparkles, Award, Utensils, Zap, Coffee } from "lucide-react";

export const AboutPageContent = () => {
  return (
    <div className="relative bg-[#040404]">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-orange-200">
                <Sparkles className="h-3.5 w-3.5" />
                Our Story
              </div>
              <h1 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-6xl leading-tight">
                Crafted burgers, <span className="text-orange-500">elevated</span> with intention.
              </h1>
              <p className="text-lg leading-8 text-gray-300">
                Founded on the belief that a burger can be more than just a meal—it can be a curated culinary experience. We combine premium, ethically sourced ingredients with masterful technique to redefine the classic burger.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=1000&auto=format&fit=crop&q=80" 
                  alt="Chef preparing a premium burger" 
                  className="h-full w-full object-cover" 
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              { label: "Signature Burgers", value: "12+" },
              { label: "Guest Rating", value: "4.9/5" },
              { label: "Fresh Daily", value: "100%" },
              { label: "Premium Ingredients", value: "A-Grade" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md">
                <p className="text-3xl font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-gray-400 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-semibold text-white">Our Culinary Philosophy</h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">It&apos;s not just about the beef—it&apos;s about the harmony of textures, flavors, and the artistry in every assembly.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Award, title: "Premium Sourcing", desc: "We partner with local farms to ensure ethically raised, top-tier quality beef and produce." },
              { icon: Utensils, title: "Artisan Craft", desc: "Each bun is baked daily, and every sauce is made in-house to our secret recipes." },
              { icon: Zap, title: "Culinary Precision", desc: "Masterful techniques applied to every step to guarantee the perfect temperature and texture." },
              { icon: Coffee, title: "Polished Service", desc: "A luxury dining atmosphere where attention to detail meets warm, welcoming hospitality." },
            ].map((feature, idx) => (
              <motion.div 
                key={feature.title}
                whileHover={{ y: -10 }}
                className="rounded-[2rem] border border-white/10 bg-[#0f0f0f] p-8 space-y-4"
              >
                <div className="h-12 w-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="text-sm text-gray-400 leading-7">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24 pt-12">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-[3rem] border border-orange-400/20 bg-linear-to-b from-black to-orange-950/20 p-12 text-center shadow-2xl backdrop-blur-md">
            <h2 className="text-3xl font-semibold text-white">Ready to experience our signature menu?</h2>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href="/menu" className="rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/20">Explore Menu</a>
              <a href="https://wa.me/3170219387" className="rounded-full bg-linear-to-r from-orange-500 to-yellow-500 px-8 py-4 text-sm font-semibold text-black transition hover:scale-[1.02]">Reserve Table</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
