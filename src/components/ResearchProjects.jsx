import { Satellite, FlaskConical } from "lucide-react";
import { researchProjects, academicProjects } from "../data/content";

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

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {researchProjects.map((r) => (
            <div
              key={r.name}
              className="flex flex-col gap-3 rounded-2xl border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-950"
            >
              <Satellite className="text-accent-500" size={22} />
              <h3 className="text-base font-semibold text-ink-900 dark:text-white">{r.name}</h3>
              <p className="text-xs font-medium text-ink-400 dark:text-ink-500">
                {r.role} · {r.period}
              </p>
              <p className="text-sm leading-relaxed text-ink-500 dark:text-ink-400">{r.description}</p>
            </div>
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
