'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AnimatedProfessionProps {
  professions: string[];
  cycleInterval?: number;
  typingSpeed?: number;
  deletingSpeed?: number;
}

export function AnimatedProfession({
  professions,
  cycleInterval = 4000,
  typingSpeed = 60,
  deletingSpeed = 40,
}: AnimatedProfessionProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [professionIndex, setProfessionIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentProfession = professions[professionIndex];
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      if (displayedText.length === 0) {
        setIsDeleting(false);
        setProfessionIndex((prev) => (prev + 1) % professions.length);
      } else {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, deletingSpeed);
      }
    } else {
      if (displayedText.length === currentProfession.length) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, cycleInterval);
      } else {
        timeout = setTimeout(() => {
          setDisplayedText(currentProfession.slice(0, displayedText.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, professionIndex, professions, cycleInterval, typingSpeed, deletingSpeed]);

  return (
    <div className="flex items-center gap-3">
      <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent">
        {displayedText}
      </span>
      <motion.span
        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.7, repeat: Infinity }}
      >
        |
      </motion.span>
    </div>
  );
}
