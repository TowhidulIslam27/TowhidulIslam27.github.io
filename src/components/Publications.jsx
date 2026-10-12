import { ExternalLink } from "lucide-react";
import { publications } from "../data/content";

const GROUPS = [
  { key: "main", title: "Hazards & climate risk" },
  { key: "other", title: "Other contributions" },
];

export default function Publications() {
  return (
    <section id="publications" className="py-20 sm:py-28">
      <div className="container-px">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400">
          Publications
        </h2>

        {GROUPS.map(({ key, title }) => {
          const items = publications.filter((p) => (p.group ?? "main") === key);
          if (items.length === 0) return null;
          return (
            <div key={key} className="mt-8">
              {title && (
                <h3 className="text-sm font-semibold uppercase tracking-widest text-ink-500 dark:text-ink-400">{title}</h3>
              )}
              <ul className="mt-2 flex flex-col divide-y divide-ink-200 dark:divide-ink-800">
                {items.map((pub, i) => (
                  <li key={i} className="flex flex-col gap-2 py-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                    <p className="text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                      {pub.href ? (
                        <a href={pub.href} target="_blank" rel="noreferrer" className="hover:text-accent-600 dark:hover:text-accent-400">
                          {pub.citation}
                          <ExternalLink className="ml-1 inline" size={12} />
                        </a>
                      ) : (
                        pub.citation
                      )}
                    </p>
                    <span
                      className={`inline-flex w-fit shrink-0 items-center rounded-full px-2.5 py-1 text-xs font-medium ${
                        pub.tag === "Published"
                          ? "bg-accent-100 text-accent-700 dark:bg-accent-900/40 dark:text-accent-300"
                          : "bg-ink-100 text-ink-500 dark:bg-ink-800 dark:text-ink-400"
                      }`}
                    >
                      {pub.tag}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
