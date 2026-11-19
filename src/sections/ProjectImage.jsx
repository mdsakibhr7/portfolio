import { useState } from "react";

/* Live screenshot of a site, served by a public screenshot service (no API key).
   Falls back to a gradient if the screenshot cannot load.
   To use your own images instead: put them in public/projects/ and return that path here. */
export const screenshotUrl = (url) =>
  `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=1200`;

export default function ProjectImage({ url, title, className = "" }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div aria-hidden="true" className={`bg-gradient-to-br from-glow via-panel to-lime/20 ${className}`} />;
  }

  return (
    <img
      src={screenshotUrl(url)}
      alt={`${title} website screenshot`}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={`object-cover object-top ${className}`}
    />
  );
}
