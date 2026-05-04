"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const badges = [
  { label: "SOC 2-ready", color: "#22D3A0" },
  { label: "AES-256", color: "#00E5FF" },
  { label: "Roles & SSO", color: "#8B7CFF" },
  { label: "99.9% Uptime", color: "#5B5BFF" },
  { label: "Audit Logs", color: "#F59E0B" },
  { label: "GDPR Ready", color: "#22D3A0" },
];

function ShieldVisual() {
  return (
    <div className="relative flex items-center justify-center h-80">
      {/* Rotating rings */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-brand-indigo/20"
          style={{
            width: `${i * 80 + 80}px`,
            height: `${i * 80 + 80}px`,
          }}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 12 + i * 4, repeat: Infinity, ease: "linear" }}
          aria-hidden="true"
        />
      ))}

      {/* Shield */}
      <motion.div
        animate={{
          y: [0, -8, 0],
          rotate: [0, 2, -2, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10"
        aria-hidden="true"
      >
        <div className="w-28 h-32 relative">
          <svg viewBox="0 0 100 120" className="w-full h-full" fill="none">
            <defs>
              <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#5B5BFF" />
                <stop offset="100%" stopColor="#00E5FF" />
              </linearGradient>
            </defs>
            <path
              d="M50 5L5 25v40c0 30 20 50 45 55 25-5 45-25 45-55V25L50 5z"
              fill="url(#shieldGrad)"
              opacity="0.2"
              stroke="url(#shieldGrad)"
              strokeWidth="2"
            />
            <path
              d="M50 20L18 36v28c0 20 13 34 32 38 19-4 32-18 32-38V36L50 20z"
              fill="url(#shieldGrad)"
              opacity="0.15"
            />
            {/* Lock icon */}
            <rect x="38" y="55" width="24" height="18" rx="3" fill="white" opacity="0.8" />
            <path
              d="M43 55V48a7 7 0 0 1 14 0v7"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.8"
            />
            <circle cx="50" cy="64" r="2.5" fill="#0A0A12" />
          </svg>

          {/* Glow */}
          <div
            className="absolute inset-0 blur-2xl opacity-40 -z-10"
            style={{
              background: "linear-gradient(135deg, #5B5BFF, #00E5FF)",
              borderRadius: "50%",
            }}
            aria-hidden="true"
          />
        </div>
      </motion.div>

      {/* Orbiting badges */}
      {badges.map((badge, i) => {
        const angle = (i / badges.length) * 2 * Math.PI;
        const radius = 130;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <motion.div
            key={badge.label}
            className="absolute"
            style={{ left: "50%", top: "50%" }}
            animate={{
              x: x,
              y: y,
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              rotate: {
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            aria-label={badge.label}
          >
            <div
              className="px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap -translate-x-1/2 -translate-y-1/2"
              style={{
                backgroundColor: `${badge.color}15`,
                border: `1px solid ${badge.color}40`,
                color: badge.color,
              }}
            >
              ✓ {badge.label}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function Security() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="security-heading"
    >
      <div className="absolute inset-0 mesh-bg opacity-15 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(91,91,255,0.2), transparent)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-brand-success/30 text-brand-success mb-4"
            >
              Enterprise Security
            </motion.span>

            <motion.h2
              id="security-heading"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-display-lg font-bold text-white mb-6"
            >
              Enterprise-grade
              <span className="gradient-text"> by design.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-text-mid text-lg leading-relaxed mb-8"
            >
              End-to-end encryption, granular role-based access, SSO-ready architecture, and remote
              device management — engineered for IT teams who don't have time to babysit screens.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { title: "Role-Based Access", desc: "Fine-grained permissions per user and screen group" },
                { title: "Remote Management", desc: "Reboot, lock, or update any device from the cloud" },
                { title: "Encrypted Transit", desc: "TLS 1.3 for all content delivery and API calls" },
                { title: "Offline Resilience", desc: "Content plays even when internet drops" },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-xl bg-white/3 border border-white/6 hover:border-brand-success/20 transition-colors">
                  <h4 className="text-sm font-semibold text-white mb-1">{item.title}</h4>
                  <p className="text-xs text-text-mid leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>

            <motion.a
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              href="#demo"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl text-sm font-semibold text-white border border-white/15 hover:border-brand-success/40 hover:bg-brand-success/5 transition-all"
            >
              Talk to our security team →
            </motion.a>
          </div>

          {/* Right: 3D shield visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            aria-hidden="true"
          >
            <ShieldVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
