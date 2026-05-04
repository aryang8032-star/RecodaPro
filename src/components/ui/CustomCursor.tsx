"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const blobRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100 });
  const raf = useRef<number>(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.innerWidth < 768) return;

    const blob = blobRef.current;
    if (!blob) return;

    function onMove(e: MouseEvent) {
      pos.current = { x: e.clientX, y: e.clientY };
    }

    function lerp(a: number, b: number, t: number) {
      return a + (b - a) * t;
    }

    function animate() {
      current.current.x = lerp(current.current.x, pos.current.x, 0.12);
      current.current.y = lerp(current.current.y, pos.current.y, 0.12);

      if (blob) {
        blob.style.transform = `translate(${current.current.x}px, ${current.current.y}px) translate(-50%, -50%)`;
      }

      raf.current = requestAnimationFrame(animate);
    }

    function onEnter(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-magnetic]")) {
        blob?.classList.add("expanded");
      }
    }

    function onLeave(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-magnetic]")) {
        blob?.classList.remove("expanded");
      }
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onEnter);
    window.addEventListener("mouseout", onLeave);
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onEnter);
      window.removeEventListener("mouseout", onLeave);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={blobRef}
      className="cursor-blob pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
      aria-hidden="true"
    />
  );
}
