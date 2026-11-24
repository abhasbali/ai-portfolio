"use client";

import { useEffect, useState } from "react";
import { ticker } from "@/content/data";
import { ScrollProgress, VelocityMarquee } from "./motion";

const items = [
  { id: "work", label: "Work" },
  { id: "numbers", label: "Numbers" },
  { id: "builds", label: "Builds" },
  { id: "stack", label: "Stack" },
];

export function Ticker() {
  return (
    <VelocityMarquee baseVelocity={-1.6} className="border-b-2 border-ink bg-sun py-2.5">
      {ticker.map((t) => (
        <span key={t} className="mono-label flex items-center gap-7 pr-7 text-[12px]">
          <span>{t}</span>
          <span className="spin">✳</span>
        </span>
      ))}
    </VelocityMarquee>
  );
}

export default function Nav() {
  const [active, setActive] = useState("");
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    for (const { id } of items) {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b-2 bg-paper transition-colors duration-300 ${
        solid ? "border-ink" : "border-transparent"
      }`}
    >
      <nav className="flex items-center justify-between gap-6 px-[clamp(20px,4vw,64px)] py-3.5">
        <a href="#top" className="display text-[28px] leading-none tracking-normal">
          Abhas Bali<sup className="ml-0.5 align-super font-mono text-[11px] font-bold">AI</sup>
        </a>
        <ul className="hidden items-center gap-2 md:flex">
          {items.map((it) => (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                className={`mono-label rounded-full border-2 px-3.5 py-1.5 transition-colors ${
                  active === it.id
                    ? "border-ink bg-sun text-ink"
                    : "border-transparent text-ink/60 hover:text-ink hover:underline hover:underline-offset-4"
                }`}
              >
                {it.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="pill bg-sun px-5 py-2.5 text-[12px]">
          Say hello <span className="arr">→</span>
        </a>
      </nav>
      <ScrollProgress />
    </header>
  );
}
