import { ArrowUpRight } from "lucide-react";
import { services } from "../data.js";
import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";

export default function Services() {
  return (
    <section id="services" className="section border-t border-ink/10">
      <div className="container-x">
        <SectionHead eyebrow="Services" title="What I can" accent="build for you" align="left" />
        <ul className="divide-y divide-ink/10 border-y border-ink/10">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04}>
              <li className="group grid cursor-default items-center gap-4 py-8 transition duration-500 hover:bg-panel/60 md:grid-cols-[80px_1.2fr_1fr] md:px-4">
                <span className="text-sm font-medium text-muted">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="h-display text-3xl md:text-4xl">{s.title}</h3>
                <div className="flex items-center justify-between gap-6">
                  <p className="text-ink/70">{s.desc}</p>
                  <ArrowUpRight className="hidden shrink-0 text-accent opacity-0 transition duration-300 group-hover:opacity-100 md:block" />
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
