"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CreativeLogoTM } from "../shared/CreativeLogoTM";
import { ThemeToggle } from "../shared/ThemeToggle";
import { FileText, User, FolderGit2, Briefcase, Wrench, MessageSquare } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home", icon: User },
  { label: "About", href: "#about", icon: User },
  { label: "Skills", href: "#skills", icon: Wrench },
  { label: "Projects", href: "#projects", icon: FolderGit2 },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Contact", href: "#contact", icon: MessageSquare },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/60 shadow-sm shadow-black/5"
            : "bg-transparent border-b border-transparent"
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex items-center justify-between">
            <Link
              href="#home"
              className="flex items-center gap-2 group focus:outline-none"
            >
              <CreativeLogoTM />
            </Link>

            <div className="hidden md:flex items-center gap-1.5 bg-card/60 backdrop-blur-md border border-border/60 rounded-full px-4 py-1.5 shadow-sm">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${isActive
                        ? "text-primary font-semibold"
                        : "text-muted hover:text-foreground"
                      }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavTab"
                        className="absolute inset-0 bg-primary/10 rounded-full border border-primary/20 -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            <div className="flex items-center gap-3">
              <a
                href="/tadeCv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-primary text-primary-foreground hover:opacity-90 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </a>

              <ThemeToggle />
            </div>
          </div>
        </nav>
      </motion.header>

      <nav className="md:hidden fixed bottom-3 left-4 right-4 z-50 p-2 rounded-2xl bg-card/90 backdrop-blur-xl border border-border/80 shadow-2xl">
        <div className="flex items-center justify-around">
          <a
            href="#about"
            className={`flex flex-col items-center gap-1 p-2 rounded-xl text-[10px] font-medium transition-colors ${activeSection === "about" ? "text-primary font-bold" : "text-muted"
              }`}
          >
            <User className="w-4 h-4" />
            <span>About</span>
          </a>

          <a
            href="#projects"
            className={`flex flex-col items-center gap-1 p-2 rounded-xl text-[10px] font-medium transition-colors ${activeSection === "projects" ? "text-primary font-bold" : "text-muted"
              }`}
          >
            <FolderGit2 className="w-4 h-4" />
            <span>Projects</span>
          </a>

          <a
            href="#contact"
            className="flex items-center justify-center -mt-6 w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 border-2 border-background"
            aria-label="Contact"
          >
            <MessageSquare className="w-5 h-5" />
          </a>

          <a
            href="#skills"
            className={`flex flex-col items-center gap-1 p-2 rounded-xl text-[10px] font-medium transition-colors ${activeSection === "skills" ? "text-primary font-bold" : "text-muted"
              }`}
          >
            <Wrench className="w-4 h-4" />
            <span>Skills</span>
          </a>

          <a
            href="#experience"
            className={`flex flex-col items-center gap-1 p-2 rounded-xl text-[10px] font-medium transition-colors ${activeSection === "experience" ? "text-primary font-bold" : "text-muted"
              }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>experience</span>
          </a>
        </div>
      </nav>
    </>
  );
}
