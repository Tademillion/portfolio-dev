"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: ReactNode;
  noPadding?: boolean;
}

export function SectionWrapper({
  id,
  className = "",
  children,
  noPadding = false,
}: SectionWrapperProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <motion.section
      id={id}
      className={`relative w-full scroll-mt-28 ${!noPadding ? "py-20 px-4 sm:px-6 lg:px-8" : ""} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.25 }}
      variants={containerVariants}
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_35%),linear-gradient(180deg,rgba(10,14,39,0.18),rgba(10,14,39,0.05))]" />
      </div>

      {children}
    </motion.section>
  );
}
