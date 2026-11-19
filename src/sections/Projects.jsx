import { useCallback, useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { liveProjects, githubProjects } from "../data.js";
import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";
import ProjectModal from "./ProjectModal.jsx";

/* Browser-style frame used as a thumbnail. Replace with a real screenshot when you have one. */
function ProjectFrame({ domain }) {
  return (
    <div className="relative h-52 overflow-hidden rounded-t-3xl bg-gradient-to-br from-glow via-panel to-lime/20 p-5 sm:h-56" aria-hidden="true">
      <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-panel/90 shadow-soft transition duration-700 group-hover:-translate-y-2">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="ml-3 truncate rounded-md bg-white/5 px-2 py-0.5 text-[11px] text-muted">{domain}</span>
        </div>
        <div className="flex-1 space-y-3 p-4">
          <div className="h-3 w-2/3 rounded bg-white/20" />
          <div className="h-2 w-1/2 rounded bg-white/10" />
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="h-14 rounded-lg bg-accent/30" />
            <div className="h-14 rounded-lg bg-white/10" />
            <div className="h-14 rounded-lg bg-lime/25" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState(null);
  const close = useCallback(() => setActive(null), []);

  return (
    <section id="projects" className="section pt-0">
      <div className="container-x">
        <SectionHead eyebrow="Selected work" title="Live websites" accent="& open source" />

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
          {liveProjects.map((p, i) => (
            <Reveal key={p.url} delay={(i % 2) * 0.1}>
              <button
                type="button"
                onClick={() => setActive(p)}
                aria-haspopup="dialog"
                className="card group block w-full overflow-hidden text-left"
              >
                <ProjectFrame domain={p.domain} />
                <div className="flex items-start justify-between gap-4 p-6 sm:p-7">
                  <div>
                    <h3 className="text-lg font-semibold sm:text-xl">{p.title}</h3>
                    <p className="mt-1 text-sm text-ink/65">{p.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-ink/70">{t}</span>
                      ))}
                    </div>
                  </div>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-ink text-paper transition duration-300 group-hover:rotate-45 group-hover:bg-accent group-hover:text-white">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 sm:mt-20">
          <h3 className="h-display mb-6 text-3xl sm:text-4xl">On GitHub</h3>
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

      <ProjectModal project={active} onClose={close} />
    </section>
  );
}
