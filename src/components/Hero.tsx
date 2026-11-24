"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { profile } from "@/content/data";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // all scroll-bound, so they rewind on the way back up
  const left = useTransform(p, [0, 1], ["0%", "-38%"]);
  const right = useTransform(p, [0, 1], ["0%", "38%"]);
  const photoY = useTransform(p, [0, 1], [0, -140]);
  const photoRotate = useTransform(p, [0, 1], [0, -5]);
  const badgeRotate = useTransform(p, [0, 1], [0, 300]);
  const badgeScale = useTransform(p, [0, 1], [1, 1.5]);
  const copyY = useTransform(p, [0, 1], [0, 90]);

  const m = <T,>(style: T) => (reduce ? undefined : style);

  return (
    <section ref={ref} id="top" className="relative overflow-x-clip px-[clamp(20px,4vw,64px)] pb-20 pt-6">
      <div className="mono-label intro flex flex-wrap justify-between gap-3 border-b-2 pb-5 text-ink/65 dash">
        <span>abhasbali — AI engineer</span>
        <span>Noida, IN · IST</span>
        <span className="hidden sm:inline">Havells CRI · since Aug 2026</span>
      </div>

      <div className="relative mt-10 md:mt-14">
        <div
          className="intro relative z-[1] mb-10 w-full max-w-sm md:absolute md:right-0 md:top-[6%] md:mb-0 md:w-[clamp(240px,28vw,420px)] md:max-w-none"
          style={{ animationDelay: ".15s" }}
        >
          <motion.figure
            className="relative aspect-[4/5] overflow-hidden rounded-[20px] border-2 border-ink shadow-[10px_10px_0_var(--color-sun)]"
            style={m({ y: photoY, rotate: photoRotate })}
          >
            <Image src="/abhas.jpg" alt="Abhas Bali" fill priority sizes="(min-width: 768px) 28vw, 90vw" className="object-cover object-[50%_25%]" />
            <figcaption className="mono-label absolute inset-x-3 bottom-3 rounded-full border-2 border-ink bg-paper px-4 py-2 text-[11px]">
              Building agents at Havells CRI
            </figcaption>
          </motion.figure>
        </div>

        <h1 className="display pointer-events-none relative z-[2] flex flex-col text-[clamp(88px,18vw,290px)]">
          <span className="intro" style={{ animationDelay: ".05s" }}>
            <motion.span className="inline-block" style={m({ x: left })}>
              Abhas
            </motion.span>
          </span>
          <span className="intro -mt-[0.04em] md:ml-[12vw]" style={{ animationDelay: ".12s" }}>
            <motion.span className="inline-block" style={m({ x: right })}>
              Bali<span className="text-copper">.</span>
            </motion.span>
          </span>
        </h1>

        <motion.div
          className="breathe display absolute left-[58%] top-[30%] z-[3] hidden aspect-square w-[clamp(110px,12vw,190px)] -translate-x-1/2 items-center justify-center rounded-full border-[clamp(6px,0.7vw,11px)] border-ink text-[clamp(36px,4vw,64px)] md:flex"
          style={m({ rotate: badgeRotate, scale: badgeScale })}
          aria-hidden
        >
          AI
        </motion.div>
      </div>

      <motion.div className="relative z-[2] mt-10 max-w-xl" style={m({ y: copyY })}>
        <div className="intro" style={{ animationDelay: ".25s" }}>
          <p className="font-mono text-sm text-ink/70">{"// the engineer who wires LLMs into hardware tools"}</p>
          <p className="mt-4 text-xl leading-snug md:text-2xl">
            I build AI agents that work inside Altium, Windchill and the BIS/IEC standards every product has to pass.
            One of them has already saved Havells <strong className="mk bg-sun font-semibold">₹33 lakh</strong>.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="pill bg-sun">
              Start a conversation <span className="arr">→</span>
            </a>
            <a href={profile.links.resume} target="_blank" rel="noopener" className="pill bg-transparent">
              Résumé PDF <span className="arr">↗</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
