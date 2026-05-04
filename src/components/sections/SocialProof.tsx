"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";

const logos = [
  "RetailMart", "BurgerNation", "TechCorp HQ", "HealthFirst",
  "CampusLink", "MediaBlast", "FashionHub", "BankWise",
  "QuickServe", "OfficeWorld", "StudyNet", "GreenLife",
];

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value, 2000);
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-end gap-0.5">
        <span ref={ref} className="text-3xl sm:text-4xl font-bold text-white tabular-nums">
          {count.toLocaleString()}
        </span>
        <span className="text-3xl sm:text-4xl font-bold gradient-text">{suffix}</span>
      </div>
      <p className="text-text-mid text-sm mt-1">{label}</p>
    </div>
  );
}

export default function SocialProof() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const doubled = [...logos, ...logos];

  return (
    <section
      ref={sectionRef}
      className="relative py-12 border-y border-white/6 overflow-hidden"
      aria-label="Social proof and statistics"
    >
      <div className="dot-grid-bg absolute inset-0 opacity-40" aria-hidden="true" />

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto px-4 mb-10 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16"
      >
        <StatCounter value={1200} suffix="+" label="Screens powered" />
        <div className="hidden sm:block w-px h-12 bg-white/10" />
        <StatCounter value={80} suffix="+" label="Cities covered" />
        <div className="hidden sm:block w-px h-12 bg-white/10" />
        <StatCounter value={500} suffix="+" label="Happy customers" />
      </motion.div>

      {/* Marquee */}
      <div
        className="relative overflow-hidden"
        aria-label="Customer logos"
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-obsidian to-transparent pointer-events-none" aria-hidden="true" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-obsidian to-transparent pointer-events-none" aria-hidden="true" />

        <div
          className="flex gap-12 items-center group"
          role="list"
        >
          <motion.div
            className="flex gap-12 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            style={{ willChange: "transform" }}
          >
            {doubled.map((logo, i) => (
              <div
                key={`${logo}-${i}`}
                role="listitem"
                className="flex items-center gap-2 whitespace-nowrap px-4 py-2 rounded-lg border border-white/8 bg-white/3 hover:border-brand-indigo/30 hover:bg-brand-indigo/5 transition-all cursor-default"
              >
                <div className="w-6 h-6 rounded bg-gradient-to-br from-brand-indigo/40 to-brand-cyan/20" />
                <span className="text-sm font-semibold text-white/50 hover:text-white/80 transition-colors">
                  {logo}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Quote card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="max-w-2xl mx-auto px-4 mt-10"
      >
        <div className="glass rounded-2xl p-6 border border-white/8 text-center relative overflow-hidden">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-40 h-16 bg-gradient-glow opacity-30 blur-xl" aria-hidden="true" />
          <svg
            className="w-8 h-8 text-brand-indigo/50 mx-auto mb-3"
            viewBox="0 0 32 32"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M10 8C7 8 4 11 4 14c0 3 2 5 5 5 1 0 2-.5 2-.5S10 20 8 22h3c3-3 4-6 4-9 0-3-2-5-5-5zm12 0c-3 0-6 3-6 6 0 3 2 5 5 5 1 0 2-.5 2-.5S22 20 20 22h3c3-3 4-6 4-9 0-3-2-5-5-5z" />
          </svg>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed italic">
            "We rolled out a national menu update across 47 outlets in under 4 minutes. Recoda is genuinely magic."
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-indigo to-brand-cyan" />
            <div className="text-left">
              <p className="text-sm font-semibold text-white">Operations Head</p>
              <p className="text-xs text-text-mid">Pan-India QSR Chain</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
