import { useEffect, useState } from "react";
import { Satellite, FlaskConical, ExternalLink, FileText, ChevronDown, X } from "lucide-react";
import { GithubGlyph } from "./icons";
import { researchProjects, academicProjects } from "../data/content";

// Text tiled across every research figure. Change it here to change it everywhere.
const WATERMARK_TEXT = "Unpublished work";

const watermarkTile = `url("data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='300' height='180'><text x='150' y='90' text-anchor='middle' transform='rotate(-24 150 90)' font-family='Inter,Arial,sans-serif' font-size='20' font-weight='600' letter-spacing='1' fill='#475569' fill-opacity='0.22'>${WATERMARK_TEXT}</text></svg>`,
)}")`;

const linkClass =
  "inline-flex items-center gap-1.5 rounded-full border border-ink-200 px-3 py-1.5 text-xs font-medium text-ink-700 transition-colors hover:border-accent-400 hover:text-accent-600 dark:border-ink-700 dark:text-ink-200 dark:hover:border-accent-500 dark:hover:text-accent-400";

// Puts the watermark over whatever it wraps without blocking clicks.
function Watermarked({ children, className = "" }) {
  return (
    <div className={`relative ${className}`}>
      {children}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 select-none"
        style={{ backgroundImage: watermarkTile, backgroundSize: "300px 180px" }}
      />
    </div>
  );
}

function Lightbox({ figure, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={figure.title}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-3 bg-ink-950/85 p-4 sm:p-8"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close figure"
        className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
      >
        <X size={20} />
      </button>
      <div className="max-h-[80vh] max-w-full overflow-auto rounded-xl bg-white p-2" onClick={(e) => e.stopPropagation()}>
        <Watermarked className="inline-block">
          <img src={figure.src} alt={figure.alt} className="block h-auto max-h-[76vh] w-auto max-w-full" />
        </Watermarked>
      </div>
      <p className="max-w-3xl text-center text-sm text-ink-200" onClick={(e) => e.stopPropagation()}>
        <span className="font-semibold text-white">{figure.title}.</span> {figure.caption}
      </p>
    </div>
  );
}

function ProjectCard({ r, index, onOpenFigure }) {
  const [open, setOpen] = useState(false);
  const panelId = `results-${index}`;
  const hasResults = r.facts?.length > 0 || r.findings?.length > 0 || r.figures?.length > 0;

  return (
    <article className="rounded-2xl border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-950 sm:p-8">
      <div className="flex flex-col gap-3">
        <Satellite className="text-accent-500" size={22} />
        <h3 className="text-lg font-semibold text-ink-900 dark:text-white">{r.name}</h3>
        <p className="text-xs font-medium text-ink-400 dark:text-ink-500">
          {r.role} · {r.period}
        </p>
        <p className="max-w-3xl text-sm leading-relaxed text-ink-500 dark:text-ink-400">{r.description}</p>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          {r.github && (
            <a href={r.github} target="_blank" rel="noreferrer" className={linkClass}>
              <GithubGlyph size={13} />
              GitHub
            </a>
          )}
          {r.paper && (
            <a href={r.paper} target="_blank" rel="noreferrer" title="Manuscript in preparation" className={linkClass}>
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

        {hasResults && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={panelId}
            className="inline-flex items-center gap-1.5 rounded-full border border-accent-500 px-4 py-1.5 text-xs font-semibold text-accent-600 transition-colors hover:bg-accent-50 dark:text-accent-400 dark:hover:bg-accent-900/30"
          >
            {open ? "Collapse results" : "Expand results"}
            <ChevronDown size={14} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
          </button>
        )}
      </div>

      {open && (
        <div id={panelId} className="mt-6 flex flex-col gap-6 border-t border-ink-200 pt-6 dark:border-ink-800">
          <p className="text-xs italic text-ink-500 dark:text-ink-400">
            Preliminary results from unpublished work. Figures are previews and may change before publication.
          </p>

          {r.facts?.length > 0 && (
            <dl className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {r.facts.map((f) => (
                <div
                  key={f.label}
                  className="rounded-xl border border-ink-200 bg-ink-50/60 px-4 py-3 dark:border-ink-800 dark:bg-ink-950/50"
                >
                  <dt className="sr-only">{f.label}</dt>
                  <dd className="break-words text-lg font-semibold text-ink-900 dark:text-white">{f.value}</dd>
                  <dd className="mt-0.5 text-xs leading-snug text-ink-500 dark:text-ink-400">{f.label}</dd>
                </div>
              ))}
            </dl>
          )}

          {(r.findings?.length > 0 || r.note) && (
            <div className="flex flex-col gap-3">
              {r.findings?.length > 0 && (
                <ul className="flex list-disc flex-col gap-2 pl-5 text-sm leading-relaxed text-ink-600 marker:text-accent-500 dark:text-ink-300">
                  {r.findings.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              )}
              {r.note && (
                <p className="border-l-2 border-accent-400 pl-3 text-xs italic leading-relaxed text-ink-500 dark:text-ink-400">
                  {r.note}
                </p>
              )}
            </div>
          )}

          {r.figures?.length > 0 && (
            <div className={`grid items-start gap-6 ${r.stackFigures ? "" : "lg:grid-cols-2"}`}>
              {r.figures.map((f) => (
                <figure key={f.src} className="flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={() => onOpenFigure(f)}
                    aria-label={`Enlarge figure: ${f.title}`}
                    title="Click to enlarge"
                    className="block cursor-zoom-in overflow-hidden rounded-xl border border-ink-200 bg-white p-2 text-left dark:border-ink-700"
                  >
                    <Watermarked>
                      <img src={f.src} alt={f.alt} loading="lazy" className="block h-auto w-full" />
                    </Watermarked>
                  </button>
                  <figcaption className="text-xs leading-relaxed text-ink-500 dark:text-ink-400">
                    <span className="font-semibold text-ink-700 dark:text-ink-200">{f.title}.</span> {f.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          )}
        </div>
      )}
    </article>
  );
}

export default function ResearchProjects() {
  const [figure, setFigure] = useState(null);

  return (
    <section id="research" className="py-20 sm:py-28">
      <div className="container-px">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400">
          Current Research
        </h2>
        <p className="mt-2 max-w-2xl text-2xl font-semibold text-ink-900 dark:text-white">
          What I'm leading at SAR.Sense Lab
        </p>

        <div className="mt-10 flex flex-col gap-6">
          {researchProjects.map((r, i) => (
            <ProjectCard key={r.name} r={r} index={i} onOpenFigure={setFigure} />
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

      {figure && <Lightbox figure={figure} onClose={() => setFigure(null)} />}
    </section>
  );
}
