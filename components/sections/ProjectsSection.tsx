"use client";

import { useState, useRef, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Search, SlidersHorizontal, ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/data/projects";

const ALL = "All";
const categories = [ALL, "CFD Analysis", "Aircraft Design", "FEA Analysis", "Thermal Engineering"] as const;

const catColors: Record<string, string> = {
  "CFD Analysis":       "#4B6382",
  "Aircraft Design":    "#1F2A44",
  "FEA Analysis":       "#C88A3D",
  "Thermal Engineering":"#5A6A7A",
  "Research":           "#8A9BAA",
};

/* ─── Image Gallery ──────────────────────────────────────────────────────── */
function Gallery({ images, title }: { images: string[]; title: string }) {
  const [cur, setCur] = useState(0);
  const [err, setErr] = useState<Record<number, boolean>>({});

  return (
    <div>
      <div className="relative aspect-video bg-[#F7F6F3] border border-[#D9D9D9] overflow-hidden">
        {err[cur] ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <div className="w-12 h-px bg-[#D9D9D9]" />
            <span className="text-xs font-[family-name:var(--font-ibm-plex-mono)] text-[#8A9BAA] tracking-widest uppercase">
              Simulation Data
            </span>
            <div className="w-12 h-px bg-[#D9D9D9]" />
          </div>
        ) : (
          <Image
            src={images[cur]}
            alt={`${title} — image ${cur + 1}`}
            fill
            className="object-contain"
            onError={() => setErr((p) => ({ ...p, [cur]: true }))}
            sizes="(max-width: 768px) 100vw, 55vw"
          />
        )}
        {images.length > 1 && (
          <>
            <button onClick={() => setCur((c) => (c - 1 + images.length) % images.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 border border-[#D9D9D9] bg-white flex items-center justify-center text-[#1F2A44] hover:bg-[#1F2A44] hover:text-white hover:border-[#1F2A44] transition-all cursor-pointer">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={() => setCur((c) => (c + 1) % images.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 border border-[#D9D9D9] bg-white flex items-center justify-center text-[#1F2A44] hover:bg-[#1F2A44] hover:text-white hover:border-[#1F2A44] transition-all cursor-pointer">
              <ChevronRight className="w-4 h-4" />
            </button>
            <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-white border border-[#D9D9D9] text-[10px] font-[family-name:var(--font-ibm-plex-mono)] text-[#8A9BAA]">
              {cur + 1}/{images.length}
            </div>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="flex gap-2 mt-2.5 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button key={i} onClick={() => setCur(i)}
              className={`relative flex-shrink-0 w-12 h-9 border-2 overflow-hidden transition-colors cursor-pointer ${i === cur ? "border-[#1F2A44]" : "border-[#D9D9D9] opacity-50 hover:opacity-75"}`}>
              {err[i] ? (
                <div className="w-full h-full bg-[#F7F6F3] flex items-center justify-center">
                  <span className="text-[8px] text-[#8A9BAA] font-[family-name:var(--font-ibm-plex-mono)]">{i+1}</span>
                </div>
              ) : (
                <Image src={img} alt={`thumb ${i+1}`} fill className="object-cover" onError={() => setErr((p) => ({ ...p, [i]: true }))} sizes="48px" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Project Modal ──────────────────────────────────────────────────────── */
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const catColor = catColors[project.category] ?? "#4B6382";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[50] flex items-center justify-center p-4"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <div className="absolute inset-0 bg-[#1F2A44]/40" onClick={onClose} />
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.97 }}
          transition={{ type: "spring", damping: 32, stiffness: 340 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white border border-[#D9D9D9] shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal header */}
          <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-white border-b border-[#D9D9D9]">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-[family-name:var(--font-ibm-plex-mono)] tracking-widest uppercase border border-[#D9D9D9] px-2.5 py-1"
                style={{ color: catColor }}>
                {project.category}
              </span>
              <span className="text-[10px] font-[family-name:var(--font-ibm-plex-mono)] text-[#8A9BAA] tracking-widest">
                PROJECT {String(project.id).padStart(2, "0")}
              </span>
            </div>
            <button onClick={onClose}
              className="w-8 h-8 border border-[#D9D9D9] flex items-center justify-center text-[#5A6A7A] hover:bg-[#1F2A44] hover:text-white hover:border-[#1F2A44] transition-all cursor-pointer">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-6">
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-600 text-[#1F2A44] mb-1">
              {project.title}
            </h2>
            <p className="text-sm font-[family-name:var(--font-ibm-plex-mono)] text-[#8A9BAA] mb-6 tracking-widest uppercase">
              {project.domain}
            </p>

            <Gallery images={project.images} title={project.title} />

            <div className="grid sm:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-xs font-[family-name:var(--font-ibm-plex-mono)] tracking-widest uppercase text-[#8A9BAA] mb-3 flex items-center gap-2">
                  <div className="w-3 h-px bg-[#C88A3D]" /> Project Overview
                </h3>
                <p className="text-sm text-[#5A6A7A] leading-relaxed">{project.fullDescription}</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-[family-name:var(--font-ibm-plex-mono)] tracking-widest uppercase text-[#8A9BAA] mb-3 flex items-center gap-2">
                    <div className="w-3 h-px bg-[#C88A3D]" /> Software Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.software.map((s) => (
                      <span key={s} className="px-2.5 py-1 text-xs font-[family-name:var(--font-ibm-plex-mono)] border border-[#D9D9D9] text-[#4B6382] bg-[#F7F6F3]">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xs font-[family-name:var(--font-ibm-plex-mono)] tracking-widest uppercase text-[#8A9BAA] mb-3 flex items-center gap-2">
                    <div className="w-3 h-px bg-[#C88A3D]" /> Key Outcomes
                  </h3>
                  <ul className="space-y-2">
                    {project.outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-2 text-sm text-[#5A6A7A]">
                        <span className="w-1 h-1 rounded-full bg-[#C88A3D] mt-2 flex-shrink-0" />
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-[family-name:var(--font-ibm-plex-mono)] tracking-widest uppercase text-[#8A9BAA] mb-3 flex items-center gap-2">
                    <div className="w-3 h-px bg-[#C88A3D]" /> Keywords
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-[10px] font-[family-name:var(--font-ibm-plex-mono)] border border-[#D9D9D9] text-[#8A9BAA]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─── Project Card ───────────────────────────────────────────────────────── */
function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [imgErr, setImgErr] = useState(false);
  const catColor = catColors[project.category] ?? "#4B6382";

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      className="pro-card pro-card-hover cursor-pointer group overflow-hidden"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[16/10] bg-[#F7F6F3] border-b border-[#D9D9D9] overflow-hidden">
        {imgErr ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#F7F6F3] eng-grid">
            <span className="text-xs font-[family-name:var(--font-ibm-plex-mono)] text-[#8A9BAA] tracking-widest uppercase">
              Simulation Output
            </span>
          </div>
        ) : (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            onError={() => setImgErr(true)}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}
        {/* Category chip */}
        <div
          className="absolute top-3 left-3 px-2.5 py-1 bg-white border border-[#D9D9D9] text-[10px] font-[family-name:var(--font-ibm-plex-mono)] tracking-widest uppercase"
          style={{ color: catColor }}
        >
          {project.category}
        </div>
        {/* Arrow on hover */}
        <div className="absolute top-3 right-3 w-8 h-8 bg-[#1F2A44] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        {/* Report reference */}
        <div className="text-[9px] font-[family-name:var(--font-ibm-plex-mono)] tracking-widest text-[#8A9BAA] uppercase mb-1.5">
          UE-{String(project.id).padStart(3, "0")} · {project.domain.split("/")[0].trim()}
        </div>
        <h3 className="font-[family-name:var(--font-cormorant)] text-lg font-600 text-[#1F2A44] mb-2 leading-snug line-clamp-2">
          {project.title}
        </h3>
        <p className="text-sm text-[#5A6A7A] leading-relaxed line-clamp-2 mb-4">
          {project.shortDescription}
        </p>
        {/* Software */}
        <div className="flex flex-wrap gap-1.5">
          {project.software.slice(0, 3).map((s) => (
            <span key={s} className="px-2 py-0.5 text-[10px] font-[family-name:var(--font-ibm-plex-mono)] border border-[#D9D9D9] text-[#8A9BAA] bg-[#F7F6F3]">
              {s}
            </span>
          ))}
          {project.software.length > 3 && (
            <span className="px-2 py-0.5 text-[10px] font-[family-name:var(--font-ibm-plex-mono)] border border-[#D9D9D9] text-[#8A9BAA]">
              +{project.software.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

/* ─── Projects Section ───────────────────────────────────────────────────── */
export default function ProjectsSection() {
  const [cat, setCat]     = useState<string>(ALL);
  const [q, setQ]         = useState("");
  const [selected, setSelected] = useState<Project | null>(null);
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: "-100px" });

  const filtered = projects.filter((p) => {
    const mc = cat === ALL || p.category === cat;
    const mq = !q || [p.title, p.category, p.domain, ...p.software, ...p.tags]
      .some((s) => s.toLowerCase().includes(q.toLowerCase()));
    return mc && mq;
  });

  const close = useCallback(() => setSelected(null), []);

  return (
    <section id="projects" className="section-padding bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-[#D9D9D9]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-[#C88A3D]" />
            <span className="section-label">/ Project Portfolio</span>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-end">
            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl font-600 text-[#1F2A44] mb-4">
                Engineering{" "}
                <span className="italic">Work</span>
              </h2>
              <p className="text-[#5A6A7A] text-lg leading-relaxed">
                CFD, FEA, aircraft design, and thermal analysis projects — click any entry to view simulation outputs, methodology, and outcomes.
              </p>
            </div>
            <div className="text-right hidden md:block">
              <span className="font-[family-name:var(--font-cormorant)] text-6xl font-600 text-[#D9D9D9] select-none leading-none">
                {String(projects.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 mb-6"
        >
          {/* Search */}
          <div className="relative flex-1 max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#8A9BAA]" />
            <input
              type="text"
              placeholder="Search projects..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="w-full pl-8 pr-3 py-2 border border-[#D9D9D9] bg-white text-sm text-[#222222] placeholder-[#8A9BAA] font-[family-name:var(--font-source-sans)] focus:outline-none focus:border-[#1F2A44] transition-colors"
            />
          </div>
          {/* Filters */}
          <div className="flex items-center gap-2 flex-wrap">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#8A9BAA] flex-shrink-0" />
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-3 py-1.5 text-[10px] font-[family-name:var(--font-ibm-plex-mono)] tracking-widest uppercase border transition-all duration-200 cursor-pointer ${
                  cat === c
                    ? "bg-[#1F2A44] text-white border-[#1F2A44]"
                    : "bg-white text-[#5A6A7A] border-[#D9D9D9] hover:border-[#1F2A44] hover:text-[#1F2A44]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Count */}
        <p className="text-[10px] font-[family-name:var(--font-ibm-plex-mono)] text-[#8A9BAA] tracking-widest uppercase mb-6">
          Showing {filtered.length} of {projects.length} projects
        </p>

        {/* Grid */}
        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key={`${cat}-${q}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filtered.map((p) => (
                <ProjectCard key={p.id} project={p} onClick={() => setSelected(p)} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="font-[family-name:var(--font-ibm-plex-mono)] text-sm text-[#8A9BAA] tracking-widest">
                No projects found for &quot;{q}&quot;
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {selected && <ProjectModal project={selected} onClose={close} />}
    </section>
  );
}
