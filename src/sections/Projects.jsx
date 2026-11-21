import { useCallback, useMemo, useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { liveProjects, githubProjects } from "../data.js";
import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";
import ProjectImage from "./ProjectImage.jsx";
import LivePreview from "./LivePreview.jsx";

const PAGE_SIZE = 6;

/* One website card: browser bar, screenshot that scrolls on hover, info and actions */
function ProjectCard({ p, onPreview }) {
  return (
    <article className="card group flex flex-col overflow-hidden">
      <button
        type="button"
        onClick={() => onPreview(p)}
        aria-label={`Live preview of ${p.title}`}
        className="relative block w-full text-left"
      >
        <div className="flex h-9 items-center gap-1.5 border-b border-white/10 bg-[#101E30] px-3.5">
          <span className="h-2 w-2 rounded-full bg-cyan-300/70" />
          <span className="h-2 w-2 rounded-full bg-cyan-300/50" />
          <span className="h-2 w-2 rounded-full bg-cyan-300/30" />
          <span className="ml-2 truncate text-[11px] text-ink/70">{p.domain}</span>
        </div>

        <div className="relative h-56 overflow-hidden bg-[#0A1020]">
          <ProjectImage
            url={p.url}
            title={p.title}
            className="absolute left-0 top-0 h-auto w-full transition-transform duration-[4000ms] ease-linear group-hover:-translate-y-[35%]"
          />
        </div>

        <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-cyan-300 px-3.5 py-1.5 text-xs font-bold text-paper opacity-0 shadow-lg transition duration-200 group-hover:opacity-100">
          Live preview
        </span>
      </button>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-300 sm:text-xs">{p.category}</p>
          <ArrowUpRight size={18} className="shrink-0 text-cyan-300" aria-hidden="true" />
        </div>
        <h3 className="mt-3 text-xl font-bold sm:text-2xl">{p.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink/65">{p.desc}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <li key={t} className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-ink/75">
              {t}
            </li>
          ))}
        </ul>
        {p.credit && <p className="mt-4 text-xs text-muted">{p.credit}</p>}

        <div className="mt-auto flex gap-2 pt-6">
          <button type="button" onClick={() => onPreview(p)} className="btn btn-dark h-11 flex-1 px-4 text-sm">
            Live preview
          </button>
          <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn btn-line h-11 flex-1 px-4 text-sm">
            Visit site
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState(false);
  const [preview, setPreview] = useState(null);
  const closePreview = useCallback(() => setPreview(null), []);

  const sectors = useMemo(() => ["All", ...new Set(liveProjects.map((p) => p.sector))], []);
  const countFor = (s) => (s === "All" ? liveProjects.length : liveProjects.filter((p) => p.sector === s).length);

  const list = liveProjects.filter((p) => filter === "All" || p.sector === filter);
  const shown = expanded ? list : list.slice(0, PAGE_SIZE);

  const pick = (s) => {
    setFilter(s);
    setExpanded(s !== "All");
  };

  return (
    <section id="projects" className="section pt-0">
      <div className="container-x">
        <SectionHead eyebrow="Selected work" title="Live websites" accent="& open source" />

        <div role="toolbar" aria-label="Filter by sector" className="mb-10 flex flex-wrap gap-2">
          {sectors.map((s) => (
            <button
              key={s}
              type="button"
              aria-pressed={filter === s}
              onClick={() => pick(s)}
              className="chip"
            >
              {s}
              <sup>{countFor(s)}</sup>
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {shown.map((p, i) => (
            <Reveal key={p.url} delay={(i % 3) * 0.08}>
              <ProjectCard p={p} onPreview={setPreview} />
            </Reveal>
          ))}
        </div>

        {!expanded && list.length > PAGE_SIZE && (
          <div className="mt-12 text-center">
            <button type="button" onClick={() => setExpanded(true)} className="btn btn-line h-12 px-6">
              Show all websites
            </button>
          </div>
        )}

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

      <LivePreview project={preview} onClose={closePreview} />
    </section>
  );
}
