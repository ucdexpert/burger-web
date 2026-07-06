"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock3, MapPin, PhoneCall, Mail, Sparkles, Navigation } from "lucide-react";

export const ContactPageContent = () => {
  return (
    <section className="relative min-h-[calc(100vh-4.5rem)] bg-[#040404] py-16 sm:py-24">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.15),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.1),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left Column: Messaging & Info */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-orange-200">
                <Sparkles className="h-3.5 w-3.5" />
                Reservations
              </div>
              <h1 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-6xl leading-[1.1]">
                Reserve your <span className="text-orange-500">experience.</span>
              </h1>
              <p className="text-lg leading-8 text-gray-300 max-w-lg">
                Join us for an evening of flame-kissed flavors and polished hospitality. Whether for an intimate dinner or a special celebration, we look forward to hosting you.
              </p>
            </motion.div>

            {/* Reservation CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-[2.5rem] border border-orange-400/20 bg-linear-to-b from-white/5 to-transparent p-8 shadow-2xl backdrop-blur-md"
            >
              <h2 className="text-2xl font-semibold text-white">Book Your Table</h2>
              <p className="mt-3 text-gray-400">Experience handcrafted burgers in our elegant dining atmosphere.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/3170219387?text=I%20would%20like%20to%20reserve%20a%20table!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-linear-to-r from-orange-500 to-yellow-500 px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(249,115,62,0.35)]"
                >
                  Reserve via WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Email Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 text-orange-400" />
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <a href="mailto:hk202504@gmail.com" className="text-sm text-gray-400 mt-1 hover:text-orange-400 transition">hk202504@gmail.com</a>
                </div>
              </div>
            </motion.div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm space-y-6"
            >
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 text-orange-400" />
                <div>
                  <h3 className="font-semibold text-white">Location</h3>
                  <p className="text-sm text-gray-400 mt-1">123 Gourmet Lane, Luxury City, FL 90210</p>
                </div>
              </div>
              <div className="border-t border-white/10 pt-6 flex items-start gap-4">
                <Clock3 className="mt-1 h-5 w-5 text-orange-400" />
                <div>
                  <h3 className="font-semibold text-white">Hours</h3>
                  <p className="text-sm text-gray-400 mt-1">Tue – Sun: 11:00 AM – 10:00 PM</p>
                </div>
              </div>
              <div className="border-t border-white/10 pt-6 flex items-start gap-4">
                <PhoneCall className="mt-1 h-5 w-5 text-orange-400" />
                <div>
                  <h3 className="font-semibold text-white">Contact</h3>
                  <p className="text-sm text-gray-400 mt-1">+1 (234) 567-890</p>
                  <p className="text-sm text-gray-400">hello@burgerhouse.com</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Map Centerpiece */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] lg:h-full w-full rounded-[3rem] border border-white/10 bg-[#0f0f0f] shadow-2xl overflow-hidden"
          >
            {/* Map Placeholder Styling */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&auto=format&fit=crop&q=80')] bg-cover bg-center brightness-50" />
            <div className="absolute inset-0 bg-orange-950/20" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white/50">
              <Navigation className="h-16 w-16 mb-4 opacity-50" />
              <p className="text-lg uppercase tracking-[0.2em]">Our location</p>
            </div>
            
            {/* Glowing Border/Overlay */}
            <div className="absolute inset-0 rounded-[3rem] border-2 border-orange-500/10 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
