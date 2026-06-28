import Image from "next/image";
import heroImage from "@/assets/hero.png";
import { motion } from "framer-motion";
import { profileData } from "@/data/profile-data";
import {
  ArrowUpRightIcon,
  GitForkIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "lucide-react";

export function Hero() {
  return (
    <section
      id="about"
      className="pt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
    >
      {/* Left Column: Text Content */}
      <div className="space-y-6 md:col-span-7 order-2 md:order-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Available for technical collaboration
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground"
        >
          Hi, I'm{" "}
          <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-cyan-500">
            {profileData.name}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground font-mono"
        >
          {profileData.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-base text-muted-foreground max-w-2xl leading-relaxed"
        >
          {profileData.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="flex flex-wrap gap-3"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card text-xs text-muted-foreground">
            <MapPinIcon size={14} className="text-primary" />
            {profileData.location}
          </span>
          {profileData.willingToRelocate && (
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card text-xs text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Relocation: {profileData.willingToRelocate}
            </span>
          )}
          {profileData.phone && (
            <a
              href={`tel:${profileData.phone}`}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <PhoneIcon size={14} className="text-primary" />
              {profileData.phone}
            </a>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-4 pt-2"
        >
          <a
            href={`mailto:${profileData.email}`}
            className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-5 py-2.5 rounded-lg transition-all shadow-md dark:shadow-none"
          >
            <MailIcon size={18} /> Contact Me
          </a>
          <a
            href={profileData.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-card hover:bg-muted border border-border px-5 py-2.5 rounded-lg transition-all text-foreground shadow-sm dark:shadow-none"
          >
            <GitForkIcon size={18} /> GitHub Profile{" "}
            <ArrowUpRightIcon size={16} />
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
  );
}
