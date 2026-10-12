import { useState } from "react";
import { Camera } from "lucide-react";
import { experience, experiencePhotos } from "../data/content";

function FieldPhoto({ src, caption }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;

  return (
    <div className="group relative aspect-square overflow-hidden rounded-xl border border-ink-200 dark:border-ink-800">
      <img
        src={src}
        alt={caption}
        onError={() => setFailed(true)}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-2.5 pt-6">
        <p className="text-xs font-medium leading-snug text-white">{caption}</p>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="container-px py-20 sm:py-28">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400">
        Experience
      </h2>
      <p className="mt-2 max-w-2xl text-2xl font-semibold text-ink-900 dark:text-white">Where I've worked</p>

      <ol className="mt-10 flex flex-col">
        {experience.map((job, i) => (
          <li key={i} className="relative grid gap-1 border-l border-ink-200 py-6 pl-8 dark:border-ink-800 sm:grid-cols-4 sm:gap-6">
            <span className="absolute -left-[5px] top-8 h-2.5 w-2.5 rounded-full bg-accent-500" />
            <div className="sm:col-span-1">
              <p className="text-xs font-medium text-ink-400 dark:text-ink-500">{job.period}</p>
              <p className="mt-1 text-xs text-ink-400 dark:text-ink-500">{job.location}</p>
            </div>
            <div className="sm:col-span-3">
              <h3 className="text-base font-semibold text-ink-900 dark:text-white">{job.role}</h3>
              <p className="text-sm font-medium text-accent-600 dark:text-accent-400">{job.org}</p>
              <ul className="mt-3 flex flex-col gap-2">
                {job.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-300 dark:bg-ink-600" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      {experiencePhotos?.length > 0 && (
        <div className="mt-16">
          <div className="flex items-center gap-2">
            <Camera className="text-accent-500" size={18} />
            <h3 className="text-sm font-semibold uppercase tracking-widest text-ink-500 dark:text-ink-400">
              From the field
            </h3>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {experiencePhotos.map((photo) => (
              <FieldPhoto key={photo.src} src={photo.src} caption={photo.caption} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
