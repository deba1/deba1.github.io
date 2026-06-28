"use client";

import { motion } from "framer-motion";
import { profileData } from "@/data/profile-data";
import { BookOpen, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Footer } from "./footer";
import { useTheme } from "@/hooks/useTheme";
import { Header } from "./header";
import { Hero } from "./hero";
import { Skills } from "./skills";
import { Experience } from "./experience";

export default function Portfolio() {
  const { theme } = useTheme();

  return (
    // 🎯 Dynamically inject the mode class wrapper to explicitly override system settings when requested
    <div className={theme ?? ""}>
      <div className="min-h-screen font-sans selection:bg-emerald-500 selection:text-slate-900 bg-slate-50 text-slate-900 dark:bg-[#0b0f19] dark:text-slate-100 transition-colors duration-300">
        {/* HEADER NAVBAR */}
        <Header />

        <main className="max-w-5xl mx-auto px-6 py-12 space-y-32">
          {/* HERO SECTION */}
          <Hero />

          {/* SKILLS CANVAS SECTION */}
          <Skills />

          {/* INTERACTIVE EXPERIENCE TIMELINE */}
          <Experience />

          {/* PUBLICATIONS SECTION */}
          <section id="publications" className="space-y-8 scroll-mt-20">
            <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
              <BookOpen
                className="text-emerald-600 dark:text-emerald-400"
                size={24}
              />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                Publications & Research
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {profileData.publications.map((pub, idx) => (
                <motion.div
                  whileHover={{ y: -4 }}
                  key={idx}
                  className="flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900/70 transition-all shadow-sm dark:shadow-none"
                >
                  <div className="space-y-3">
                    <div className="p-2 w-fit rounded-lg bg-emerald-600/10 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <BookOpen size={16} />
                    </div>
                    <h3 className="text-base font-bold text-slate-800 dark:text-slate-200 line-clamp-3 leading-snug">
                      {pub.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {pub.description}
                    </p>
                  </div>
                  {pub.link && (
                    <Link
                      href={pub.link}
                      className="pt-6 flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400 cursor-pointer hover:text-emerald-300"
                    >
                      <span>Read Paper</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <Footer />
      </div>
    </div>
  );
}
