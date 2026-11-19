import { profile } from "../data.js";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink/10 py-10">
      <div className="container-x flex flex-col items-center justify-between gap-6 md:flex-row">
        <a href="#top" className="font-serif text-2xl italic">
          Sakib<span className="text-accent">.</span>
        </a>
        <nav aria-label="Social links" className="flex flex-wrap justify-center gap-6 text-sm text-ink/70">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent">LinkedIn</a>
          <a href={profile.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-accent">Instagram</a>
          <a href="#top" className="hover:text-accent">Back to top ↑</a>
        </nav>
        <p className="text-sm text-muted">© {year} {profile.name}</p>
      </div>
    </footer>
  );
}
