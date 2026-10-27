import { Satellite, FlaskConical, ExternalLink, FileText } from "lucide-react";
import { GithubGlyph } from "./icons";
import { researchProjects, academicProjects } from "../data/content";

const linkClass =
  "inline-flex items-center gap-1.5 rounded-full border border-ink-200 px-3 py-1.5 text-xs font-medium text-ink-700 transition-colors hover:border-accent-400 hover:text-accent-600 dark:border-ink-700 dark:text-ink-200 dark:hover:border-accent-500 dark:hover:text-accent-400";

export default function ResearchProjects() {
  return (
    <section id="research" className="py-20 sm:py-28">
      <div className="container-px">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400">
          Current Research
        </h2>
        <p className="mt-2 max-w-2xl text-2xl font-semibold text-ink-900 dark:text-white">
          What I'm leading at SAR.Sense Lab
        </p>

        <div className="mt-10 flex flex-col gap-8">
          {researchProjects.map((r) => (
            <article
              key={r.name}
              className="grid gap-8 rounded-2xl border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-950 sm:p-8 lg:grid-cols-5"
            >
              <div className="flex flex-col gap-3 lg:col-span-2">
                <Satellite className="text-accent-500" size={22} />
                <h3 className="text-lg font-semibold text-ink-900 dark:text-white">{r.name}</h3>
                <p className="text-xs font-medium text-ink-400 dark:text-ink-500">
                  {r.role} · {r.period}
                </p>
                <p className="text-sm leading-relaxed text-ink-500 dark:text-ink-400">{r.description}</p>

                {r.facts?.length > 0 && (
                  <dl className="mt-2 grid grid-cols-2 gap-3">
                    {r.facts.map((f) => (
                      <div
                        key={f.label}
                        className="rounded-xl border border-ink-200 bg-ink-50/60 px-3 py-3 dark:border-ink-800 dark:bg-ink-950/50"
                      >
                        <dt className="sr-only">{f.label}</dt>
                        <dd className="break-words text-lg font-semibold text-ink-900 dark:text-white">{f.value}</dd>
                        <dd className="mt-0.5 text-xs leading-snug text-ink-500 dark:text-ink-400">{f.label}</dd>
                      </div>
                    ))}
                  </dl>
                )}

                {r.findings?.length > 0 && (
                  <ul className="mt-2 flex list-disc flex-col gap-2 pl-5 text-sm leading-relaxed text-ink-600 marker:text-accent-500 dark:text-ink-300">
                    {r.findings.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                )}

                {r.note && (
                  <p className="mt-1 border-l-2 border-accent-400 pl-3 text-xs italic leading-relaxed text-ink-500 dark:text-ink-400">
                    {r.note}
                  </p>
                )}

                {(r.github || r.website || r.paper) && (
                  <div className="mt-auto flex flex-wrap items-center gap-2 pt-3">
                    {r.github && (
                      <a href={r.github} target="_blank" rel="noreferrer" className={linkClass}>
                        <GithubGlyph size={13} />
                        GitHub
                      </a>
                    )}
                    {r.paper && (
                      <a
                        href={r.paper}
                        target="_blank"
                        rel="noreferrer"
                        title="Manuscript in preparation"
                        className={linkClass}
                      >
                        <FileText size={13} />
                        Paper
                      </a>
                    )}
                    {r.website && (
                      <a
                        href={r.website}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-accent-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-accent-700"
                      >
                        Website
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                )}
              </div>

              {r.figures?.length > 0 && (
                <div className="flex flex-col gap-6 lg:col-span-3">
                  {r.figures.map((f) => (
                    <figure key={f.src} className="flex flex-col gap-2">
                      <a
                        href={f.src}
                        target="_blank"
                        rel="noreferrer"
                        title="Open full size"
                        className="block overflow-hidden rounded-xl border border-ink-200 bg-white p-2 dark:border-ink-700"
                      >
                        <img src={f.src} alt={f.alt} loading="lazy" className="h-auto w-full" />
                      </a>
                      <figcaption className="text-xs leading-relaxed text-ink-500 dark:text-ink-400">
                        {f.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>

        {academicProjects?.length > 0 && (
          <div className="mt-16">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-ink-500 dark:text-ink-400">
              Selected academic projects
            </h3>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {academicProjects.map((r) => (
                <div
                  key={r.name}
                  className="flex flex-col gap-3 rounded-2xl border border-ink-200 bg-white/60 p-6 dark:border-ink-800 dark:bg-ink-950/60"
                >
                  <FlaskConical className="text-accent-500" size={20} />
                  <h4 className="text-base font-semibold text-ink-900 dark:text-white">{r.name}</h4>
                  <p className="text-xs font-medium text-ink-400 dark:text-ink-500">{r.period}</p>
                  <p className="text-sm leading-relaxed text-ink-500 dark:text-ink-400">{r.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
