import { experience, education, languages } from "../data.js";
import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";

/* Table-style rows: period | role + company | description */
export default function Experience() {
  return (
    <section id="experience" className="section pt-0">
      <div className="container-x">
        <SectionHead eyebrow="Experience" title="Career" accent="timeline" align="left" />

        <ul className="divide-y divide-ink/10 border-y border-ink/10">
          {experience.map((e, i) => (
            <Reveal key={e.role + e.company} delay={i * 0.08}>
              <li className="grid gap-4 py-8 md:grid-cols-[180px_1fr_1.2fr] md:items-start">
                <p className="text-sm font-medium text-muted">{e.period}</p>
                <div>
                  <h3 className="h-display text-3xl md:text-4xl">{e.role}</h3>
                  <p className="mt-1 text-sm font-medium text-accent">{e.company}</p>
                  <p className="mt-1 text-xs text-muted">{e.type}</p>
                </div>
                <p className="text-ink/70">{e.desc}</p>
              </li>
            </Reveal>
          ))}
        </ul>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          <Reveal className="card p-7">
            <p className="eyebrow mb-4">Education</p>
            <h3 className="h-display text-3xl">{education.degree}</h3>
            <p className="mt-2 text-sm text-ink/70">{education.school}</p>
            <p className="mt-1 text-xs text-muted">{education.period}</p>
          </Reveal>
          <Reveal delay={0.1} className="card p-7">
            <p className="eyebrow mb-4">Languages</p>
            <h3 className="h-display text-3xl">{languages}</h3>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
