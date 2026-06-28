import { profileData } from "@/data/profile-data";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-900 mt-24 bg-white/40 dark:bg-slate-950/40">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400 dark:text-slate-500">
        <span>
          &copy; {new Date().getFullYear()} {profileData.name}. All rights
          reserved.
        </span>
      </div>
    </footer>
  );
}
