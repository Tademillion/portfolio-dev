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
  cycleInterval = 3200,
  typingSpeed = 50,
  deletingSpeed = 30,
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
    <span className="inline-flex items-center">
      <span className="text-primary font-heading font-extrabold">
        {displayedText}
      </span>
      <motion.span
        className="inline-block w-0.5 h-[0.9em] ml-1 bg-primary align-middle"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
      />
    </span>
  );
}
