import { Waves, Mountain, Brain, Thermometer, CloudRain, Users, Mail } from "lucide-react";
import { researchInterests, profile } from "../data/content";

const ICONS = { waves: Waves, mountain: Mountain, brain: Brain, thermometer: Thermometer, cloud: CloudRain, users: Users };

export default function ResearchInterests() {
  const { intro, areas, questions, cta } = researchInterests;
  return (
    <section id="interests" className="py-20 sm:py-28">
      <div className="container-px">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400">
          Research Interests
        </p>
        <p className="mt-2 max-w-3xl text-2xl font-semibold text-ink-900 dark:text-white">
          Measuring how the ground moves — and what that means for climate risk
        </p>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-500 dark:text-ink-400">{intro}</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {areas.map((a) => {
            const Icon = ICONS[a.icon] ?? Waves;
            return (
              <div
                key={a.title}
                className="flex flex-col rounded-2xl border border-ink-200 bg-white p-6 transition-colors hover:border-accent-300 dark:border-ink-800 dark:bg-ink-950 dark:hover:border-accent-700/60"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent-200 bg-accent-50 dark:border-accent-800 dark:bg-accent-900/20">
                  <Icon className="text-accent-600 dark:text-accent-400" size={20} />
                </div>
                <p className="mt-5 text-base font-semibold text-ink-900 dark:text-white">{a.title}</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{a.text}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {a.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-ink-100 px-2 py-0.5 text-[11px] font-medium text-ink-600 dark:bg-ink-800 dark:text-ink-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {questions?.length > 0 && (
          <div className="mt-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-ink-500 dark:text-ink-400">
              Questions I want to answer
            </p>
            <ol className="mt-5 flex flex-col gap-4">
              {questions.map((q, i) => (
                <li key={i} className="flex gap-4 text-base leading-relaxed text-ink-700 dark:text-ink-200">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-xs font-semibold text-accent-600 dark:bg-accent-900/30 dark:text-accent-300">
                    {i + 1}
                  </span>
                  {q}
                </li>
              ))}
            </ol>
          </div>
        )}

        {cta && (
          <div className="mt-10 flex flex-col gap-6 rounded-2xl border border-accent-200 bg-gradient-to-br from-accent-50 to-white p-8 dark:border-accent-800/60 dark:from-accent-900/20 dark:to-ink-950 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-lg font-semibold text-ink-900 dark:text-white">{cta.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{cta.text}</p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}?subject=${encodeURIComponent("PhD opportunity")}`}
                className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-accent-700"
              >
                <Mail size={16} />
                Get in touch
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
