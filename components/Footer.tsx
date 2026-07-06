"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, MessageCircle, Send, Sparkles, ArrowRight } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  { href: "https://www.linkedin.com/in/muhammad-uzair-066733314", label: "LinkedIn", icon: Globe },
  { href: "https://www.facebook.com/uzairkhilji.uzairkhilji", label: "Facebook", icon: Globe },
  { href: "https://github.com/muhammaduzair56", label: "GitHub", icon: Globe },
  { href: "https://wa.me/3170219387", label: "WhatsApp", icon: MessageCircle },
];

export const Footer = () => {
  return (
    <>
      {/* Pre-Footer CTA */}
      <section className="relative overflow-hidden bg-[#040404] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[3rem] border border-orange-500/20 bg-linear-to-b from-white/5 to-transparent p-12 shadow-2xl backdrop-blur-md"
          >
            <h2 className="text-3xl font-semibold text-white">Ready for your next unforgettable burger experience?</h2>
            <p className="mt-4 text-gray-400">Reserve your table today and enjoy handcrafted burgers in a refined atmosphere.</p>
            <div className="mt-8">
              <a
                href="https://wa.me/3170219387?text=I%20would%20like%20to%20reserve%20a%20table!"
                className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-orange-500 to-yellow-500 px-10 py-4 font-semibold text-black transition hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(249,115,62,0.3)]"
              >
                Reserve Now <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="relative border-t border-white/10 bg-[#020202]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.08),transparent_70%)]" />
        
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-orange-500 to-yellow-400">
                <Sparkles className="h-6 w-6 text-black" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">The Burger House</span>
            </div>
            <p className="text-sm leading-7 text-gray-400 max-w-sm">
              Crafted daily with passion. Designed for unforgettable moments. We redefine luxury through the art of the perfect burger.
            </p>
          </div>

          {/* Links & Hours */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-white">Quick Links</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="transition hover:text-orange-400">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4 text-sm text-gray-400">
              <h3 className="font-semibold text-white">Hours</h3>
              <p>Tue – Sun: <br />11:00 AM – 10:00 PM</p>
              <p>Closed Mondays</p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <h3 className="font-semibold text-white mb-4">Stay Inspired</h3>
              <form className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full rounded-full border border-white/10 bg-black/50 px-4 py-3 text-sm text-white focus:border-orange-500 focus:outline-none"
                />
                <button type="submit" className="flex items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-black transition hover:bg-orange-400">
                  Subscribe <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
            <div className="flex gap-4">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a key={social.label} href={social.href} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition hover:border-orange-500 hover:text-orange-400 hover:shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mx-auto max-w-7xl px-6 py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© 2026 The Burger House. All rights reserved.</p>
          <p>3D Model: Cheeseburger by Poly by Google (CC-BY) via Poly Pizza</p>
        </div>
      </footer>
    </>
  );
};
