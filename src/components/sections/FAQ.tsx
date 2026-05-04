"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Which hardware does Recoda support?",
    a: "Recoda works with most Android-based media players (BrightSign, Amazon Fire, Android TV sticks), as well as Raspberry Pi, Windows PCs, and Chrome OS devices. If your screen has a compatible player, it works with Recoda.",
  },
  {
    q: "Does playback continue if the internet goes down?",
    a: "Yes. All content is cached locally on the device. Playback continues uninterrupted during network outages, and your schedules remain active. When connectivity is restored, any changes you made sync automatically.",
  },
  {
    q: "What content types can I show?",
    a: "Images (JPG, PNG, SVG, GIF), videos (MP4, WebM), web pages, live data feeds, social media walls, Google Slides, PDFs, weather widgets, stock tickers, countdown timers, and custom HTML/CSS layouts.",
  },
  {
    q: "How long does deployment take?",
    a: "Most customers are live within the hour. Scan a QR code on the player, name your screen, assign content — done. Large fleet rollouts typically take a day with our onboarding team's help.",
  },
  {
    q: "Do you offer support in Hindi and regional languages?",
    a: "Yes. Our support team covers Hindi, Tamil, Telugu, Kannada, Marathi, and Bengali. The dashboard UI is in English, but we're building localised interfaces — coming in 2026.",
  },
  {
    q: "Can I migrate from another digital signage platform?",
    a: "Absolutely. We have a dedicated migration team that handles data exports, content transfers, and device re-provisioning. Most migrations from platforms like ScreenCloud, Yodeck, or Rise Vision take 2–5 business days.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes — 14 days free, no credit card required. You get full access to all Growth plan features so you can experience the platform exactly as it will run for you.",
  },
];

function AccordionItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.07 }}
      className="border-b border-white/8 last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-base font-medium text-white group-hover:text-brand-cyan transition-colors pr-8">
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="flex-shrink-0 w-7 h-7 rounded-full border border-white/15 flex items-center justify-center group-hover:border-brand-indigo/50 transition-colors"
          aria-hidden="true"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="text-text-mid leading-relaxed pb-5 text-sm max-w-2xl">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="faq-heading"
    >
      <div className="absolute inset-0 dot-grid-bg opacity-15 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-brand-indigo/30 text-brand-indigo mb-4"
          >
            FAQ
          </motion.span>
          <motion.h2
            id="faq-heading"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-display-lg font-bold text-white"
          >
            Everything you wanted to ask.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Accordion */}
          <div className="lg:col-span-2">
            <div className="divide-y-0">
              {faqs.map((faq, i) => (
                <AccordionItem key={faq.q} faq={faq} index={i} />
              ))}
            </div>
          </div>

          {/* Sidebar support card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:sticky lg:top-24 self-start"
          >
            <div className="glass rounded-2xl p-6 border border-white/8">
              <div className="w-10 h-10 rounded-xl bg-brand-indigo/20 flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5B5BFF" strokeWidth="1.5" aria-hidden="true">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Still have questions?</h3>
              <p className="text-text-mid text-sm mb-6">
                Our team is ready to help — in your language, on your schedule.
              </p>

              <div className="flex flex-col gap-3">
                {[
                  { icon: "✉️", label: "Email support", href: "mailto:hello@recodaintelligence.com" },
                  { icon: "💬", label: "Live chat", href: "#" },
                  { icon: "📱", label: "WhatsApp", href: "#" },
                  { icon: "📞", label: "Call us", href: "tel:+919999999999" },
                ].map((channel) => (
                  <a
                    key={channel.label}
                    href={channel.href}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/4 border border-white/6 hover:border-brand-indigo/30 hover:bg-brand-indigo/5 transition-all group"
                  >
                    <span className="text-lg" aria-hidden="true">{channel.icon}</span>
                    <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                      {channel.label}
                    </span>
                    <span className="ml-auto text-text-mid group-hover:text-brand-indigo transition-colors">→</span>
                  </a>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-white/6">
                <p className="text-xs text-text-mid text-center">
                  IST coverage · 9 AM – 9 PM · Mon–Sat
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
