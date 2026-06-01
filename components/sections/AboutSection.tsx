"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const timeline = [
  {
    num: "01",
    period: "B.Tech",
    title: "Mechanical Engineering",
    sub: "Bachelor of Technology",
    body: "Foundational study in fluid mechanics, thermodynamics, machine design, manufacturing processes, and engineering mathematics. Built a strong base in analytical and computational methods across mechanical systems.",
    tags: ["Fluid Mechanics", "Thermodynamics", "Machine Design", "Engineering Mathematics"],
    color: "#1F2A44",
  },
  {
    num: "02",
    period: "M.Tech",
    title: "Thermal Engineering",
    sub: "Master of Technology",
    body: "Advanced specialisation in thermodynamic cycle analysis, heat transfer, energy systems, and computational thermal modelling. Research focused on propulsion thermodynamics and performance optimisation.",
    tags: ["Heat Transfer", "Thermodynamic Cycles", "Energy Systems", "Research Methods"],
    color: "#4B6382",
  },
  {
    num: "03",
    period: "5+ Yrs",
    title: "Engineering Education",
    sub: "Online Teaching & Mentoring",
    body: "Teaching Mathematics, Physics, and Engineering at undergraduate and graduate levels. Mentored students globally in CFD, FEA, and advanced engineering subjects through structured, personalised instruction.",
    tags: ["Mathematics", "Physics", "Mechanical Eng.", "Aeronautics"],
    color: "#C88A3D",
  },
  {
    num: "04",
    period: "Present",
    title: "Engineering Consultancy",
    sub: "Simulation & Research Services",
    body: "Delivering precision CFD, FEA, and design services to academic and industrial clients worldwide. Specialised in ANSYS-based simulation, technical reporting, research support, and thesis writing.",
    tags: ["CFD", "FEA", "Research", "Technical Writing"],
    color: "#1F2A44",
  },
];

function TimelineEntry({ item, index }: { item: (typeof timeline)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="grid md:grid-cols-[160px_1fr] gap-8 lg:gap-12 relative"
    >
      {/* Number + period column */}
      <div className="flex md:flex-col md:items-end gap-3 md:gap-2 md:pt-0.5">
        <span
          className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-600 leading-none"
          style={{ color: item.color }}
        >
          {item.num}
        </span>
        <div className="md:text-right">
          <div className="text-xs font-[family-name:var(--font-ibm-plex-mono)] tracking-widest text-[#8A9BAA] uppercase">
            {item.period}
          </div>
        </div>
      </div>

      {/* Content column */}
      <div className="border-l border-[#D9D9D9] pl-8 pb-12 relative">
        {/* Timeline dot */}
        <div
          className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 bg-white"
          style={{ borderColor: item.color }}
        />

        <div className="text-xs font-[family-name:var(--font-source-sans)] font-600 tracking-wider uppercase text-[#8A9BAA] mb-1.5">
          {item.sub}
        </div>
        <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-600 text-[#1F2A44] mb-3">
          {item.title}
        </h3>
        <p className="text-[#5A6A7A] leading-relaxed mb-4 max-w-prose text-base">{item.body}</p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-[10px] font-[family-name:var(--font-ibm-plex-mono)] tracking-widest uppercase border text-[#5A6A7A] border-[#D9D9D9] bg-[#F7F6F3]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function AboutSection() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-white relative">
      {/* Top rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[#D9D9D9]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-[#C88A3D]" />
            <span className="section-label">/ Background</span>
          </div>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl lg:text-6xl font-600 text-[#1F2A44] mb-5">
            Academic &amp; Professional
            <br />
            <span className="italic">Foundation</span>
          </h2>
          <p className="text-[#5A6A7A] text-lg max-w-xl leading-relaxed">
            M.Tech in Thermal Engineering, B.Tech in Mechanical Engineering — combining strong technical
            foundations with five years of teaching experience and active engineering consultancy.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl">
          {timeline.map((item, i) => (
            <TimelineEntry key={item.num} item={item} index={i} />
          ))}
        </div>

        {/* Closing bio */}
        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-8 max-w-2xl border-l-[3px] border-[#C88A3D] pl-6 py-2"
        >
          <p className="font-[family-name:var(--font-cormorant)] text-xl font-400 italic text-[#1F2A44] leading-relaxed">
            &ldquo;Rigorous methodology, validated results, and clear technical communication
            — applied to every project regardless of scale.&rdquo;
          </p>
          <cite className="block mt-3 text-xs font-[family-name:var(--font-ibm-plex-mono)] tracking-widest text-[#8A9BAA] uppercase not-italic">
            — Umair Ansari · M.Tech Thermal Engineering · B.Tech Mechanical Engineering
          </cite>
        </motion.blockquote>
      </div>
    </section>
  );
}
