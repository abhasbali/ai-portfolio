import Image from "next/image";
import Reveal from "./Reveal";
import { profile } from "@/content/data";

const block = [
  { k: "Role", v: "AI Catalyst Intern" },
  { k: "Org", v: "Havells India · CRI" },
  { k: "Since", v: "Aug 2026" },
  { k: "Focus", v: "MCP · RAG · Agents" },
  { k: "Status", v: "Open to conversations", live: true },
];

function CropMarks() {
  const c = "absolute h-4 w-4 border-ink";
  return (
    <>
      <span className={`${c} -left-3 -top-3 border-l border-t`} />
      <span className={`${c} -right-3 -top-3 border-r border-t`} />
      <span className={`${c} -bottom-3 -left-3 border-b border-l`} />
      <span className={`${c} -bottom-3 -right-3 border-b border-r`} />
    </>
  );
}

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-[1400px] px-5 pt-24 md:px-10 md:pt-32">
      <div className="grid gap-12 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-7 lg:col-span-8">
          <Reveal className="intro">
            <p className="label">
              <span className="text-copper">●</span>&nbsp; AI Engineer — Centre for Research &amp; Innovation, Havells
            </p>
          </Reveal>
          <Reveal delay={0.08} className="intro">
            <h1 className="mt-6 font-serif text-[clamp(4.2rem,13vw,11.5rem)] leading-[0.82] tracking-[-0.025em]">
              Abhas
              <br />
              Bali<span className="text-copper">.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16} className="intro">
            <p className="mt-10 max-w-[38rem] font-serif text-[1.65rem] leading-[1.2] text-ink md:text-[2.1rem]">
              I build AI agents that work inside the tools hardware engineers already use: <em>Altium</em>,{" "}
              <em>Windchill</em>, and the <em>standards</em> every product has to pass.
            </p>
          </Reveal>
          <Reveal delay={0.24} className="intro">
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="#work"
                className="group inline-flex items-center gap-3 bg-ink px-5 py-3 font-mono text-xs uppercase tracking-[0.08em] text-paper transition-colors hover:bg-copper"
              >
                See the work
                <span className="transition-transform group-hover:translate-y-0.5">↓</span>
              </a>
              <a href={profile.links.github} target="_blank" rel="noopener" className="label ink-link text-ink">
                GitHub ↗
              </a>
              <a href={profile.links.linkedin} target="_blank" rel="noopener" className="label ink-link text-ink">
                LinkedIn ↗
              </a>
              <a href={profile.links.resume} target="_blank" rel="noopener" className="label ink-link text-ink">
                Résumé PDF ↗
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="intro md:col-span-5 lg:col-span-4">
          <figure className="relative mx-auto max-w-sm md:mt-10 md:max-w-none">
            <div className="group relative overflow-hidden bg-paper-2" data-hot>
              <Image
                src="/abhas.jpg"
                alt="Portrait of Abhas Bali"
                width={900}
                height={885}
                priority
                sizes="(min-width: 768px) 30vw, 90vw"
                className="aspect-[4/5] h-auto w-full object-cover object-[50%_20%] mix-blend-multiply grayscale contrast-[1.08] transition-[filter] duration-700 group-hover:grayscale-0"
              />
            </div>
            <CropMarks />
            <figcaption className="mt-5 flex justify-between gap-4 font-mono text-[11px] leading-relaxed text-ink-2">
              <span>Fig. 1 — The engineer, 2026.</span>
              <span className="text-right">B.Tech CSE, SRM · CGPA 9.50</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>

      {/* title block */}
      <Reveal delay={0.3} className="intro">
        <dl className="mt-20 grid grid-cols-2 border-l border-t border-ink md:mt-28 md:grid-cols-5">
          {block.map((b) => (
            <div key={b.k} className="border-b border-r border-ink px-4 py-3">
              <dt className="label text-[10px]">{b.k}</dt>
              <dd className="mt-1 text-sm font-medium">
                {b.live && <span className="blink mr-2 inline-block h-2 w-2 bg-copper align-middle" />}
                {b.v}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
