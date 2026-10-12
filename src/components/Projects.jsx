import { useState } from "react";
import { ExternalLink, Play } from "lucide-react";
import { GithubGlyph } from "./icons";
import GalleryThumb from "./GalleryThumb";
import { softwareProjects } from "../data/content";

function VideoDemo({ video, name }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-xl bg-ink-100 text-ink-400 dark:bg-ink-800 dark:text-ink-500">
        <Play size={28} />
        <span className="text-xs">Demo video coming soon</span>
      </div>
    );
  }

  return (
    <video
      className="aspect-video w-full rounded-xl bg-ink-900 object-cover"
      controls
      preload="none"
      poster={video.poster}
      onError={() => setFailed(true)}
    >
      <source src={video.src} type="video/mp4" />
      Your browser doesn't support embedded video. {name} demo not available.
    </video>
  );
}

// Highlights may be plain strings or { title, text } objects.
const hlText = (h) => (typeof h === "string" ? h : h.text);

function FeaturedCard({ project }) {
  return (
    <article className="rounded-3xl border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900/40 sm:p-10">
      <div className={project.video ? "grid items-center gap-8 lg:grid-cols-12 lg:gap-12" : ""}>
        {project.video && (
        <div className="lg:col-span-7">
          <VideoDemo video={project.video} name={project.name} />
          {project.images?.length > 0 && (
            <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
              {project.images.map((src, i) => (
                <GalleryThumb
                  key={src}
                  src={src}
                  alt={`${project.name} screenshot ${i + 1}`}
                  className="h-20 w-28 shrink-0 rounded-lg border border-ink-200 object-cover dark:border-ink-800"
                />
              ))}
            </div>
          )}
        </div>
        )}

        <div className={project.video ? "lg:col-span-5" : "max-w-4xl"}>
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-400 dark:text-ink-500">
            {project.org} · {project.period}
          </p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 dark:text-white">{project.name}</h3>
          <p className="mt-2 text-base font-medium text-accent-600 dark:text-accent-400">{project.subtitle}</p>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500 dark:text-ink-400">{project.description}</p>

          {project.facts?.length > 0 && (
            <dl className={`mt-6 grid grid-cols-2 gap-3 ${project.video ? "" : "sm:grid-cols-4"}`}>
              {project.facts.map((f) => (
                <div
                  key={f.label}
                  className="rounded-xl border border-ink-200 bg-ink-50/60 px-4 py-3 dark:border-ink-800 dark:bg-ink-950/50"
                >
                  <dt className="sr-only">{f.label}</dt>
                  <dd className="text-xl font-semibold text-ink-900 dark:text-white">{f.value}</dd>
                  <dd className="mt-0.5 text-xs text-ink-500 dark:text-ink-400">{f.label}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </div>

      <div className="mt-10 border-t border-ink-200 pt-10 dark:border-ink-800">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400">
          Key capabilities
        </p>
        <ul className="mt-6 grid gap-x-12 gap-y-7 sm:grid-cols-2">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex gap-4">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-xs font-semibold text-accent-600 dark:bg-accent-900/30 dark:text-accent-300">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                {typeof h !== "string" && (
                  <p className="text-sm font-semibold text-ink-900 dark:text-white">{h.title}</p>
                )}
                <p className="mt-1 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{hlText(h)}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 flex flex-col gap-5 border-t border-ink-200 pt-6 dark:border-ink-800 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-full bg-ink-100 px-3 py-1 text-xs font-medium text-ink-600 dark:bg-ink-800 dark:text-ink-300"
            >
              {s}
            </span>
          ))}
        </div>
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

function ProjectLinks({ project }) {
  return (
    <div className="flex shrink-0 flex-wrap items-center gap-4">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:border-accent-400 hover:text-accent-600 dark:border-ink-700 dark:text-ink-200 dark:hover:border-accent-500 dark:hover:text-accent-400"
        >
          <GithubGlyph size={15} />
          View on GitHub
        </a>
      )}
      {project.links?.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-700"
        >
          {l.label}
          <ExternalLink size={14} />
        </a>
      ))}
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="grid gap-8 rounded-3xl border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900/40 sm:p-8 lg:grid-cols-5">
      <div className="lg:col-span-2">
        <VideoDemo video={project.video} name={project.name} />

        {project.images?.length > 0 && (
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {project.images.map((src, i) => (
              <GalleryThumb
                key={src}
                src={src}
                alt={`${project.name} screenshot ${i + 1}`}
                className="h-20 w-28 shrink-0 rounded-lg border border-ink-200 object-cover dark:border-ink-800"
              />
            ))}
          </div>
        )}
      </div>

      <div className="lg:col-span-3">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-xl font-semibold text-ink-900 dark:text-white">{project.name}</h3>
          <span className="text-xs text-ink-400 dark:text-ink-500">{project.period}</span>
        </div>
        <p className="mt-1 text-sm font-medium text-accent-600 dark:text-accent-400">{project.subtitle}</p>
        <p className="mt-3 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{project.description}</p>

        <ul className="mt-4 flex flex-col gap-2">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex gap-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-500" />
              {hlText(h)}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-full bg-ink-100 px-3 py-1 text-xs font-medium text-ink-600 dark:bg-ink-800 dark:text-ink-300"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:border-accent-400 hover:text-accent-600 dark:border-ink-700 dark:text-ink-200 dark:hover:border-accent-500 dark:hover:text-accent-400"
            >
              <GithubGlyph size={15} />
              View on GitHub
            </a>
          )}
          {project.links?.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-600 hover:underline dark:text-accent-400"
            >
              {l.label}
              <ExternalLink size={14} />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="container-px py-20 sm:py-28">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400">
        Research Software
      </h2>
      <p className="mt-2 max-w-2xl text-2xl font-semibold text-ink-900 dark:text-white">
        Tools I build to make the research reproducible
      </p>

      <div className="mt-10 flex flex-col gap-6">
        {softwareProjects.map((p) => (
          p.featured ? <FeaturedCard key={p.id} project={p} /> : <ProjectCard key={p.id} project={p} />
        ))}
      </div>

    </section>
  );
}
