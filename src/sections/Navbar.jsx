import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, profile } from "../data.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-3">
      <nav
        aria-label="Main navigation"
        className={`mx-auto flex h-16 w-[min(1200px,100%)] items-center justify-between rounded-full border px-5 transition duration-500 ${
          scrolled
            ? "border-ink/10 bg-white/80 shadow-soft backdrop-blur-xl"
            : "border-transparent bg-white/40 backdrop-blur-md"
        }`}
      >
        <a href="#top" className="font-serif text-2xl italic">
          Sakib<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="rounded-full px-4 py-2 text-sm text-ink/70 transition hover:bg-ink/5 hover:text-ink">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href="#contact" className="btn btn-dark hidden h-10 px-5 text-sm md:inline-flex">
            Let's talk
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="mx-auto mt-2 w-[min(1200px,100%)] rounded-3xl border border-ink/10 bg-white/95 p-3 shadow-soft backdrop-blur-xl md:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-base hover:bg-ink/5"
            >
              {item.label}
            </a>
          ))}
          <a href={`mailto:${profile.email}`} className="btn btn-dark mt-2 w-full">
            Email me
          </a>
        </div>
      )}
    </header>
  );
}
