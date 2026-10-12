import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-ink-200 py-8 dark:border-ink-800">
      <div className="container-px text-center text-xs text-ink-400 dark:text-ink-500">
        <p>© {new Date().getFullYear()} {profile.name}</p>
      </div>
    </footer>
  );
}
