import Reveal from "./Reveal";
import Flow from "./Flow";
import CountUp from "./CountUp";
import { ManifestoLines, BeforeAfterHead, PinnedRail, VelocityMarquee, Drift } from "./motion";
import { havells, research, stack, stats, process, builds, achievements, certifications, education } from "@/content/data";

const PAD = "px-[clamp(20px,4vw,64px)]";

function Head({ idx, title, note }: { idx: string; title: string; note?: string }) {
  return (
    <Reveal className="flex flex-wrap items-baseline gap-x-6 gap-y-2 border-b-2 pb-6 dash">
      <span className="font-mono text-[13px] font-bold">({idx})</span>
      <h2 className="display text-[clamp(44px,6vw,92px)]">{title}</h2>
      {note && <span className="mono-label ml-auto text-ink/60">{note}</span>}
    </Reveal>
  );
}

/* ---------- manifesto ---------- */
export function Manifesto() {
  return (
    <section className={`overflow-x-clip bg-ink py-24 text-paper md:py-32 ${PAD}`}>
      <p className="mono-label mb-8 text-paper/50">{"// manifesto"}</p>
      <ManifestoLines
        lines={[
          ["I wire LLMs"],
          ["into ", { mark: "CAD", color: "copper" }, " & ", { mark: "PLM", color: "sun" }, "."],
          ["I ground every"],
          [{ mark: "answer", color: "mint" }, "."],
        ]}
      />
      <Reveal>
        <p className="mt-12 max-w-xl leading-relaxed text-paper/80">
          Models are the easy part. The work is getting an agent into the software engineers already live in, giving
          it the right tools, and making sure every answer points back to a part number, a clause or a design-rule
          check. That&rsquo;s the bit I like.
        </p>
      </Reveal>
    </section>
  );
}

