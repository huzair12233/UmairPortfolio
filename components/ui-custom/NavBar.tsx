"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About",     href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Software",  href: "#software" },
  { label: "Services",  href: "#services" },
  { label: "Projects",  href: "#projects" },
  { label: "Contact",   href: "#contact" },
];

export default function NavBar() {
  const [scrolled, setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive]        = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[40] transition-all duration-400 ${
          scrolled
            ? "bg-white border-b border-[#D9D9D9] shadow-[0_1px_8px_rgba(31,42,68,0.06)]"
            : "bg-[#F7F6F3]/95 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="flex items-center gap-3 group cursor-pointer"
            >
              {/* Monogram mark */}
              <div className="w-8 h-8 flex items-center justify-center border border-[#1F2A44] group-hover:bg-[#1F2A44] transition-colors duration-300">
                <span className="text-xs font-bold font-[family-name:var(--font-cormorant)] text-[#1F2A44] group-hover:text-white transition-colors duration-300 leading-none tracking-wider">
                  U
                </span>
              </div>
              <span className="hidden sm:block font-[family-name:var(--font-source-sans)] text-xs font-600 tracking-[0.18em] uppercase text-[#1F2A44]">
                Umair Ahmed Ansari
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map(({ label, href }) => {
                const isActive = active === href.slice(1);
                return (
                  <button
                    key={href}
                    onClick={() => go(href)}
                    className={`relative px-4 py-2 text-[11px] font-[family-name:var(--font-source-sans)] font-600 tracking-[0.14em] uppercase transition-colors duration-200 cursor-pointer ${
                      isActive ? "text-[#1F2A44]" : "text-[#5A6A7A] hover:text-[#1F2A44]"
                    }`}
                  >
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-4 right-4 h-px bg-[#C88A3D]"
                        transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* CTA + mobile */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => go("#contact")}
                className="hidden sm:block px-5 py-2 text-[11px] font-600 font-[family-name:var(--font-source-sans)] tracking-[0.14em] uppercase bg-[#1F2A44] hover:bg-[#C88A3D] text-white transition-colors duration-300 cursor-pointer"
              >
                Get in Touch
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-[#5A6A7A] hover:text-[#1F2A44] transition-colors cursor-pointer"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 32, stiffness: 320 }}
            className="fixed inset-y-0 right-0 z-[39] w-72 bg-white border-l border-[#D9D9D9] flex flex-col pt-20 pb-8 px-6 shadow-xl"
          >
            {/* Section divider */}
            <div className="h-px bg-[#D9D9D9] mb-6" />
            <nav className="flex flex-col gap-0.5">
              {navLinks.map(({ label, href }, i) => (
                <motion.button
                  key={href}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => go(href)}
                  className="flex items-center justify-between px-3 py-3 text-sm font-[family-name:var(--font-source-sans)] font-500 text-[#5A6A7A] hover:text-[#1F2A44] hover:bg-[#F7F6F3] transition-all cursor-pointer text-left border-b border-[#D9D9D9]/60"
                >
                  {label}
                  <span className="text-[10px] font-[family-name:var(--font-ibm-plex-mono)] text-[#D9D9D9]">
                    0{i + 1}
                  </span>
                </motion.button>
              ))}
            </nav>
            <div className="mt-auto pt-6">
              <button
                onClick={() => go("#contact")}
                className="w-full py-3 text-sm font-600 font-[family-name:var(--font-source-sans)] tracking-wider uppercase bg-[#1F2A44] hover:bg-[#C88A3D] text-white transition-colors duration-300 cursor-pointer"
              >
                Get in Touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-[38] bg-[#1F2A44]/20 lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
