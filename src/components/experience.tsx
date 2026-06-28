import { BriefcaseIcon, CheckCircle2Icon, GlobeIcon } from "lucide-react";
import { profileData } from "@/data/profile-data";
import { useState } from "react";
import { motion } from "framer-motion";

export function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="space-y-8 scroll-mt-20">
      <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
        <BriefcaseIcon
          className="text-emerald-600 dark:text-emerald-400"
          size={24}
        />
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
          Professional Experience
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Tab Navigation Controls */}
        <div className="flex flex-wrap md:flex-col gap-2 pb-2 md:pb-0">
          {profileData.experiences.map((exp, idx) => (
            <button
              key={exp.company}
              onClick={() => setActiveTab(idx)}
              className={`whitespace-nowrap text-left px-4 py-3 rounded-xl text-sm font-mono tracking-tight border transition-all ${activeTab === idx ? "bg-emerald-600/10 dark:bg-emerald-500/10 border-emerald-600/30 dark:border-emerald-500/40 text-emerald-600 dark:text-emerald-400 font-bold" : "bg-transparent border-transparent text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-slate-200"}`}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Content Output */}
        <div className="md:col-span-3 min-h-75">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  {profileData.experiences[activeTab].role}{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">
                    @ {profileData.experiences[activeTab].company}
                  </span>
                </h3>
                {profileData.experiences[activeTab].website && (
                  <a
                    href={profileData.experiences[activeTab].website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 hover:opacity-80"
                  >
                    <GlobeIcon size={14} />
                    Company Website
                  </a>
                )}
              </div>
              <div className="flex justify-between items-center text-xs font-mono text-slate-400 dark:text-slate-500 mt-1">
                <span>{profileData.experiences[activeTab].duration}</span>
                <span>{profileData.experiences[activeTab].location}</span>
              </div>
            </div>

            {/* Highlights List */}
            <ul className="space-y-2.5">
              {profileData.experiences[activeTab].highlights.map(
                (highlight, hIdx) => (
                  <li
                    key={hIdx}
                    className="flex gap-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed"
                  >
                    <CheckCircle2Icon
                      size={16}
                      className="text-emerald-600/70 dark:text-emerald-500/70 shrink-0 mt-0.5"
                    />
                    <span>{highlight}</span>
                  </li>
                ),
              )}
            </ul>

            {/* 🎯 RENDERING PROFESSIONAL PROJECTS */}
            {profileData.experiences[activeTab].projects &&
              profileData.experiences[activeTab].projects!.length > 0 && (
                <div className="pt-4 space-y-4 border-t border-slate-200 dark:border-slate-800/80">
                  <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold">
                    Featured Production Deliveries
                  </h4>
                  <div className="space-y-4">
                    {profileData.experiences[activeTab].projects!.map(
                      (project, pIdx) => (
                        <div
                          key={pIdx}
                          className="p-4 rounded-xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800/60 space-y-2"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h5 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                              {project.name}
                            </h5>
                            <div className="flex flex-wrap gap-1.5">
                              {project.techStack.map((tech) => (
                                <span
                                  key={tech}
                                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700/50"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                            <strong className="text-slate-700 dark:text-slate-300">
                              Context:
                            </strong>{" "}
                            {project.description}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                            <strong className="text-slate-700 dark:text-slate-300">
                              Impact:
                            </strong>{" "}
                            {project.contribution}
                          </p>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
