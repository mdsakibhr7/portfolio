import { ArrowUpRight, Github } from "lucide-react";
import { liveProjects, githubProjects } from "../data.js";
import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";

/* Browser-style frame. Replace with a real screenshot later:
   <img src="/projects/world-camps.webp" alt="World Camps homepage" /> */
function ProjectFrame({ domain }) {
  return (
    <div className="relative h-56 overflow-hidden rounded-t-3xl bg-gradient-to-br from-glow via-white to-lime/40 p-5" aria-hidden="true">
      <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white/80 shadow-soft transition duration-700 group-hover:-translate-y-2">
        <div className="flex items-center gap-1.5 border-b border-ink/10 px-3 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="ml-3 truncate rounded-md bg-ink/5 px-2 py-0.5 text-[11px] text-muted">{domain}</span>
        </div>
        <div className="flex-1 space-y-3 p-4">
          <div className="h-3 w-2/3 rounded bg-ink/15" />
          <div className="h-2 w-1/2 rounded bg-ink/10" />
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="h-14 rounded-lg bg-accent/25" />
            <div className="h-14 rounded-lg bg-ink/10" />
            <div className="h-14 rounded-lg bg-lime/50" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section pt-0">
      <div className="container-x">
        <SectionHead eyebrow="Selected work" title="Live websites" accent="& open source" />

        <div className="grid gap-6 md:grid-cols-2">
          {liveProjects.map((p, i) => (
            <Reveal key={p.url} delay={(i % 2) * 0.1}>
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="card group block overflow-hidden">
                <ProjectFrame domain={p.domain} />
                <div className="flex items-start justify-between gap-4 p-7">
                  <div>
                    <h3 className="text-xl font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm text-ink/65">{p.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="rounded-md bg-ink/5 px-2.5 py-1 text-xs text-ink/70">{t}</span>
                      ))}
                    </div>
                  </div>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-ink text-paper transition duration-300 group-hover:rotate-45 group-hover:bg-accent">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
          <h3 className="h-display mb-6 text-4xl">On GitHub</h3>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {githubProjects.map((r) => (
              <li key={r.name}>
                <a href={r.url} target="_blank" rel="noopener noreferrer" className="card flex items-center justify-between gap-4 p-5">
                  <span className="flex min-w-0 items-center gap-3">
                    <Github size={18} className="shrink-0 text-ink/60" />
                    <span className="truncate font-medium">{r.name}</span>
                  </span>
                  <span className="shrink-0 text-xs text-muted">{r.lang}</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
