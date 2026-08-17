"use client";

import { motion } from "framer-motion";

export function CreativeLogoTM() {
  return (
    <div className="flex items-center gap-2.5">
      <motion.div
        className="relative w-9 h-9 rounded-full bg-card border border-border/80 flex items-center justify-center shadow-sm overflow-hidden group cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="font-serif italic font-bold text-sm text-foreground group-hover:text-primary transition-colors">
          TM
        </span>
      </motion.div>

      <span className="font-medium text-sm tracking-tight text-foreground hidden sm:inline-block">
        Tadde <span className="font-serif italic font-normal text-primary">Million</span>
      </span>
    </div>
  );
}
