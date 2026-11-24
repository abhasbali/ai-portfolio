import Sheet from "./Sheet";
import Reveal from "./Reveal";
import { achievements, certifications, education } from "@/content/data";

export default function Record() {
  return (
    <Sheet id="record" n={5} title="Record" aside="Wins, certs, school">
      <div className="mt-12 grid gap-14 md:grid-cols-12 md:gap-10">
        <Reveal className="md:col-span-5">
          <h3 className="label">Competitions</h3>
          <ul className="mt-4">
            {achievements.map((a) => (
              <li key={a.where} className="flex items-baseline gap-5 border-t border-rule py-4 last:border-b">
                <span className={`w-24 shrink-0 font-serif text-3xl leading-none ${a.what === "Winner" ? "text-copper" : ""}`}>
                  {a.what}
                </span>
                <span className="text-[15px]">{a.where}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.08} className="md:col-span-7">
          <h3 className="label">Certifications</h3>
          <ul className="mt-4 grid sm:grid-cols-2 sm:gap-x-8">
            {certifications.map((c) => (
              <li key={c.name} className="border-t border-rule">
                <a href={c.href} target="_blank" rel="noopener" className="group flex items-start justify-between gap-4 py-4">
                  <span>
                    <span className="block text-[15px] font-medium leading-snug group-hover:text-copper">{c.name}</span>
                    <span className="label mt-1 block normal-case tracking-normal">{c.by}</span>
                  </span>
                  <span className="font-mono text-xs text-ink-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-copper">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <h3 className="label mt-14">Education</h3>
          <ul className="mt-4">
            {education.map((e) => (
              <li key={e.school} className="grid grid-cols-[1fr_auto] gap-x-6 border-t border-rule py-4 last:border-b">
                <span className="text-[15px] font-medium">{e.school}</span>
                <span className="font-serif text-2xl leading-none">{e.score}</span>
                <span className="label normal-case tracking-normal">
                  {e.what} · {e.when}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Sheet>
  );
}
