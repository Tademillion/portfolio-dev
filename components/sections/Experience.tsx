"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../shared/SectionWrapper";
import { History, Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    id: 1,
    type: "work",
    title: "Junior Application Developer",
    organization: "Amhara Bank SC",
    period: "2024 — Present",
    location: "Addis Ababa, Ethiopia",
    description:
      "Developing, securing, and maintaining core banking and client-facing application services with high emphasis on data integrity and performance.",
    highlights: [
      "Engineered resilient full-stack modules and client-facing web applications",
      "Integrated secure REST APIs and streamlined data flows between distributed services",
      "Collaborated with cross-functional engineering teams to implement scalable fintech solutions",
    ],
    icon: Briefcase,
  },
  {
    id: 2,
    type: "education",
    title: "Bachelor of Science in Computer Science",
    organization: "Mekdela Amba University",
    period: "Graduated July 2023",
    location: "Ethiopia",
    description:
      "Rigorous academic curriculum covering software engineering, data structures, algorithms, database architectures, and distributed systems.",
    highlights: [
      "Graduated with strong foundations in full-stack application development",
      "Built multi-tier web applications with database management and authentication",
      "Completed real-world capstone software engineering projects",
    ],
    icon: GraduationCap,
  },
];

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="max-w-4xl mx-auto space-y-14">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase bg-primary/10 text-primary border border-primary/25 mb-4">
            <History className="w-3.5 h-3.5" />
            <span>Career Milestones</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight text-foreground">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
            Professional journey in software development and foundational academic training.
          </p>
        </div>

        <div className="relative space-y-8 before:absolute before:inset-0 before:left-5 md:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-border/60">
          {experiences.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="absolute left-5 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-card border-2 border-primary flex items-center justify-center text-primary shadow-sm z-10">
                  <Icon className="w-4 h-4" />
                </div>

                <div className="w-full pl-14 md:pl-0 md:w-1/2 md:px-8">
                  <div className="p-6 sm:p-7 rounded-3xl border border-border/80 bg-card shadow-sm hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium tracking-wide uppercase bg-primary/10 text-primary border border-primary/25">
                        {item.type === "work" ? "Professional Role" : "Academic Degree"}
                      </span>

                      <div className="inline-flex items-center gap-1.5 text-xs font-mono text-muted">
                        <Calendar className="w-3.5 h-3.5 text-primary" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold font-heading text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm font-semibold text-primary mt-0.5">
                        {item.organization}
                      </p>
                      <div className="inline-flex items-center gap-1 text-xs text-muted mt-1">
                        <MapPin className="w-3 h-3" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    <p className="text-sm text-muted leading-relaxed">
                      {item.description}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-border/60">
                      {item.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-muted">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
