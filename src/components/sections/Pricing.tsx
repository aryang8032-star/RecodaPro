"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "₹299",
    period: "/ screen / month",
    description: "Perfect for small businesses getting started with digital signage.",
    screens: "Up to 5 screens",
    features: [
      "Drag-and-drop studio",
      "100+ templates",
      "Basic scheduling",
      "Email support",
      "720p content support",
      "1 user account",
    ],
    cta: "Start free trial",
    ctaHref: "#trial",
    highlighted: false,
    color: "#5B5BFF",
  },
  {
    name: "Growth",
    price: "₹499",
    period: "/ screen / month",
    description: "Multi-location powerhouse. Everything you need to scale.",
    screens: "Unlimited screens",
    features: [
      "Everything in Starter",
      "Multi-location management",
      "Advanced scheduling rules",
      "Real-time monitoring",
      "Analytics dashboard",
      "Priority support",
      "4K content support",
      "10 user accounts",
      "API access",
    ],
    cta: "Start free trial",
    ctaHref: "#trial",
    highlighted: true,
    color: "#5B5BFF",
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "tailored pricing",
    description: "For large organizations with advanced security and compliance needs.",
    screens: "Unlimited + SLA",
    features: [
      "Everything in Growth",
      "SSO & SAML integration",
      "Dedicated CSM",
      "Custom SLA",
      "White-label option",
      "Audit logs & SIEM",
      "On-prem option",
      "Unlimited users",
      "24/7 phone support",
    ],
    cta: "Talk to sales",
    ctaHref: "#demo",
    highlighted: false,
    color: "#8B7CFF",
  },
];

export default function Pricing() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden bg-void-slate/30"
      aria-labelledby="pricing-heading"
      id="pricing"
    >
      <div className="absolute inset-0 dot-grid-bg opacity-20 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[120px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #5B5BFF, transparent)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-brand-indigo/30 text-brand-indigo mb-4"
          >
            Pricing
          </motion.span>
          <motion.h2
            id="pricing-heading"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-display-lg font-bold text-white"
          >
            Three tiers.
            <span className="gradient-text"> Zero friction.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-4 text-text-mid max-w-lg mx-auto"
          >
            Start small, scale screen-by-screen. No hidden fees, no long-term lock-in.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ translateY: -8 }}
              className={`relative flex flex-col rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "glass border-2 border-brand-indigo/60 shadow-card-glow"
                  : "glass border border-white/8 hover:border-white/15"
              }`}
            >
              {/* Conic border for highlighted */}
              {plan.highlighted && (
                <div
                  className="absolute -inset-px rounded-2xl -z-10 conic-border"
                  aria-hidden="true"
                />
              )}

              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-brand-indigo to-brand-cyan text-white shadow-cta whitespace-nowrap">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-text-mid text-sm">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-2 flex items-end gap-1">
                <span className="text-4xl font-black text-white">{plan.price}</span>
                <span className="text-text-mid text-sm mb-1.5">{plan.period}</span>
              </div>
              <p
                className="text-sm font-medium mb-6 px-3 py-1.5 rounded-lg w-fit"
                style={{ backgroundColor: `${plan.color}15`, color: plan.color }}
              >
                {plan.screens}
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-2.5 mb-8 flex-1" role="list">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <svg
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <circle cx="8" cy="8" r="7" fill={`${plan.color}20`} />
                      <path
                        d="M5 8l2 2 4-4"
                        stroke={plan.color}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-sm text-white/80">{feat}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={plan.ctaHref}
                className={`w-full py-3 rounded-xl text-sm font-semibold text-center transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-brand-indigo to-brand-cyan text-white shadow-cta hover:shadow-[0_12px_40px_rgba(91,91,255,0.5)]"
                    : "border border-white/15 text-white hover:border-brand-indigo/50 hover:bg-brand-indigo/10"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Pill row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          {[
            "No long-term contracts",
            "Cancel anytime",
            "Scale screen-by-screen",
            "14-day free trial",
          ].map((pill) => (
            <div
              key={pill}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 text-sm text-text-mid"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <circle cx="6" cy="6" r="5" fill="#22D3A0" opacity="0.2" />
                <path d="M3 6l2 2 4-4" stroke="#22D3A0" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {pill}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mt-6"
        >
          <a href="#pricing" className="text-sm text-brand-indigo hover:underline">See full pricing →</a>
          <span className="text-text-mid">·</span>
          <a href="#demo" className="text-sm text-text-mid hover:text-white transition-colors">Talk to sales</a>
        </motion.div>
      </div>
    </section>
  );
}
