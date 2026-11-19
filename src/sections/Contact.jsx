import { useState } from "react";
import { Copy, Check, Mail, MessageCircle, Github, MapPin } from "lucide-react";
import { profile } from "../data.js";
import Reveal from "./Reveal.jsx";

const initial = { name: "", email: "", subject: "", message: "" };

const validators = {
  name: (v) => (v.trim().length < 2 ? "Please enter your name." : ""),
  email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? "" : "Please enter a valid email address."),
  subject: (v) => (v.trim().length < 3 ? "Subject should be at least 3 characters." : ""),
  message: (v) => (v.trim().length < 10 ? "Message should be at least 10 characters." : ""),
};

function Field({ label, name, value, error, onChange, onBlur, textarea }) {
  const base =
    "w-full rounded-2xl border bg-panel px-4 py-3.5 text-sm outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/15";
  const border = error ? "border-red-400" : "border-ink/10";
  const common = { id: name, name, value, onChange, onBlur, "aria-invalid": Boolean(error), "aria-describedby": error ? `${name}-err` : undefined };
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink/80">{label}</label>
      {textarea ? (
        <textarea rows={5} className={`${base} ${border} resize-y`} {...common} />
      ) : (
        <input type={name === "email" ? "email" : "text"} className={`${base} ${border}`} {...common} />
      )}
      {error && <p id={`${name}-err`} className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: validators[name](value) }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((er) => ({ ...er, [name]: validators[name](value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = Object.fromEntries(Object.keys(validators).map((k) => [k, validators[k](form[k])]));
    setErrors(next);
    if (Object.values(next).some(Boolean)) {
      setStatus("Please fix the highlighted fields.");
      return;
    }
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    setStatus("Opening your email app…");
    setForm(initial);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setStatus(`Copy failed. Email me at ${profile.email}`);
    }
  };

  const channels = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: MessageCircle, label: "WhatsApp", value: profile.phone, href: profile.whatsapp },
    { icon: Github, label: "GitHub", value: "github.com/mdsakibhr7", href: profile.github },
    { icon: MapPin, label: "Based in", value: profile.location },
  ];

  return (
    <section id="contact" className="section pt-0">
      <div className="container-x grid gap-14 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow mb-4">Contact</p>
          <h2 className="h-display text-5xl md:text-7xl">
            Have a project? <span className="h-serif normal-case text-accent">Let's build it.</span>
          </h2>

          <ul className="mt-10 space-y-3">
            {channels.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="card flex items-center gap-4 p-4">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink text-paper">
                  <Icon size={18} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-muted">{label}</p>
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="block truncate font-medium hover:text-accent">
                      {value}
                    </a>
                  ) : (
                    <p className="font-medium">{value}</p>
                  )}
                </div>
                {label === "Email" && (
                  <button type="button" onClick={copyEmail} className="btn btn-line h-9 px-4 text-xs">
                    {copied ? <Check size={14} /> : <Copy size={14} />} {copied ? "Copied" : "Copy"}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <form onSubmit={handleSubmit} noValidate className="card space-y-5 p-7 md:p-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" value={form.name} error={errors.name} onChange={handleChange} onBlur={handleBlur} />
              <Field label="Email" name="email" value={form.email} error={errors.email} onChange={handleChange} onBlur={handleBlur} />
            </div>
            <Field label="Subject" name="subject" value={form.subject} error={errors.subject} onChange={handleChange} onBlur={handleBlur} />
            <Field label="Message" name="message" value={form.message} error={errors.message} onChange={handleChange} onBlur={handleBlur} textarea />

            <button type="submit" className="btn btn-dark w-full">Send message</button>
            <p className="text-xs text-muted">
              Opens your email app with the message ready to send. For direct delivery, connect a form service such as Formspree.
            </p>
            <p role="status" aria-live="polite" className="min-h-[1.25rem] text-sm text-accent">{status}</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