/* ---------- current work ---------- */
export function Work() {
  return (
    <section id="work" className={`scroll-mt-20 py-24 md:py-32 ${PAD}`}>
      <Head idx="01" title="Now at Havells" note="Centre for Research & Innovation" />
      {havells.map((c, i) => (
        <Reveal key={c.id}>
          <article className="group grid grid-cols-1 gap-8 border-b-2 px-2 py-12 transition-colors duration-300 dash hover:bg-cream md:grid-cols-[72px_1fr_1.15fr] md:gap-10 md:px-4">
            <span className="display text-5xl text-ink/25">{String(i + 1).padStart(2, "0")}</span>
            <div className="min-w-0">
              <div className="flex items-center gap-3">
                <span className={`mono-label rounded-full border-2 border-ink px-3 py-1 text-[10px] ${c.status === "Shipped" ? "bg-mint" : "bg-paper"}`}>
                  {c.status}
                </span>
                {c.metric && (
                  <span className="mono-label rounded-full border-2 border-ink bg-sun px-3 py-1 text-[10px]">
                    {c.metric.value} {c.metric.unit} saved
                  </span>
                )}
              </div>
              <h3 className="display mt-5 text-[clamp(40px,4.4vw,64px)]">{c.title}</h3>
              <p className="mt-5 max-w-lg text-ink-2">{c.problem}</p>
              <p className="mt-3 max-w-lg">{c.built}</p>
              <p className="mt-3 max-w-lg font-medium">→ {c.outcome}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {c.stack.map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="min-w-0 self-center rounded-[20px] border-2 border-ink bg-paper p-4 md:p-6">
              <p className="mono-label mb-3 text-[10px] text-ink/60">Signal path · {c.id}</p>
              <div className="-mx-4 overflow-x-auto px-4 md:mx-0 md:px-0">
                <div className="min-w-[520px]">
                  <Flow columns={c.flow} title={c.title} />
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      ))}
    </section>
  );
}

/* ---------- before / after ---------- */
export function Numbers() {
  return (
    <section id="numbers" className={`scroll-mt-20 overflow-x-clip border-y-2 border-ink bg-cream py-24 md:py-32 ${PAD}`}>
      <BeforeAfterHead />
      <p className="mono-label mt-5 text-ink/60">{"// real numbers from projects on this page"}</p>

      <div className="mt-14 border-t-2 dash">
        {stats.map((s) => (
          <Reveal key={s.label}>
            <div className="grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-3 border-b-2 px-2 py-7 transition-colors duration-300 dash hover:bg-sun md:grid-cols-[1fr_auto_auto_auto] md:gap-x-12 md:px-4">
              <div>
                <p className="mono-label text-[13px]">{s.label}</p>
                {s.note && <p className="mt-1 font-mono text-[11px] text-ink/55">{s.note}</p>}
              </div>
              <span className="display hidden text-[clamp(28px,3.4vw,52px)] text-ink/35 line-through decoration-[3px] md:block">
                {s.before}
              </span>
              <span className="display hidden text-[clamp(24px,3vw,44px)] text-ink/50 md:block">→</span>
              <span className="display inline-flex items-baseline justify-self-end border-2 border-ink bg-copper px-[0.18em] py-[0.05em] text-[clamp(52px,7.5vw,120px)] leading-none">
                {s.prefix}
                <CountUp to={s.after} />
                {s.suffix && <i className="ml-[0.15em] text-[0.35em] not-italic">{s.suffix}</i>}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- builds rail ---------- */
// alternate warm / neutral / cool so neighbours never clash
const cardColors = ["bg-sun", "bg-paper", "bg-mint", "bg-cream", "bg-copper"];

export function Builds() {
  return (
    <PinnedRail id="builds" head={<Head idx="02" title="Selected builds" note="// keep scrolling →" />}>
      {builds.map((b, i) => (
        <li key={b.name} className="snap-start">
          <a
            href={b.href}
            target="_blank"
            rel="noopener"
            className={`group flex h-[clamp(380px,56vh,480px)] w-[clamp(290px,34vw,500px)] flex-col rounded-[20px] border-2 border-ink p-7 transition-[transform,box-shadow] duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0_var(--color-ink)] ${cardColors[i % cardColors.length]}`}
          >
            <div className="mono-label flex justify-between text-[11px]">
              <span>№{String(i + 1).padStart(2, "0")}</span>
              <span>{b.kind === "Live" ? "Live demo ↗" : "Source ↗"}</span>
            </div>
            <h3 className="display mt-auto text-[clamp(46px,4.8vw,76px)]">{b.name}</h3>
            <p className="mt-4 max-w-sm">{b.line}</p>
            <p className="mt-5 inline-block self-start rounded-full border-2 border-ink bg-paper px-4 py-1.5 font-mono text-[12px] font-bold">
              {b.result}
            </p>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-wide opacity-70">{b.stack}</p>
          </a>
        </li>
      ))}
    </PinnedRail>
  );
}

/* ---------- big two-way marquee band ---------- */
const bandWords = ["Agents", "MCP", "RAG", "Altium", "Windchill", "Graph-RAG", "Ollama", "FastAPI"];

export function Band() {
  const row = (outline: boolean) =>
    bandWords.map((w, i) => (
      <span key={w} className="display flex items-center pr-8 text-[clamp(56px,8vw,128px)] leading-[1.05]">
        <span className={(i % 2 === 0) === outline ? "text-transparent [-webkit-text-stroke:2px_var(--color-ink)]" : ""}>{w}</span>
        <span className="spin ml-8 text-[0.5em] text-copper">✳</span>
      </span>
    ));
  return (
    <div className="border-y-2 border-ink bg-sun py-3" aria-hidden>
      <VelocityMarquee baseVelocity={-2.2}>{row(false)}</VelocityMarquee>
      <VelocityMarquee baseVelocity={2.2} className="border-t-2 border-dashed border-ink/30">
        {row(true)}
      </VelocityMarquee>
    </div>
  );
}

/* ---------- research ---------- */
export function Research() {
  return (
    <section id="research" className={`scroll-mt-20 py-24 md:py-32 ${PAD}`}>
      <Head idx="03" title="Research" note="independent" />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {research.map((r) => (
          <Reveal key={r.title}>
            <article className="flex h-full flex-col rounded-[20px] border-2 border-ink p-7 md:p-9">
              <p className="mono-label text-[11px] text-ink/60">{r.kind}</p>
              <h3 className="display mt-4 text-[clamp(36px,3.6vw,56px)]">{r.title}</h3>
              <p className="mt-4 text-ink-2">{r.body}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                {r.figures.map((f, k) => (
                  <Drift key={f.label} from={k ? 50 : 25} to={k ? -50 : -25}>
                    <div className="rounded-[14px] border-2 border-ink bg-cream px-5 py-3">
                      <p className="display text-6xl">{f.value}</p>
                      <p className="mt-1 font-mono text-[11px]">{f.label}</p>
                    </div>
                  </Drift>
                ))}
              </div>
              {r.link && (
                <div className="mt-auto pt-8">
                  <a href={r.link} target="_blank" rel="noopener" className="pill bg-sun">
                    Read the paper <span className="arr">↗</span>
                  </a>
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- stack ---------- */
export function Stack() {
  return (
    <section id="stack" className={`scroll-mt-20 pb-24 md:pb-32 ${PAD}`}>
      <Head idx="04" title="What I work with" note="// languages & tools" />
      {stack.map((s, i) => (
        <Reveal key={s.title}>
          <div className="grid items-center gap-6 border-b-2 px-2 py-10 transition-colors duration-300 dash hover:bg-sun md:grid-cols-[72px_1.1fr_1fr] md:gap-10 md:px-4">
            <span className="display text-5xl text-ink/25">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3 className="display text-[clamp(36px,4vw,60px)]">{s.title}</h3>
              <p className="mt-3 max-w-md text-ink-2">{s.body}</p>
            </div>
            <div className="flex flex-wrap gap-2 md:justify-end">
              {s.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  );
}

/* ---------- process ---------- */
export function Process() {
  return (
    <section className={`pb-24 md:pb-32 ${PAD}`}>
      <Head idx="05" title="How an agent gets built" note="// 4 steps, no magic" />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {process.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06}>
            <div className="group flex h-full flex-col rounded-[20px] border-2 border-ink p-6 transition-colors duration-300 hover:bg-ink hover:text-paper">
              <span className="display text-6xl text-copper">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="display mt-10 text-4xl">{p.title}</h3>
              <p className="mt-3 text-[15px] opacity-80">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- record ---------- */
export function Record() {
  return (
    <section className={`pb-24 md:pb-32 ${PAD}`}>
      <Head idx="06" title="Record" note="wins · certs · school" />
      <div className="mt-10 grid gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="mono-label text-ink/60">Competitions</p>
          <ul className="mt-4 flex flex-wrap gap-3">
            {achievements.map((a) => (
              <li key={a.where} className={`rounded-full border-2 border-ink px-5 py-2.5 ${a.what === "Winner" ? "bg-sun" : "bg-paper"}`}>
                <span className="display mr-2 text-2xl">{a.what}</span>
                <span className="text-[15px]">{a.where}</span>
              </li>
            ))}
          </ul>
          <p className="mono-label mt-12 text-ink/60">Education</p>
          <ul className="mt-4">
            {education.map((e) => (
              <li key={e.school} className="flex items-center justify-between gap-6 border-b-2 py-4 dash">
                <span>
                  <span className="block font-semibold">{e.school}</span>
                  <span className="font-mono text-[12px] text-ink/60">
                    {e.what} · {e.when}
                  </span>
                </span>
                <span className="display shrink-0 rounded-full border-2 border-ink bg-mint px-4 py-1 text-3xl">{e.score}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal>
          <p className="mono-label text-ink/60">Certifications</p>
          <ul className="mt-4 border-t-2 dash">
            {certifications.map((c) => (
              <li key={c.name}>
                <a href={c.href} target="_blank" rel="noopener" className="group flex items-center justify-between gap-4 border-b-2 px-2 py-4 transition-colors dash hover:bg-sun">
                  <span>
                    <span className="block font-semibold">{c.name}</span>
                    <span className="font-mono text-[12px] text-ink/60">{c.by}</span>
                  </span>
                  <span className="font-mono transition-transform group-hover:translate-x-1">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
