import { Check } from "lucide-react";
import { profile } from "../data.js";
import Reveal from "./Reveal.jsx";

const highlights = [
  "Elementor & Elementor Pro expertise",
  "Figma, Claude & Lovable to WordPress",
  "WooCommerce store development",
  "Custom post types & dynamic content",
  "Responsive, SEO-friendly builds",
  "50+ projects successfully delivered",
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-x grid gap-16 md:grid-cols-2">
        <Reveal>
          <p className="eyebrow mb-4">About me</p>
          <h2 className="h-display text-5xl md:text-7xl">
            Clean code. <span className="h-serif normal-case text-accent">Confident design.</span>
          </h2>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-ink/75">{profile.summary}</p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="card p-8 md:p-10">
            <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-muted">What I bring</p>
            <ul className="grid gap-4">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="text-ink/85">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
