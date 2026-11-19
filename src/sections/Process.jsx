import { processSteps } from "../data.js";
import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";

export default function Process() {
  return (
    <section className="section pt-0">
      <div className="container-x">
        <SectionHead eyebrow="How I work" title="A simple," accent="transparent process" />
        <ol className="grid gap-4 md:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <li className="card flex h-full min-h-[260px] flex-col p-7">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink font-display text-2xl text-paper">
                  {i + 1}
                </span>
                <h3 className="h-display mt-auto text-4xl">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{step.desc}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
