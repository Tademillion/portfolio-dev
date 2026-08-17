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
            className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/25 cursor-pointer focus:outline-none"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <footer className="border-t border-border/80 bg-card/60 backdrop-blur-xl transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5 space-y-4">
              <CreativeLogoTM />
              <p className="text-sm text-muted leading-relaxed max-w-sm">
                Full-Stack & Enterprise Software Developer specializing in high-performance web applications, scalable backend architectures, and secure digital products.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://github.com/Tademillion"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="w-9 h-9 rounded-xl border border-border/80 bg-card hover:border-primary/50 text-muted hover:text-primary flex items-center justify-center transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href="https://www.linkedin.com/in/tade-million/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-9 h-9 rounded-xl border border-border/80 bg-card hover:border-primary/50 text-muted hover:text-primary flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href="https://t.me/AsresuM"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram Profile"
                  className="w-9 h-9 rounded-xl border border-border/80 bg-card hover:border-primary/50 text-muted hover:text-primary flex items-center justify-center transition-colors"
                >
                  <FaTelegramPlane className="w-4 h-4" />
                </a>

                <a
                  href="mailto:tedlamillionyou@gmail.com"
                  aria-label="Email Tadde"
                  className="w-9 h-9 rounded-xl border border-border/80 bg-card hover:border-primary/50 text-muted hover:text-primary flex items-center justify-center transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="md:col-span-3 space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
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

            <div className="md:col-span-4 space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
                Contact Details
              </h4>
              <p className="text-xs text-muted">
                Available for engineering contracts, full-time opportunities, and freelance projects.
              </p>
              <a
                href="mailto:tedlamillionyou@gmail.com"
                className="block text-xs font-medium text-primary hover:underline"
              >
                tedlamillionyou@gmail.com
              </a>
              <p className="text-xs text-muted">
                Addis Ababa, Ethiopia
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs font-mono text-muted">
              © {currentYear} Tadde Million. Built with precision and Next.js.
            </p>
            <div className="flex items-center gap-4 text-xs font-mono text-muted">
              <span>Next.js 16</span>
              <span>•</span>
              <span>Tailwind CSS</span>
              <span>•</span>
              <span>TypeScript</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
