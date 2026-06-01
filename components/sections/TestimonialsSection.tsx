"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Umair delivered a CFD thesis project on pipe flow analysis that was impeccably documented. Every result was compared against analytical values and the ANSYS setup was exactly right. Exceptional quality.",
    name: "Ahmed K.",
    role: "M.Sc. Student, Mechanical Engineering",
    country: "UAE",
    service: "CFD Analysis + Thesis",
    initials: "AK",
  },
  {
    id: 2,
    quote: "The aircraft design project exceeded expectations. The blended wing body analysis was thorough, properly referenced, and the report read like published research. I passed my final review without any revisions.",
    name: "Sarah M.",
    role: "B.Sc. Student, Aeronautical Engineering",
    country: "United Kingdom",
    service: "Aircraft Design",
    initials: "SM",
  },
  {
    id: 3,
    quote: "As a PhD researcher I needed precise ANSYS FEA work. Umair's mesh quality, boundary condition setup, and von Mises stress interpretation were all professional-grade. Will engage again for the next phase.",
    name: "Ravi P.",
    role: "PhD Researcher, Thermal Engineering",
    country: "India",
    service: "FEA Analysis",
    initials: "RP",
  },
  {
    id: 4,
    quote: "The wingtip device CFD study was comprehensive and the aerodynamic efficiency data was well-presented. Turnaround was fast and the technical report required no corrections before submission.",
    name: "Omar A.",
    role: "Engineering Consultant",
    country: "Saudi Arabia",
    service: "CFD Analysis + Report",
    initials: "OA",
  },
  {
    id: 5,
    quote: "Clear, patient, and extremely knowledgeable. Umair walked me through the MATLAB thermodynamic cycle analysis step by step. Best engineering tutor I have worked with at this level.",
    name: "Liu W.",
    role: "Graduate Student, Civil Engineering",
    country: "China",
    service: "Tutoring + MATLAB",
    initials: "LW",
  },
];

const CARDS_PER_PAGE = 3;

export default function TestimonialsSection() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: "-100px" });
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(testimonials.length / CARDS_PER_PAGE);
  const visible = testimonials.slice(page * CARDS_PER_PAGE, page * CARDS_PER_PAGE + CARDS_PER_PAGE);

  return (
    <section id="testimonials" className="section-padding bg-[#F7F6F3] eng-grid relative">
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
            <span className="section-label">/ Client Feedback</span>
          </div>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl font-600 text-[#1F2A44] mb-4">
            What Clients{" "}
            <span className="italic">Say</span>
          </h2>
        </motion.div>

        {/* Testimonial cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8"
          >
            {visible.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="bg-white border border-[#D9D9D9] p-6 relative"
              >
                {/* Opening quote mark */}
                <div className="font-[family-name:var(--font-cormorant)] text-6xl font-600 text-[#C88A3D] leading-none mb-3 select-none" aria-hidden>
                  &ldquo;
                </div>
                <blockquote className="text-sm text-[#5A6A7A] leading-relaxed mb-6 italic">
                  {t.quote}
                </blockquote>
                <div className="flex items-center gap-3 border-t border-[#D9D9D9] pt-4">
                  <div className="w-9 h-9 border border-[#D9D9D9] flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-[family-name:var(--font-cormorant)] font-600 text-[#1F2A44]">
                      {t.initials}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-600 font-[family-name:var(--font-source-sans)] text-[#1F2A44] truncate">
                      {t.name}
                    </div>
                    <div className="text-xs text-[#8A9BAA] truncate font-[family-name:var(--font-ibm-plex-mono)]">
                      {t.role}
                    </div>
                  </div>
                  <span className="text-[9px] font-[family-name:var(--font-ibm-plex-mono)] tracking-widest border border-[#D9D9D9] px-2 py-0.5 text-[#8A9BAA] flex-shrink-0">
                    {t.country}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center gap-4">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="w-9 h-9 border border-[#D9D9D9] flex items-center justify-center text-[#5A6A7A] hover:bg-[#1F2A44] hover:text-white hover:border-[#1F2A44] disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-1.5">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button key={i} onClick={() => setPage(i)}
                  className={`w-1.5 h-1.5 transition-all cursor-pointer ${i === page ? "bg-[#1F2A44] w-4" : "bg-[#D9D9D9] hover:bg-[#8A9BAA]"}`}
                />
              ))}
            </div>
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className="w-9 h-9 border border-[#D9D9D9] flex items-center justify-center text-[#5A6A7A] hover:bg-[#1F2A44] hover:text-white hover:border-[#1F2A44] disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
