import { profileData } from "@/data/profile-data";
import { motion } from "framer-motion";
import { AwardIcon, BadgeCheckIcon, GraduationCapIcon } from "lucide-react";

export function Credentials() {
  return (
    <section id="credentials" className="space-y-8 scroll-mt-20">
      <div className="flex items-center gap-3 border-b border-border pb-4">
        <BadgeCheckIcon className="text-primary" size={24} />
        <h2 className="text-2xl font-bold text-foreground">Credentials</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          whileHover={{ y: -4 }}
          className="p-6 rounded-2xl bg-card text-card-foreground border border-border shadow-sm dark:shadow-none space-y-4"
        >
          <div className="flex items-center gap-2.5">
            <GraduationCapIcon className="text-primary" size={18} />
            <h3 className="text-lg font-semibold">Education</h3>
          </div>

          <div className="space-y-3">
            {profileData.education.map((education) => (
              <div
                key={`${education.institution}-${education.degree}`}
                className="space-y-1.5 rounded-xl border border-border/70 bg-muted/30 p-4"
              >
                <p className="font-semibold text-foreground">
                  {education.degree}
                </p>
                <p className="text-sm text-muted-foreground">
                  {education.institution}
                </p>
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs font-mono text-muted-foreground">
                  <span>{education.location}</span>
                  <span>{education.duration}</span>
                </div>
                {education.achievements &&
                  education.achievements.length > 0 && (
                    <ul className="pt-2 space-y-1.5">
                      {education.achievements.map((achievement) => (
                        <li
                          key={`${education.institution}-${achievement}`}
                          className="text-sm text-muted-foreground leading-relaxed"
                        >
                          • {achievement}
                        </li>
                      ))}
                    </ul>
                  )}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          className="p-6 rounded-2xl bg-card text-card-foreground border border-border shadow-sm dark:shadow-none space-y-4"
        >
          <div className="flex items-center gap-2.5">
            <AwardIcon className="text-primary" size={18} />
            <h3 className="text-lg font-semibold">Awards</h3>
          </div>

          <div className="space-y-3">
            {profileData.awards.map((award) => (
              <div
                key={`${award.title}-${award.date}`}
                className="rounded-xl border border-border/70 bg-muted/30 p-4 space-y-1.5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-semibold text-foreground">{award.title}</p>
                  <span className="text-xs font-mono text-muted-foreground">
                    {award.date}
                  </span>
                </div>
                {award.issuer && (
                  <p className="text-sm text-muted-foreground">
                    {award.issuer}
                  </p>
                )}
                <p className="text-sm text-muted-foreground">
                  {award.description}
                </p>
                {award.link && (
                  <a
                    href={award.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-xs font-mono font-bold text-primary hover:opacity-80"
                  >
                    View details
                  </a>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          className="p-6 rounded-2xl bg-card text-card-foreground border border-border shadow-sm dark:shadow-none space-y-4"
        >
          <div className="flex items-center gap-2.5">
            <BadgeCheckIcon className="text-primary" size={18} />
            <h3 className="text-lg font-semibold">Certifications</h3>
          </div>

          <div className="space-y-3">
            {profileData.certifications.map((certification) => (
              <div
                key={`${certification.name}-${certification.issuer}`}
                className="rounded-xl border border-border/70 bg-muted/30 p-4 space-y-2"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-semibold text-foreground">
                    {certification.name}
                  </p>
                  <span className="text-xs font-mono text-muted-foreground">
                    {certification.duration}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {certification.issuer}
                </p>
                {certification.link && (
                  <a
                    href={certification.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-xs font-mono font-bold text-primary hover:opacity-80"
                  >
                    View credential
                  </a>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
