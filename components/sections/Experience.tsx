"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../shared/SectionWrapper";
import { Briefcase, GraduationCap, CheckCircle2, Building2, Award } from "lucide-react";

const experiences = [
  {
    id: 1,
    type: "work",
    title: "Junior Application Developer",
    organization: "Amhara Bank SC",
    period: "2024 — Present",
    location: "Addis Ababa, Ethiopia",
    description:
      "Engineering, securing, and maintaining core banking and client-facing application services with strict adherence to data integrity, security standards, and high uptime.",
    highlights: [
      "Engineered resilient full-stack modules and responsive web interfaces for banking workflows",
      "Integrated secure RESTful microservices for high-volume inter-system communication",
      "Conducted database query optimization and index tuning on Microsoft SQL Server",
    ],
    icon: Building2,
  },
  {
    id: 2,
    type: "education",
    title: "BSc in Computer Science",
    organization: "Mekdela Amba University",
    period: "Graduated July 2023",
    location: "Ethiopia",
    description:
      "Rigorous academic study focusing on algorithmic complexity, database architecture, distributed systems, and modern software engineering paradigms.",
    highlights: [
      "Graduated with deep competency in full-stack architecture and object-oriented systems",
      "Built multi-tier database applications with security and transactional modeling",
      "Completed hands-on software engineering capstone projects with distinction",
    ],
    icon: GraduationCap,
  },
];

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground uppercase">
                Work <span className="font-serif italic font-normal text-primary lowercase">Experience</span>
              </h2>
              <p className="text-sm sm:text-base text-muted font-light leading-relaxed">
                Professional trajectory building reliable banking applications alongside comprehensive computer science foundations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3.5 pt-2">
              <div className="p-5 rounded-2xl border border-border/80 bg-card shadow-sm space-y-1">
                <p className="text-3xl font-extrabold font-serif italic text-primary">2+</p>
                <p className="text-xs text-foreground font-semibold">Years Experience</p>
                <p className="text-[11px] text-muted font-light">Enterprise Banking IT</p>
              </div>

              <div className="p-5 rounded-2xl border border-border/80 bg-card shadow-sm space-y-1">
                <p className="text-3xl font-extrabold font-serif italic text-foreground">6+</p>
                <p className="text-xs text-foreground font-semibold">Completed Systems</p>
                <p className="text-[11px] text-muted font-light">Full-Stack & Backend Services</p>
              </div>

              <div className="p-5 rounded-2xl border border-border/80 bg-card shadow-sm space-y-1">
                <p className="text-3xl font-extrabold font-serif italic text-primary">BSc</p>
                <p className="text-xs text-foreground font-semibold">Computer Science</p>
                <p className="text-[11px] text-muted font-light">Mekdela Amba University</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            {experiences.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 sm:p-7 rounded-3xl border border-border/80 bg-card shadow-sm hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all space-y-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-foreground">{item.title}</h3>
                        <p className="text-xs sm:text-sm font-semibold text-primary">{item.organization}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-muted">
                      <span className="px-3 py-1 rounded-full bg-muted/15 border border-border/60 font-medium">{item.period}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-muted leading-relaxed font-light">
                    {item.description}
                  </p>

                  <div className="space-y-2 pt-1">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-foreground/85 font-light">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
