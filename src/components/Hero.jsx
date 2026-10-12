import { ArrowRight, Mail } from "lucide-react";
import { GithubGlyph, LinkedinGlyph } from "./icons";
import { profile } from "../data/content";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* soft radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 h-[32rem] bg-[radial-gradient(ellipse_at_top,_var(--color-accent-200)_0%,_transparent_60%)] opacity-60 dark:bg-[radial-gradient(ellipse_at_top,_var(--color-accent-900)_0%,_transparent_60%)] dark:opacity-40"
      />

      <div className="container-px relative grid items-center gap-12 py-24 sm:py-32 lg:grid-cols-[1fr_auto]">
        <div className="flex flex-col items-start gap-6">

          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
            {profile.name}
          </h1>

          <p className="max-w-2xl text-lg font-medium text-accent-600 dark:text-accent-400">
            {profile.role}
          </p>

          <p className="max-w-2xl text-base leading-relaxed text-ink-500 dark:text-ink-400">
            {profile.tagline}
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-4">
            <a
              href="#research"
              className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-accent-700"
            >
              View my research
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-5 py-2.5 text-sm font-semibold text-ink-700 transition-colors hover:border-accent-400 hover:text-accent-600 dark:border-ink-700 dark:text-ink-200 dark:hover:border-accent-500 dark:hover:text-accent-400"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-4 flex items-center gap-5 text-ink-400 dark:text-ink-500">
            <a href={`mailto:${profile.email}`} aria-label="Email" className="transition-colors hover:text-accent-500">
              <Mail size={20} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-accent-500">
              <LinkedinGlyph size={20} />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-accent-500">
              <GithubGlyph size={20} />
            </a>
          </div>
        </div>

        <div className="order-first flex justify-center lg:order-last">
          <div className="relative h-56 w-56 sm:h-72 sm:w-72">
            {/* soft glow behind the portrait, visible only in the faded ring */}
            <div
              aria-hidden
              className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-300 to-accent-600 opacity-25 blur-2xl dark:opacity-30"
            />
            <img
              src={profile.photo}
              alt={profile.name}
              className="relative h-full w-full object-cover"
              style={{
                maskImage:
                  "radial-gradient(circle closest-side at 50% 45%, black 58%, rgba(0,0,0,0.9) 70%, rgba(0,0,0,0.45) 88%, transparent 100%)",
                WebkitMaskImage:
                  "radial-gradient(circle closest-side at 50% 45%, black 58%, rgba(0,0,0,0.9) 70%, rgba(0,0,0,0.45) 88%, transparent 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
