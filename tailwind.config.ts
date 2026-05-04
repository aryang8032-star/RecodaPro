import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          indigo: "#5B5BFF",
          violet: "#8B7CFF",
          cyan: "#00E5FF",
          success: "#22D3A0",
          alert: "#FF6B6B",
        },
        obsidian: "#0A0A12",
        "void-slate": "#12121C",
        pearl: "#F8F9FC",
        "text-mid": "#A0A3B8",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "JetBrains Mono", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(2.5rem, 6vw, 5.5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.5rem, 3vw, 2rem)", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #5B5BFF 0%, #00E5FF 100%)",
        "gradient-glow": "radial-gradient(circle, #8B7CFF 0%, transparent 70%)",
        "gradient-conic": "conic-gradient(from 180deg, #5B5BFF, #00E5FF, #8B7CFF, #5B5BFF)",
        "gradient-hero": "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(91,91,255,0.15) 0%, transparent 60%)",
        "dot-grid": "radial-gradient(circle, #A0A3B8 1px, transparent 1px)",
      },
      animation: {
        "marquee": "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 40s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "pulse-ring": "pulse-ring 3s ease-in-out infinite",
        "conic-spin": "conic-spin 4s linear infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "shimmer": "shimmer 2s linear infinite",
        "orbit": "orbit 20s linear infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "count-up": "fade-up 0.8s ease-out forwards",
        "broadcast": "broadcast 2s ease-out forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-ring": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.1)" },
        },
        "conic-spin": {
          "0%": { "--angle": "0deg" } as Record<string, string>,
          "100%": { "--angle": "360deg" } as Record<string, string>,
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(120px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(120px) rotate(-360deg)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(91,91,255,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(91,91,255,0.7), 0 0 80px rgba(0,229,255,0.3)" },
        },
        broadcast: {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "60%": { opacity: "1", transform: "scale(1.05)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "glass": "0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)",
        "card-glow": "0 0 0 1px rgba(91,91,255,0.2), 0 8px 32px rgba(91,91,255,0.1)",
        "cta": "0 8px 32px rgba(91,91,255,0.4), 0 2px 8px rgba(0,0,0,0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
