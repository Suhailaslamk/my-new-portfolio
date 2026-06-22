"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const roles = ["Software Developer", ".NET", "React"];

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500); // Change role every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen w-full px-6 sm:px-12 overflow-hidden">
      {/* Name Animation - elegant fade and slight slide up */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center z-10"
      >
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground mb-4">
          Suhail Aslam K
        </h1>
      </motion.div>

      {/* Rotating Subtitles */}
      <div className="h-16 flex items-center justify-center z-10 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key={roleIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-2xl sm:text-3xl lg:text-4xl font-light text-muted-foreground tracking-wide"
          >
            {roles[roleIndex]}
          </motion.p>
        </AnimatePresence>
      </div>
      
      {/* Scroll down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 flex flex-col items-center gap-2 text-muted-foreground/50 z-10"
      >
        <span className="text-sm uppercase tracking-widest">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
