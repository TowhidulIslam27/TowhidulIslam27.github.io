import { GraduationCap, Award, Languages } from "lucide-react";
import { education, awards, languages } from "../data/content";

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-28">
      <div className="container-px grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400">
            Education
          </h2>
          <div className="mt-6 flex flex-col gap-6">
            {education.map((e, i) => (
              <div key={i} className="flex gap-4">
                <GraduationCap className="mt-1 shrink-0 text-accent-500" size={20} />
                <div>
                  <h3 className="text-sm font-semibold text-ink-900 dark:text-white">{e.school}</h3>
                  <p className="text-sm text-ink-500 dark:text-ink-400">{e.degree}</p>
                  <p className="mt-0.5 text-xs text-ink-400 dark:text-ink-500">
                    {e.period} · {e.location}
                  </p>
                  {e.note && (
                    <p className="mt-1 text-xs italic text-ink-400 dark:text-ink-500">{e.note}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400">
            Awards & Fellowships
          </h2>
          <div className="mt-6 flex flex-col gap-6">
            {awards.map((a, i) => (
              <div key={i} className="flex gap-4">
                <Award className="mt-1 shrink-0 text-accent-500" size={20} />
                <div>
                  <h3 className="text-sm font-semibold text-ink-900 dark:text-white">
                    {a.name} <span className="font-normal text-ink-400 dark:text-ink-500">— {a.year}</span>
                  </h3>
                  <p className="text-sm text-ink-500 dark:text-ink-400">{a.body}</p>
                </div>
              </div>
            ))}
          </div>

          {languages?.length > 0 && (
            <>
              <h2 className="mt-12 text-sm font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400">
                Language
              </h2>
              <div className="mt-6 flex flex-col gap-4">
                {languages.map((l) => (
                  <div key={l.name} className="flex gap-4">
                    <Languages className="mt-0.5 shrink-0 text-accent-500" size={20} />
                    <p className="text-sm text-ink-500 dark:text-ink-400">
                      <span className="font-semibold text-ink-900 dark:text-white">{l.name}</span> — {l.detail}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

      </div>
    </section>
  );
}
