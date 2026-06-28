import { useTheme } from "@/hooks/useTheme";
import { MenuIcon, MoonIcon, SunIcon, XIcon } from "lucide-react";
import { profileData } from "@/data/profile-data";
import { SECTIONS } from "@/data/sections";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/75 border-b border-border/80 transition-colors">
      <div className="relative max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-mono text-primary font-bold tracking-tight">
          &lt;{profileData.name.split(" ")[0].toLowerCase()} /&gt;
        </span>

        <div className="flex items-center gap-2 md:gap-6">
          <nav className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
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

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="inline-flex md:hidden items-center justify-center p-2 rounded-xl bg-muted border border-border text-foreground hover:text-primary transition-all"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <XIcon size={18} /> : <MenuIcon size={18} />}
          </button>

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

        {menuOpen && (
          <div
            id="mobile-navigation"
            className="absolute top-full left-6 right-6 mt-3 rounded-2xl border border-border bg-background/95 backdrop-blur-md shadow-lg md:hidden overflow-hidden"
          >
            <nav className="flex flex-col py-2 text-sm font-medium text-muted-foreground">
              {SECTIONS.map((section) => (
                <Link
                  className="px-4 py-3 hover:bg-muted hover:text-primary transition-colors"
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {section.title}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
