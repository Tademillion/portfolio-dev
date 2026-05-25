"use client";

import { motion } from "framer-motion";
import { AnimatedText } from "../shared/AnimatedText";
import { SectionWrapper } from "../shared/SectionWrapper";

export function About() {
  const competencies = [
    {
      title: "Full-Stack Development",
      description: "Building complete applications from frontend to backend",
      icon: "🚀",
    },
    {
      title: "API Architecture",
      description: "Designing scalable and robust REST APIs",
      icon: "⚙️",
    },
    {
      title: "Performance & Optimization",
      description: "Optimizing applications for speed and efficiency",
      icon: "⚡",
    },
    {
      title: "Creative Problem Solving",
      description: "Finding innovative solutions to complex challenges",
      icon: "💡",
    },
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const leftBottomVariants = {
    hidden: { opacity: 0, x: -80, y: 80 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const rightBottomVariants = {
    hidden: { opacity: 0, x: 80, y: 80 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <SectionWrapper id="about">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16 text-center"
          variants={itemVariants as any}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            <AnimatedText text="About Me" />
          </h2>
          <motion.div
            className="h-1 w-16 bg-gradient-to-r from-primary to-secondary mx-auto mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.div variants={itemVariants as any}>
            <p className="text-lg text-muted leading-relaxed mb-6">
              I'm a{" "}
              <span className="text-primary font-semibold">
                Full-Stack Developer
              </span>{" "}
              based in{" "}
              <span className="text-secondary">Addis Ababa, Ethiopia</span>,
              with a passion for creating beautiful and functional web
              applications.
            </p>
            <p className="text-lg text-muted leading-relaxed mb-6">
              With 2+ years of professional experience and 5+ completed
              projects, I've worked with modern technologies and best practices
              to deliver scalable solutions. I hold a BSc in Computer Science
              from Mekdela Amba University and am currently a Junior Application
              Developer at Amhara Bank SC.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open source, or diving deeper into the world of
              creative problem-solving.
            </p>
          </motion.div>
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.div
              className="p-6 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-all shadow-lg"
              variants={itemVariants as any}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px rgba(0, 217, 255, 0.15)",
              }}
            >
              <h3 className="text-primary font-semibold mb-2">Education</h3>
              <p className="text-foreground font-medium">
                BSc Computer Science
              </p>
              <p className="text-muted text-sm">
                Mekdela Amba University (July 2023)
              </p>
            </motion.div>

            <motion.div
              className="p-6 rounded-lg bg-card border border-border/50 hover:border-secondary/50 transition-all shadow-lg"
              variants={itemVariants as any}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px rgba(255, 107, 53, 0.15)",
              }}
            >
              <h3 className="text-secondary font-semibold mb-2">
                Current Role
              </h3>
              <p className="text-foreground font-medium">
                Junior Application Developer
              </p>
              <p className="text-muted text-sm">
                Amhara Bank SC (2024-Present)
              </p>
            </motion.div>

            <motion.div
              className="p-6 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30"
              variants={itemVariants as any}
              whileHover={{ y: -5 }}
            ></motion.div>
          </motion.div>
        </motion.div>

        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Core Competencies
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {competencies.map((comp, index) => {
              const isEven = index % 2 === 0;
              const variants = isEven
                ? leftBottomVariants
                : rightBottomVariants;

              return (
                <motion.div
                  key={index}
                  className="p-6 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 group cursor-pointer shadow-lg"
                  variants={variants as any}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, margin: "0px 0px -100px 0px" }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    y: -8,
                    borderColor: "rgb(0, 217, 255)",
                    boxShadow: "0 10px 30px rgba(0, 217, 255, 0.1)",
                  }}
                >
                  <motion.p
                    className="text-4xl mb-4"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {comp.icon}
                  </motion.p>
                  <h4 className="text-foreground font-semibold mb-2">
                    {comp.title}
                  </h4>
                  <p className="text-muted text-sm">{comp.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
