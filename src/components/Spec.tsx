import Sheet from "./Sheet";
import Reveal from "./Reveal";
import Pinout from "./Pinout";
import { pinsIn, pinsOut, spec } from "@/content/data";

export default function Spec() {
  return (
    <Sheet id="spec" n={4} title="Pin configuration" aside="Skills">
      <Reveal>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-2">
          Read it like a datasheet: tools go in on the left, things I ship come out on the right. <span className="hidden sm:inline">Hover a pin to trace it.</span>
        </p>
      </Reveal>

      <Reveal>
        <div className="mt-10 hidden border border-rule bg-paper/60 p-6 sm:block md:p-10">
          <div className="mx-auto max-w-[860px]">
            <Pinout />
          </div>
          <p className="label mt-4 text-center text-[10px]">Fig. 5 — AB-2026, 16-pin DIP, top view</p>
        </div>
        {/* phones: the diagram becomes two plain lists */}
        <div className="mt-10 grid grid-cols-2 gap-px border border-ink bg-ink sm:hidden">
          {[
            ["In", pinsIn],
            ["Out", pinsOut],
          ].map(([k, list]) => (
            <div key={k as string} className="bg-paper p-4">
              <p className="label">{k as string}</p>
              <ol className="mt-3 space-y-1.5 font-mono text-xs">
                {(list as string[]).map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <h3 className="label mt-16">Table 1 — Characteristics</h3>
        <table className="mt-3 w-full border-collapse text-left">
          <tbody>
            {spec.map((s) => (
              <tr key={s.param} className="border-t border-rule last:border-b">
                <th scope="row" className="w-1/3 py-4 pr-6 align-top font-mono text-xs font-normal uppercase tracking-[0.08em] text-ink-2 md:w-1/4">
                  {s.param}
                </th>
                <td className="py-4 text-[15px] leading-relaxed">{s.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
    </Sheet>
  );
}
