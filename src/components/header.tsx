import { useTheme } from "@/hooks/useTheme";
import { MoonIcon, SunIcon } from "lucide-react";
import { profileData } from "@/data/profile-data";
import { SECTIONS } from "@/data/sections";
import Link from "next/link";

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/75 border-b border-border/80 transition-colors">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-mono text-primary font-bold tracking-tight">
          &lt;{profileData.name.split(" ")[0].toLowerCase()} /&gt;
        </span>

        <div className="flex items-center gap-6">
          <nav className="flex gap-6 text-sm font-medium text-muted-foreground">
            {SECTIONS.map((section) => (
              <Link
                className="hover:text-primary transition-colors"
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
            className="p-2 rounded-xl bg-muted border border-border text-foreground hover:text-primary transition-all"
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
