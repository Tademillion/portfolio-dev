"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../shared/SectionWrapper";
import { User, GraduationCap, Briefcase, Cpu, ShieldCheck, Zap, Lightbulb } from "lucide-react";

const competencies = [
  {
    title: "Full-Stack Development",
    description: "Building responsive, end-to-end web applications with Next.js, React, and Node.js.",
    icon: Cpu,
  },
  {
    title: "Enterprise Architecture",
    description: "Engineering scalable backend systems with .NET Core, SQL Server, and microservices.",
    icon: ShieldCheck,
  },
  {
    title: "API Design & Integration",
    description: "Designing secure, high-throughput RESTful APIs and reliable 3rd-party integrations.",
    icon: Zap,
  },
  {
    title: "Problem Solving",
    description: "Translating complex banking and business requirements into clean, maintainable software.",
    icon: Lightbulb,
  },
];

export function About() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase bg-primary/10 text-primary border border-primary/25 mb-4">
            <User className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight text-foreground">
            Driven by <span className="gradient-text">Engineering Quality</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
            A software developer dedicated to engineering dependable enterprise solutions and intuitive digital products.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-7 space-y-5 text-muted leading-relaxed">
            <p className="text-base sm:text-lg text-foreground font-medium">
              I am a Full-Stack Software Developer based in Addis Ababa, Ethiopia, combining strong academic foundations with production experience in banking and enterprise environments.
            </p>
            <p className="text-sm sm:text-base">
              Currently working as a <span className="text-foreground font-semibold">Junior Application Developer at Amhara Bank SC</span>, I contribute to building and scaling mission-critical applications that prioritize security, data integrity, and high performance.
            </p>
            <p className="text-sm sm:text-base">
              My technical focus spans the full stack: from modern React and Next.js interfaces to robust .NET Core and Node.js backend services, coupled with efficient SQL Server and MongoDB data modeling.
            </p>
          </div>

          <div className="md:col-span-5 space-y-4">
            <div className="p-5 rounded-2xl border border-border/80 bg-card shadow-sm hover:border-primary/40 transition-colors space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-foreground">
                    Current Position
                  </h3>
                  <p className="text-xs font-mono text-primary font-medium">
                    Amhara Bank SC (2024 - Present)
                  </p>
                </div>
              </div>
              <p className="text-xs text-muted leading-relaxed pt-1">
                Junior Application Developer — developing, securing, and maintaining core banking and client-facing platforms.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-border/80 bg-card shadow-sm hover:border-primary/40 transition-colors space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-foreground">
                    BSc Computer Science
                  </h3>
                  <p className="text-xs font-mono text-primary font-medium">
                    Mekdela Amba University (Graduated July 2023)
                  </p>
                </div>
              </div>
              <p className="text-xs text-muted leading-relaxed pt-1">
                Comprehensive study in software engineering principles, algorithms, distributed systems, and database systems.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8 pt-4">
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-center text-foreground">
            Core Competencies
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {competencies.map((comp, index) => {
              const Icon = comp.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="p-6 rounded-2xl border border-border/80 bg-card shadow-sm hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading font-bold text-base text-foreground">
                    {comp.title}
                  </h4>
                  <p className="text-xs text-muted leading-relaxed">
                    {comp.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
