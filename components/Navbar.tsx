"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/10 bg-black/65 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8 lg:py-4">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-full px-3 py-2 text-white transition duration-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-orange-400"
          aria-label="The Burger House home"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-orange-500 to-yellow-400 shadow-[0_8px_30px_rgba(249,115,22,0.25)]">
            <Sparkles className="h-5 w-5 text-black" />
          </div>
          <div className="leading-tight">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-orange-300">The Burger House</p>
            <p className="text-xs text-gray-400">Luxury burgers</p>
          </div>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/10 px-2 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.2)] backdrop-blur-xl lg:flex">
          {links.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium tracking-[0.01em] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                  isActive
                    ? "text-white"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-linear-to-r from-orange-500/20 to-yellow-400/15" />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        <a
          href="https://wa.me/3170219387?text=I%20want%20to%20order%20now!"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full border border-orange-400/25 bg-linear-to-r from-orange-500 to-yellow-500 px-4 py-2 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(249,115,22,0.25)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_35px_rgba(249,115,22,0.35)] lg:inline-flex"
        >
          Reserve
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-orange-400 lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="mx-4 mb-4 rounded-3xl border border-white/10 bg-black/80 p-4 shadow-[0_20px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl">
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {links.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                    isActive ? "bg-orange-500/20 text-white" : "text-gray-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};
