"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const categories = ["All", "Retail", "Restaurant", "Office", "Health", "Festivals", "Sale"];

const templates = [
  { id: 1, name: "Daily Specials Board", category: "Restaurant", color: "#FF6B6B", accent: "#F59E0B", tags: ["Menu", "QSR"] },
  { id: 2, name: "Corporate Lobby", category: "Office", color: "#5B5BFF", accent: "#8B7CFF", tags: ["Welcome", "Branding"] },
  { id: 3, name: "Festival Sale Banner", category: "Festivals", color: "#F59E0B", accent: "#FF6B6B", tags: ["Sale", "Festive"] },
  { id: 4, name: "Health Wayfinding", category: "Health", color: "#22D3A0", accent: "#00E5FF", tags: ["Hospital", "Maps"] },
  { id: 5, name: "Flash Sale Countdown", category: "Sale", color: "#00E5FF", accent: "#5B5BFF", tags: ["Timer", "Deals"] },
  { id: 6, name: "Retail Price Board", category: "Retail", color: "#8B7CFF", accent: "#5B5BFF", tags: ["Pricing", "Store"] },
  { id: 7, name: "New Year Promo", category: "Festivals", color: "#FF6B6B", accent: "#F59E0B", tags: ["NYE", "Offer"] },
  { id: 8, name: "Queue Display", category: "Health", color: "#22D3A0", accent: "#8B7CFF", tags: ["Token", "OPD"] },
];

function TemplateCard({ template, onClick, active }: {
  template: typeof templates[0];
  onClick: () => void;
  active: boolean;
}) {
  return (
    <motion.div
      layout
      whileHover={{ scale: 1.03 }}
      onClick={onClick}
      className={`relative cursor-pointer rounded-2xl overflow-hidden border transition-all duration-300 ${
        active ? "border-brand-indigo/60 shadow-card-glow" : "border-white/8 hover:border-white/20"
      }`}
      style={{ aspectRatio: "16/9" }}
    >
      {/* Mock template visual */}
      <div
        className="w-full h-full flex flex-col gap-2 p-4"
        style={{
          background: `linear-gradient(135deg, ${template.color}15, ${template.accent}08)`,
        }}
      >
        <div className="flex items-center justify-between">
          <div
            className="text-xs font-bold px-2 py-0.5 rounded"
            style={{ backgroundColor: `${template.color}30`, color: template.color }}
          >
            {template.category}
          </div>
          <div className="flex gap-1">
            {template.tags.map((t) => (
              <div
                key={t}
                className="text-[10px] px-1.5 py-0.5 rounded bg-white/8 text-white/40"
              >
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Content bars */}
        <div className="flex flex-col gap-1.5 flex-1 justify-center">
          <div className="h-3 rounded-full w-3/4" style={{ backgroundColor: `${template.color}40` }} />
          <div className="h-2 rounded-full w-1/2" style={{ backgroundColor: `${template.accent}30` }} />
          <div className="h-2 rounded-full w-2/3 opacity-50" style={{ backgroundColor: `${template.color}20` }} />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs text-white/50 truncate">{template.name}</span>
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center"
            style={{ backgroundColor: `${template.color}20` }}
          >
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
              <path d="M1 4h6M4 1l3 3-3 3" stroke={template.color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Active overlay */}
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-brand-indigo/10 flex items-center justify-center"
        >
          <a
            href="#demo"
            className="px-4 py-2 rounded-lg bg-brand-indigo text-white text-xs font-semibold shadow-cta"
            onClick={(e) => e.stopPropagation()}
          >
            Use this template →
          </a>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function Templates() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTemplate, setActiveTemplate] = useState<number | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-80px" });

  const filtered =
    activeCategory === "All"
      ? templates
      : templates.filter((t) => t.category === activeCategory);

  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden bg-void-slate/50"
      aria-labelledby="templates-heading"
    >
      <div className="absolute inset-0 dot-grid-bg opacity-25 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-brand-indigo/30 text-brand-indigo mb-4"
          >
            Templates
          </motion.span>
          <motion.h2
            id="templates-heading"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-display-lg font-bold text-white"
          >
            Beautiful by default.
            <span className="gradient-text"> Yours in two clicks.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-4 text-text-mid max-w-lg mx-auto"
          >
            200+ professionally designed templates, ready to deploy. Customise or use as-is.
          </motion.p>
        </div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
          role="group"
          aria-label="Filter templates by category"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setActiveTemplate(null);
              }}
              aria-pressed={activeCategory === cat}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-brand-indigo text-white shadow-cta"
                  : "bg-white/5 text-text-mid hover:bg-white/10 hover:text-white border border-white/8"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((template) => (
              <motion.div
                key={template.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
              >
                <TemplateCard
                  template={template}
                  active={activeTemplate === template.id}
                  onClick={() =>
                    setActiveTemplate(
                      activeTemplate === template.id ? null : template.id
                    )
                  }
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#demo"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-brand-indigo to-brand-cyan shadow-cta hover:shadow-[0_12px_40px_rgba(91,91,255,0.5)] transition-all"
          >
            Browse all 200+ templates →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
