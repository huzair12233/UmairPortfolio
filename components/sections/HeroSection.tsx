"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

function TechnicalIllustration() {
  return (
    <div className="relative w-full">
      {/* Drawing border — engineering title-block frame */}
      <div className="border border-[#D9D9D9] p-3 relative bg-white">
        {/* Corner registration marks */}
        {["top-2 left-2", "top-2 right-2", "bottom-2 left-2", "bottom-2 right-2"].map((pos, i) => (
          <div key={i} className={`absolute ${pos} w-3 h-3 crosshair`} />
        ))}

        {/* Project image — framed like a technical drawing plate */}
        <div className="relative w-full aspect-[4/3] overflow-hidden border border-[#D9D9D9]">
          <Image
            src="/projects/project1/img-4.jpg"
            alt="Blended Wing Body Aircraft — CFD Analysis, ANSYS Fluent"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 55vw"
          />
          {/* Subtle vignette at edges so it feels framed */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ boxShadow: "inset 0 0 32px rgba(247,246,243,0.35)" }} />
        </div>

        {/* Title block strip — below the image */}
        <div className="mt-0 flex items-center justify-between border-t border-[#D9D9D9] pt-2">
          <div className="flex items-center gap-3">
            <span className="text-[9px] font-[family-name:var(--font-ibm-plex-mono)] text-[#8A9BAA] tracking-widest uppercase">
              Drawing Ref: AE-BWB-001
            </span>
            <span className="h-3 w-px bg-[#D9D9D9]" />
            <span className="text-[9px] font-[family-name:var(--font-ibm-plex-mono)] text-[#1F2A44] font-500 tracking-widest uppercase">
              BWB Aircraft — CFD Analysis
            </span>
          </div>
          <span className="text-[9px] font-[family-name:var(--font-ibm-plex-mono)] text-[#8A9BAA] tracking-widest">
            Scale NTS
          </span>
        </div>
      </div>

      {/* Floating annotation badges */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute -top-3 -right-3 bg-white border border-[#D9D9D9] px-3 py-1.5 shadow-sm"
      >
        <span className="text-[10px] font-[family-name:var(--font-ibm-plex-mono)] text-[#C88A3D] tracking-widest">
          ANSYS FLUENT
        </span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute -bottom-3 -left-3 bg-white border border-[#D9D9D9] px-3 py-1.5 shadow-sm"
      >
        <span className="text-[10px] font-[family-name:var(--font-ibm-plex-mono)] text-[#4B6382] tracking-widest">
          L/D OPTIMISATION
        </span>
      </motion.div>
    </div>
  );
}

export default function HeroSection() {
  const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#F7F6F3] eng-grid-fine">
      {/* Top rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[#D9D9D9]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* ── Left: copy ───────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="flex items-center gap-3 mb-7"
            >
              <div className="w-6 h-px bg-[#C88A3D]" />
              <span className="section-label text-[#4B6382]">Engineering Portfolio</span>
              <div className="w-6 h-px bg-[#C88A3D]" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-[family-name:var(--font-cormorant)] text-5xl sm:text-6xl lg:text-7xl font-600 text-[#1F2A44] leading-[1.06] mb-5"
            >
              Engineering
              <br />
              Solutions
              <br />
              Through{" "}
              <span className="italic text-bronze-gradient">Simulation</span>
            </motion.h1>

            {/* Descriptor */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-[#5A6A7A] text-lg leading-relaxed mb-8 max-w-md"
            >
              Thermal &amp; Aeronautical Engineer specialising in CFD, FEA, and aircraft design.
              Delivering precision simulation and research services to clients globally.
            </motion.p>

            {/* Credentials strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="flex flex-wrap gap-x-6 gap-y-2 mb-10 text-xs font-[family-name:var(--font-ibm-plex-mono)] text-[#8A9BAA] tracking-widest uppercase"
            >
              {["M.Tech Thermal Eng.", "B.Tech Aeronautical Eng.", "5+ Yrs. Teaching", "ANSYS Specialist"].map((c) => (
                <span key={c} className="flex items-center gap-1.5">
                  <span className="w-1 h-1 bg-[#C88A3D] rounded-full flex-shrink-0" />
                  {c}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => go("#projects")}
                className="group flex items-center gap-2 px-7 py-3.5 bg-[#1F2A44] hover:bg-[#C88A3D] text-white text-sm font-600 font-[family-name:var(--font-source-sans)] tracking-wider uppercase transition-colors duration-300 cursor-pointer"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button
                onClick={() => go("#contact")}
                className="flex items-center gap-2 px-7 py-3.5 border border-[#1F2A44] text-[#1F2A44] hover:bg-[#1F2A44] hover:text-white text-sm font-600 font-[family-name:var(--font-source-sans)] tracking-wider uppercase transition-all duration-300 cursor-pointer"
              >
                Discuss a Project
              </button>
            </motion.div>
          </motion.div>

          {/* ── Right: technical illustration ─────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="order-1 lg:order-2 relative"
          >
            <TechnicalIllustration />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
          onClick={() => go("#about")}
        >
          <span className="section-label group-hover:text-[#1F2A44] transition-colors">Scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4 text-[#8A9BAA] group-hover:text-[#1F2A44] transition-colors" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
