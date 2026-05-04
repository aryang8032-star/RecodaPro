"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

const navLinks = [
  {
    label: "Product",
    items: [
      { label: "Screen Management", desc: "Control all displays from one hub" },
      { label: "Content Studio", desc: "Drag-and-drop design tools" },
      { label: "Scheduling", desc: "Smart time and location rules" },
      { label: "Analytics", desc: "Real-time performance insights" },
    ],
  },
  {
    label: "Solutions",
    items: [
      { label: "Retail & QSR", desc: "Menu boards and promo displays" },
      { label: "Corporate", desc: "Internal comms and lobbies" },
      { label: "Education", desc: "Campus-wide communications" },
      { label: "Healthcare", desc: "Wayfinding and patient content" },
    ],
  },
  { label: "Pricing", items: [] },
  { label: "Resources", items: [] },
  { label: "Company", items: [] },
];

const RecodaLogo = ({ scrolled }: { scrolled: boolean }) => (
  <div className="flex items-center gap-2.5" aria-label="Recoda Intelligence">
    <div className={cn("relative transition-all duration-300", scrolled ? "w-7 h-7" : "w-9 h-9")}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-md border-2 border-brand-indigo"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.9, 0.5, 0.9],
          }}
          transition={{
            duration: 2.5,
            delay: i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            width: `${100 - i * 22}%`,
            height: `${100 - i * 22}%`,
            top: `${i * 11}%`,
            left: `${i * 11}%`,
          }}
        />
      ))}
      <div
        className="absolute inset-0 m-auto rounded-sm bg-brand-indigo"
        style={{ width: "30%", height: "30%", top: "35%", left: "35%" }}
      />
    </div>
    <span
      className={cn(
        "font-bold tracking-tight transition-all duration-300",
        scrolled ? "text-base" : "text-lg"
      )}
    >
      Recoda<span className="gradient-text">Intelligence</span>
    </span>
  </div>
);

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMenuEnter = (label: string) => {
    if (menuTimeout.current) clearTimeout(menuTimeout.current);
    setActiveMenu(label);
  };

  const handleMenuLeave = () => {
    menuTimeout.current = setTimeout(() => setActiveMenu(null), 200);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "h-[60px] glass shadow-glass"
            : "h-[72px] bg-transparent"
        )}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <a href="#" aria-label="Recoda Intelligence home">
            <RecodaLogo scrolled={scrolled} />
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <li
                key={link.label}
                onMouseEnter={() => link.items.length > 0 && handleMenuEnter(link.label)}
                onMouseLeave={handleMenuLeave}
                className="relative"
              >
                <button
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                    "text-text-mid hover:text-white",
                    activeMenu === link.label && "text-white bg-white/5"
                  )}
                >
                  {link.label}
                  {link.items.length > 0 && (
                    <motion.span
                      animate={{ rotate: activeMenu === link.label ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-1.5 inline-block text-xs"
                    >
                      ▾
                    </motion.span>
                  )}
                </button>

                {/* Mega menu */}
                <AnimatePresence>
                  {activeMenu === link.label && link.items.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-2 w-64 glass rounded-xl p-2 shadow-glass border border-white/6"
                      onMouseEnter={() => {
                        if (menuTimeout.current) clearTimeout(menuTimeout.current);
                      }}
                      onMouseLeave={handleMenuLeave}
                    >
                      {link.items.map((item) => (
                        <a
                          key={item.label}
                          href="#"
                          className="flex flex-col px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors group"
                        >
                          <span className="text-sm font-medium text-white group-hover:text-brand-cyan transition-colors">
                            {item.label}
                          </span>
                          <span className="text-xs text-text-mid mt-0.5">{item.desc}</span>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#"
              className="text-sm font-medium text-text-mid hover:text-white transition-colors px-3 py-2"
            >
              Sign in
            </a>
            <a
              href="#demo"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white overflow-hidden group"
              data-magnetic
            >
              <span className="relative z-10">Book Demo</span>
              <motion.span
                className="relative z-10 text-xs"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
              <span className="absolute inset-0 bg-gradient-to-r from-brand-indigo to-brand-cyan" />
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-brand-violet to-brand-cyan" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden w-9 h-9 flex flex-col justify-center items-center gap-1.5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 bg-white rounded-full origin-center"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-0.5 w-6 bg-white rounded-full"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 bg-white rounded-full origin-center"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-obsidian flex flex-col p-8 pt-24"
            aria-modal="true"
            role="dialog"
            aria-label="Navigation menu"
          >
            <nav>
              <ul className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, ease: "easeOut" }}
                  >
                    <a
                      href="#"
                      className="block text-3xl font-bold py-3 text-white hover:gradient-text transition-all"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <div className="mt-auto flex gap-3">
              <a
                href="#"
                className="flex-1 py-3 text-center rounded-xl border border-white/15 text-sm font-medium text-white"
                onClick={() => setMobileOpen(false)}
              >
                Sign in
              </a>
              <a
                href="#demo"
                className="flex-1 py-3 text-center rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-brand-indigo to-brand-cyan"
                onClick={() => setMobileOpen(false)}
              >
                Book Demo →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
