"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Mail, FileText, Github, Linkedin, ShieldCheck, Layers, Database, Sparkles } from "lucide-react";
import { FaTelegramPlane } from "react-icons/fa";

export function Hero() {
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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[88vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[340px] bg-gradient-to-tr from-primary/15 via-sky-500/10 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />

      <motion.div
        className="max-w-5xl mx-auto w-full space-y-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-14">
          <div className="space-y-5 text-center md:text-left flex-1">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Junior Software Developer · Amhara Bank SC</span>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <p className="text-sm font-semibold tracking-widest uppercase text-muted">
                I AM
              </p>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-foreground uppercase">
                Tadde <span className="font-serif italic font-normal text-primary lowercase">Million</span>
              </h1>
              <h2 className="text-lg sm:text-xl font-bold tracking-tight text-foreground/90 uppercase">
                Full-Stack Developer & <span className="font-serif italic font-normal text-primary lowercase">Banking Systems Engineer</span>
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-muted leading-relaxed font-light max-w-xl"
            >
              Versatile Full-Stack Software Developer engineering secure banking applications, high-performance .NET backend microservices, and modern Next.js web applications with zero-compromise reliability.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-1"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-foreground text-background dark:bg-primary dark:text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-lg shadow-black/5 dark:shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail className="w-4 h-4" />
                <span>Get In Touch</span>
              </a>

              <a
                href="/tadeCv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileText className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center md:justify-start gap-5 pt-2 text-muted"
            >
              <a
                href="https://t.me/AsresuM"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="hover:text-primary transition-colors p-1"
              >
                <FaTelegramPlane className="w-5 h-5" />
              </a>

              <a
                href="https://github.com/Tademillion"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-primary transition-colors p-1"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/tade-million/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-primary transition-colors p-1"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="mailto:tedlamillionyou@gmail.com"
                aria-label="Email"
                className="hover:text-primary transition-colors p-1"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="relative shrink-0 flex items-center justify-center"
          >
            <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-3xl overflow-hidden border-2 border-primary/40 shadow-2xl shadow-primary/15 bg-card/80 backdrop-blur-sm p-1.5 ring-1 ring-primary/20">
              <div className="relative w-full h-full rounded-[20px] overflow-hidden">
                <Image
                  src="/img/developer.png"
                  alt="Tadde Million"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="grid sm:grid-cols-3 gap-4 pt-6 border-t border-border/60"
        >
          <div className="p-4 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm hover:border-primary/40 transition-colors flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20 shrink-0 mt-0.5">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="space-y-0.5">
              <h4 className="font-bold text-xs sm:text-sm text-foreground">Enterprise Banking Core</h4>
              <p className="text-[11px] sm:text-xs text-muted leading-relaxed font-light">Transactional integrity & mission-critical security.</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm hover:border-primary/40 transition-colors flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20 shrink-0 mt-0.5">
              <Layers className="w-4 h-4" />
            </div>
            <div className="space-y-0.5">
              <h4 className="font-bold text-xs sm:text-sm text-foreground">Modern Full-Stack Web</h4>
              <p className="text-[11px] sm:text-xs text-muted leading-relaxed font-light">High-performance Next.js, React & TypeScript toolchains.</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm hover:border-primary/40 transition-colors flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20 shrink-0 mt-0.5">
              <Database className="w-4 h-4" />
            </div>
            <div className="space-y-0.5">
              <h4 className="font-bold text-xs sm:text-sm text-foreground">Scalable APIs & SQL Server</h4>
              <p className="text-[11px] sm:text-xs text-muted leading-relaxed font-light">Optimized .NET microservices & relational data models.</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

