import { skillGroups } from "../data.js";
import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";

export default function Skills() {
  return (
    <section id="skills" className="section pt-0">
      <div className="container-x">
        <SectionHead eyebrow="Skills & tools" title="The stack behind" accent="every build" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <Reveal key={g.name} delay={i * 0.05} className={i === skillGroups.length - 1 ? "md:col-span-2 lg:col-span-1" : ""}>
              <div className="card h-full p-7">
                <div className="mb-5 flex items-baseline justify-between">
                  <h3 className="h-display text-3xl">{g.name}</h3>
                  <span className="text-xs font-medium text-muted">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <li key={item} className="rounded-full border border-ink/10 bg-panel px-3.5 py-1.5 text-sm text-ink/80">
                      {item}
                    </li>
                  ))}
                </ul>
                {g.note && <p className="mt-5 text-xs font-medium text-accent">{g.note}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
