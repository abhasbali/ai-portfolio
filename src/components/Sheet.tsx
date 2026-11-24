/** Section shell styled as a numbered drawing sheet. */
export default function Sheet({
  id,
  n,
  title,
  aside,
  children,
}: {
  id: string;
  n: number;
  title: string;
  aside?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-[1400px] scroll-mt-14 px-5 pt-24 md:px-10 md:pt-36">
      <div className="flex items-end justify-between gap-6 border-b border-ink pb-3">
        <h2 className="flex items-baseline gap-4">
          <span className="font-mono text-xs text-copper">{String(n).padStart(2, "0")}</span>
          <span className="font-serif text-4xl leading-none md:text-6xl">{title}</span>
        </h2>
        <span className="label hidden text-right md:block">
          {aside ? `${aside} · ` : ""}Sheet {String(n).padStart(2, "0")} / 06
        </span>
      </div>
      {children}
    </section>
  );
}
