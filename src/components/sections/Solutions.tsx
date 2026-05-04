"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const industries = [
  {
    id: "retail",
    label: "Retail & QSR",
    emoji: "🛒",
    benefits: [
      "Push menu changes nationwide instantly",
      "Promote dayparts and offers automatically",
      "A/B test creatives by store or region",
      "Festival and seasonal campaign scheduling",
    ],
    screenColor: "#FF6B6B",
    mockContent: [
      { label: "Today's Special", value: "₹199", color: "#FF6B6B" },
      { label: "Happy Hour", value: "4–7 PM", color: "#F59E0B" },
      { label: "Combo Deal", value: "Save 30%", color: "#22D3A0" },
    ],
    description:
      "Drive footfall, upsell menu items, and synchronize promotions across every outlet — all from your headquarters.",
  },
  {
    id: "corporate",
    label: "Corporate",
    emoji: "🏢",
    benefits: [
      "Lobby branding and visitor welcome displays",
      "Meeting room availability boards",
      "Internal communications and announcements",
      "KPI dashboards and performance feeds",
    ],
    screenColor: "#5B5BFF",
    mockContent: [
      { label: "Meeting Room A", value: "Available", color: "#22D3A0" },
      { label: "CEO Townhall", value: "3:00 PM", color: "#5B5BFF" },
      { label: "Revenue Q4", value: "+18%", color: "#00E5FF" },
    ],
    description:
      "Turn every screen in your office into a communication powerhouse — from lobby to boardroom.",
  },
  {
    id: "education",
    label: "Education",
    emoji: "🎓",
    benefits: [
      "Campus-wide announcements in seconds",
      "Class schedules and timetable boards",
      "Emergency alerts with priority override",
      "Event countdowns and result celebrations",
    ],
    screenColor: "#22D3A0",
    mockContent: [
      { label: "Next Class", value: "Physics - B2", color: "#22D3A0" },
      { label: "Library", value: "Open till 8 PM", color: "#8B7CFF" },
      { label: "Result Day", value: "Tomorrow", color: "#F59E0B" },
    ],
    description:
      "Keep students, staff, and visitors informed with dynamic, real-time campus communication.",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    emoji: "🏥",
    benefits: [
      "Patient wayfinding through complex facilities",
      "Queue management and token displays",
      "Patient education content in waiting areas",
      "Doctor availability and appointment boards",
    ],
    screenColor: "#00E5FF",
    mockContent: [
      { label: "Token 47", value: "Counter 3", color: "#00E5FF" },
      { label: "Dr. Sharma", value: "Available", color: "#22D3A0" },
      { label: "OPD Wait", value: "~12 min", color: "#F59E0B" },
    ],
    description:
      "Reduce patient anxiety and improve navigation with clear, calm, and dynamic healthcare displays.",
  },
  {
    id: "agencies",
    label: "Agencies / OOH",
    emoji: "📺",
    benefits: [
      "Manage client campaigns at scale",
      "Prove playback with certified play logs",
      "White-label the dashboard for clients",
      "Multi-client workspace isolation",
    ],
    screenColor: "#8B7CFF",
    mockContent: [
      { label: "Campaign Live", value: "12 Screens", color: "#8B7CFF" },
      { label: "Play Rate", value: "99.8%", color: "#22D3A0" },
      { label: "Client Report", value: "Ready", color: "#00E5FF" },
    ],
    description:
      "Run multiple client campaigns simultaneously. Deliver proof-of-play reports that build trust.",
  },
];

