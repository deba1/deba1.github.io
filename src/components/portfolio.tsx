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
    <div className={theme ?? ""}>
      <div className="min-h-screen font-sans selection:bg-primary selection:text-primary-foreground bg-background text-foreground transition-colors duration-300">
        <Header />

        <main className="max-w-5xl mx-auto px-6 py-12 space-y-32">
          <Hero />

          <Skills />

          <Experience />

          <section id="publications" className="space-y-8 scroll-mt-20">
            <div className="flex items-center gap-3 border-b border-border pb-4">
              <BookOpen className="text-primary" size={24} />
              <h2 className="text-2xl font-bold text-foreground">
                Publications & Research
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {profileData.publications.map((pub, idx) => (
                <motion.div
                  whileHover={{ y: -4 }}
                  key={idx}
                  className="flex flex-col justify-between p-6 rounded-2xl bg-card text-card-foreground border border-border hover:border-foreground/30 hover:bg-muted transition-all shadow-sm dark:shadow-none"
                >
                  <div className="space-y-3">
                    <div className="p-2 w-fit rounded-lg bg-primary/10 text-primary">
                      <BookOpen size={16} />
                    </div>
                    <h3 className="text-base font-bold text-foreground line-clamp-3 leading-snug">
                      {pub.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {pub.description}
                    </p>
                  </div>
                  {pub.link && (
                    <Link
                      href={pub.link}
                      className="pt-6 flex items-center gap-1.5 text-xs font-mono font-bold text-primary cursor-pointer hover:opacity-80"
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
