import { profileData } from "@/data/profile-data";
import { motion, AnimatePresence } from "framer-motion";
import { LayersIcon, TerminalIcon } from "lucide-react";
import { useMemo, useState } from "react";
import type { SkillType } from "@/types";

type SkillFilter = SkillType | "All";

const SKILL_TYPES = [
  "All",
  "Frontend",
  "Backend",
  "DB",
  "CMS",
  "DevOps",
  "Blockchain",
] as const satisfies SkillFilter[];

export function Skills() {
  const [skillFilter, setSkillFilter] = useState<SkillFilter>("All");

  const filteredSkills = useMemo(() => {
    if (skillFilter === "All") return profileData.skills;
    return profileData.skills.filter((skill) => skill.type === skillFilter);
  }, [skillFilter]);

  return (
    <section id="skills" className="space-y-8 scroll-mt-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <LayersIcon
            className="text-emerald-600 dark:text-emerald-400"
            size={24}
          />
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            Core Competencies
          </h2>
        </div>
        <div className="flex bg-slate-200/70 dark:bg-slate-900 p-1 rounded-lg border border-slate-300/50 dark:border-slate-800 text-xs font-mono">
          {SKILL_TYPES.map((filter) => (
            <button
              key={filter}
              onClick={() => setSkillFilter(filter)}
              className={`px-3 py-1.5 rounded-md transition-all ${skillFilter === filter ? "bg-emerald-600 dark:bg-emerald-500 text-white dark:text-slate-950 font-bold" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"}`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              key={skill.name}
              className="flex items-center gap-2.5 p-3 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 transition-colors"
            >
              <TerminalIcon
                size={14}
                className="text-emerald-600 dark:text-emerald-500 shrink-0"
              />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
