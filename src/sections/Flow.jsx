import { flowSteps } from "../data.js";
import Reveal from "./Reveal.jsx";

/* AI → WordPress pipeline: 4 steps with a travelling dot on desktop */
export default function Flow() {
  return (
    <section id="flow" className="section">
      <div className="container-x">
        <Reveal className="mb-16 max-w-3xl">
          <p className="eyebrow mb-4">AI → WordPress</p>
          <h2 className="h-display text-5xl md:text-7xl">
            From any design to a{" "}
            <span className="h-serif normal-case text-accent">live WordPress site</span>
          </h2>
          <p className="mt-6 max-w-xl text-muted">
            Start from a Claude or Lovable prototype, a Figma file, or an existing website. I rebuild it as a clean, editable WordPress site using Elementor or Gutenberg, and connect the workflow through MCP where it helps.
          </p>
        </Reveal>

        <div className="relative">
          <div className="absolute left-[6%] right-[6%] top-1/2 hidden h-px bg-gradient-to-r from-transparent via-ink/20 to-transparent lg:block" aria-hidden="true" />
          <div className="flow-dot absolute top-1/2 hidden h-2 w-2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_16px_#FF7A1A] lg:block" aria-hidden="true" />
          <ol className="relative grid gap-4 lg:grid-cols-4">
            {flowSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <li className="card h-full p-7">
                  <span className="text-xs font-medium text-muted">{step.tag}</span>
                  <h3 className="h-display mt-4 text-4xl">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">{step.desc}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
