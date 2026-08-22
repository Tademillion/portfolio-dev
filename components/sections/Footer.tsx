"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { FaTelegramPlane } from "react-icons/fa";
import { CreativeLogoTM } from "../shared/CreativeLogoTM";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-foreground text-background dark:bg-primary dark:text-primary-foreground flex items-center justify-center shadow-lg shadow-black/10 dark:shadow-primary/20 cursor-pointer focus:outline-none"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <footer className="border-t border-border/80 bg-card/60 backdrop-blur-xl transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-6 space-y-4">
              <CreativeLogoTM />
              <p className="text-sm text-muted leading-relaxed max-w-sm font-light">
                Full-Stack Software Developer & Enterprise Systems Engineer building scalable web applications, robust ERPs, and high-availability fintech integrations.
              </p>
              <div className="flex items-center gap-2 pt-1">
                <a
                  href="https://github.com/Tademillion"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-9 h-9 rounded-full border border-border/80 bg-card hover:border-primary/50 text-muted hover:text-primary flex items-center justify-center transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href="https://www.linkedin.com/in/tade-million/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full border border-border/80 bg-card hover:border-primary/50 text-muted hover:text-primary flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href="https://t.me/AsresuM"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  className="w-9 h-9 rounded-full border border-border/80 bg-card hover:border-primary/50 text-muted hover:text-primary flex items-center justify-center transition-colors"
                >
                  <FaTelegramPlane className="w-4 h-4" />
                </a>

                <a
                  href="mailto:tedlamillionyou@gmail.com"
                  aria-label="Email"
                  className="w-9 h-9 rounded-full border border-border/80 bg-card hover:border-primary/50 text-muted hover:text-primary flex items-center justify-center transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="md:col-span-3 space-y-3">
              <h4 className="text-xs uppercase font-semibold tracking-wider text-foreground">
                Navigation
              </h4>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-xs text-muted hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3 space-y-3">
              <h4 className="text-xs uppercase font-semibold tracking-wider text-foreground">
                Contact
              </h4>
              <a
                href="mailto:tedlamillionyou@gmail.com"
                className="block text-xs text-primary hover:underline"
              >
                tedlamillionyou@gmail.com
              </a>
              <p className="text-xs text-muted font-light">
                Addis Ababa, Ethiopia
              </p>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted font-light">
            <p>
              © {currentYear} Tadde Million. Built with precision.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
