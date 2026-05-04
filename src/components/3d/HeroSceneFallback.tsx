"use client";

import { motion } from "framer-motion";

const screens = [
  { label: "Retail", color: "#FF6B6B", delay: 0 },
  { label: "Corporate", color: "#5B5BFF", delay: 0.2 },
  { label: "Healthcare", color: "#22D3A0", delay: 0.4 },
  { label: "Education", color: "#00E5FF", delay: 0.6 },
  { label: "Agency", color: "#8B7CFF", delay: 0.8 },
  { label: "QSR", color: "#F59E0B", delay: 1.0 },
];

export default function HeroSceneFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center relative" aria-label="Recoda Intelligence managing multiple screens" role="img">
      {/* Central laptop */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10"
      >
        <div className="w-56 h-36 rounded-xl bg-void-slate border border-white/10 shadow-glass flex items-center justify-center p-3">
          <div className="w-full h-full rounded-lg bg-obsidian flex flex-col gap-1.5 p-2">
            <div className="flex gap-1">
              {["#5B5BFF","#00E5FF","#22D3A0","#8B7CFF"].map((c,i) => (
                <div key={i} className="h-4 flex-1 rounded-sm opacity-80" style={{backgroundColor: c}} />
              ))}
            </div>
            <div className="flex gap-1 flex-1">
              {[40,65,50,80,55,70].map((h,i) => (
                <div key={i} className="flex-1 rounded-sm self-end" style={{height:`${h}%`, backgroundColor:"#5B5BFF", opacity: 0.7+i*0.05}} />
              ))}
            </div>
            <div className="flex gap-1 items-center">
              {[1,1,0].map((ok,i) => (
                <div key={i} className="w-2 h-2 rounded-full" style={{backgroundColor: ok ? "#22D3A0" : "#FF6B6B"}} />
              ))}
              <span className="text-[8px] text-text-mid ml-1">12 devices online</span>
            </div>
          </div>
        </div>
        <div className="mx-auto w-36 h-2 rounded-b-full bg-void-slate border-t-0 border border-white/10" />
        <div className="mx-auto w-20 h-1 rounded-full bg-white/5 mt-0.5" />
      </motion.div>

      {/* Orbiting screens */}
      {screens.map((s, i) => {
        const angle = (i / screens.length) * 360;
        const rad = (angle * Math.PI) / 180;
        const rx = 44;
        const ry = 28;
        const x = Math.cos(rad) * rx;
        const y = Math.sin(rad) * ry;

        return (
          <motion.div
            key={s.label}
            animate={{
              rotate: [angle, angle + 360],
            }}
            transition={{ duration: 20 + i * 2, repeat: Infinity, ease: "linear" }}
            className="absolute"
            style={{ width: 0, height: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: s.delay }}
              className="absolute"
              style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%,-50%)" }}
            >
              <div
                className="w-20 h-12 rounded-lg border flex items-center justify-center text-xs font-semibold"
                style={{ borderColor: s.color, backgroundColor: `${s.color}15`, color: s.color }}
              >
                {s.label}
              </div>
              {/* Connection line */}
              <div
                className="absolute top-1/2 left-1/2 -z-10 opacity-30"
                style={{
                  width: `${Math.sqrt(x*x+y*y)*0.6}%`,
                  height: "1px",
                  background: `linear-gradient(90deg, transparent, ${s.color})`,
                  transformOrigin: "0 0",
                  transform: `rotate(${Math.atan2(-y, -x)}rad)`,
                }}
              />
            </motion.div>
          </motion.div>
        );
      })}

      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-glow opacity-20 -z-10" />
    </div>
  );
}
