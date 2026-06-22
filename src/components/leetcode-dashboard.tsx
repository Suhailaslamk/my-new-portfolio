"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";

interface LeetCodeData {
  data: {
    matchedUser: {
      submitStats: {
        acSubmissionNum: { difficulty: string; count: number }[];
      };
    };
  };
}

export function LeetCodeDashboard() {
  const [data, setData] = useState<LeetCodeData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/leetcode")
      .then((r) => r.json())
      .then((d) => {
        if (!d.error) setData(d);
      })
      .finally(() => setLoading(false));
  }, []);

  const stats = data?.data?.matchedUser?.submitStats?.acSubmissionNum ?? [];
  const allSolved = stats.find((s) => s.difficulty === "All")?.count ?? 0;

  return (
    <section id="leetcode" className="w-full max-w-7xl mx-auto px-4 pb-28">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto group hover:bg-white/10 transition-colors"
      >
        {/* Ambient glows */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-500/8 rounded-full blur-[100px] pointer-events-none group-hover:bg-yellow-500/10 transition-colors" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-orange-500/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="flex items-center gap-6 relative z-10">
          <div className="bg-yellow-500/20 p-4 rounded-2xl border border-yellow-500/30">
            <Code2 className="w-8 h-8 text-yellow-400" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight mb-1">
              LeetCode
            </h2>
            <div className="text-neutral-400 text-sm">
              <span className="text-white font-bold text-xl mr-2">
                {loading ? "—" : allSolved}
              </span>
              problems solved
            </div>
          </div>
        </div>


      </motion.div>
    </section>
  );
}
