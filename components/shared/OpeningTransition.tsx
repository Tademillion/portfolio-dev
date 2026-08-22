"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function OpeningTransition() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if session has already seen the intro
    const hasSeenIntro = sessionStorage.getItem("hasSeenPortfolioIntro");
    if (hasSeenIntro) {
      setLoading(false);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            sessionStorage.setItem("hasSeenPortfolioIntro", "true");
          }, 350);
          return 100;
        }
        // Smoothly accelerate then decelerate to 100%
        const increment = Math.max(3, Math.floor((100 - prev) / 5));
        return Math.min(100, prev + increment);
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="opening-curtain"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#07090e] text-white select-none overflow-hidden"
        >
          {/* Ambient background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/10 blur-[140px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center space-y-6 px-6 max-w-md w-full">
            {/* Animated Monogram Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-20 h-20 rounded-2xl bg-[#0d111a] border border-sky-500/30 flex items-center justify-center shadow-2xl shadow-sky-500/20"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-500/20 to-transparent opacity-50" />
              <span className="font-serif italic font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-sky-400">
                TM
              </span>
            </motion.div>

            {/* Name & Title */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="space-y-1.5"
            >
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-widest uppercase text-white">
                Tadde <span className="font-serif italic font-normal text-sky-400 lowercase">Million</span>
              </h2>
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-slate-400 font-medium">
                Full-Stack & Banking Systems
              </p>
            </motion.div>

            {/* Progress Bar & Percentage */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="w-full max-w-[220px] space-y-2.5 pt-2"
            >
              <div className="w-full h-1 rounded-full bg-slate-800/80 overflow-hidden border border-slate-700/40">
                <motion.div
                  className="h-full bg-gradient-to-r from-sky-500 to-cyan-400 rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>

              <div className="flex justify-between items-center text-[11px] font-mono text-slate-400">
                <span className="tracking-wider text-slate-500">Loading ...</span>
                <span className="text-sky-400 font-semibold">{progress}%</span>
              </div>
            </motion.div>
          </div>

          {/* Bottom subtle brand note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="absolute bottom-8 text-[11px] uppercase tracking-widest text-slate-600 font-medium"
          >
            Engineering Portfolio
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
