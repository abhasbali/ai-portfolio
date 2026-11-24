"use client";

import { useState } from "react";
import { pinsIn, pinsOut } from "@/content/data";

const W = 780;
const CHIP_X = 270;
const CHIP_W = 240;
const TOP = 30;
const PITCH = 46;
const N = 8;
const CHIP_H = PITCH * N + 24;
const DIE = { x: CHIP_X + CHIP_W / 2 - 70, y: TOP + 120, s: 140 };

export default function Pinout() {
  const [active, setActive] = useState<string | null>(null);
  const H = TOP * 2 + CHIP_H;

  const pinY = (i: number) => TOP + 24 + i * PITCH;

  const pins = [
    ...pinsIn.map((label, i) => ({ id: `L${i}`, label, side: "L" as const, num: i + 1, row: i, y: pinY(i) })),
    // DIP numbering runs back up the right-hand side
    ...pinsOut.map((label, i) => ({ id: `R${i}`, label, side: "R" as const, num: 2 * N - i, row: i, y: pinY(i) })),
  ];

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="h-auto w-full select-none"
      role="img"
      aria-label={`Pin configuration. Inputs: ${pinsIn.join(", ")}. Outputs: ${pinsOut.join(", ")}.`}
    >
      {/* package */}
      <rect x={CHIP_X} y={TOP} width={CHIP_W} height={CHIP_H} fill="var(--color-ink)" />
      <path d={`M${CHIP_X + CHIP_W / 2 - 14} ${TOP} a14 14 0 0 0 28 0`} fill="var(--color-paper)" />
      <circle cx={CHIP_X + 52} cy={TOP + 16} r={4} fill="var(--color-paper)" fillOpacity={0.5} />

      {/* bond wires from each pin to the die */}
      {pins.map((p) => {
        const edge = p.side === "L" ? CHIP_X : CHIP_X + CHIP_W;
        const dieEdge = p.side === "L" ? DIE.x : DIE.x + DIE.s;
        const dy = DIE.y + 10 + p.row * ((DIE.s - 20) / (N - 1));
        const on = active === p.id;
        return (
          <path
            key={`w2-${p.id}`}
            d={`M${edge + (p.side === "L" ? 26 : -26)} ${p.y} L${dieEdge} ${dy}`}
            stroke={on ? "var(--color-copper)" : "var(--color-paper)"}
            strokeOpacity={on ? 1 : 0.16}
            strokeWidth={on ? 1.4 : 0.7}
            fill="none"
            style={{ transition: "stroke .25s, stroke-opacity .25s" }}
          />
        );
      })}
      <rect x={DIE.x} y={DIE.y} width={DIE.s} height={DIE.s} fill="var(--color-paper)" fillOpacity={0.04} stroke="var(--color-paper)" strokeOpacity={0.45} />
      <text x={DIE.x + DIE.s / 2} y={DIE.y + DIE.s / 2 + 4} textAnchor="middle" fontFamily="var(--font-mono)" fontSize={9} letterSpacing={1.5} fill="var(--color-paper)" fillOpacity={active ? 0.9 : 0.35} style={{ transition: "fill-opacity .25s" }}>
        {active ? "SIGNAL" : "DIE"}
      </text>
      <text x={CHIP_X + CHIP_W / 2} y={TOP + 82} textAnchor="middle" fontFamily="var(--font-serif)" fontSize={34} fill="var(--color-paper)">
        AB-2026
      </text>
      <text x={CHIP_X + CHIP_W / 2} y={DIE.y + DIE.s + 44} textAnchor="middle" fontFamily="var(--font-mono)" fontSize={10} letterSpacing={1.5} fill="var(--color-paper)" fillOpacity={0.6}>
        AI ENGINEER
      </text>
      <text x={CHIP_X + CHIP_W / 2} y={DIE.y + DIE.s + 62} textAnchor="middle" fontFamily="var(--font-mono)" fontSize={10} letterSpacing={1.5} fill="var(--color-paper)" fillOpacity={0.35}>
        REV 11.26 · PUNJAB
      </text>

      {pins.map((p) => {
        const L = p.side === "L";
        const on = active === p.id;
        const x0 = L ? CHIP_X - 46 : CHIP_X + CHIP_W;
        return (
          <g
            key={p.id}
            data-hot
            onMouseEnter={() => setActive(p.id)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(p.id)}
            onBlur={() => setActive(null)}
            tabIndex={0}
            className="outline-none"
          >
            <rect x={L ? 0 : CHIP_X + CHIP_W} y={p.y - 16} width={CHIP_X} height={32} fill="transparent" />
            <rect
              x={x0}
              y={p.y - 5}
              width={46}
              height={10}
              fill={on ? "var(--color-copper)" : "var(--color-paper)"}
              stroke="var(--color-ink)"
              style={{ transition: "fill .2s" }}
            />
            <text
              x={L ? CHIP_X + 12 : CHIP_X + CHIP_W - 12}
              y={p.y + 4}
              textAnchor={L ? "start" : "end"}
              fontFamily="var(--font-mono)"
              fontSize={10}
              fill="var(--color-paper)"
              fillOpacity={on ? 1 : 0.55}
            >
              {p.num}
            </text>
            <text
              x={L ? CHIP_X - 58 : CHIP_X + CHIP_W + 58}
              y={p.y + 4.5}
              textAnchor={L ? "end" : "start"}
              fontFamily="var(--font-mono)"
              fontSize={13}
              fill={on ? "var(--color-copper)" : "var(--color-ink)"}
              style={{ transition: "fill .2s" }}
            >
              {p.label}
            </text>
          </g>
        );
      })}

      <text x={0} y={14} fontFamily="var(--font-mono)" fontSize={10} letterSpacing={1.5} fill="var(--color-ink-3)">
        IN
      </text>
      <text x={W} y={14} textAnchor="end" fontFamily="var(--font-mono)" fontSize={10} letterSpacing={1.5} fill="var(--color-ink-3)">
        OUT
      </text>
    </svg>
  );
}
