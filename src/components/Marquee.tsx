const items = [
  "Altium Designer ↔ MCP",
  "PTC Windchill ↔ REST",
  "BIS · IS · IEC ↔ Hybrid RAG",
  "Qwen on Ollama",
  "Graph-RAG",
  "Azure AI Foundry",
  "Coordinator–worker agents",
  "Quantize · Prune · Distil",
  "ERC / DRC in the loop",
];

export default function Marquee() {
  const row = (hidden?: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden}>
      {items.map((t) => (
        <li key={t} className="flex items-center whitespace-nowrap font-mono text-[13px] uppercase tracking-[0.1em]">
          <span className="px-6">{t}</span>
          <span className="text-copper">✳</span>
        </li>
      ))}
    </ul>
  );
  return (
    <div className="marquee-wrap mt-20 overflow-hidden border-y border-ink bg-ink py-3.5 text-paper md:mt-28">
      <div className="marquee flex w-max">
        {row()}
        {row(true)}
      </div>
    </div>
  );
}
