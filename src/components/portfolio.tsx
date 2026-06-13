'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profileData } from '@/data/profile-data';
import { Terminal, Briefcase, BookOpen, Layers, Mail, GitBranch as Github, ArrowUpRight, CheckCircle2, SunIcon, MoonIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import heroImage from "@/assets/hero.png";

export default function Portfolio() {
    const [activeTab, setActiveTab] = useState(0);
    const [skillFilter, setSkillFilter] = useState('All');

    // 🌓 Theme State: null means "use system preference default"
    const [theme, setTheme] = useState<'light' | 'dark' | null>(null);

    // Detect system preference change in real-time just to adjust the button icon seamlessly
    const [isSystemDark, setIsSystemDark] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setIsSystemDark(mediaQuery.matches);

        const handler = (e: MediaQueryListEvent) => setIsSystemDark(e.matches);
        mediaQuery.addEventListener('change', handler);
        return () => mediaQuery.removeEventListener('change', handler);
    }, []);

    const toggleTheme = () => {
        if (theme === null) {
            // If currently on system default, switch to the opposite of system default
            setTheme(isSystemDark ? 'light' : 'dark');
        } else if (theme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    };

    // Determine current active visual state
    const currentMode = theme !== null ? theme : (isSystemDark ? 'dark' : 'light');

    const backendSkills = ["ASP.NET Core", "NestJS", "NodeJS", "MSSQL", "MySQL", "Postgres", "MongoDB"];
    const frontendSkills = ["TypeScript", "NextJS", "ReactJS", "Angular"];

    const filteredSkills = profileData.skills.filter(skill => {
        if (skillFilter === 'Backend') return backendSkills.includes(skill);
        if (skillFilter === 'Frontend') return frontendSkills.includes(skill);
        return true;
    });

    return (
        // 🎯 Dynamically inject the mode class wrapper to explicitly override system settings when requested
        <div className={theme ?? ''}>
            <div className="min-h-screen font-sans selection:bg-emerald-500 selection:text-slate-900 bg-slate-50 text-slate-900 dark:bg-[#0b0f19] dark:text-slate-100 transition-colors duration-300">

                {/* HEADER NAVBAR */}
                <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800/60 transition-colors">
                    <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                        <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold tracking-tight">&lt;{profileData.name.split(' ')[0].toLowerCase()} /&gt;</span>

                        <div className="flex items-center gap-6">
                            <nav className="flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
                                <a href="#about" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">About</a>
                                <a href="#skills" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Skills</a>
                                <a href="#experience" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Experience</a>
                                <a href="#publications" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Research</a>
                            </nav>

                            {/* 🌗 THEME TOGGLE BUTTON */}
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-xl bg-slate-200/60 dark:bg-slate-900/60 border border-slate-300/50 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-all"
                                title={theme === null ? "System Default Active" : `${theme} mode forced`}
                            >
                                {currentMode === 'dark' ? <SunIcon size={18} /> : <MoonIcon size={18} />}
                            </button>
                        </div>
                    </div>
                </header>

                <main className="max-w-5xl mx-auto px-6 py-12 space-y-32">
                    {/* HERO SECTION */}
                    <section id="about" className="pt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                        {/* Left Column: Text Content */}
                        <div className="space-y-6 md:col-span-7 order-2 md:order-1">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-600/10 dark:bg-emerald-500/10 border border-emerald-600/20 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-mono"
                            >
                                <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                                Available for technical collaboration
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100"
                            >
                                Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-500">{profileData.name}</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-mono"
                            >
                                {profileData.title}
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed"
                            >
                                {profileData.summary}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="flex flex-wrap gap-4 pt-2"
                            >
                                <a href={`mailto:${profileData.email}`} className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white dark:text-slate-950 font-semibold px-5 py-2.5 rounded-lg transition-all shadow-md dark:shadow-none">
                                    <Mail size={18} /> Contact Me
                                </a>
                                <a href={profileData.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-800 px-5 py-2.5 rounded-lg transition-all text-slate-700 dark:text-slate-300 shadow-sm dark:shadow-none">
                                    <Github size={18} /> GitHub Profile <ArrowUpRight size={16} />
                                </a>
                            </motion.div>
                        </div>

                        {/* Right Column: Hero Image Frame */}
                        <motion.div 
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="md:col-span-5 order-1 md:order-2 flex justify-center md:justify-end"
  >
    <div className="relative w-72 h-72 md:w-80 md:h-80 bg-transparent">
      <Image 
        src={heroImage} 
        alt={profileData.name}
        className="w-full h-full object-cover filter contrast-[1.01] brightness-[0.98]"
        loading="eager"
      />
    </div>
  </motion.div>
                    </section>

                    {/* SKILLS CANVAS SECTION */}
                    <section id="skills" className="space-y-8 scroll-mt-20">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
                            <div className="flex items-center gap-3">
                                <Layers className="text-emerald-600 dark:text-emerald-400" size={24} />
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Core Competencies</h2>
                            </div>
                            <div className="flex bg-slate-200/70 dark:bg-slate-900 p-1 rounded-lg border border-slate-300/50 dark:border-slate-800 text-xs font-mono">
                                {['All', 'Backend', 'Frontend'].map((filter) => (
                                    <button
                                        key={filter}
                                        onClick={() => setSkillFilter(filter)}
                                        className={`px-3 py-1.5 rounded-md transition-all ${skillFilter === filter ? 'bg-emerald-600 dark:bg-emerald-500 text-white dark:text-slate-950 font-bold' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'}`}
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
                                        key={skill}
                                        className="flex items-center gap-2.5 p-3 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 transition-colors"
                                    >
                                        <Terminal size={14} className="text-emerald-600 dark:text-emerald-500 shrink-0" />
                                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{skill}</span>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    </section>

                    {/* INTERACTIVE EXPERIENCE TIMELINE */}
                    <section id="experience" className="space-y-8 scroll-mt-20">
                        <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
                            <Briefcase className="text-emerald-600 dark:text-emerald-400" size={24} />
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Professional Experience</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible gap-2 pb-2 md:pb-0">
                                {profileData.experiences.map((exp, idx) => (
                                    <button
                                        key={exp.company}
                                        onClick={() => setActiveTab(idx)}
                                        className={`whitespace-nowrap text-left px-4 py-3 rounded-xl text-sm font-mono tracking-tight border transition-all shrink-0 ${activeTab === idx ? 'bg-emerald-600/10 dark:bg-emerald-500/10 border-emerald-600/30 dark:border-emerald-500/40 text-emerald-600 dark:text-emerald-400 font-bold' : 'bg-transparent border-transparent text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-slate-200'}`}
                                    >
                                        {exp.company}
                                    </button>
                                ))}
                            </div>

                            <div className="md:col-span-3 min-h-[220px]">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="space-y-4"
                                >
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                                            {profileData.experiences[activeTab].role}{' '}
                                            <span className="text-emerald-600 dark:text-emerald-400">@ {profileData.experiences[activeTab].company}</span>
                                        </h3>
                                        <div className="flex justify-between items-center text-xs font-mono text-slate-400 dark:text-slate-500 mt-1">
                                            <span>{profileData.experiences[activeTab].duration}</span>
                                            <span>{profileData.experiences[activeTab].location}</span>
                                        </div>
                                    </div>
                                    <ul className="space-y-2.5 pt-2">
                                        {profileData.experiences[activeTab].highlights.map((highlight, hIdx) => (
                                            <li key={hIdx} className="flex gap-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                                <CheckCircle2 size={16} className="text-emerald-600/70 dark:text-emerald-500/70 shrink-0 mt-0.5" />
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    {/* PUBLICATIONS SECTION */}
                    <section id="publications" className="space-y-8 scroll-mt-20">
                        <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
                            <BookOpen className="text-emerald-600 dark:text-emerald-400" size={24} />
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Publications & Research</h2>
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
                <footer className="border-t border-slate-200 dark:border-slate-900 mt-24 bg-white/40 dark:bg-slate-950/40">
                    <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400 dark:text-slate-500">
                        <span>&copy; {new Date().getFullYear()} {profileData.name}. All rights reserved.</span>
                    </div>
                </footer>
            </div>
        </div>
    );
}