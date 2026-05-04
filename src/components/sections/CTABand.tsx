"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function FloatingScreen({ x, y, delay, color }: { x: string; y: string; delay: number; color: string }) {
  return (
    <motion.div
      className="absolute rounded-xl border opacity-15 pointer-events-none"
      style={{
        left: x,
        top: y,
        width: "120px",
        height: "72px",
        borderColor: color,
        backgroundColor: `${color}08`,
      }}
      animate={{
        y: [0, -16, 0],
        rotate: [-3, 3, -3],
        opacity: [0.08, 0.18, 0.08],
      }}
      transition={{
        duration: 5 + delay,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      aria-hidden="true"
    />
  );
}

export default function CTABand() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-28 lg:py-40 overflow-hidden"
      aria-labelledby="cta-heading"
      id="demo"
    >
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 aurora-bg" aria-hidden="true" />
      <div className="absolute inset-0 mesh-bg opacity-20" aria-hidden="true" />

      {/* Floating screens in background */}
      <FloatingScreen x="8%" y="20%" delay={0} color="#5B5BFF" />
      <FloatingScreen x="15%" y="65%" delay={1.2} color="#00E5FF" />
      <FloatingScreen x="78%" y="15%" delay={0.8} color="#8B7CFF" />
      <FloatingScreen x="85%" y="60%" delay={2} color="#22D3A0" />
      <FloatingScreen x="50%" y="5%" delay={1.5} color="#5B5BFF" />
      <FloatingScreen x="60%" y="80%" delay={0.4} color="#00E5FF" />

      {/* Large center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(91,91,255,0.15) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan text-xs font-semibold uppercase tracking-widest mb-6"
          >
            <motion.span
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-brand-cyan"
            />
            Book a demo
          </motion.span>

          <h2
            id="cta-heading"
            className="text-display-xl font-bold text-white mb-6 leading-tight"
          >
            Ready to see Recoda Intelligence
            <span className="gradient-text"> in action?</span>
          </h2>

          <p className="text-lg text-text-mid mb-10 max-w-lg mx-auto leading-relaxed">
            Book a 20-minute live demo. We'll show you your screens, your way.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#demo"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white overflow-hidden shadow-cta"
            >
              <span className="relative z-10">Book a Demo</span>
              <motion.span
                className="relative z-10"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
              <span className="absolute inset-0 bg-gradient-to-r from-brand-indigo to-brand-cyan" />
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-brand-violet to-brand-cyan" />
            </motion.a>

            <motion.a
              href="#trial"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-medium text-white border border-white/20 hover:border-brand-indigo/50 hover:bg-brand-indigo/10 transition-all"
            >
              Start Free Trial
            </motion.a>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-sm text-text-mid mt-5"
          >
            No credit card required · Setup in under an hour
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