function ScreenMockup({ industry }: { industry: typeof industries[0] }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={industry.id}
        initial={{ opacity: 0, rotateY: -15, scale: 0.95 }}
        animate={{ opacity: 1, rotateY: 0, scale: 1 }}
        exit={{ opacity: 0, rotateY: 15, scale: 0.95 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
        style={{ perspective: 1000 }}
      >
        {/* Screen outer bezel */}
        <div className="relative mx-auto max-w-sm">
          <div
            className="rounded-2xl p-0.5"
            style={{
              background: `linear-gradient(135deg, ${industry.screenColor}40, rgba(255,255,255,0.06))`,
            }}
          >
            <div className="bg-void-slate rounded-2xl p-6 min-h-[280px] flex flex-col gap-4">
              {/* Screen header */}
              <div className="flex items-center justify-between">
                <div className="flex gap-1.5">
                  {[1, 2, 3].map((d) => (
                    <div key={d} className="w-2 h-2 rounded-full bg-white/15" />
                  ))}
                </div>
                <div
                  className="text-xs font-semibold px-2 py-0.5 rounded-full"
                  style={{
                    backgroundColor: `${industry.screenColor}20`,
                    color: industry.screenColor,
                  }}
                >
                  {industry.emoji} {industry.label}
                </div>
              </div>

              {/* Mock content cards */}
              <div className="flex flex-col gap-3 flex-1">
                {industry.mockContent.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center justify-between p-3 rounded-xl bg-white/4 border border-white/6"
                  >
                    <span className="text-sm text-text-mid">{item.label}</span>
                    <span
                      className="text-sm font-bold"
                      style={{ color: item.color }}
                    >
                      {item.value}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Powered badge */}
              <div className="flex items-center gap-2 justify-center pt-2 border-t border-white/6">
                <div className="w-3 h-3 rounded-sm bg-brand-indigo" />
                <span className="text-xs text-text-mid">Powered by Recoda Intelligence</span>
              </div>
            </div>
          </div>

          {/* Stand */}
          <div className="mx-auto w-24 h-2 mt-1 rounded-b-full bg-void-slate border border-white/6" />
          <div className="mx-auto w-16 h-1 rounded-full bg-white/5 mt-0.5" />

          {/* Glow */}
          <div
            className="absolute -inset-8 rounded-full blur-3xl opacity-20 -z-10 pointer-events-none"
            style={{ backgroundColor: industry.screenColor }}
            aria-hidden="true"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Solutions() {
  const [active, setActive] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-100px" });

  const industry = industries[active];

  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="solutions-heading"
    >
      <div className="absolute inset-0 mesh-bg opacity-15 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-brand-cyan/30 text-brand-cyan mb-4"
          >
            Solutions
          </motion.span>
          <motion.h2
            id="solutions-heading"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-display-lg font-bold text-white"
          >
            Built for every industry.
            <span className="gradient-text"> Loved by all of them.</span>
          </motion.h2>
        </div>

        {/* Tab bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" role="tablist" aria-label="Industry solutions">
          {industries.map((ind, i) => (
            <button
              key={ind.id}
              role="tab"
              aria-selected={active === i}
              aria-controls={`panel-${ind.id}`}
              id={`tab-${ind.id}`}
              onClick={() => setActive(i)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                active === i ? "text-white" : "text-text-mid hover:text-white"
              }`}
            >
              {active === i && (
                <motion.span
                  layoutId="tab-pill"
                  className="absolute inset-0 rounded-full bg-brand-indigo/20 border border-brand-indigo/40"
                  transition={{ type: "spring", damping: 20, stiffness: 300 }}
                />
              )}
              <span className="relative z-10">
                {ind.emoji} {ind.label}
              </span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div
          id={`panel-${industry.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${industry.id}`}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left: benefits */}
          <AnimatePresence mode="wait">
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-text-mid text-base leading-relaxed mb-8">
                {industry.description}
              </p>
              <ul className="flex flex-col gap-4" role="list">
                {industry.benefits.map((benefit, i) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <div
                      className="mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${industry.screenColor}20` }}
                      aria-hidden="true"
                    >
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path
                          d="M1 4l3 3L9 1"
                          stroke={industry.screenColor}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-white/90 text-base leading-snug">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                href="#demo"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl text-sm font-semibold text-white border border-white/15 hover:border-brand-indigo/50 hover:bg-brand-indigo/10 transition-all"
              >
                See {industry.label} use case →
              </motion.a>
            </motion.div>
          </AnimatePresence>

          {/* Right: mockup */}
          <ScreenMockup industry={industry} />
        </div>
      </div>
    </section>
  );
}
