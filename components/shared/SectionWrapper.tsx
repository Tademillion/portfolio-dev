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
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.section
      id={id}
      className={`relative w-full scroll-mt-24 ${!noPadding ? "py-24 sm:py-28 px-4 sm:px-6 lg:px-8" : ""} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {children}
    </motion.section>
  );
}

