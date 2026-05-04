"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Tilt from "react-parallax-tilt";

const features = [
  {
    id: "central",
    size: "wide",
    title: "Centralized Screen Management",
    body: "Control hundreds of displays across any number of locations from a single intelligent dashboard. Add, remove, or group screens in seconds.",
    icon: "🗺️",
    color: "#5B5BFF",
    animation: "map",
  },
  {
    id: "studio",
    size: "standard",
    title: "Drag-and-Drop Studio",
    body: "Build pixel-perfect layouts without a designer. Drag widgets, media, and data into place. Preview live before you publish.",
    icon: "✏️",
    color: "#8B7CFF",
    animation: "studio",
  },
  {
    id: "templates",
    size: "standard",
    title: "200+ Templates & Apps",
    body: "Ready-made designs for every industry. Weather feeds, social walls, menu boards, countdown timers — plug them in instantly.",
    icon: "🎨",
    color: "#00E5FF",
    animation: "templates",
  },
  {
    id: "schedule",
    size: "tall",
    title: "Multi-Location Scheduling",
    body: "Target content by screen, zone, daypart, or audience. Set festival campaigns weeks ahead. Let Recoda handle the publishing.",
    icon: "📅",
    color: "#22D3A0",
    animation: "schedule",
  },
  {
    id: "monitor",
    size: "standard",
    title: "Real-Time Monitoring",
    body: "Know immediately if a screen goes offline, a content error occurs, or bandwidth drops. Proactive alerts before your team notices.",
    icon: "📡",
    color: "#FF6B6B",
    animation: "monitor",
  },
  {
    id: "analytics",
    size: "wide",
    title: "Analytics & Reports",
    body: "Prove ROI with play-log exports, uptime reports, content performance heatmaps, and shareable campaign dashboards.",
    icon: "📊",
    color: "#F59E0B",
    animation: "analytics",
  },
];

