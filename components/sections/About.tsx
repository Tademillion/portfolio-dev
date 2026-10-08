"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../shared/SectionWrapper";
import {
  Briefcase,
  GraduationCap,
  Code2,
  Database,
  Shield,
  Zap,
  Sparkles,
  Network,
  Container,
  Activity,
  CheckCircle2,
  SearchCode,
  FileCheck,
} from "lucide-react";

const disciplines = [
  {
    title: "Scalable Full-Stack Engineering",
    desc: "Engineering end-to-end web applications, microservices, and reactive UIs in Next.js, React, Node.js, and .NET Core with clean database architectures and modular code.",
    icon: Code2,
  },
  {
    title: "Enterprise ERP & Business Systems",
    desc: "Developing multi-module enterprise systems including HR & leave platforms, multi-warehouse stock inventory, judicial court fee accounting, and workflow automation with strict transactional safety.",
    icon: Database,
  },
  {
    title: "Fintech & Enterprise Integrations",
    desc: "Architecting and securing mission-critical financial and non-financial communication pipelines between prominent institutions with WSO2 API Manager, Micro Integrator & mTLS.",
    icon: Network,
  },
  {
    title: "DevOps, Linux & Cloud Reliability",
    desc: "Deploying Docker containerized microservices on Linux environments, orchestrating reverse proxies, and maintaining CI/CD deployment pipelines to guarantee maximum uptime.",
    icon: Container,
  },
];

const operationalPillars = [
  {
    title: "Scalable Full-Stack Engineering & Clean Code",
    desc: "Developing responsive, type-safe web applications and modular backends across Next.js, React, Node.js, Express, and .NET Core with normalized databases, reusable architecture, and zero data loss tolerance.",
  },
  {
    title: "Enterprise System & Gateway Integrations",
    desc: "Architecting secure, high-throughput integration pipelines between core banking and prominent financial and non-financial institutions, with real-time webhook validation, automated settlement reconciliations, and robust mTLS security.",
  },
  {
    title: "Architectural Design, Testing & Roadmap Execution",
    desc: "Driving end-to-end software lifecycles through modular system design, comprehensive unit and integration testing, and rigorous architecture reviews to deliver mission-critical platforms with high velocity and precision.",
  },
  {
    title: "Linux DevOps, Containerization & High Availability",
    desc: "Deploying containerized microservices via Docker on enterprise Linux hosts, configuring reverse proxies, and establishing resilient deployment pipelines to ensure uninterrupted 99.9%+ system availability.",
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
          <p className="text-sm sm:text-base text-muted max-w-xl font-light">
            A versatile Full-Stack Software Developer & Enterprise Systems Engineer with solid experience in scalable web applications, enterprise ERP systems, and mission-critical fintech integrations.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 space-y-6">
            <div className="p-7 sm:p-8 rounded-3xl border border-border/80 bg-card shadow-sm space-y-4 text-muted leading-relaxed font-light text-base">
              <p className="text-foreground font-medium text-lg">
                I am a Full-Stack Software Developer & Enterprise Systems Engineer specializing in architecting modern web applications, scalable enterprise systems, and high-volume integration pipelines.
              </p>
              <p>
                Currently at <span className="text-foreground font-medium">Amhara Bank SC</span>, I engineer and integrate core banking services with prominent financial and non-financial institutions across Ethiopia. My work bridges disparate enterprise platforms by delivering high-throughput, secure API gateways, real-time webhook processing, automated transaction settlements, and rigorous data consistency.
              </p>
              <p>
                Beyond system integrations, I build end-to-end full-stack applications across multiple programming languages and tech stacks—pairing responsive, performant user interfaces in <span className="text-foreground font-medium">Next.js & React</span> with robust backend microservices in <span className="text-foreground font-medium">.NET Core, Node.js & Express</span>. My database engineering spans both relational and non-relational databases, including <span className="text-foreground font-medium">SQL Server, MySQL, and MongoDB</span>, ensuring high transactional integrity, flexible data models, and disciplined architectural standards.
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
                  Software Developer and Api Integration Officer (2+ Years Career)
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

        {/* Operational & Engineering Standards Callout */}
        <div className="p-6 sm:p-8 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-card to-card space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/60 pb-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Operational Excellence & Reliability Standards
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-foreground">
                How I Solve Problems & Maintain High-Availability Systems
              </h3>
            </div>
            <span className="text-[11px] px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 font-medium self-start sm:self-auto">
              SLA & Target Driven
            </span>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {operationalPillars.map((pillar, idx) => (
              <div key={idx} className="space-y-1.5 p-4 rounded-2xl bg-card border border-border/70">
                <div className="flex items-center gap-2 text-foreground font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>{pillar.title}</span>
                </div>
                <p className="text-xs text-muted leading-relaxed font-light pl-6">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}


