import { about } from "../data/content";

export default function About() {
  return (
    <section id="about" className="container-px py-20 sm:py-28">
      <div className="max-w-3xl">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400">
            About
          </h2>
          <div className="mt-4 flex flex-col gap-4">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-ink-600 dark:text-ink-300">
                {p}
              </p>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
