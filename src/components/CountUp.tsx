"use client";

import { useEffect, useRef } from "react";

/** Counts 0 → `to` each time it scrolls into view; resets when it leaves. */
export default function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || to === 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let played = false;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.intersectionRatio >= 0.6 && !played) {
          played = true;
          const start = performance.now();
          const step = (now: number) => {
            const t = Math.min(1, (now - start) / 1300);
            el.textContent = String(Math.round(to * (1 - Math.pow(1 - t, 3))));
            if (t < 1) raf = requestAnimationFrame(step);
          };
          raf = requestAnimationFrame(step);
        } else if (!e.isIntersecting) {
          cancelAnimationFrame(raf);
          played = false;
          el.textContent = "0";
        }
      },
      { threshold: [0, 0.6] },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to]);

  return (
    <span ref={ref} className="inline-block min-w-[1ch] text-right tabular-nums">
      {to}
    </span>
  );
}
