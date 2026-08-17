"use client";

import { motion } from "framer-motion";

export function CreativeLogoTM() {
  return (
    <div className="flex items-center gap-2.5">
      <motion.div
        className="relative w-10 h-10 rounded-xl bg-card border border-border/80 flex items-center justify-center shadow-sm overflow-hidden group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="font-heading font-extrabold text-sm tracking-tight text-foreground group-hover:text-primary transition-colors">
          TM
        </span>
        <div className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
      </motion.div>

      <span className="font-heading font-bold text-base tracking-tight text-foreground hidden sm:inline-block">
        Tadde<span className="text-primary">.dev</span>
      </span>
    </div>
  );
}
