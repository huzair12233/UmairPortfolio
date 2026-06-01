"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

/* ─── Technical Aircraft Profile Illustration ────────────────────────────
   Styled after AIAA / Boeing / Airbus 3-view technical drawings.
   Clean line work, no fills, measurement annotations, station markers.
   ─────────────────────────────────────────────────────────────────────── */
function TechnicalIllustration() {
  return (
    <div className="relative w-full">
      {/* Drawing border — like a technical drawing title block */}
      <div className="border border-[#D9D9D9] p-4 relative">
        {/* Corner marks */}
        {["top-2 left-2", "top-2 right-2", "bottom-2 left-2", "bottom-2 right-2"].map((pos, i) => (
          <div key={i} className={`absolute ${pos} w-3 h-3 crosshair`} />
        ))}

        <svg
          viewBox="0 0 560 340"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          aria-label="Technical engineering drawing: airfoil cross-section with CFD annotations"
        >
          {/* Fine background grid */}
          <defs>
            <pattern id="smallGrid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="#D9D9D9" strokeWidth="0.3" />
            </pattern>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect width="40" height="40" fill="url(#smallGrid)" />
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D9D9D9" strokeWidth="0.6" />
            </pattern>
            <marker id="arrow-navy" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 z" fill="#1F2A44" />
            </marker>
            <marker id="arrow-bronze" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 z" fill="#C88A3D" />
            </marker>
            <marker id="arrow-steel" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 z" fill="#4B6382" />
            </marker>
            <marker id="arrow-navy-rev" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto-start-reverse">
              <path d="M0,0 L0,6 L6,3 z" fill="#1F2A44" />
            </marker>
            <marker id="arrow-bronze-rev" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto-start-reverse">
              <path d="M0,0 L0,6 L6,3 z" fill="#C88A3D" />
            </marker>
          </defs>

          <rect width="560" height="340" fill="url(#grid)" />

          {/* ── Airfoil cross-section (NACA-style) ─────────────────── */}
          {/* Upper surface */}
          <path
            d="M 60 170
               C 80 145, 120 118, 180 108
               C 240 98,  320 100, 400 112
               C 440 118, 470 128, 490 140
               C 505 148, 510 158, 510 170"
            stroke="#1F2A44"
            strokeWidth="2.2"
            fill="none"
          />
          {/* Lower surface */}
          <path
            d="M 60 170
               C 80 188, 120 198, 180 202
               C 240 206, 320 204, 400 196
               C 440 191, 470 182, 490 175
               C 505 171, 510 170, 510 170"
            stroke="#1F2A44"
            strokeWidth="2.2"
            fill="none"
          />
          {/* Fill the airfoil with very light wash */}
          <path
            d="M 60 170
               C 80 145, 120 118, 180 108
               C 240 98,  320 100, 400 112
               C 440 118, 470 128, 490 140
               C 505 148, 510 158, 510 170
               C 510 170, 505 171, 490 175
               C 470 182, 440 191, 400 196
               C 320 204, 240 206, 180 202
               C 120 198, 80 188, 60 170 Z"
            fill="rgba(31,42,68,0.04)"
          />

          {/* Chord line */}
          <line x1="60" y1="170" x2="510" y2="170" stroke="#4B6382" strokeWidth="0.8" strokeDasharray="6,4" />

          {/* Leading edge circle detail */}
          <circle cx="60" cy="170" r="5" stroke="#C88A3D" strokeWidth="1.4" fill="none" />
          <circle cx="60" cy="170" r="1.5" fill="#C88A3D" />

          {/* Trailing edge point */}
          <circle cx="510" cy="170" r="2" fill="#1F2A44" />

          {/* ── Streamlines (CFD style) ────────────────────────────── */}
          {[
            { y: 95,  cp1x: 200, cp1y: 72,  cp2x: 380, cp2y: 78,  ex: 530, ey: 88  },
            { y: 80,  cp1x: 200, cp1y: 58,  cp2x: 380, cp2y: 63,  ex: 530, ey: 73  },
            { y: 65,  cp1x: 200, cp1y: 48,  cp2x: 380, cp2y: 50,  ex: 530, ey: 60  },
            { y: 215, cp1x: 200, cp1y: 228, cp2x: 380, cp2y: 225, ex: 530, ey: 216 },
            { y: 230, cp1x: 200, cp1y: 244, cp2x: 380, cp2y: 240, ex: 530, ey: 231 },
            { y: 245, cp1x: 200, cp1y: 258, cp2x: 380, cp2y: 254, ex: 530, ey: 246 },
          ].map(({ y, cp1x, cp1y, cp2x, cp2y, ex, ey }, i) => (
            <path
              key={i}
              d={`M 30 ${y} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${ex} ${ey}`}
              stroke="#4B6382"
              strokeWidth="0.7"
              fill="none"
              opacity={0.35}
            />
          ))}

          {/* ── Dimension lines ────────────────────────────────────── */}

          {/* Chord length dimension */}
          <line x1="60" y1="280" x2="510" y2="280" stroke="#1F2A44" strokeWidth="0.9"
            markerStart="url(#arrow-navy-rev)" markerEnd="url(#arrow-navy)" />
          <line x1="60" y1="210" x2="60" y2="286" stroke="#1F2A44" strokeWidth="0.7" strokeDasharray="3,3" />
          <line x1="510" y1="175" x2="510" y2="286" stroke="#1F2A44" strokeWidth="0.7" strokeDasharray="3,3" />
          <text x="285" y="295" textAnchor="middle" fill="#1F2A44"
            fontSize="9" fontFamily="IBM Plex Mono, monospace">
            Chord  c = 450 mm
          </text>

          {/* Thickness dimension */}
          <line x1="220" y1="100" x2="220" y2="205" stroke="#C88A3D" strokeWidth="0.9"
            markerStart="url(#arrow-bronze-rev)" markerEnd="url(#arrow-bronze)" />
          <text x="228" y="157" fill="#C88A3D" fontSize="8" fontFamily="IBM Plex Mono, monospace">
            t/c = 12%
          </text>

          {/* ── Callout annotations ────────────────────────────────── */}
          {/* Stagnation point */}
          <line x1="60" y1="170" x2="20" y2="140" stroke="#C88A3D" strokeWidth="0.9" />
          <circle cx="20" cy="140" r="1.5" fill="#C88A3D" />
          <text x="22" y="134" fill="#C88A3D" fontSize="7.5" fontFamily="IBM Plex Mono, monospace">
            Stagnation Pt.
          </text>

          {/* Max thickness */}
          <line x1="220" y1="100" x2="185" y2="68" stroke="#4B6382" strokeWidth="0.9" />
          <circle cx="185" cy="68" r="1.5" fill="#4B6382" />
          <text x="108" y="62" fill="#4B6382" fontSize="7.5" fontFamily="IBM Plex Mono, monospace">
            t_max @ x/c=0.30
          </text>

          {/* Trailing edge */}
          <line x1="510" y1="170" x2="535" y2="148" stroke="#4B6382" strokeWidth="0.9" />
          <circle cx="535" cy="148" r="1.5" fill="#4B6382" />
          <text x="520" y="143" fill="#4B6382" fontSize="7.5" fontFamily="IBM Plex Mono, monospace">
            T.E.
          </text>

          {/* ── Station markers ────────────────────────────────────── */}
          {[0, 25, 50, 75, 100].map((pct, i) => {
            const x = 60 + (450 * pct) / 100;
            return (
              <g key={i}>
                <line x1={x} y1="162" x2={x} y2="178" stroke="#4B6382" strokeWidth="0.8" />
                <text x={x} y="188" textAnchor="middle" fill="#4B6382" fontSize="7" fontFamily="IBM Plex Mono, monospace">
                  {pct}
                </text>
              </g>
            );
          })}
          <text x="285" y="200" textAnchor="middle" fill="#4B6382" fontSize="7" fontFamily="IBM Plex Mono, monospace">
            x/c
          </text>

          {/* ── Title block (bottom right) ─────────────────────────── */}
          <rect x="370" y="298" width="180" height="36" stroke="#D9D9D9" strokeWidth="0.8" fill="white" fillOpacity="0.7" />
          <line x1="370" y1="308" x2="550" y2="308" stroke="#D9D9D9" strokeWidth="0.6" />
          <text x="376" y="305" fill="#8A9BAA" fontSize="6" fontFamily="IBM Plex Mono, monospace" letterSpacing="0.08em">
            DRAWING REF: AE-CFD-001
          </text>
          <text x="376" y="318" fill="#1F2A44" fontSize="7.5" fontFamily="IBM Plex Mono, monospace" fontWeight="500">
            NACA 2412  —  AIRFOIL SECTION
          </text>
          <text x="376" y="329" fill="#4B6382" fontSize="6.5" fontFamily="IBM Plex Mono, monospace">
            SCALE 1:1   REV. A   CFD ANALYSIS
          </text>

          {/* ── Inset: CFD mesh detail ─────────────────────────────── */}
          <rect x="30" y="298" width="90" height="36" stroke="#D9D9D9" strokeWidth="0.8" fill="white" fillOpacity="0.7" />
          <text x="36" y="306" fill="#8A9BAA" fontSize="6" fontFamily="IBM Plex Mono, monospace">
            DETAIL A — MESH
          </text>
          {/* Mesh lines (simplified) */}
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={i}>
              <line x1={36 + i * 16} y1="310" x2={36 + i * 16 + 8} y2="330" stroke="#4B6382" strokeWidth="0.5" opacity="0.5" />
              <line x1={36} y1={312 + i * 5} x2={114} y2={312 + i * 5} stroke="#4B6382" strokeWidth="0.4" opacity="0.4" />
            </g>
          ))}
          <path d="M 36 330 Q 60 315, 75 328 Q 90 310, 114 320" stroke="#C88A3D" strokeWidth="1" fill="none" />
        </svg>

        {/* Title block strip */}
        <div className="mt-2 flex items-center justify-between border-t border-[#D9D9D9] pt-2">
          <span className="text-[9px] font-[family-name:var(--font-ibm-plex-mono)] text-[#8A9BAA] tracking-widest uppercase">
            Aerospace Engineering Analysis
          </span>
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
              {["M.Tech Thermal Eng.", "B.Tech Mechanical Eng.", "5+ Yrs. Teaching", "ANSYS Specialist"].map((c) => (
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
