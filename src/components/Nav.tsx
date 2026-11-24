"use client";

import { useEffect, useState } from "react";
import { profile } from "@/content/data";

const items = [
  { id: "work", n: "01", label: "Work" },
  { id: "research", n: "02", label: "Research" },
  { id: "builds", n: "03", label: "Builds" },
  { id: "spec", n: "04", label: "Spec" },
  { id: "record", n: "05", label: "Record" },
];

export default function Nav() {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
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
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 ${
        scrolled ? "border-b border-rule bg-paper/90 backdrop-blur-sm" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-5 md:px-10">
        <a href="#top" className="flex items-baseline gap-3">
          <span className="font-serif text-2xl leading-none">A.B.</span>
          <span className="label hidden sm:inline">Datasheet · Rev 2026.11</span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {items.map((it) => (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                className={`font-mono text-[11px] uppercase tracking-[0.08em] transition-colors ${
                  active === it.id ? "text-copper" : "text-ink-2 hover:text-ink"
                }`}
              >
                <span className="mr-1.5 opacity-60">{it.n}</span>
                {it.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5">
          <a href={profile.links.resume} target="_blank" rel="noopener" className="label ink-link hidden text-ink sm:inline">
            Résumé ↗
          </a>
          <a
            href="#contact"
            className="border border-ink px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.08em] transition-colors hover:bg-ink hover:text-paper"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
