"use client";

import { useEffect, useRef } from "react";

/**
 * Bidirectional reveal: slides up when entering from below, slides down when
 * entering from above, and hides again on the way out so it replays.
 * Content is visible in server HTML; JS only hides what is off-screen.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) el.dataset.reveal = "shown";
        else el.dataset.reveal = e.boundingClientRect.top > 0 ? "below" : "above";
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={className} style={delay ? { transitionDelay: `${delay}s` } : undefined}>
      {children}
    </div>
  );
}
