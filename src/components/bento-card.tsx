"use client";

import { motion } from "framer-motion";

interface BentoCardProps {
  className?: string;
  delay?: number;
  children: React.ReactNode;
}

export function BentoCard({ className = "", delay = 0, children }: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
      }}
      whileHover={{ scale: 0.99, y: -2 }}
      className={`rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl ${className}`}
    >
      {children}
    </motion.div>
  );
}
