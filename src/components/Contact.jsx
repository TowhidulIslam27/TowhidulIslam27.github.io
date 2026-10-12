import { ArrowUpRight, Mail } from "lucide-react";
import { GithubGlyph, LinkedinGlyph } from "./icons";
import { profile } from "../data/content";

export default function Contact() {
  return (
    <section id="contact" className="container-px py-20 sm:py-28">
      <div className="rounded-3xl border border-ink-200 bg-gradient-to-br from-accent-50 to-white p-10 dark:border-ink-800 dark:from-accent-900/20 dark:to-ink-950 sm:p-16">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400">
          Contact
        </h2>
        <p className="mt-3 max-w-xl text-2xl font-semibold text-ink-900 dark:text-white sm:text-3xl">
          Share an interest in InSAR, geohazards or climate risk? I'd love to connect.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-accent-700"
          >
            <Mail size={16} />
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-5 py-2.5 text-sm font-semibold text-ink-700 transition-colors hover:border-accent-400 hover:text-accent-600 dark:border-ink-700 dark:text-ink-200 dark:hover:border-accent-500 dark:hover:text-accent-400"
          >
            <LinkedinGlyph size={16} />
            LinkedIn
            <ArrowUpRight size={14} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-5 py-2.5 text-sm font-semibold text-ink-700 transition-colors hover:border-accent-400 hover:text-accent-600 dark:border-ink-700 dark:text-ink-200 dark:hover:border-accent-500 dark:hover:text-accent-400"
          >
            <GithubGlyph size={16} />
            GitHub
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
