"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GitHubCalendar } from "react-github-calendar";

export function CommitsDashboard() {
  const [mounted, setMounted] = useState(false);
  const username = "Suhailaslamk";

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="github" className="w-full max-w-7xl mx-auto px-4 pt-8 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col items-center"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-green-600/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="flex flex-col sm:flex-row w-full items-center justify-between gap-4 mb-12 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            GitHub Activity
          </h2>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 text-sm text-neutral-300 hover:bg-white/10 hover:text-white transition-all group w-fit"
          >
            <span>View GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="relative z-10 w-full flex justify-center overflow-x-auto overflow-y-hidden pb-4">
          <div className="scale-110 transform origin-top">
            {mounted && (
              <GitHubCalendar 
                username={username} 
                colorScheme="dark"
                theme={{
                  light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                  dark: ['rgba(255,255,255,0.05)', '#0e4429', '#006d32', '#26a641', '#39d353'],
                }}
                style={{ color: '#a3a3a3' }}
              />
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
