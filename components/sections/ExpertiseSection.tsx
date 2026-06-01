"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Wind, Layers, PenTool, Thermometer, Plane, FlaskConical, GraduationCap, BarChart3 } from "lucide-react";

const expertise = [
  { num: "01", icon: <Wind className="w-5 h-5" />,        title: "Computational\nFluid Dynamics",  short: "CFD",      tools: ["ANSYS Fluent", "ANSYS CFX", "k-ε / k-ω SST"] },
  { num: "02", icon: <Layers className="w-5 h-5" />,      title: "Finite Element\nAnalysis",        short: "FEA",      tools: ["ANSYS Static", "ANSYS APDL", "Abaqus"] },
  { num: "03", icon: <PenTool className="w-5 h-5" />,     title: "Engineering\nDesign & CAD",       short: "CAD",      tools: ["CATIA", "SolidWorks", "Creo / ProE"] },
  { num: "04", icon: <Thermometer className="w-5 h-5" />, title: "Thermal\nEngineering",            short: "THERM",    tools: ["MATLAB", "Cycle Analysis", "Heat Transfer"] },
  { num: "05", icon: <Plane className="w-5 h-5" />,       title: "Aeronautical\nEngineering",       short: "AERO",     tools: ["XFLR5", "Raymer Method", "FAR 25"] },
  { num: "06", icon: <FlaskConical className="w-5 h-5" />,title: "Research &\nTechnical Writing",   short: "RESEARCH", tools: ["Thesis Writing", "Literature Review", "IEEE"] },
  { num: "07", icon: <BarChart3 className="w-5 h-5" />,   title: "Fire Safety\nSimulation",         short: "FIRE",     tools: ["PyroSim", "FDS"] },
  { num: "08", icon: <GraduationCap className="w-5 h-5" />,title: "Technical\nEducation",           short: "EDU",      tools: ["Engineering Maths", "Physics", "Fluid Mech."] },
];

function Card({ item, index }: { item: (typeof expertise)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white border-r border-b border-[#D9D9D9] p-5 group cursor-default hover:bg-[#F7F6F3] transition-colors duration-200 relative"
    >
      {/* Top row: icon + label */}
      <div className="flex items-center justify-between mb-3">
        <div className="w-8 h-8 border border-[#D9D9D9] group-hover:border-[#C88A3D] flex items-center justify-center text-[#4B6382] group-hover:text-[#C88A3D] transition-colors duration-250">
          {item.icon}
        </div>
        <span className="text-[9px] font-[family-name:var(--font-ibm-plex-mono)] tracking-[0.16em] text-[#8A9BAA] uppercase">
          {item.short}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-[family-name:var(--font-source-sans)] text-[13.5px] font-700 text-[#1F2A44] leading-snug mb-3 whitespace-pre-line">
        {item.title}
      </h3>

      {/* Tool tags only */}
      <div className="flex flex-wrap gap-1.5">
        {item.tools.map((t) => (
          <span key={t} className="px-1.5 py-0.5 text-[10px] font-[family-name:var(--font-ibm-plex-mono)] border border-[#D9D9D9] text-[#8A9BAA] bg-[#F7F6F3] group-hover:border-[rgba(200,138,61,0.3)] transition-colors">
            {t}
          </span>
        ))}
      </div>

      {/* Hover bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C88A3D] opacity-0 group-hover:opacity-100 transition-opacity duration-250" />
    </motion.div>
  );
}

export default function ExpertiseSection() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section id="expertise" className="section-padding bg-[#F7F6F3] eng-grid relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-[#D9D9D9]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-[#C88A3D]" />
            <span className="section-label">/ Core Competencies</span>
          </div>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl font-600 text-[#1F2A44] mb-3">
            Areas of{" "}
            <span className="italic">Specialisation</span>
          </h2>
          <p className="text-[#5A6A7A] text-lg max-w-lg">
            Eight engineering disciplines — from simulation and design through to research and education.
          </p>
        </motion.div>

        {/* Compact 4-col grid */}
        <div className="border-t border-l border-[#D9D9D9] grid grid-cols-2 sm:grid-cols-4">
          {expertise.map((item, i) => (
            <Card key={item.num} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
