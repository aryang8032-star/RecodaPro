"use client";

import { useEffect, useRef, useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { isLowEndDevice } from "@/lib/utils";
import HeroSceneFallback from "@/components/3d/HeroSceneFallback";

const HeroScene = dynamic(() => import("@/components/3d/HeroScene"), {
  ssr: false,
  loading: () => <HeroSceneFallback />,
});

const clientLogos = [
  "Retail Co", "QSR Brand", "Corp Inc", "Health Plus", "Campus Edu", "Media House",
];

const wordVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const heroWords = ["One", "cloud", "dashboard.", "Every", "screen,", "intelligently", "controlled."];

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [lowEnd, setLowEnd] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setLowEnd(isLowEndDevice());

    const onMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] flex items-center overflow-hidden pt-[72px]"
      aria-label="Hero section"
    >
      {/* Aurora background */}
      <div className="absolute inset-0 aurora-bg pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 mesh-bg opacity-30 pointer-events-none" aria-hidden="true" />

      {/* Glow orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(91,91,255,0.12) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(0,229,255,0.08) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Copy */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-indigo/30 bg-brand-indigo/10 w-fit"
            >
              <motion.span
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-brand-cyan"
              />
              <span className="text-xs sm:text-sm font-medium text-brand-cyan">
                Live across 100+ screens nationwide
              </span>
            </motion.div>

            {/* H1 word-by-word */}
            <h1 className="font-bold text-display-xl leading-[1.04] -tracking-[0.03em]" aria-label="One cloud dashboard. Every screen, intelligently controlled.">
              {heroWords.map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={wordVariants}
                  className={`inline-block mr-[0.25em] ${
                    word === "intelligently" ? "gradient-text" : ""
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
              className="text-base sm:text-lg text-text-mid leading-relaxed max-w-xl"
            >
              Recoda Intelligence is the cloud CMS that lets retail chains, agencies, and enterprises
              manage digital signage across hundreds of locations — design, schedule, monitor, and launch
              campaigns in minutes, not days.
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3"
            >
              <a
                href="#demo"
                className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold text-white overflow-hidden shadow-cta"
                data-magnetic
              >
                <span className="relative z-10">Book a Demo</span>
                <motion.span
                  className="relative z-10"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
                <span className="absolute inset-0 bg-gradient-to-r from-brand-indigo to-brand-cyan" />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-brand-violet to-brand-cyan transition-opacity duration-300" />
                {/* Ripple */}
                <span className="absolute inset-0 rounded-xl group-active:animate-ping bg-white/20" />
              </a>

              <button
                onClick={() => setVideoOpen(true)}
                className="group inline-flex items-center gap-2.5 px-5 py-3.5 rounded-xl text-sm font-medium text-white border border-white/15 hover:border-brand-indigo/50 hover:bg-brand-indigo/5 transition-all"
                aria-label="Watch 2-minute product overview video"
              >
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-indigo/20 transition-colors">
                  <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor" aria-hidden="true">
                    <path d="M0 0l10 6-10 6V0z" />
                  </svg>
                </span>
                Watch 2-min Overview
              </button>
            </motion.div>

            {/* Trust logos */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-wrap items-center gap-5 pt-2"
              aria-label="Trusted by leading brands"
            >
              <span className="text-xs text-text-mid whitespace-nowrap">Trusted by:</span>
              {clientLogos.map((logo) => (
                <span
                  key={logo}
                  className="text-xs font-semibold text-white/30 hover:text-white/70 transition-colors cursor-default grayscale hover:grayscale-0 tracking-wider uppercase"
                >
                  {logo}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[400px] sm:h-[500px] lg:h-[620px]"
            aria-hidden="true"
          >
            {lowEnd ? (
              <HeroSceneFallback />
            ) : (
              <HeroScene mouseX={mouse.x} mouseY={mouse.y} />
            )}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-xs text-text-mid">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-brand-cyan" />
        </motion.div>
      </motion.div>

      {/* Video modal */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] modal-backdrop flex items-center justify-center p-4"
            onClick={() => setVideoOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Product overview video"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="relative w-full max-w-3xl aspect-video glass rounded-2xl overflow-hidden border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full h-full flex items-center justify-center bg-void-slate">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-brand-indigo/20 border border-brand-indigo/40 flex items-center justify-center mx-auto mb-4">
                    <svg width="24" height="28" viewBox="0 0 24 28" fill="white" aria-hidden="true">
                      <path d="M0 0l24 14-24 14V0z" />
                    </svg>
                  </div>
                  <p className="text-text-mid text-sm">Product overview video</p>
                  <p className="text-xs text-text-mid/60 mt-1">Coming soon</p>
                </div>
              </div>
              <button
                onClick={() => setVideoOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Close video"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                  <path d="M1 1l10 10M11 1L1 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
