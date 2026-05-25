"use client";

import { motion } from "framer-motion";
import { AnimatedText } from "../shared/AnimatedText";
import { SectionWrapper } from "../shared/SectionWrapper";

const experiences = [
  {
    id: 1,
    type: "work",
    title: "Junior Application Developer",
    company: "Amhara Bank SC",
    period: "2024 - Present",
    location: "Addis Ababa, Ethiopia",
    description:
      "Developing and maintaining banking applications with focus on security and performance.",
    highlights: [
      "Developed and maintained full-stack features for client-facing applications",
      "Integrated REST APIs and improved system communication between services",
      "Worked closely with clients and teams to deliver stable, usable solutions",
    ],
    icon: "💼",
  },
  {
    id: 2,
    type: "education",
    title: "BSc Computer Science",
    company: "Mekdela Amba University",
    period: "Graduated July 2023",
    location: "Addis Ababa, Ethiopia",
    description:
      "Strong foundation in computer science with focus on software engineering and web development.",
    highlights: [
      "Ensured smooth client-side system usage with focus on UX and reliability",
      "Integrated RESTful APIs and external services into scalable applications",
      "Developed and deployed full-stack features used in real-world projects",
    ],
    icon: "🎓",
  },
];

export function Experience() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
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
    <SectionWrapper id="experience">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="mb-16 text-center"
          variants={itemVariants as any}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            <AnimatedText text="Experience & Education" />
          </h2>
          <motion.div
            className="h-1 w-16 bg-gradient-to-r from-primary to-secondary mx-auto mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => {
            const isEven = index % 2 === 0;
            const variants = isEven ? leftBottomVariants : rightBottomVariants;

            return (
              <motion.div
                key={experience.id}
                variants={variants as any}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "0px 0px -100px 0px" }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="flex items-start gap-6">
                  <div className="flex flex-col items-center">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-card border-2 border-primary flex items-center justify-center text-xl flex-shrink-0"
                      whileHover={{ scale: 1.2 }}
                      transition={{
                        type: "spring",
                        damping: 15,
                        stiffness: 300,
                      }}
                    >
                      {experience.icon}
                    </motion.div>
                    {index !== experiences.length - 1 && (
                      <motion.div
                        className="w-1 bg-gradient-to-b from-primary to-transparent"
                        style={{ height: "120px" }}
                        initial={{ height: 0 }}
                        whileInView={{ height: "120px" }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: false }}
                      />
                    )}
                  </div>

                  <motion.div
                    className="flex-1 pt-2 pb-8"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", damping: 20, stiffness: 300 }}
                  >
                    <div className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-smooth">
                      <div className="mb-4">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-xl font-bold text-foreground">
                              {experience.title}
                            </h3>
                            <p className="text-primary font-semibold">
                              {experience.company}
                            </p>
                          </div>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              experience.type === "work"
                                ? "bg-primary/20 text-primary"
                                : "bg-secondary/20 text-secondary"
                            }`}
                          >
                            {experience.type === "work" ? "Work" : "Education"}
                          </span>
                        </div>
                        <p className="text-muted text-sm">
                          {experience.location}
                        </p>
                      </div>

                      <p className="text-muted text-sm font-medium mb-3">
                        {experience.period}
                      </p>

                      <p className="text-muted leading-relaxed mb-4">
                        {experience.description}
                      </p>

                      <ul className="space-y-2">
                        {experience.highlights.map((highlight, idx) => (
                          <motion.li
                            key={idx}
                            className="flex items-start gap-3 text-muted text-sm"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: false }}
                          >
                            <span className="text-primary mt-1">✓</span>
                            <span>{highlight}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
        <motion.div
          className="mt-16 p-8 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-center"
          variants={itemVariants as any}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <p className="text-foreground leading-relaxed">
            With a strong educational foundation and growing professional
            experience, I'm committed to continuous learning and delivering
            high-quality software solutions.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
