"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

function useCountUp(target: number, duration = 2000, active = false) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const t = setInterval(() => {
      start += step;
      if (start >= target) { setN(target); clearInterval(t); }
      else setN(Math.floor(start));
    }, 16);
    return () => clearInterval(t);
  }, [target, duration, active]);
  return n;
}

const metrics = [
  { value: 5,   suffix: "+", label: "Years Teaching",     sub: "Online engineering education"      },
  { value: 50,  suffix: "+", label: "CFD Projects",        sub: "ANSYS Fluent & CFX"                },
  { value: 30,  suffix: "+", label: "FEA Simulations",     sub: "Static, modal & explicit dynamics" },
  { value: 100, suffix: "+", label: "Reports Delivered",   sub: "Technical & academic writing"      },
  { value: 200, suffix: "+", label: "Students Mentored",   sub: "Across 10+ countries"              },
  { value: 6,   suffix: "",  label: "Engineering Domains", sub: "Aero · CFD · FEA · Thermal · Design · Fire" },
];

function Stat({ m, i }: { m: (typeof metrics)[0]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const n = useCountUp(m.value, 2000, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.07 }}
      className="text-center px-4 py-8 border-r border-[rgba(255,255,255,0.08)] last:border-r-0"
    >
      <div className="font-[family-name:var(--font-cormorant)] text-5xl font-600 text-[#C88A3D] leading-none mb-2">
        {n}{m.suffix}
      </div>
      <div className="text-sm font-600 font-[family-name:var(--font-source-sans)] text-white tracking-wide mb-1.5">
        {m.label}
      </div>
      <div className="text-xs font-[family-name:var(--font-ibm-plex-mono)] text-[rgba(255,255,255,0.45)] tracking-widest leading-relaxed">
        {m.sub}
      </div>
    </motion.div>
  );
}

export default function MetricsSection() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section id="metrics" className="relative bg-[#1F2A44] overflow-hidden">
      {/* Subtle background grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-6 h-px bg-[#C88A3D]" />
            <span className="text-[10px] font-[family-name:var(--font-ibm-plex-mono)] tracking-[0.22em] uppercase text-[rgba(255,255,255,0.4)]">
              By the Numbers
            </span>
            <div className="w-6 h-px bg-[#C88A3D]" />
          </div>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl font-600 text-white mb-4">
            Measured{" "}
            <span className="italic text-[#C88A3D]">Impact</span>
          </h2>
          <p className="text-[rgba(255,255,255,0.5)] text-lg max-w-xl mx-auto">
            Quantified across simulation projects, academic writing, and engineering education.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="border border-[rgba(255,255,255,0.08)]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y divide-[rgba(255,255,255,0.08)] md:divide-y-0">
            {metrics.map((m, i) => <Stat key={m.label} m={m} i={i} />)}
          </div>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 text-center text-xs font-[family-name:var(--font-ibm-plex-mono)] tracking-[0.2em] uppercase text-[rgba(255,255,255,0.25)]"
        >
          ANSYS Fluent · ANSYS CFX · Abaqus · CATIA · SolidWorks · MATLAB · PyroSim
        </motion.p>
      </div>
    </section>
  );
}
