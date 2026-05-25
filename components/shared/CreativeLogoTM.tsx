"use client";

import { motion } from "framer-motion";

export function CreativeLogoTM() {
  return (
    <motion.div
      className="relative w-20 h-20 flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-primary/40"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 8, repeat: Infinity, ease: "linear" },
          scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      <svg viewBox="0 0 100 100" className="w-16 h-16 relative z-10">
        <motion.g
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <path
            d="M 25 15 L 75 15 M 50 15 L 50 60"
            stroke="url(#gradient1)"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />

          <path
            d="M 25 65 L 30 45 L 35 60 L 40 45 L 45 65"
            stroke="url(#gradient2)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />

          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00d9ff" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#00d9ff" />
            </linearGradient>
          </defs>
        </motion.g>

        <motion.circle
          cx="70"
          cy="25"
          r="3"
          fill="#00d9ff"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.circle
          cx="60"
          cy="75"
          r="3"
          fill="#8b5cf6"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
        />
      </svg>

      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-20 blur-xl" />
    </motion.div>
  );
}
