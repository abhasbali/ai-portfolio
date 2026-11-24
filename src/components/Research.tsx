import Sheet from "./Sheet";
import Reveal from "./Reveal";
import { research } from "@/content/data";

export default function Research() {
  return (
    <Sheet id="research" n={2} title="Research" aside="Independent">
      <div className="mt-12 grid md:grid-cols-2">
        {research.map((r, i) => (
          <Reveal key={r.title} delay={i * 0.08} className={i ? "border-t border-rule md:border-l md:border-t-0" : ""}>
            <article className={`flex h-full flex-col py-8 md:py-4 ${i ? "md:pl-10" : "md:pr-10"}`}>
              <p className="label">{r.kind}</p>
              <h3 className="mt-4 font-serif text-3xl leading-tight md:text-[2.6rem]">{r.title}</h3>
              <p className="mt-5 max-w-xl leading-relaxed text-ink-2">{r.body}</p>
              <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-rule pt-6">
                {r.figures.map((f) => (
                  <div key={f.label}>
                    <dt className="font-serif text-6xl leading-none">{f.value}</dt>
                    <dd className="label mt-2 normal-case tracking-normal">{f.label}</dd>
                  </div>
                ))}
              </dl>
              {r.link && (
                <a
                  href={r.link}
                  target="_blank"
                  rel="noopener"
                  className="group mt-auto inline-flex items-center gap-2 self-start pt-10 font-mono text-xs uppercase tracking-[0.08em] text-copper"
                >
                  <span className="ink-link">Read the paper · IJITCE</span>
                  <span className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                </a>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </Sheet>
  );
}
