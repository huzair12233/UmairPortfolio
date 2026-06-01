"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const groups = [
  {
    category: "Simulation",
    ref: "SIM",
    tools: [
      { name: "ANSYS Fluent",           level: 95, note: "CFD — Internal & External Flows"  },
      { name: "ANSYS CFX",              level: 88, note: "CFD — Turbomachinery"              },
      { name: "ANSYS Static Structural", level: 90, note: "FEA — Stress & Deformation"       },
      { name: "ANSYS APDL",             level: 84, note: "FEA — Parametric Analysis"         },
      { name: "ANSYS Explicit Dynamics", level: 80, note: "FEA — Impact & Crash"             },
      { name: "Abaqus",                 level: 78, note: "FEA — Advanced Nonlinear"          },
      { name: "Hypermesh",              level: 75, note: "Pre-processing & Meshing"           },
    ],
  },
  {
    category: "Design & CAD",
    ref: "CAD",
    tools: [
      { name: "SolidWorks",  level: 92, note: "3D Modelling & Assembly"           },
      { name: "CATIA",       level: 90, note: "Aerospace-grade Surface Design"    },
      { name: "Creo / ProE", level: 80, note: "Parametric Modelling"              },
      { name: "AutoCAD",     level: 85, note: "2D Drafting & Technical Drawings"  },
      { name: "MasterCAM",   level: 70, note: "CNC Toolpath Programming"          },
    ],
  },
  {
    category: "Analysis & Research",
    ref: "ANLY",
    tools: [
      { name: "MATLAB",                  level: 88, note: "Numerical Analysis & Scripting"  },
      { name: "XFLR5",                   level: 82, note: "Low-speed Aerodynamics"          },
      { name: "PyroSim",                 level: 78, note: "Fire Dynamics Modelling"         },
      { name: "Fire Dynamics Simulator", level: 75, note: "FDS — Smoke Spread Analysis"     },
    ],
  },
];

function ProficiencyBar({ level, delay }: { level: number; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="flex items-center gap-3 flex-1 min-w-0">
      <div className="flex-1 h-px bg-[#D9D9D9] relative overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-0 top-0 bottom-0 bg-[#1F2A44]"
        />
      </div>
      <span className="text-[10px] font-[family-name:var(--font-ibm-plex-mono)] text-[#8A9BAA] w-6 text-right flex-shrink-0">
        {level}
      </span>
    </div>
  );
}

function SoftwareGroup({ group, groupIndex }: { group: (typeof groups)[0]; groupIndex: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
      className="bg-white border border-[#D9D9D9] relative"
    >
      {/* Group header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#D9D9D9]">
        <div className="flex items-center gap-3">
          <div className="w-0.5 h-5 bg-[#C88A3D]" />
          <h3 className="font-[family-name:var(--font-source-sans)] text-sm font-700 text-[#1F2A44] tracking-wider uppercase">
            {group.category}
          </h3>
        </div>
        <span className="text-[10px] font-[family-name:var(--font-ibm-plex-mono)] text-[#8A9BAA] tracking-widest border border-[#D9D9D9] px-2 py-0.5">
          {group.ref}
        </span>
      </div>

      {/* Tools table */}
      <div className="divide-y divide-[#D9D9D9]/50">
        {group.tools.map((tool, ti) => (
          <div key={tool.name} className="flex items-center gap-4 px-6 py-3 hover:bg-[#F7F6F3] transition-colors group">
            <div className="w-40 flex-shrink-0">
              <div className="text-sm font-[family-name:var(--font-source-sans)] font-500 text-[#1F2A44] group-hover:text-[#C88A3D] transition-colors truncate">
                {tool.name}
              </div>
              <div className="text-[10px] font-[family-name:var(--font-ibm-plex-mono)] text-[#8A9BAA] mt-0.5 truncate">
                {tool.note}
              </div>
            </div>
            <ProficiencyBar level={tool.level} delay={groupIndex * 0.08 + ti * 0.05} />
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-end gap-2 px-6 py-3 border-t border-[#D9D9D9] bg-[#F7F6F3]">
        <span className="text-[9px] font-[family-name:var(--font-ibm-plex-mono)] text-[#8A9BAA] tracking-widest uppercase">
          Proficiency Index  0 ————————— 100
        </span>
      </div>
    </motion.div>
  );
}

export default function SoftwareSection() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section id="software" className="section-padding bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-[#D9D9D9]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 mb-14 items-end">
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-[#C88A3D]" />
              <span className="section-label">/ Software Proficiency</span>
            </div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl font-600 text-[#1F2A44] mb-4">
              Engineering{" "}
              <span className="italic">Toolkit</span>
            </h2>
            <p className="text-[#5A6A7A] text-lg leading-relaxed">
              Industry-standard simulation, design, and analysis platforms — applied across hundreds of real engineering projects.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-3 gap-4"
          >
            {[
              { n: "16", label: "Software Platforms" },
              { n: "3", label: "Specialisation Groups" },
              { n: "95%", label: "Peak Proficiency" },
            ].map(({ n, label }) => (
              <div key={label} className="border border-[#D9D9D9] p-4 text-center bg-[#F7F6F3]">
                <div className="font-[family-name:var(--font-cormorant)] text-3xl font-600 text-[#C88A3D] leading-tight mb-1">
                  {n}
                </div>
                <div className="text-[10px] font-[family-name:var(--font-ibm-plex-mono)] text-[#8A9BAA] tracking-widest uppercase leading-tight">
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Groups */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {groups.map((g, i) => (
            <SoftwareGroup key={g.ref} group={g} groupIndex={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
