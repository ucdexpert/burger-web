"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&auto=format&fit=crop&q=80",
    title: "Signature stack",
    size: "lg",
  },
  {
    src: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80",
    title: "Fresh ingredients",
    size: "md",
  },
  {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80",
    title: "Chef at work",
    size: "md",
  },
  {
    src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=900&auto=format&fit=crop&q=80",
    title: "Kitchen intensity",
    size: "lg",
  },
  {
    src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=900&auto=format&fit=crop&q=80",
    title: "Craft cocktails",
    size: "md",
  },
  {
    src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=900&auto=format&fit=crop&q=80",
    title: "Ambience",
    size: "md",
  },
];

const layoutClasses = {
  lg: "lg:col-span-2 lg:row-span-2",
  md: "lg:col-span-1 lg:row-span-1",
};

export const GalleryPageContent = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.16),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(251,191,36,0.14),_transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-orange-200">
              <Sparkles className="h-3.5 w-3.5" />
              Gallery
            </div>
            <h1 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              A polished glimpse into the experience.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-gray-300">
              Each frame is composed to feel like polished food photography — rich, atmospheric, and unmistakably premium.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ y: -6, scale: 1.01, boxShadow: "0 24px 70px rgba(249,115,22,0.16)" }}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 ${layoutClasses[photo.size as keyof typeof layoutClasses]}`}
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="h-full min-h-[280px] w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white">
                <div>
                  <p className="text-sm font-medium text-orange-200">{photo.title}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/70">Featured view</p>
                </div>
                <div className="rounded-full border border-white/20 bg-white/10 p-2 backdrop-blur-sm transition group-hover:translate-x-1 group-hover:translate-y-[-2px]">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Premium CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 rounded-[2.5rem] border border-orange-400/20 bg-linear-to-b from-black/50 to-orange-950/20 p-10 text-center shadow-2xl backdrop-blur-md sm:mt-24 sm:p-16"
        >
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
            Ready to experience it yourself?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-gray-300">
            Reserve your table for a refined evening of bold flavors, polished service, and signature indulgence.
          </p>
          <div className="mt-8">
            <a
              href="https://wa.me/3170219387?text=I%20would%20like%20to%20book%20a%20table!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-linear-to-r from-orange-500 to-yellow-500 px-10 py-4 text-center text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(249,115,62,0.35)]"
            >
              Book Your Table
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
