import { useEffect, useState } from "react";
import { X, ArrowUpRight, Monitor, Smartphone } from "lucide-react";

/* Full-screen live preview of a site inside an iframe.
   Desktop / Mobile toggle. Escape, the X button or a backdrop click closes it.
   Some websites block embedding; the footer link opens the real site in a new tab. */
export default function LivePreview({ project, onClose }) {
  const [device, setDevice] = useState("desktop");

  useEffect(() => {
    if (!project) return undefined;
    setDevice("desktop");
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
  const isMobile = device === "mobile";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="live-preview-title"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className="fixed inset-0 z-[80] flex flex-col bg-black/90 p-3 backdrop-blur-sm sm:p-6"
    >
      <div className="mx-auto mb-3 flex w-full max-w-6xl flex-wrap items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-300">{project.category}</p>
          <h3 id="live-preview-title" className="truncate text-lg font-bold text-ink">{project.title}</h3>
        </div>

        <div className="flex items-center gap-2">
          <div role="group" aria-label="Preview size" className="flex rounded-full border border-white/10 bg-panel p-1">
            <button
              type="button"
              aria-pressed={!isMobile}
              onClick={() => setDevice("desktop")}
              className="flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-semibold text-ink/70 aria-pressed:bg-cyan-300 aria-pressed:text-paper"
            >
              <Monitor size={15} /> Desktop
            </button>
            <button
              type="button"
              aria-pressed={isMobile}
              onClick={() => setDevice("mobile")}
              className="flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-semibold text-ink/70 aria-pressed:bg-cyan-300 aria-pressed:text-paper"
            >
              <Smartphone size={15} /> Mobile
            </button>
          </div>
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-dark hidden h-10 px-4 text-sm sm:inline-flex">
            Visit site <ArrowUpRight size={14} />
          </a>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close preview"
            autoFocus
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-cyan-300/40 bg-panel text-ink transition hover:bg-cyan-300 hover:text-paper"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      <div className="mx-auto flex min-h-0 w-full max-w-6xl flex-1 justify-center">
        <div
          className={`h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-white transition-all duration-300 ${
            isMobile ? "max-w-[390px] rounded-[2.2rem] border-[10px] border-[#0A1020]" : ""
          }`}
        >
          <iframe
            key={project.url}
            src={project.url}
            title={`${project.title} live preview`}
            loading="lazy"
            className="h-full w-full bg-white"
          />
        </div>
      </div>

      <p className="mx-auto mt-3 text-center text-xs text-muted">
        If the preview does not load, this website may block embedded viewing.{" "}
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">
          Open the live site instead ↗
        </a>
      </p>
    </div>
  );
}
