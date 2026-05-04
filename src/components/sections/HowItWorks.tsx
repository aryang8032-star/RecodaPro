"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12" aria-hidden="true">
        <rect x="8" y="12" width="32" height="24" rx="3" />
        <path d="M20 12V8M28 12V8M20 8h8" />
        <circle cx="24" cy="24" r="4" />
        <path d="M24 20v-3M24 31v-3M17 24h-3M34 24h-3" strokeLinecap="round" />
      </svg>
    ),
    title: "Plug & Provision",
    body: "Choose any compatible player or smart screen. Plug in, scan a QR, and your device joins the fleet — automatically.",
    color: "#5B5BFF",
  },
  {
    number: "02",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12" aria-hidden="true">
        <rect x="6" y="6" width="14" height="14" rx="2" />
        <rect x="28" y="6" width="14" height="14" rx="2" />
        <rect x="6" y="28" width="14" height="14" rx="2" />
        <rect x="28" y="28" width="14" height="14" rx="2" />
        <path d="M20 13h8M13 20v8M35 20v8M20 35h8" strokeLinecap="round" />
      </svg>
    ),
    title: "Design Without Designers",
    body: "Pick from 200+ ready templates or build from scratch with our drag-and-drop studio. Images, videos, dashboards, web pages — all welcome.",
    color: "#8B7CFF",
  },
  {
    number: "03",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12" aria-hidden="true">
        <circle cx="24" cy="24" r="16" />
        <path d="M24 12v12l8 4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 36l4-4M40 36l-4-4" strokeLinecap="round" />
        <circle cx="14" cy="34" r="3" fill="currentColor" opacity="0.3" />
        <circle cx="34" cy="34" r="3" fill="currentColor" opacity="0.3" />
        <circle cx="24" cy="8" r="3" fill="currentColor" opacity="0.3" />
      </svg>
    ),
    title: "Launch & Watch It Live",
    body: "Schedule playlists by location, time, or audience. Monitor every screen in real time with instant alerts when something needs attention.",
    color: "#00E5FF",
  },
];

function StepCard({
  step,
  index,
}: {
  step: typeof steps[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.18, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col items-start p-8 rounded-2xl glass border border-white/8 hover:border-opacity-30 group transition-all duration-300"
      style={{
        borderColor: `${step.color}20`,
      }}
    >
      {/* Step number */}
      <span
        className="absolute top-6 right-6 text-6xl font-black opacity-8 tabular-nums select-none"
        style={{ color: step.color, opacity: 0.08 }}
        aria-hidden="true"
      >
        {step.number}
      </span>

      {/* Icon */}
      <div
        className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300"
        style={{ backgroundColor: `${step.color}15`, color: step.color }}
      >
        {step.icon}
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
      <p className="text-text-mid leading-relaxed text-base">{step.body}</p>

      {/* Bottom glow line */}
      <div
        className="absolute bottom-0 left-8 right-8 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: step.color }}
        aria-hidden="true"
      />
    </motion.div>
  );
}

function TronWire() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const progress = useTransform(scrollYProgress, [0.1, 0.9], [0, 100]);

  return (
    <div ref={ref} className="hidden lg:flex items-center justify-between relative mb-16 px-12">
      {/* Wire track */}
      <div className="absolute left-12 right-12 top-1/2 -translate-y-1/2 h-px bg-white/10" aria-hidden="true" />

      {/* Traveling light */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 w-16 h-px"
        style={{
          left: progress.get() + "%",
          background: "linear-gradient(90deg, transparent, #5B5BFF, #00E5FF, transparent)",
          boxShadow: "0 0 8px rgba(0,229,255,0.8)",
        }}
        aria-hidden="true"
      />

      {/* Nodes */}
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="relative z-10 w-4 h-4 rounded-full border-2 border-brand-indigo bg-obsidian"
          style={{ boxShadow: "0 0 12px rgba(91,91,255,0.6)" }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function HowItWorks() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="how-it-works-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 mesh-bg opacity-20 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(91,91,255,0.3), transparent)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-brand-indigo/30 text-brand-indigo mb-4"
          >
            How it works
          </motion.span>
          <motion.h2
            id="how-it-works-heading"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-display-lg font-bold text-white"
          >
            Three steps.
            <span className="gradient-text"> Everything live.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-text-mid text-lg max-w-xl mx-auto"
          >
            From first screen to nationwide rollout — Recoda makes complexity disappear.
          </motion.p>
        </div>

        {/* Tron wire (desktop only) */}
        <TronWire />

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="#demo"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-brand-indigo to-brand-cyan hover:from-brand-violet hover:to-brand-cyan transition-all shadow-cta hover:shadow-[0_12px_40px_rgba(91,91,255,0.5)]"
          >
            See it in action →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
