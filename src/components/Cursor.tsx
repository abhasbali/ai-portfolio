"use client";

import { useEffect, useRef, useState } from "react";

/** Drafting crosshair with a live coordinate readout. Fine pointers only. */
export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  const readout = useRef<HTMLSpanElement>(null);
  const [hot, setHot] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    document.documentElement.classList.add("has-cursor");

    let x = -100,
      y = -100,
      raf = 0;
    const paint = () => {
      raf = 0;
      if (ref.current) ref.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      if (readout.current)
        readout.current.textContent = `X ${String(Math.round(x)).padStart(4, "0")}  Y ${String(Math.round(y + window.scrollY)).padStart(5, "0")}`;
    };
    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!raf) raf = requestAnimationFrame(paint);
      const t = e.target as Element | null;
      setHot(!!t?.closest("a, button, [data-hot]"));
    };
    const leave = () => {
      x = -100;
      y = -100;
      paint();
    };
    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
      document.documentElement.classList.remove("has-cursor");
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="cursor pointer-events-none fixed left-0 top-0 z-[70]"
      style={{ transform: "translate3d(-100px,-100px,0)" }}
    >
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 transition-[width,height] duration-200"
        style={{ width: hot ? 44 : 22, height: hot ? 44 : 22 }}
      >
        <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-ink" />
        <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-ink" />
        <span
          className={`absolute inset-0 rounded-full border transition-colors duration-200 ${
            hot ? "border-copper" : "border-transparent"
          }`}
        />
      </div>
      <span
        ref={readout}
        className="absolute left-4 top-3 whitespace-pre font-mono text-[10px] tracking-wider text-ink-3"
      />
    </div>
  );
}
