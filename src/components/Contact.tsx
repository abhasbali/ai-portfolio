import { profile } from "@/content/data";

export default function Contact() {
  return (
    <section id="contact" className="border-t-2 border-ink bg-ink px-[clamp(20px,4vw,64px)] pb-10 pt-24 text-paper md:pt-32">
      <p className="font-mono text-sm text-paper/60">{"// got a workflow that should have an agent? a question? a role?"}</p>
      <a
        href={`mailto:${profile.email}`}
        className="group mt-8 flex flex-wrap items-center gap-x-8 gap-y-4"
      >
        <span className="display text-[clamp(84px,16vw,260px)] transition-colors group-hover:text-sun">Write me</span>
        <span className="display flex aspect-square w-[clamp(70px,9vw,140px)] items-center justify-center rounded-full border-[clamp(5px,0.6vw,9px)] border-paper text-[clamp(32px,4.4vw,70px)] transition-all duration-300 group-hover:rotate-[-45deg] group-hover:border-sun group-hover:bg-sun group-hover:text-ink">
          →
        </span>
      </a>
      <a href={`mailto:${profile.email}`} className="mt-6 inline-block font-mono text-lg underline decoration-sun decoration-2 underline-offset-8 md:text-2xl">
        {profile.email}
      </a>

      <div className="mt-16 flex flex-wrap gap-4">
        {[
          ["LinkedIn", profile.links.linkedin],
          ["GitHub", profile.links.github],
          ["Résumé PDF", profile.links.resume],
        ].map(([k, v]) => (
          <a key={k} href={v} target="_blank" rel="noopener" className="pill border-paper bg-transparent text-paper hover:bg-sun hover:text-ink hover:shadow-[4px_4px_0_var(--color-paper)]">
            {k} <span className="arr">↗</span>
          </a>
        ))}
      </div>

      <div className="mono-label mt-24 flex flex-wrap justify-between gap-4 border-t-2 border-dashed border-paper/25 pt-6 text-[11px] text-paper/50">
        <span>{profile.location} · open to remote</span>
        <span>© 2026 Abhas Bali</span>
      </div>
    </section>
  );
}
