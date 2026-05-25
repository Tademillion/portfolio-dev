"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { AnimatedProfession } from "../shared/AnimatedProfession";
import { MagneticButton } from "../shared/MagneticButton";
import { ParticleBackground } from "../shared/ParticleBackground";

export function Hero() {
  const professions = [
    "Full Stack Developer",
    "API Integration Specialist",
    "ERP Developer",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const nameVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden scroll-mt-24"
    >
      <ParticleBackground />

      <motion.div
        className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 sm:px-8 lg:px-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid w-full gap-12 lg:grid-cols-[1.2fr_0.9fr] items-center">
          <div className="space-y-10 text-left">
            <motion.div
              variants={nameVariants}
              className="max-w-3xl space-y-6 mt-10"
            >
              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
                style={{
                  background:
                    "linear-gradient(90deg, #ffffff 0%, #00d9ff 50%, #ffffff 100%)",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                animate={{ backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut" as any,
                }}
              >
                Tadde Million
              </motion.h1>

              <motion.div
                className="flex items-center gap-3 mt-8"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  delay: 0.6,
                  duration: 0.8,
                  ease: "easeOut" as any,
                }}
                style={{ originX: 0.5 }}
              >
                <motion.div
                  className="h-px w-8 bg-gradient-to-r from-transparent to-primary"
                  animate={{ width: [8, 16, 8] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut" as any,
                  }}
                />
                <span className="text-xs sm:text-sm text-foreground/70 uppercase tracking-widest font-light">
                  Creative Developer
                </span>
                <motion.div
                  className="h-px w-8 bg-gradient-to-l from-transparent to-primary"
                  animate={{ width: [8, 16, 8] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.3,
                    ease: "easeInOut" as any,
                  }}
                />
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
                <span className="text-foreground/80">I am </span>
                <span className="text-primary font-bold">
                  <AnimatedProfession professions={professions} />
                </span>
              </div>

              <p className="max-w-2xl text-base sm:text-lg lg:text-xl text-foreground/85 leading-relaxed">
                I craft elegant digital experiences with full-stack development,
                scalable API design, and enterprise-grade systems. My work
                blends clarity, performance, and refined visual polish.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <MagneticButton
                  onClick={() => {
                    const element = document.getElementById("projects");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="
    group relative overflow-hidden
    px-8 py-4
    rounded-2xl
    bg-primary
    text-background
    font-medium tracking-wide
    shadow-[0_10px_40px_rgba(139,92,246,0.35)]
    border border-white/10
    transition-all duration-500
    hover:scale-[1.03]
    hover:shadow-[0_20px_60px_rgba(139,92,246,0.55)]
    hover:-translate-y-1
  "
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View My Work
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>

                  <div
                    className="
      absolute inset-0
      bg-gradient-to-r from-primary via-secondary to-primary
      opacity-0 group-hover:opacity-100
      transition-opacity duration-500
    "
                  />
                </MagneticButton>

                <MagneticButton
                  onClick={() => {
                    const element = document.getElementById("contact");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="
    group relative overflow-hidden
    px-8 py-4
    rounded-2xl
    bg-primary
    text-background
    font-medium tracking-wide
    shadow-[0_10px_40px_rgba(139,92,246,0.35)]
    border border-white/10
    transition-all duration-500
    hover:scale-[1.03]
    hover:shadow-[0_20px_60px_rgba(139,92,246,0.55)]
    hover:-translate-y-1
  "
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Let’s Talk
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </span>

                  <div
                    className="
      absolute inset-0
      bg-gradient-to-r from-primary/10 to-secondary/10
      opacity-0 group-hover:opacity-100
      transition duration-500
    "
                  />
                </MagneticButton>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-12 grid gap-6 sm:grid-cols-3"
            >
              {[
                { value: "2+", label: "Years Experience" },
                { value: "6+", label: "Projects Completed" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-border/60 bg-card/60 p-6 text-left"
                >
                  <motion.p
                    className="text-3xl sm:text-4xl font-bold text-primary mb-2"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut" as any,
                    }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-foreground/80 text-sm uppercase tracking-widest font-light">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="relative mx-auto max-w-xl"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 blur-3xl opacity-70" />
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-secondary/15 blur-3xl opacity-80" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-card/95 shadow-[0_40px_120px_rgba(0,217,255,0.16)]">
              <Image
                src="/img/developer.png"
                alt="Developer portrait"
                width={760}
                height={760}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
