import Sheet from "./Sheet";
import Reveal from "./Reveal";
import { builds } from "@/content/data";

export default function Builds() {
  return (
    <Sheet id="builds" n={3} title="Selected builds" aside={`${builds.length} entries`}>
      <div className="mt-8 hidden grid-cols-12 gap-6 px-3 pb-3 md:grid">
        <span className="label col-span-1">No.</span>
        <span className="label col-span-4">Project</span>
        <span className="label col-span-4">Result</span>
        <span className="label col-span-3 text-right">Stack / link</span>
      </div>
      <ol className="border-t border-ink md:mt-0 mt-8">
        {builds.map((b, i) => (
          <Reveal key={b.name}>
            <li>
              <a
                href={b.href}
                target="_blank"
                rel="noopener"
                className="group grid grid-cols-12 gap-x-6 gap-y-2 border-b border-rule px-3 py-6 transition-colors duration-300 hover:bg-ink hover:text-paper md:py-7"
              >
                <span className="col-span-2 font-mono text-xs text-ink-3 group-hover:text-copper md:col-span-1 md:pt-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="col-span-10 md:col-span-4">
                  <h3 className="font-serif text-[1.75rem] leading-tight md:text-3xl">{b.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-2 group-hover:text-paper/70">{b.line}</p>
                </div>
                <p className="col-span-10 col-start-3 font-mono text-[13px] text-copper md:col-span-4 md:col-start-auto md:pt-2.5">
                  {b.result}
                </p>
                <div className="col-span-10 col-start-3 flex items-start justify-between gap-4 md:col-span-3 md:col-start-auto md:flex-col md:items-end md:pt-2.5">
                  <span className="font-mono text-[11px] text-ink-2 group-hover:text-paper/60 md:text-right">{b.stack}</span>
                  <span className="whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.08em]">
                    {b.kind === "Live" ? "Live demo" : "Source"}{" "}
                    <span className="inline-block transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                  </span>
                </div>
              </a>
            </li>
          </Reveal>
        ))}
      </ol>
    </Sheet>
  );
}
