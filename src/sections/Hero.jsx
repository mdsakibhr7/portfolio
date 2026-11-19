import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { profile, marqueeItems, stats } from "../data.js";
import Reveal from "./Reveal.jsx";

export default function Hero() {
  const loop = [...marqueeItems, ...marqueeItems];

  return (
    <section id="top" className="hero-glow relative overflow-hidden pt-36 md:pt-44">
      <div className="container-x">
        {/* Availability pill */}
        {profile.available && (
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm shadow-soft">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime" />
              </span>
              {profile.availabilityText}
            </span>
          </Reveal>
        )}

        <div className="mt-10 grid items-end gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
              className="h-serif text-[clamp(3.2rem,9vw,7.5rem)] leading-[0.95]"
            >
              {profile.headline[0]} <span className="text-accent">{profile.headline[1]}</span>
            </motion.h1>

            <Reveal delay={0.15}>
              <p className="h-display mt-2 text-[clamp(3.5rem,11vw,9rem)] leading-[0.85]">
                I am {profile.name.split(" ")[0]}
                <br />
                <span className="text-ink/90">{profile.name.split(" ")[1]}</span>
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.25} className="pb-2">
            <p className="max-w-sm text-base leading-relaxed text-ink/75">{profile.intro}</p>
            <p className="mt-3 text-sm font-medium">
              <span className="text-accent">▲</span> {profile.title} · {profile.location}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#flow" className="btn btn-dark">
                See the AI → WordPress flow <ArrowUpRight size={16} />
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-line">
                <Github size={16} /> GitHub
              </a>
            </div>
          </Reveal>
        </div>

        {/* Stats */}
        <Reveal delay={0.3} className="mt-20 grid grid-cols-1 gap-6 border-t border-ink/10 pt-10 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="h-display text-6xl text-ink md:text-7xl">{s.value}</p>
              <p className="mt-1 text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </Reveal>
      </div>

      {/* Marquee */}
      <div className="mt-20 overflow-hidden border-y border-ink/10 bg-white/50 py-5" aria-hidden="true">
        <div className="marquee-track flex w-max gap-12">
          {loop.map((item, i) => (
            <span key={i} className="h-display whitespace-nowrap text-3xl text-ink/40">
              {item} <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
