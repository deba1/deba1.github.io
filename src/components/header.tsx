import { useTheme } from "@/hooks/useTheme";
import { MenuIcon, MoonIcon, SunIcon } from "lucide-react";
import { profileData } from "@/data/profile-data";
import { SECTIONS } from "@/data/sections";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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

          <motion.button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            whileTap={{ scale: 0.96 }}
            animate={menuOpen ? "open" : "closed"}
            className="inline-flex md:hidden items-center justify-center p-2 rounded-xl bg-muted border border-border text-foreground hover:text-primary transition-all"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <span className="relative block h-4 w-5">
              <motion.span
                className="absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current"
                variants={{
                  closed: { y: 0, rotate: 0 },
                  open: { y: 6, rotate: 45 },
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="absolute left-0 top-1.5 h-0.5 w-5 rounded-full bg-current"
                variants={{
                  closed: { opacity: 1, scaleX: 1 },
                  open: { opacity: 0, scaleX: 0 },
                }}
                transition={{ duration: 0.15 }}
              />
              <motion.span
                className="absolute left-0 top-3 h-0.5 w-5 rounded-full bg-current"
                variants={{
                  closed: { y: 0, rotate: 0 },
                  open: { y: -6, rotate: -45 },
                }}
                transition={{ duration: 0.2 }}
              />
            </span>
          </motion.button>

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

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, y: -10, scale: 0.98, height: 0 }}
              animate={{ opacity: 1, y: 0, scale: 1, height: "auto" }}
              exit={{ opacity: 0, y: -10, scale: 0.98, height: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="absolute top-full left-6 right-6 mt-3 rounded-2xl border border-border bg-background/95 backdrop-blur-md shadow-lg md:hidden overflow-hidden origin-top"
            >
              <motion.nav
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.04, delayChildren: 0.02 },
                  },
                  closed: {
                    transition: { staggerChildren: 0.03, staggerDirection: -1 },
                  },
                }}
                className="flex flex-col py-2 text-sm font-medium text-muted-foreground"
              >
                {SECTIONS.map((section) => (
                  <motion.div
                    key={section.id}
                    variants={{
                      closed: { opacity: 0, x: -8 },
                      open: { opacity: 1, x: 0 },
                    }}
                  >
                    <Link
                      className="block px-4 py-3 hover:bg-muted hover:text-primary transition-colors"
                      href={`#${section.id}`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {section.title}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
