"use client";

import { motion } from "framer-motion";

export function CreativeLogoTM() {
  return (
    <div className="flex items-center gap-2.5 group cursor-pointer">
      <motion.div
        className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-card border border-border/80 group-hover:border-primary/50 flex items-center justify-center shadow-sm shadow-black/5 dark:shadow-primary/10 overflow-hidden transition-all duration-300"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className="font-serif italic font-bold text-base sm:text-lg text-foreground group-hover:text-primary transition-colors tracking-tight select-none">
          TM
        </span>
      </motion.div>

      <div className="flex flex-col leading-tight">
        <span className="font-semibold text-sm tracking-tight text-foreground group-hover:text-primary transition-colors">
          Tadde <span className="font-serif italic font-normal text-primary">Million</span>
        </span>
        <span className="text-[10px] text-muted tracking-wider uppercase font-medium">
          Software Dev
        </span>
      </div>
    </div>
  );
}

