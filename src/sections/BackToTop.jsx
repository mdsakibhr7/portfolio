import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/* Circular back-to-top button. Ring fills with scroll progress. Appears after 600px. */
export default function BackToTop() {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setShow(window.scrollY > 600);
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const C = 2 * Math.PI * 21;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      tabIndex={show ? 0 : -1}
      className={`fixed bottom-5 right-5 z-[70] grid place-items-center rounded-full border border-ink/10 bg-panel/90 text-ink shadow-soft backdrop-blur transition duration-500 hover:bg-accent hover:text-white md:bottom-6 md:right-6 ${
        show ? "translate-y-0 scale-100 opacity-100" : "pointer-events-none translate-y-4 scale-90 opacity-0"
      }`}
      style={{ width: 52, height: 52 }}
    >
      <svg viewBox="0 0 48 48" className="absolute inset-0 h-full w-full -rotate-90" aria-hidden="true">
        <circle cx="24" cy="24" r="21" fill="none" stroke="currentColor" strokeOpacity="0.12" strokeWidth="2" />
        <circle
          cx="24" cy="24" r="21" fill="none" stroke="#FF7A1A" strokeWidth="2" strokeLinecap="round"
          strokeDasharray={C} strokeDashoffset={C * (1 - progress)}
        />
      </svg>
      <ArrowUp size={18} className="relative" />
    </button>
  );
}