function MapAnimation() {
  return (
    <div className="flex flex-wrap gap-1.5 mt-4" aria-hidden="true">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="w-2.5 h-2.5 rounded-full"
          animate={{
            scale: [0.8, 1.3, 0.8],
            opacity: [0.4, 1, 0.4],
            backgroundColor: ["#5B5BFF", "#00E5FF", "#5B5BFF"],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            delay: Math.random() * 2,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
}

function StudioAnimation() {
  const blocks = [
    { x: 10, y: 10, w: 60, h: 25, c: "#5B5BFF" },
    { x: 10, y: 42, w: 35, h: 20, c: "#8B7CFF" },
    { x: 52, y: 42, w: 38, h: 20, c: "#00E5FF" },
    { x: 10, y: 68, w: 80, h: 20, c: "#22D3A0" },
  ];
  return (
    <div className="relative w-full h-24 mt-4 bg-obsidian/50 rounded-lg overflow-hidden" aria-hidden="true">
      {blocks.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded"
          style={{
            left: `${b.x}%`,
            top: `${b.y}%`,
            width: `${b.w}%`,
            height: `${b.h}%`,
            backgroundColor: `${b.c}30`,
            border: `1px solid ${b.c}40`,
          }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
        />
      ))}
    </div>
  );
}

function TemplatesAnimation() {
  const colors = ["#5B5BFF", "#8B7CFF", "#00E5FF", "#22D3A0"];
  return (
    <div className="flex gap-2 mt-4 overflow-hidden" aria-hidden="true">
      {colors.map((c, i) => (
        <motion.div
          key={i}
          className="flex-shrink-0 w-20 h-12 rounded-lg border"
          style={{ borderColor: `${c}40`, backgroundColor: `${c}10` }}
          animate={{ x: [-8 * i, 0] }}
          transition={{ delay: i * 0.1, type: "spring", damping: 15 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-8 h-1.5 rounded-full" style={{ backgroundColor: c }} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function ScheduleAnimation() {
  const slots = Array.from({ length: 21 }).map((_, i) => ({
    filled: Math.random() > 0.4,
    color: ["#5B5BFF", "#22D3A0", "#00E5FF"][Math.floor(Math.random() * 3)],
  }));
  return (
    <div className="grid grid-cols-7 gap-1 mt-4" aria-hidden="true">
      {slots.map((slot, i) => (
        <motion.div
          key={i}
          className="h-6 rounded"
          style={{
            backgroundColor: slot.filled ? `${slot.color}40` : "rgba(255,255,255,0.04)",
            border: slot.filled ? `1px solid ${slot.color}60` : "1px solid rgba(255,255,255,0.06)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.04 }}
        />
      ))}
    </div>
  );
}

function MonitorAnimation() {
  return (
    <div className="flex gap-2 mt-4 items-center" aria-hidden="true">
      {["Screen 01", "Screen 02", "Screen 03"].map((s, i) => (
        <div key={i} className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/4 border border-white/8">
          <motion.div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: i < 2 ? "#22D3A0" : "#FF6B6B" }}
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.5, delay: i * 0.5, repeat: Infinity }}
          />
          <span className="text-xs text-text-mid">{s}</span>
        </div>
      ))}
    </div>
  );
}

function AnalyticsAnimation() {
  const bars = [40, 65, 50, 80, 55, 70, 60];
  return (
    <div className="flex items-end gap-2 mt-4 h-16" aria-hidden="true">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className="flex-1 rounded-t-sm"
          style={{ backgroundColor: "#F59E0B40", border: "1px solid #F59E0B60" }}
          initial={{ height: 0 }}
          animate={{ height: `${h}%` }}
          transition={{ delay: i * 0.1, type: "spring", damping: 15, stiffness: 100 }}
        />
      ))}
    </div>
  );
}

const animationMap: Record<string, React.ReactNode> = {
  map: <MapAnimation />,
  studio: <StudioAnimation />,
  templates: <TemplatesAnimation />,
  schedule: <ScheduleAnimation />,
  monitor: <MonitorAnimation />,
  analytics: <AnalyticsAnimation />,
};

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const isWide = feature.size === "wide";
  const isTall = feature.size === "tall";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`${isWide ? "md:col-span-2" : ""} ${isTall ? "md:row-span-2" : ""}`}
    >
      <Tilt
        tiltMaxAngleX={6}
        tiltMaxAngleY={6}
        scale={1.01}
        transitionSpeed={2000}
        className="h-full"
      >
        <div
          className="relative h-full p-6 rounded-2xl glass border border-white/6 overflow-hidden group cursor-default transition-all duration-300 hover:border-opacity-40"
          style={{ borderColor: `${feature.color}20` }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Glow on hover */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
            style={{
              background: `radial-gradient(circle at 50% 0%, ${feature.color}12 0%, transparent 70%)`,
            }}
            aria-hidden="true"
          />

          {/* Icon */}
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 transition-transform group-hover:scale-110 duration-300"
            style={{ backgroundColor: `${feature.color}15` }}
            aria-hidden="true"
          >
            {feature.icon}
          </div>

          {/* Content */}
          <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
          <p className="text-text-mid text-sm leading-relaxed">{feature.body}</p>

          {/* Hover animation */}
          <motion.div
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {animationMap[feature.animation]}
          </motion.div>

          {/* Edge glow */}
          <div
            className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-60 transition-opacity duration-300"
            style={{ backgroundColor: feature.color }}
            aria-hidden="true"
          />
        </div>
      </Tilt>
    </motion.div>
  );
}

export default function Features() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="features-heading"
    >
      <div className="absolute inset-0 dot-grid-bg opacity-20 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-brand-violet/30 text-brand-violet mb-4"
          >
            Features
          </motion.span>
          <motion.h2
            id="features-heading"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-display-lg font-bold text-white max-w-3xl mx-auto"
          >
            Built to make screens work harder — and your team work less.
          </motion.h2>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-auto">
          {features.map((feature, i) => (
            <FeatureCard key={feature.id} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
