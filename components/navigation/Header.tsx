"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { CreativeLogoTM } from "../shared/CreativeLogoTM";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="#home" className="transition-transform hover:scale-110">
            <CreativeLogoTM />
          </Link>

          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-smooth text-sm font-medium"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <motion.div
          className="md:hidden mt-4 space-y-2"
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, height: 0 },
            visible: {
              opacity: 1,
              height: "auto",
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="block px-4 py-2 text-foreground hover:text-primary transition-smooth text-sm font-medium"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>
      </nav>
    </motion.header>
  );
}
