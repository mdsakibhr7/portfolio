import { useEffect } from "react";
import { X, ArrowUpRight } from "lucide-react";

/* Popup for a project. Full-screen sheet on phones, centered dialog on larger screens.
   Closes with Escape, the X button, or a click on the backdrop. */
export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center sm:p-6" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
      <button type="button" onClick={onClose} aria-label="Close project" className="anim-fade absolute inset-0 bg-black/75 backdrop-blur-sm" />

      <div className="anim-pop relative flex max-h-[92vh] w-full flex-col overflow-hidden rounded-t-3xl border border-ink/10 bg-panel shadow-soft sm:max-w-3xl sm:rounded-3xl">
        <button type="button" onClick={onClose} aria-label="Close" className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-black/60 text-white transition hover:bg-accent">
          <X size={18} />
        </button>

        {/* Browser-style preview. Replace with a real screenshot: <img src="/projects/x.webp" /> */}
        <div className="relative h-52 shrink-0 bg-gradient-to-br from-glow via-panel to-lime/20 p-6 sm:h-72">
          <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-panel/90 shadow-soft">
            <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="ml-3 truncate rounded-md bg-white/5 px-2 py-0.5 text-[11px] text-muted">{project.domain}</span>
            </div>
            <div className="flex-1 space-y-3 p-5">
              <div className="h-3 w-2/3 rounded bg-white/20" />
              <div className="h-2 w-1/2 rounded bg-white/10" />
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="h-16 rounded-lg bg-accent/30" />
                <div className="h-16 rounded-lg bg-white/10" />
                <div className="h-16 rounded-lg bg-lime/25" />
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-y-auto p-6 sm:p-8">
          <p className="eyebrow mb-3">Live website</p>
          <h3 id="project-modal-title" className="h-display text-4xl sm:text-5xl">{project.title}</h3>
          <p className="mt-4 text-ink/70">{project.desc}</p>

          <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div className="rounded-2xl border border-ink/10 p-4">
              <dt className="text-xs text-muted">Domain</dt>
              <dd className="mt-1 break-all font-medium">{project.domain}</dd>
            </div>
            <div className="rounded-2xl border border-ink/10 p-4">
              <dt className="text-xs text-muted">Status</dt>
              <dd className="mt-1 font-medium text-lime">Live</dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-dark w-full sm:w-auto">
              Visit live site <ArrowUpRight size={16} />
            </a>
            <button type="button" onClick={onClose} className="btn btn-line w-full sm:w-auto">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}
