"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { AnimatedProfession } from "../shared/AnimatedProfession";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";

export function Hero() {
  const professions = [
    "Full-Stack Developer",
    "Enterprise Software Engineer",
    "API & Backend Specialist",
    "React & Next.js Architect",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <motion.div
        className="relative z-10 max-w-7xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 space-y-8 text-left">
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/25 bg-primary/10 text-primary text-xs font-mono tracking-wider uppercase backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 animate-spin text-primary" style={{ animationDuration: '6s' }} />
                <span>Full-Stack & Enterprise Developer</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading tracking-tight leading-[1.08] text-foreground">
                Hi, I'm <span className="gradient-text">Tadde Million</span>
              </h1>

              <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted font-heading min-h-[44px] flex items-center">
                <span className="text-foreground/80 mr-2.5">Crafting</span>
                <AnimatedProfession professions={professions} />
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-muted max-w-2xl leading-relaxed font-normal"
            >
              Junior Application Developer at <span className="text-foreground font-semibold">Amhara Bank SC</span> with a BSc in Computer Science. Specialized in building high-performance web applications, resilient enterprise systems, and scalable REST APIs with clean architecture.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-primary text-primary-foreground hover:opacity-90 shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-card border border-border/80 text-foreground hover:border-primary/50 hover:bg-card/80 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail className="w-4 h-4 text-primary" />
                <span>Contact Me</span>
              </a>

              <a
                href="/tadeCv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-muted hover:text-foreground transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-4 border-t border-border/60 max-w-lg"
            >
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold font-heading text-primary">
                  2+
                </p>
                <p className="text-xs text-muted font-mono uppercase tracking-wider mt-0.5">
                  Years Exp.
                </p>
              </div>

              <div>
                <p className="text-2xl sm:text-3xl font-extrabold font-heading text-foreground">
                  6+
                </p>
                <p className="text-xs text-muted font-mono uppercase tracking-wider mt-0.5">
                  Live Systems
                </p>
              </div>

              <div>
                <p className="text-2xl sm:text-3xl font-extrabold font-heading text-primary">
                  BSc
                </p>
                <p className="text-xs text-muted font-mono uppercase tracking-wider mt-0.5">
                  Comp. Science
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 via-transparent to-primary/10 rounded-3xl blur-2xl -z-10" />

              <div className="relative rounded-3xl overflow-hidden border border-border/80 bg-card shadow-2xl p-2.5">
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-muted/20">
                  <Image
                    src="/img/developer.png"
                    alt="Tadde Million portrait"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                    </span>
                    <span className="text-xs font-medium text-foreground">
                      Available for projects
                    </span>
                  </div>

                  <span className="text-xs font-mono text-muted">
                    Addis Ababa, ET
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
