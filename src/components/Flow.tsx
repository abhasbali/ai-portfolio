"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { FlowNode } from "@/content/data";

const W = 640;
const BOX_H = 34;
const ROW_GAP = 14;
const COL_GAP = 30;

/** Block diagram: each column connects to every node in the next column. */
export default function Flow({ columns, title }: { columns: FlowNode[][]; title: string }) {
  const reduce = useReducedMotion();
  const maxRows = Math.max(...columns.map((c) => c.length));
  const H = maxRows * BOX_H + (maxRows - 1) * ROW_GAP + 24;
  const boxW = (W - COL_GAP * (columns.length - 1)) / columns.length;

  const pos = columns.map((col, ci) => {
    const colH = col.length * BOX_H + (col.length - 1) * ROW_GAP;
    const top = (H - colH) / 2;
    return col.map((_, ri) => ({ x: ci * (boxW + COL_GAP), y: top + ri * (BOX_H + ROW_GAP) }));
  });

  const wires: { d: string; key: string }[] = [];
  for (let c = 0; c < columns.length - 1; c++) {
    for (const [ai, a] of pos[c].entries()) {
      for (const [bi, b] of pos[c + 1].entries()) {
        const x1 = a.x + boxW,
          y1 = a.y + BOX_H / 2,
          x2 = b.x,
          y2 = b.y + BOX_H / 2,
          mx = x1 + COL_GAP / 2;
        wires.push({ d: `M${x1} ${y1} H${mx} V${y2} H${x2}`, key: `${c}-${ai}-${bi}` });
      }
    }
  }

  return (
    <motion.svg
      initial={reduce ? false : "off"}
      whileInView="on"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      viewBox={`0 0 ${W} ${H}`}
      className="h-auto w-full"
      role="img" aria-label={`${title}: ${columns.map((c) => c.map((n) => n.label).join(" / ")).join(" → ")}`}>
      {wires.map((w, i) => (
        <g key={w.key}>
          <motion.path
            d={w.d}
            fill="none"
            stroke="var(--color-ink)"
            strokeWidth={1}
            variants={{ off: { pathLength: 0 }, on: { pathLength: 1 } }}
            transition={{ duration: 0.9, delay: 0.15 + i * 0.08, ease: "easeInOut" }}
          />
          {!reduce && (
            <circle r={2.4} fill="var(--color-copper)">
              <animateMotion dur={`${2.6 + (i % 3) * 0.4}s`} begin={`-${(i * 0.7).toFixed(1)}s`} repeatCount="indefinite" path={w.d} />
            </circle>
          )}
        </g>
      ))}
      {pos.map((col, ci) =>
        col.map((p, ri) => {
          const n = columns[ci][ri];
          return (
            <g key={`${ci}-${ri}`}>
              <rect
                x={p.x + 0.5}
                y={p.y + 0.5}
                width={boxW - 1}
                height={BOX_H - 1}
                fill={n.key ? "var(--color-ink)" : "var(--color-paper)"}
                stroke="var(--color-ink)"
              />
              <text
                x={p.x + boxW / 2}
                y={p.y + BOX_H / 2 + 4}
                textAnchor="middle"
                fontFamily="var(--font-mono)"
                fontSize={11.5}
                fill={n.key ? "var(--color-paper)" : "var(--color-ink)"}
              >
                {n.label}
              </text>
              {ci < columns.length - 1 && <circle cx={p.x + boxW} cy={p.y + BOX_H / 2} r={2.6} fill="var(--color-ink)" />}
            </g>
          );
        }),
      )}
    </motion.svg>
  );
}
