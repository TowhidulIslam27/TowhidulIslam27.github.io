import { Satellite, Globe, Code2, Database } from "lucide-react";
import { skills } from "../data/content";

const ICONS = {
  satellite: Satellite,
  globe: Globe,
  code: Code2,
  database: Database,
};

export default function Skills() {
  return (
    <section id="skills" className="container-px py-20 sm:py-28">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400">
        Skills & Tools
      </h2>
      <p className="mt-2 max-w-2xl text-2xl font-semibold text-ink-900 dark:text-white">Technical stack</p>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {skills.map((cat) => {
          const Icon = ICONS[cat.icon] ?? Code2;
          return (
            <div
              key={cat.group}
              className="rounded-2xl border border-ink-200 bg-white p-6 transition-colors hover:border-accent-300 dark:border-ink-800 dark:bg-ink-900/40 dark:hover:border-accent-700/60"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg border border-accent-200 bg-accent-50 p-2 dark:border-accent-800 dark:bg-accent-900/20">
                  <Icon className="text-accent-600 dark:text-accent-400" size={20} />
                </div>
                <h3 className="text-base font-semibold text-ink-900 dark:text-white">{cat.group}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="cursor-default rounded-md border border-ink-200 bg-ink-100 px-3 py-1 text-xs font-medium text-ink-600 transition-colors hover:text-accent-600 dark:border-ink-700/60 dark:bg-ink-800/80 dark:text-ink-300 dark:hover:text-accent-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
