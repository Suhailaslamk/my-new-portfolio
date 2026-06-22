"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
      root.classList.add("light");
    } else {
      root.classList.remove("light");
      root.classList.add("dark");
    }
  }, [theme]);

  return (
    <div className="flex bg-black/50 rounded-full p-1 border border-white/10 w-full max-w-[200px] relative">
      <button
        onClick={() => setTheme("dark")}
        className={`flex-1 flex items-center justify-center py-2 rounded-full transition-all text-sm font-medium ${
          theme === "dark"
            ? "bg-white/20 text-white shadow-sm"
            : "text-neutral-400 hover:text-white"
        }`}
      >
        <Moon className="w-4 h-4 mr-2" /> Dark
      </button>
      <button
        onClick={() => setTheme("light")}
        className={`flex-1 flex items-center justify-center py-2 rounded-full transition-all text-sm font-medium ${
          theme === "light"
            ? "bg-white text-black shadow-sm"
            : "text-neutral-400 hover:text-white"
        }`}
      >
        <Sun className="w-4 h-4 mr-2" /> Light
      </button>
    </div>
  );
}
