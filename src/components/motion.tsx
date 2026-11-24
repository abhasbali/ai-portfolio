"use client";

/*
 * Scroll-driven motion. Everything here is bound to scroll position or
 * scroll velocity, so it plays forward on the way down and rewinds on the
 * way back up. Reduced-motion users get the static layout.
 */

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  type MotionValue,
} from "framer-motion";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const wrap = (min: number, max: number, v: number) => {
  const r = max - min;
  return ((((v - min) % r) + r) % r) + min;
};

function useMedia(query: string) {
  return useSyncExternalStore(
    (cb) => {
      const m = window.matchMedia(query);
      m.addEventListener("change", cb);
      return () => m.removeEventListener("change", cb);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}

/* ---------- marquee that follows scroll direction and speed ---------- */
export function VelocityMarquee({
  children,
  baseVelocity = -2,
  className = "",
}: {
  children: React.ReactNode;
  baseVelocity?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, { damping: 50, stiffness: 400 });
  const factor = useTransform(smooth, [0, 1000], [0, 5], { clamp: false });
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
  const direction = useRef(1);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    let move = direction.current * baseVelocity * (delta / 1000);
    const f = factor.get();
    if (f < 0) direction.current = -1;
    else if (f > 0) direction.current = 1;
    move += direction.current * move * f;
    baseX.set(baseX.get() + move);
  });

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div className="flex w-max whitespace-nowrap" style={{ x }}>
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden>
          {children}
        </div>
      </motion.div>
    </div>
  );
}

/* ---------- reading progress under the header ---------- */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  return <motion.div aria-hidden className="absolute inset-x-0 -bottom-[2px] h-[3px] origin-left bg-sun" style={{ scaleX }} />;
}

/* ---------- manifesto: lines slide in from alternating sides, marks paint on ---------- */
type Seg = string | { mark: string; color: "copper" | "sun" | "mint" };

function Mark({ p, text, color }: { p: MotionValue<number>; text: string; color: string }) {
  const size = useTransform(p, [0.55, 0.95], ["0% 100%", "100% 100%"]);
  const ink = useTransform(p, [0.6, 0.85], ["#f4eee4", "#16140f"]);
  return (
    <motion.span
      className="mk"
      style={{
        backgroundImage: `linear-gradient(var(--color-${color}), var(--color-${color}))`,
        backgroundRepeat: "no-repeat",
        backgroundSize: size,
        color: ink,
      }}
    >
      {text}
    </motion.span>
  );
}

function Line({ p, i, segs }: { p: MotionValue<number>; i: number; segs: Seg[] }) {
  const x = useTransform(p, [0, 0.7], [i % 2 ? 220 : -220, 0]);
  const opacity = useTransform(p, [0, 0.6], [0.1, 1]);
  return (
    <motion.span className="block" style={{ x, opacity }}>
      {segs.map((s, k) =>
        typeof s === "string" ? <span key={k}>{s}</span> : <Mark key={k} p={p} text={s.mark} color={s.color} />,
      )}
    </motion.span>
  );
}

export function ManifestoLines({ lines }: { lines: Seg[][] }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const still = useMotionValue(1);
  const p = reduce ? still : scrollYProgress;
  return (
    <p ref={ref} className="display text-[clamp(52px,9vw,148px)] leading-[0.95]">
      {lines.map((segs, i) => (
        <Line key={i} p={p} i={i} segs={segs} />
      ))}
    </p>
  );
}

/* ---------- "Before & After" pulls together ---------- */
export function BeforeAfterHead() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center 40%"] });
  const left = useTransform(scrollYProgress, [0, 1], ["-30vw", "0vw"]);
  const right = useTransform(scrollYProgress, [0, 1], ["30vw", "0vw"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-360, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const big = "display text-[clamp(40px,12vw,210px)]";
  return (
    <div ref={ref} className="flex items-center justify-between gap-4">
      <motion.span className={big} style={reduce ? undefined : { x: left }}>
        Before
      </motion.span>
      <motion.span
        className="breathe display flex aspect-square w-[clamp(50px,10vw,160px)] shrink-0 items-center justify-center rounded-full border-[clamp(4px,0.7vw,10px)] border-ink text-[clamp(22px,4.6vw,76px)]"
        style={reduce ? undefined : { rotate, scale }}
      >
        &amp;
      </motion.span>
      <motion.span className={big} style={reduce ? undefined : { x: right }}>
        After
      </motion.span>
    </div>
  );
}

/* ---------- builds: pinned, vertical scroll drives the rail sideways ---------- */
export function PinnedRail({ id, head, children }: { id: string; head: React.ReactNode; children: React.ReactNode }) {
  const desktop = useMedia("(min-width: 768px)");
  const reduce = useReducedMotion();
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLOListElement>(null);
  const [dist, setDist] = useState(0);
  const pinned = desktop && !reduce;

  useEffect(() => {
    const el = track.current;
    if (!el || !pinned) return;
    let last = -1;
    const measure = () => {
      const d = Math.max(0, el.scrollWidth - window.innerWidth);
      setDist(d);
      // page height changed: let other scroll-linked sections re-measure (once per change)
      if (d !== last) {
        last = d;
        requestAnimationFrame(() => window.dispatchEvent(new Event("resize")));
      }
    };
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [pinned]);

  // progress computed from live layout each frame, so it never goes stale
  const { scrollY } = useScroll();
  const progress = useTransform(scrollY, (y) => {
    const el = section.current;
    if (!el) return 0;
    const start = el.getBoundingClientRect().top + window.scrollY;
    const span = el.offsetHeight - window.innerHeight;
    return span > 0 ? Math.min(1, Math.max(0, (y - start) / span)) : 0;
  });
  const x = useTransform(progress, (v) => -v * dist);

  const pad = "px-[clamp(20px,4vw,64px)]";

  if (!pinned) {
    return (
      <section id={id} className="scroll-mt-20 overflow-hidden py-24">
        <div className={pad}>{head}</div>
        <ol className={`rail mt-10 flex snap-x snap-mandatory scroll-px-[clamp(20px,4vw,64px)] gap-6 overflow-x-auto pb-6 pt-4 ${pad}`}>
          {children}
        </ol>
      </section>
    );
  }

  return (
    <section id={id} ref={section} className="relative" style={{ height: `calc(100vh + ${dist}px)` }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-x-clip pt-16">
        <div className={pad}>{head}</div>
        <motion.ol ref={track} className={`mt-10 flex w-max gap-6 pb-6 pt-4 ${pad}`} style={{ x }}>
          {children}
        </motion.ol>
        <div className={`${pad}`}>
          <div className="h-[3px] w-full bg-rule/60">
            <motion.div className="h-full origin-left bg-ink" style={{ scaleX: progress }} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- generic: element drifts with scroll ---------- */
export function Drift({
  children,
  from = 60,
  to = -60,
  className,
}: {
  children: React.ReactNode;
  from?: number;
  to?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [from, to]);
  return (
    <motion.div ref={ref} className={className} style={reduce ? undefined : { y }}>
      {children}
    </motion.div>
  );
}
