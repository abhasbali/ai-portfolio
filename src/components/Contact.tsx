import Reveal from "./Reveal";
import { profile } from "@/content/data";

export default function Contact() {
  const year = new Date().getFullYear();
  return (
    <section id="contact" className="mt-28 bg-ink text-paper md:mt-40">
      <div className="mx-auto max-w-[1400px] px-5 pb-10 pt-20 md:px-10 md:pt-28">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-xs text-copper">06</span>
          <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-paper/60">Contact · Sheet 06 / 06</span>
        </div>

        <Reveal>
          <h2 className="mt-8 max-w-5xl font-serif text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.95] tracking-[-0.015em]">
            Got an engineering workflow that <em className="text-copper">should</em> have an agent?
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <a
            href={`mailto:${profile.email}`}
            className="group mt-14 inline-flex flex-wrap items-baseline gap-x-5 border-b border-paper/30 pb-3 font-serif text-[clamp(1.6rem,4.4vw,3.6rem)] leading-none transition-colors hover:border-copper"
          >
            {profile.email}
            <span className="font-mono text-base text-copper transition-transform group-hover:translate-x-1">→</span>
          </a>
        </Reveal>

        <div className="mt-16 flex flex-wrap gap-x-10 gap-y-3">
          {[
            ["LinkedIn", profile.links.linkedin],
            ["GitHub", profile.links.github],
            ["Résumé (PDF)", profile.links.resume],
          ].map(([k, v]) => (
            <a key={k} href={v} target="_blank" rel="noopener" className="font-mono text-xs uppercase tracking-[0.08em] text-paper/80 hover:text-copper">
              {k} ↗
            </a>
          ))}
        </div>

        {/* drawing title block */}
        <dl className="mt-24 grid grid-cols-2 border-l border-t border-paper/25 font-mono text-[10px] uppercase tracking-[0.08em] md:grid-cols-6">
          {[
            ["Drawn by", "A. Bali"],
            ["Location", profile.location],
            ["Set in", "Instrument Serif / Plex"],
            ["Scale", "1 : 1"],
            ["Rev", "2026.11"],
            ["Sheet", "06 of 06"],
          ].map(([k, v]) => (
            <div key={k} className="border-b border-r border-paper/25 px-3 py-2.5">
              <dt className="text-paper/45">{k}</dt>
              <dd className="mt-1 text-paper/85">{v}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.08em] text-paper/40">
          © {year} Abhas Bali. Built by hand in Next.js. No templates were harmed.
        </p>
      </div>
    </section>
  );
}
