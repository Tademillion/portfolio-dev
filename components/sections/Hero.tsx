"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Mail, FileText, Github, Linkedin, Sparkles } from "lucide-react";
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
              <span>Software Developer and Api Integration Officer · Amhara Bank SC</span>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <p className="text-sm font-semibold tracking-widest uppercase text-muted">
                I AM
              </p>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-foreground uppercase">
                Tadde <span className="font-serif italic font-normal text-primary lowercase">Million</span>
              </h1>
              <h2 className="text-lg sm:text-xl font-bold tracking-tight text-foreground/90 uppercase">
                Full-Stack Developer & <span className="font-serif italic font-normal text-primary lowercase">Enterprise Systems Engineer</span>
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-muted leading-relaxed font-light max-w-xl"
            >
              Experienced Full-Stack Developer & Enterprise Systems Engineer proficient across a versatile technology stack, crafting scalable web applications, robust ERP platforms, and high-throughput backend systems. Adept at architecting mission-critical integrations across <strong className="font-medium text-foreground">major Ethiopian financial institutions</strong>, payment gateways, and enterprise services, backed by containerized Linux microservices and proactive problem resolution.
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
                href="/tademillioncv.pdf"
                download="Tadde_Million_CV.pdf"
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

      </motion.div>
    </section>
  );
}

