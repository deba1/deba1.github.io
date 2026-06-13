'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profileData } from '@/data/profile-data';
import { Terminal, Briefcase, BookOpen, Layers, Mail, GitBranch as Github, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState(0);
  const [skillFilter, setSkillFilter] = useState('All');

  // Dynamically group categories for user interaction
  const backendSkills = ["ASP.NET Core", "NestJS", "NodeJS", "MSSQL", "MySQL", "Postgres", "MongoDB"];
  const frontendSkills = ["TypeScript", "NextJS", "ReactJS", "Angular"];
  
  const filteredSkills = profileData.skills.filter(skill => {
    if (skillFilter === 'Backend') return backendSkills.includes(skill);
    if (skillFilter === 'Frontend') return frontendSkills.includes(skill);
    return true;
  });

  return (
    <div className="min-h-screen font-sans selection:bg-emerald-500 selection:text-slate-900">
      {/* HEADER NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-800/60">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono text-emerald-400 font-bold tracking-tight">&lt;{profileData.name.split(' ')[0].toLowerCase()} /&gt;</span>
          <nav className="flex gap-6 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
            <a href="#publications" className="hover:text-emerald-400 transition-colors">Research</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-32">
        {/* HERO SECTION */}
        <section id="about" className="pt-8 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for technical collaboration
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-100"
          >
            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500">{profileData.name}</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl font-mono"
          >
            {profileData.title}
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base text-slate-400 max-w-3xl leading-relaxed font-sans"
          >
            {profileData.summary}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a href={`mailto:${profileData.email}`} className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold px-5 py-2.5 rounded-lg transition-all transform hover:-translate-y-0.5 shadow-lg shadow-emerald-500/10">
              <Mail size={18} /> Contact Me
            </a>
            <a href={profileData.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 px-5 py-2.5 rounded-lg transition-all transform hover:-translate-y-0.5">
              <Github size={18} /> GitHub Profile <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </section>

        {/* SKILLS CANVAS SECTION */}
        <section id="skills" className="space-y-8 scroll-mt-20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <Layers className="text-emerald-400" size={24} />
              <h2 className="text-2xl font-bold text-slate-100">Core Competencies</h2>
            </div>
            <div className="flex bg-slate-900 p-1 rounded-lg border border-slate-800 text-xs font-mono">
              {['All', 'Backend', 'Frontend'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSkillFilter(filter)}
                  className={`px-3 py-1.5 rounded-md transition-all ${skillFilter === filter ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'}`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  key={skill}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  <Terminal size={14} className="text-emerald-500 shrink-0" />
                  <span className="text-sm font-medium text-slate-300">{skill}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* INTERACTIVE EXPERIENCE TIMELINE */}
        <section id="experience" className="space-y-8 scroll-mt-20">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <Briefcase className="text-emerald-400" size={24} />
            <h2 className="text-2xl font-bold text-slate-100">Professional Experience</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Sidebar Controls */}
            <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible gap-2 pb-2 md:pb-0">
              {profileData.experiences.map((exp, idx) => (
                <button
                  key={exp.company}
                  onClick={() => setActiveTab(idx)}
                  className={`whitespace-nowrap text-left px-4 py-3 rounded-xl text-sm font-mono tracking-tight border transition-all shrink-0 ${activeTab === idx ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400 font-bold' : 'bg-transparent border-transparent text-slate-400 hover:bg-slate-900 hover:text-slate-200'}`}
                >
                  {exp.company}
                </button>
              ))}
            </div>

            {/* Content Output */}
            <div className="md:col-span-3 min-h-[220px]">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div>
                  <h3 className="text-xl font-bold text-slate-100">
                    {profileData.experiences[activeTab].role}{' '}
                    <span className="text-emerald-400">@ {profileData.experiences[activeTab].company}</span>
                  </h3>
                  <div className="flex justify-between items-center text-xs font-mono text-slate-500 mt-1">
                    <span>{profileData.experiences[activeTab].duration}</span>
                    <span>{profileData.experiences[activeTab].location}</span>
                  </div>
                </div>
                <ul className="space-y-2.5 pt-2">
                  {profileData.experiences[activeTab].highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                      <CheckCircle2 size={16} className="text-emerald-500/70 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PUBLICATIONS & RESEARCH SECTION */}
        <section id="publications" className="space-y-8 scroll-mt-20">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <BookOpen className="text-emerald-400" size={24} />
            <h2 className="text-2xl font-bold text-slate-100">Publications & Peer-Reviewed Research</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {profileData.publications.map((pub, idx) => (
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                key={idx}
                className="flex flex-col justify-between p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/70 transition-all"
              >
                <div className="space-y-3">
                  <div className="p-2 w-fit rounded-lg bg-emerald-500/10 text-emerald-400">
                    <BookOpen size={16} />
                  </div>
                  <h3 className="text-base font-bold text-slate-200 line-clamp-3 leading-snug">
                    {pub.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pub.description}
                  </p>
                </div>
                {pub.link && (
                  <Link href={pub.link} className="pt-6 flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400 cursor-pointer hover:text-emerald-300">
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
      <footer className="border-t border-slate-900 mt-24 bg-slate-950/40">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <span>&copy; {new Date().getFullYear()} {profileData.name}. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}