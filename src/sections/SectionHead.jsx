import Reveal from "./Reveal.jsx";

/* Shared heading: small eyebrow above a bold condensed title. */
export default function SectionHead({ eyebrow, title, accent, align = "center" }) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <Reveal className={`mb-16 max-w-3xl ${alignCls}`}>
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="h-display text-5xl md:text-7xl">
        {title} {accent && <span className="h-serif normal-case text-accent">{accent}</span>}
      </h2>
    </Reveal>
  );
}
