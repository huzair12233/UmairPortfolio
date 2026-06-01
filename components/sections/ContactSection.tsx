"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MessageSquare, User, Briefcase, CheckCircle, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "918143226990";
const EMAIL = "umairansari111@gmail.com";

const services = [
  "CFD Analysis",
  "FEA Analysis",
  "Engineering Design (CAD)",
  "Research Support",
  "Thesis / Dissertation",
  "Technical Report",
  "Simulation Project",
  "Engineering Tutoring",
  "Other",
];

type State = "idle" | "sending" | "success";

function buildWhatsAppMessage(form: { name: string; email: string; service: string; message: string }) {
  return encodeURIComponent(
    `*New Project Enquiry*\n\n` +
    `*Name:* ${form.name}\n` +
    `*Email:* ${form.email}\n` +
    `*Service Required:* ${form.service}\n\n` +
    `*Message:*\n${form.message}`
  );
}

export default function ContactSection() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: "-100px" });
  const [state, setState] = useState<State>("idle");
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setState("sending");
    const msg = buildWhatsAppMessage(form);
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank", "noopener,noreferrer");
    // Show success after brief delay
    setTimeout(() => setState("success"), 600);
  };

  const inputCls =
    "w-full px-3.5 py-2.5 border border-[#D9D9D9] bg-white text-[15px] text-[#222222] placeholder-[#8A9BAA] font-[family-name:var(--font-source-sans)] focus:outline-none focus:border-[#1F2A44] transition-colors";

  return (
    <section id="contact" className="section-padding bg-white relative">
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
            <span className="section-label">/ Get in Touch</span>
          </div>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl font-600 text-[#1F2A44] mb-4">
            Start a{" "}
            <span className="italic">Project</span>
          </h2>
          <p className="text-[#5A6A7A] text-lg max-w-xl">
            Fill in the form and your message will open directly in WhatsApp — the fastest way to get a response.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* ── Info column ─────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-7"
          >
            {/* Direct contact cards */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-4 border border-[#D9D9D9] hover:border-[#1F2A44] bg-[#F7F6F3] hover:bg-white transition-all duration-200 group cursor-pointer"
            >
              <div className="w-9 h-9 border border-[#D9D9D9] group-hover:border-[#C88A3D] flex items-center justify-center text-[#4B6382] group-hover:text-[#C88A3D] transition-colors flex-shrink-0 mt-0.5">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-[family-name:var(--font-ibm-plex-mono)] tracking-widest uppercase text-[#8A9BAA] mb-0.5">
                  WhatsApp
                </div>
                <div className="text-sm font-600 font-[family-name:var(--font-source-sans)] text-[#1F2A44] group-hover:text-[#C88A3D] transition-colors">
                  +91 81432 26990
                </div>
                <div className="text-xs text-[#8A9BAA] font-[family-name:var(--font-ibm-plex-mono)]">
                  Tap to open WhatsApp
                </div>
              </div>
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="flex items-start gap-4 p-4 border border-[#D9D9D9] hover:border-[#1F2A44] bg-[#F7F6F3] hover:bg-white transition-all duration-200 group cursor-pointer"
            >
              <div className="w-9 h-9 border border-[#D9D9D9] group-hover:border-[#C88A3D] flex items-center justify-center text-[#4B6382] group-hover:text-[#C88A3D] transition-colors flex-shrink-0 mt-0.5">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-[family-name:var(--font-ibm-plex-mono)] tracking-widest uppercase text-[#8A9BAA] mb-0.5">
                  Email
                </div>
                <div className="text-sm font-600 font-[family-name:var(--font-source-sans)] text-[#1F2A44] group-hover:text-[#C88A3D] transition-colors break-all">
                  {EMAIL}
                </div>
                <div className="text-xs text-[#8A9BAA] font-[family-name:var(--font-ibm-plex-mono)]">
                  Response within 24 hours
                </div>
              </div>
            </a>

            <div className="flex items-start gap-4 p-4 border border-[#D9D9D9] bg-[#F7F6F3]">
              <div className="w-9 h-9 border border-[#D9D9D9] flex items-center justify-center text-[#4B6382] flex-shrink-0 mt-0.5">
                <Briefcase className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-[family-name:var(--font-ibm-plex-mono)] tracking-widest uppercase text-[#8A9BAA] mb-0.5">
                  Availability
                </div>
                <div className="text-sm font-600 font-[family-name:var(--font-source-sans)] text-[#1F2A44]">
                  Open for new projects
                </div>
                <div className="text-xs text-[#8A9BAA] font-[family-name:var(--font-ibm-plex-mono)]">
                  Free initial consultation
                </div>
              </div>
            </div>

            {/* Service areas */}
            <div className="border-t border-[#D9D9D9] pt-6">
              <div className="text-[10px] font-[family-name:var(--font-ibm-plex-mono)] tracking-widest uppercase text-[#8A9BAA] mb-3">
                Service Areas
              </div>
              <div className="flex flex-wrap gap-2">
                {["CFD", "FEA", "CAD Design", "Thermal Analysis", "Aircraft Design", "Research", "Thesis Writing", "Tutoring"].map((d) => (
                  <span key={d} className="px-2.5 py-1 text-[10px] font-[family-name:var(--font-ibm-plex-mono)] border border-[#D9D9D9] text-[#5A6A7A] bg-[#F7F6F3]">
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Form ─────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="border border-[#D9D9D9] p-7 bg-[#F7F6F3]">
              {state === "success" ? (
                <div className="flex flex-col items-center py-14 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 14 }}
                  >
                    <CheckCircle className="w-12 h-12 text-[#C88A3D] mb-5" strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-600 text-[#1F2A44] mb-2">
                    Opening WhatsApp…
                  </h3>
                  <p className="text-[#5A6A7A] text-sm mb-6 max-w-xs">
                    Your message has been prepared and WhatsApp should have opened in a new tab. If not, tap the button below.
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppMessage(form)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-600 font-[family-name:var(--font-source-sans)] bg-[#1F2A44] text-white px-6 py-2.5 hover:bg-[#C88A3D] transition-colors cursor-pointer"
                    >
                      Open WhatsApp
                    </a>
                    <button
                      onClick={() => { setState("idle"); setForm({ name: "", email: "", service: "", message: "" }); }}
                      className="text-sm font-[family-name:var(--font-source-sans)] font-600 border border-[#D9D9D9] text-[#5A6A7A] px-6 py-2.5 hover:border-[#1F2A44] hover:text-[#1F2A44] transition-colors cursor-pointer"
                    >
                      New Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  {/* WhatsApp note */}
                  <div className="flex items-center gap-2.5 px-3.5 py-2.5 border border-[rgba(200,138,61,0.3)] bg-[rgba(200,138,61,0.06)]">
                    <Phone className="w-3.5 h-3.5 text-[#C88A3D] flex-shrink-0" />
                    <p className="text-xs font-[family-name:var(--font-ibm-plex-mono)] text-[#5A6A7A] tracking-wide">
                      Submitting opens WhatsApp with your message pre-filled — send directly to Umair
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="flex items-center gap-1.5 text-[10px] font-[family-name:var(--font-ibm-plex-mono)] tracking-widest uppercase text-[#8A9BAA] mb-2">
                        <User className="w-3 h-3" /> Name
                      </label>
                      <input id="name" name="name" type="text" required value={form.name} onChange={onChange} placeholder="Your full name" className={inputCls} />
                    </div>
                    <div>
                      <label htmlFor="email" className="flex items-center gap-1.5 text-[10px] font-[family-name:var(--font-ibm-plex-mono)] tracking-widest uppercase text-[#8A9BAA] mb-2">
                        <Mail className="w-3 h-3" /> Email
                      </label>
                      <input id="email" name="email" type="email" required value={form.email} onChange={onChange} placeholder="your@email.com" className={inputCls} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="flex items-center gap-1.5 text-[10px] font-[family-name:var(--font-ibm-plex-mono)] tracking-widest uppercase text-[#8A9BAA] mb-2">
                      <Briefcase className="w-3 h-3" /> Service Required
                    </label>
                    <select id="service" name="service" required value={form.service} onChange={onChange}
                      className={`${inputCls} cursor-pointer appearance-none`}>
                      <option value="" disabled>Select a service...</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="flex items-center gap-1.5 text-[10px] font-[family-name:var(--font-ibm-plex-mono)] tracking-widest uppercase text-[#8A9BAA] mb-2">
                      <MessageSquare className="w-3 h-3" /> Message
                    </label>
                    <textarea id="message" name="message" required rows={5} value={form.message} onChange={onChange}
                      placeholder="Describe your project — scope, deadline, software required, and any specific details..."
                      className={`${inputCls} resize-none`} />
                  </div>

                  <button
                    type="submit"
                    disabled={state === "sending"}
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-[#1F2A44] hover:bg-[#C88A3D] disabled:opacity-60 text-white text-sm font-600 font-[family-name:var(--font-source-sans)] tracking-wider uppercase transition-colors duration-300 cursor-pointer disabled:cursor-not-allowed"
                  >
                    {state === "sending" ? (
                      <>
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                        Opening WhatsApp...
                      </>
                    ) : (
                      <><Phone className="w-4 h-4" /> Send via WhatsApp</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
