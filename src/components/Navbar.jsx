import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#interests", label: "Interests" },
  { href: "#research", label: "Research" },
  { href: "#projects", label: "Software" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#publications", label: "Publications" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    // Scroll-spy: the active section is the last one whose top has passed just below the sticky bar.
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const sections = [...document.querySelectorAll("main section[id]")];
      const line = 120;
      let current = "";
      for (const sec of sections) if (sec.getBoundingClientRect().top <= line) current = sec.id;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom && sections.length) current = sections[sections.length - 1].id;
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-ink-200 bg-white/80 backdrop-blur dark:border-ink-800 dark:bg-ink-950/80"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="container-px flex h-16 items-center justify-between">
        <a href="#top" className="font-mono text-sm font-semibold text-ink-900 dark:text-white">
          Towhidul<span className="text-accent-500">.</span>Islam
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "location" : undefined}
                  className={`relative py-1 text-sm transition-colors ${
                    isActive
                      ? "font-medium text-accent-600 dark:text-accent-400"
                      : "text-ink-500 hover:text-ink-900 dark:text-ink-400 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-accent-500 transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>


        <button
          type="button"
          aria-label="Toggle menu"
          className="text-ink-700 dark:text-ink-200 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink-200 bg-white px-6 py-4 dark:border-ink-800 dark:bg-ink-950 md:hidden">
          <ul className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block text-sm ${
                    active === link.href.slice(1)
                      ? "font-medium text-accent-600 dark:text-accent-400"
                      : "text-ink-600 dark:text-ink-300"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
