import { useTheme } from "@/hooks/useTheme";
import { MoonIcon, SunIcon } from "lucide-react";
import { profileData } from "@/data/profile-data";
import { SECTIONS } from "@/data/sections";
import Link from "next/link";

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800/60 transition-colors">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold tracking-tight">
          &lt;{profileData.name.split(" ")[0].toLowerCase()} /&gt;
        </span>

        <div className="flex items-center gap-6">
          <nav className="flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
            {SECTIONS.map((section) => (
              <Link
                className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                key={section.id}
                href={`#${section.id}`}
              >
                {section.title}
              </Link>
            ))}
          </nav>

          {/* 🌗 THEME TOGGLE BUTTON */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-slate-200/60 dark:bg-slate-900/60 border border-slate-300/50 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-all"
            title={
              theme === null ? "System Default Active" : `${theme} mode forced`
            }
          >
            {theme === "dark" ? <SunIcon size={18} /> : <MoonIcon size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}
