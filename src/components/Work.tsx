import Sheet from "./Sheet";
import Reveal from "./Reveal";
import Flow from "./Flow";
import { havells } from "@/content/data";

export default function Work() {
  return (
    <Sheet id="work" n={1} title="Current work" aside="Havells CRI, Noida">
      <Reveal>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ink-2 md:text-xl">
          I&rsquo;m an AI Catalyst Intern at Havells&rsquo; Centre for Research &amp; Innovation. I build in-house agents across
          electronics, CAD/PLM, product validation and compliance, and I work with the engineering teams who will use them
          to turn their R&amp;D requirements into tools.
        </p>
      </Reveal>

      <div className="mt-14">
        {havells.map((c, i) => (
          <Reveal key={c.id}>
            <article className="grid gap-8 border-t border-rule py-12 md:grid-cols-12 md:gap-10 md:py-16">
              <header className="md:col-span-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-ink-3">{c.id}</span>
                  <span
                    className={`font-mono text-[10px] uppercase tracking-[0.08em] ${
                      c.status === "Shipped" ? "bg-mask px-1.5 py-0.5 text-paper" : "border border-ink-3 px-1.5 py-0.5 text-ink-2"
                    }`}
                  >
                    {c.status}
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-4xl leading-[1.02] md:text-5xl">{c.title}</h3>

                {c.metric && (
                  <div className="mt-8 border-l-2 border-copper pl-4">
                    <p className="font-serif text-7xl leading-none text-copper">
                      {c.metric.value}
                      <span className="ml-2 font-sans text-base text-ink">{c.metric.unit}</span>
                    </p>
                    <p className="label mt-2">{c.metric.note}</p>
                  </div>
                )}

                <ul className="mt-8 flex flex-wrap gap-x-3 gap-y-1.5">
                  {c.stack.map((s) => (
                    <li key={s} className="font-mono text-[11px] text-ink-2">
                      [{s}]
                    </li>
                  ))}
                </ul>
              </header>

              <div className="md:col-span-8">
                <dl className="grid gap-6 sm:grid-cols-3">
                  {(
                    [
                      ["Problem", c.problem],
                      ["What I built", c.built],
                      ["Outcome", c.outcome],
                    ] as const
                  ).map(([k, v]) => (
                    <div key={k}>
                      <dt className="label">{k}</dt>
                      <dd className="mt-2 text-[15px] leading-relaxed">{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-10 border border-rule bg-paper/60 p-4 md:p-6">
                  <div className="mb-3 flex justify-between">
                    <span className="label text-[10px]">Fig. {i + 2} — Signal path</span>
                    <span className="label text-[10px] text-ink-3">{c.id}</span>
                  </div>
                  <div className="-mx-4 overflow-x-auto px-4 md:mx-0 md:px-0">
                    <div className="min-w-[540px]">
                      <Flow columns={c.flow} title={c.title} />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Sheet>
  );
}
