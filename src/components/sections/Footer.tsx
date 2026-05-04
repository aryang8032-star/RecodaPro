"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const footerLinks = {
  Product: ["Features", "Templates", "Integrations", "Changelog", "API Docs"],
  Solutions: ["Retail & QSR", "Corporate", "Education", "Healthcare", "Agencies"],
  Resources: ["Documentation", "Help Center", "Blog", "Case Studies", "Status"],
  Company: ["About", "Careers", "Contact", "Press", "Partners"],
};

const socials = [
  {
    label: "X (Twitter)",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
];

function EasterEggBroadcast() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  return (
    <div ref={ref} className="relative flex items-center justify-center h-12" aria-hidden="true">
      {/* Logo mark */}
      <motion.div
        animate={isInView ? { scale: [0.8, 1.1, 1], opacity: [0, 1, 1] } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="w-8 h-8 relative"
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-md border-2 border-brand-indigo"
            animate={isInView ? {
              scale: [1, 1 + i * 0.3, 1],
              opacity: [0.8, 0, 0.8],
            } : {}}
            transition={{
              duration: 2,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "easeOut",
            }}
            style={{
              width: `${100 - i * 22}%`,
              height: `${100 - i * 22}%`,
              top: `${i * 11}%`,
              left: `${i * 11}%`,
            }}
          />
        ))}
        <div className="absolute bg-brand-indigo rounded-sm" style={{ width: "30%", height: "30%", top: "35%", left: "35%" }} />
      </motion.div>

      {/* Broadcast pulse */}
      {isInView && [1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-brand-indigo/40"
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ scale: i * 3, opacity: 0 }}
          transition={{ delay: i * 0.2, duration: 1.5, ease: "easeOut" }}
          style={{ width: "32px", height: "32px" }}
        />
      ))}
    </div>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <footer className="relative bg-obsidian border-t border-white/6 overflow-hidden" role="contentinfo">
      <div className="absolute inset-0 dot-grid-bg opacity-15 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="relative w-8 h-8">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 rounded-md border-2 border-brand-indigo"
                    animate={{ scale: [1, 1.08, 1], opacity: [0.9, 0.5, 0.9] }}
                    transition={{ duration: 2.5, delay: i * 0.4, repeat: Infinity }}
                    style={{
                      width: `${100 - i * 22}%`,
                      height: `${100 - i * 22}%`,
                      top: `${i * 11}%`,
                      left: `${i * 11}%`,
                    }}
                  />
                ))}
                <div className="absolute bg-brand-indigo rounded-sm" style={{ width: "30%", height: "30%", top: "35%", left: "35%" }} />
              </div>
              <span className="font-bold text-lg tracking-tight">
                Recoda<span className="gradient-text">Intelligence</span>
              </span>
            </div>
            <p className="text-text-mid text-sm leading-relaxed mb-6 max-w-xs">
              The cloud CMS that puts every screen under intelligent control — from a single dashboard.
            </p>

            {/* Newsletter */}
            <form onSubmit={handleNewsletterSubmit} aria-label="Newsletter signup">
              <label htmlFor="newsletter-email" className="text-xs font-semibold text-white/60 uppercase tracking-wider block mb-2">
                Get product updates
              </label>
              {submitted ? (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-brand-success"
                >
                  ✓ You're in! We'll keep you posted.
                </motion.p>
              ) : (
                <div className="flex gap-2">
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    aria-label="Email address for newsletter"
                    className="flex-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder:text-text-mid focus:outline-none focus:border-brand-indigo/60 transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-brand-indigo/80 hover:bg-brand-indigo text-white text-xs font-semibold transition-colors"
                  >
                    Join
                  </button>
                </div>
              )}
            </form>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-4">
                {section}
              </h3>
              <ul className="flex flex-col gap-2.5" role="list">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-text-mid hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="text-xs text-text-mid">
              © Recoda Intelligence 2026. All rights reserved.
            </p>
            <div className="flex gap-4">
              {["Terms", "Privacy", "Cookies"].map((link) => (
                <a key={link} href="#" className="text-xs text-text-mid hover:text-white transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Status + Socials */}
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="flex items-center gap-1.5 text-xs text-text-mid hover:text-white transition-colors"
              aria-label="System status: operational"
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-brand-success"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                aria-hidden="true"
              />
              Status
            </a>
            <div className="flex gap-3" aria-label="Social media links">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-text-mid hover:text-white hover:bg-white/10 transition-all hover:-rotate-12"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Easter egg broadcast */}
        <div ref={ref} className="pb-8 flex flex-col items-center gap-2">
          <EasterEggBroadcast />
          <p className="text-xs text-text-mid/40 text-center">
            Every screen. One intelligence.
          </p>
        </div>
      </div>
    </footer>
  );
}
