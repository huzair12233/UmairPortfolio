"use client";

import { motion } from "framer-motion";
import { ArrowUp, Mail, Phone } from "lucide-react";

const EMAIL = "umairansari111@gmail.com";
const WHATSAPP = "+91 81432 26990";
const WHATSAPP_LINK = "https://wa.me/918143226990";

const nav = [
  { label: "About",        href: "#about"        },
  { label: "Expertise",    href: "#expertise"    },
  { label: "Software",     href: "#software"     },
  { label: "Services",     href: "#services"     },
  { label: "Projects",     href: "#projects"     },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact",      href: "#contact"      },
];

const serviceList = [
  "CFD Analysis",
  "FEA Analysis",
  "Engineering Design",
  "Research Support",
  "Thesis & Dissertation",
  "Technical Reports",
  "Simulation Projects",
  "Engineering Tutoring",
];

const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

export default function FooterSection() {
  return (
    <footer className="relative bg-[#1F2A44] overflow-hidden">
      {/* Subtle top rule */}
      <div className="h-px bg-[rgba(255,255,255,0.08)]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-14 border-b border-[rgba(255,255,255,0.08)]">

          {/* Brand */}
          <div className="md:col-span-2">
            {/* Logo mark */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 border border-[rgba(255,255,255,0.3)] flex items-center justify-center">
                <span className="font-[family-name:var(--font-cormorant)] text-sm font-700 text-white leading-none">U</span>
              </div>
              <span className="font-[family-name:var(--font-source-sans)] text-xs font-600 tracking-[0.18em] uppercase text-white">
                Umair Ahmed Ansari
              </span>
            </div>
            <p className="text-sm text-[rgba(255,255,255,0.5)] leading-relaxed max-w-xs mb-6">
              Thermal &amp; Aeronautical Engineering consultancy specialising in CFD, FEA,
              aircraft design, and academic research support. Serving clients globally.
            </p>
            {/* Direct contact */}
            <div className="space-y-2.5 mb-5">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-[rgba(255,255,255,0.6)] hover:text-[#C88A3D] transition-colors cursor-pointer group">
                <Phone className="w-3.5 h-3.5 flex-shrink-0 group-hover:text-[#C88A3D]" />
                {WHATSAPP}
              </a>
              <a href={`mailto:${EMAIL}`}
                className="flex items-center gap-2.5 text-sm text-[rgba(255,255,255,0.6)] hover:text-[#C88A3D] transition-colors cursor-pointer group">
                <Mail className="w-3.5 h-3.5 flex-shrink-0 group-hover:text-[#C88A3D]" />
                {EMAIL}
              </a>
            </div>
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 border border-[rgba(200,138,61,0.4)] px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C88A3D]" />
              <span className="text-[10px] font-[family-name:var(--font-ibm-plex-mono)] tracking-widest text-[#C88A3D] uppercase">
                Available for Projects
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[10px] font-[family-name:var(--font-ibm-plex-mono)] tracking-[0.2em] uppercase text-[rgba(255,255,255,0.35)] mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {nav.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => go(href)}
                    className="text-sm text-[rgba(255,255,255,0.6)] hover:text-white transition-colors duration-200 cursor-pointer font-[family-name:var(--font-source-sans)] text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[10px] font-[family-name:var(--font-ibm-plex-mono)] tracking-[0.2em] uppercase text-[rgba(255,255,255,0.35)] mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {serviceList.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => go("#services")}
                    className="text-sm text-[rgba(255,255,255,0.6)] hover:text-white transition-colors duration-200 cursor-pointer font-[family-name:var(--font-source-sans)] text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between py-5">
          <div className="text-[10px] font-[family-name:var(--font-ibm-plex-mono)] text-[rgba(255,255,255,0.3)] tracking-widest">
            © {new Date().getFullYear()} Umair Ahmed Ansari Engineering. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex gap-4">
              {["CFD", "FEA", "CAD", "Research"].map((t) => (
                <span key={t} className="text-[9px] font-[family-name:var(--font-ibm-plex-mono)] text-[rgba(255,255,255,0.2)] tracking-widest uppercase">
                  {t}
                </span>
              ))}
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-8 h-8 border border-[rgba(255,255,255,0.15)] flex items-center justify-center text-[rgba(255,255,255,0.4)] hover:text-white hover:border-[rgba(255,255,255,0.4)] transition-all cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
