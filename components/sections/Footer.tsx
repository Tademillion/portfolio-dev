"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { FaTelegramPlane } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const footerLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.button
        className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-105 transition-all"
        initial={{ opacity: 0, scale: 0 }}
        animate={
          showScrollTop ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
        }
        whileTap={{ scale: 0.95 }}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>

      <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl">
        {" "}
        <motion.div
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <div className="grid md:grid-cols-3 gap-10">
            <motion.div variants={itemVariants} className="space-y-5">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2"> </h3>

                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                  Full-Stack Developer crafting beautiful and scalable web
                  applications.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <motion.a
                  href="https://github.com/Tademillion"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300"
                >
                  <Github size={18} />
                  <span className="text-sm">GitHub</span>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/tade-million/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300"
                >
                  <Linkedin size={18} />
                  <span className="text-sm">LinkedIn</span>
                </motion.a>

                <motion.a
                  href="https://t.me/AsresuM"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300"
                >
                  <FaTelegramPlane size={18} />
                  <span className="text-sm">Telegram</span>
                </motion.a>
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                Quick Links
              </h3>

              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                Get In Touch
              </h4>

              <a
                href="mailto:tedlamillionyou@gmail.com"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-300 mb-3"
              >
                tedlamillionyou@gmail.com
              </a>

              <p className="text-sm text-muted-foreground">
                Addis Ababa, Ethiopia
              </p>
            </motion.div>
          </div>
        </motion.div>
      </footer>
    </>
  );
}
