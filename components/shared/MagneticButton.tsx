'use client';

import { useRef, ReactNode, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export function MagneticButton({
  children,
  href,
  onClick,
  className = '',
  variant = 'primary',
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    const maxDistance = 100;

    if (distance < maxDistance) {
      const force = 1 - distance / maxDistance;
      setPosition({
        x: distanceX * force * 0.3,
        y: distanceY * force * 0.3,
      });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variantClasses = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
    outline: 'border border-primary text-primary hover:bg-primary/10',
  };

  const buttonContent = (
    <motion.div
      ref={ref}
      animate={position}
      transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`px-6 py-3 rounded-lg font-medium transition-smooth cursor-pointer ${variantClasses[variant]} ${className}`}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {buttonContent}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="border-none outline-none">
      {buttonContent}
    </button>
  );
}
