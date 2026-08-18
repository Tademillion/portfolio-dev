"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../shared/SectionWrapper";
import { Briefcase, GraduationCap, Code2, Database, Shield, Zap, Sparkles } from "lucide-react";

const disciplines = [
  {
    title: "Full-Stack Development",
    desc: "Crafting end-to-end web applications with Next.js, React, and modern TypeScript toolchains.",
    icon: Code2,
  },
  {
    title: "Enterprise Backend Systems",
    desc: "Designing reliable RESTful APIs, business logic layers, and microservices in .NET Core and Node.js.",
    icon: Shield,
  },
  {
    title: "Database Engineering",
    desc: "Structuring relational databases and document stores with Microsoft SQL Server and MongoDB.",
    icon: Database,
  },
  {
    title: "Performance & Reliability",
    desc: "Optimizing queries, load times, and state management for zero-compromise production stability.",
    icon: Zap,
  },
];

export function About() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile & Disciplines</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground uppercase">
            About <span className="font-serif italic font-normal text-primary lowercase">Me</span>
          </h2>
          <p className="text-sm sm:text-base text-muted max-w-lg font-light">
            A software developer dedicated to building reliable, high-performance digital solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 space-y-6">
            <div className="p-7 sm:p-8 rounded-3xl border border-border/80 bg-card shadow-sm space-y-4 text-muted leading-relaxed font-light text-base">
              <p className="text-foreground font-medium text-lg">
                I am a Full-Stack Software Developer based in Addis Ababa, Ethiopia, with over 2 years of hands-on experience spanning enterprise banking systems and modern full-stack development.
              </p>
              <p>
                Currently serving as a <span className="text-foreground font-medium">Junior Software Developer at Amhara Bank SC</span> (following a first year as an <span className="text-foreground font-medium">IT Trainee</span>), I engineer and maintain mission-critical applications that demand high security, transactional integrity, and seamless performance.
              </p>
              <p>
                I hold a <span className="text-foreground font-medium">BSc in Computer Science from Mekdela Amba University</span> (July 2023). My work bridges solid computer science fundamentals with modern developer workflows across .NET Core, Next.js, TypeScript, SQL Server, and cloud ecosystems.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl border border-border/80 bg-card shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <Briefcase className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Enterprise Experience</span>
                </div>
                <h4 className="font-bold text-sm text-foreground">Amhara Bank SC</h4>
                <p className="text-xs text-muted font-light leading-relaxed">
                  Junior Software Developer (2+ Years Career)
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-border/80 bg-card shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <GraduationCap className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Education</span>
                </div>
                <h4 className="font-bold text-sm text-foreground">BSc Computer Science</h4>
                <p className="text-xs text-muted font-light leading-relaxed">
                  Mekdela Amba University (Graduated 2023)
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
            {disciplines.map((d, idx) => {
              const Icon = d.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl border border-border/80 bg-card shadow-sm hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all space-y-3"
                >
                  <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm text-foreground">
                    {d.title}
                  </h4>
                  <p className="text-xs text-muted leading-relaxed font-light">
                    {d.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
