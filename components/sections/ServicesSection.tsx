"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Wind, Layers, PenTool, Microscope, FileText, BookOpen, FlaskConical, GraduationCap } from "lucide-react";

const services = [
  {
    num: "01",
    icon: <Wind className="w-5 h-5" />,
    title: "CFD Analysis",
    sub: "Computational Fluid Dynamics",
    body: "Full-spectrum CFD simulation for internal and external flow problems — aerodynamic analysis, heat transfer, turbulence modelling, and validated reporting.",
    deliverables: ["Velocity & pressure contour plots", "Turbulence visualisation", "Drag & lift coefficients", "Validated technical report"],
    featured: true,
  },
  {
    num: "02",
    icon: <Layers className="w-5 h-5" />,
    title: "FEA Analysis",
    sub: "Finite Element Analysis",
    body: "Static structural, modal, thermal, and explicit dynamics FEA. Stress, deformation, and safety factor evaluation for components and complete assemblies.",
    deliverables: ["Stress & strain distribution maps", "Deformation analysis", "Factor of safety results", "FEA simulation report"],
    featured: true,
  },
  {
    num: "03",
    icon: <PenTool className="w-5 h-5" />,
    title: "Engineering Design",
    sub: "CAD & Conceptual Design",
    body: "3D modelling, assembly design, and conceptual engineering work using CATIA, SolidWorks, and Creo. Simulation-ready geometry with clean technical drawings.",
    deliverables: ["3D CAD models", "Assembly drawings", "2D technical drawings", "Design documentation"],
    featured: false,
  },
  {
    num: "04",
    icon: <Microscope className="w-5 h-5" />,
    title: "Research Support",
    sub: "Academic & Technical Research",
    body: "Literature review, methodology design, data analysis, and result interpretation across all engineering disciplines for academic and industrial clients.",
    deliverables: ["Literature review", "Methodology chapter", "Data analysis", "Research report"],
    featured: false,
  },
  {
    num: "05",
    icon: <FileText className="w-5 h-5" />,
    title: "Thesis & Dissertation",
    sub: "Academic Writing Support",
    body: "End-to-end thesis and dissertation support — plagiarism-free, properly referenced, and formatted to institutional standards.",
    deliverables: ["Complete chapter writing", "Plagiarism-free content", "APA / Harvard referencing", "Review & revision"],
    featured: true,
  },
  {
    num: "06",
    icon: <BookOpen className="w-5 h-5" />,
    title: "Technical Reports",
    sub: "Lab Reports & Assignments",
    body: "Professionally written lab reports, assignment solutions, and technical documents with clear structure, verified calculations, and proper citations.",
    deliverables: ["Lab report writing", "Assignment solutions", "Calculation documentation", "Technical formatting"],
    featured: false,
  },
  {
    num: "07",
    icon: <FlaskConical className="w-5 h-5" />,
    title: "Simulation Projects",
    sub: "End-to-End Simulation",
    body: "Complete project delivery from geometry and meshing through to post-processing and comprehensive results reporting — all in one engagement.",
    deliverables: ["Geometry & mesh setup", "Solver configuration", "Post-processing outputs", "Complete project report"],
    featured: false,
  },
  {
    num: "08",
    icon: <GraduationCap className="w-5 h-5" />,
    title: "Engineering Tutoring",
    sub: "Personalised Online Teaching",
    body: "One-to-one and small-group online tuition across Mathematics, Physics, and Engineering subjects at undergraduate and postgraduate levels.",
    deliverables: ["Personalised lesson plans", "Problem-solving sessions", "Study materials", "Flexible scheduling"],
    featured: false,
  },
];

function ServiceCard({ s, index }: { s: (typeof services)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: (index % 4) * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="pro-card pro-card-hover p-6 cursor-default group relative overflow-hidden flex flex-col"
    >
      {/* Featured badge */}
      {s.featured && (
        <div className="absolute top-0 right-0 px-2.5 py-1 bg-[#1F2A44] text-white text-[9px] font-[family-name:var(--font-ibm-plex-mono)] tracking-widest uppercase">
          In Demand
        </div>
      )}

      {/* Number */}
      <div className="font-[family-name:var(--font-cormorant)] text-3xl font-600 text-[#D9D9D9] leading-none mb-4 select-none">
        {s.num}
      </div>

      {/* Icon + sub */}
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 border border-[#D9D9D9] group-hover:border-[#C88A3D] flex items-center justify-center text-[#4B6382] group-hover:text-[#C88A3D] transition-colors duration-300 flex-shrink-0">
          {s.icon}
        </div>
        <span className="text-[10px] font-[family-name:var(--font-ibm-plex-mono)] tracking-widest text-[#8A9BAA] uppercase leading-tight">
          {s.sub}
        </span>
      </div>

      <h3 className="font-[family-name:var(--font-source-sans)] text-lg font-700 text-[#1F2A44] mb-2.5 leading-snug">
        {s.title}
      </h3>
      <p className="text-sm text-[#5A6A7A] leading-relaxed mb-4 flex-1">{s.body}</p>

      {/* Deliverables */}
      <div className="border-t border-[#D9D9D9] pt-4">
        <div className="text-[9px] font-[family-name:var(--font-ibm-plex-mono)] tracking-widest text-[#8A9BAA] uppercase mb-2">
          Deliverables
        </div>
        <ul className="space-y-1">
          {s.deliverables.map((d) => (
            <li key={d} className="flex items-start gap-2 text-xs text-[#5A6A7A]">
              <span className="w-1 h-1 rounded-full bg-[#C88A3D] mt-1.5 flex-shrink-0" />
              {d}
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C88A3D] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}

export default function ServicesSection() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-[#F7F6F3] relative eng-grid">
      <div className="absolute top-0 left-0 right-0 h-px bg-[#D9D9D9]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-[#C88A3D]" />
            <span className="section-label">/ Services</span>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-end">
            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl font-600 text-[#1F2A44] mb-4">
                What I{" "}
                <span className="italic">Deliver</span>
              </h2>
              <p className="text-[#5A6A7A] text-lg leading-relaxed">
                From first principles to final report — precision engineering services for academic, research, and industrial requirements.
              </p>
            </div>
            <div className="flex md:justify-end">
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#1F2A44] hover:bg-[#C88A3D] text-white text-sm font-600 font-[family-name:var(--font-source-sans)] tracking-wider uppercase transition-colors duration-300 cursor-pointer"
              >
                Request a Consultation
              </button>
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#D9D9D9]">
          {services.map((s, i) => (
            <ServiceCard key={s.num} s={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
