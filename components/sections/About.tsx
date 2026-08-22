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
    desc: "Engineering end-to-end web applications, microservices, and reactive UIs in Next.js, React, TypeScript, and .NET Core with clean database architectures and modular code.",
    icon: Code2,
  },
  {
    title: "Enterprise ERP & Business Systems",
    desc: "Developing multi-module ERP platforms including HR & payroll, multi-warehouse stock inventory, fiscal budget forecasting, and workflow automation with strict transactional safety.",
    icon: Database,
  },
  {
    title: "B2B Fintech & Gateway Integrations",
    desc: "Architecting and securing inter-institutional financial communication pipelines (ESL, Ethiopian Airlines, NBE, SantimPay) with WSO2 API Manager, Micro Integrator & mTLS.",
    icon: Network,
  },
  {
    title: "DevOps, Incident RCA & Reliability",
    desc: "Deploying Docker containerized microservices on Linux OS, performing architecture reviews, incident management, and deep Root Cause Analysis (RCA) to uphold strict availability SLAs.",
    icon: Container,
  },
];

const operationalPillars = [
  {
    title: "Scalable Full-Stack & ERP Standards",
    desc: "Writing maintainable, type-safe code across Next.js and .NET Core, implementing normalized database schemas, and building enterprise business logic with zero data loss tolerance.",
  },
  {
    title: "Incident Handling & Root Cause Analysis (RCA)",
    desc: "Conducting proactive 24/7 telemetry monitoring, architecture reviews, performance tuning, and structured root cause analyses (RCA) for complete problem lifecycle management.",
  },
  {
    title: "Product Design, Testing & Roadmap Delivery",
    desc: "Participating actively in the end-to-end design, rigorous unit/integration testing, and deployment of mission-critical services, core upgrades, and payment roadmap milestones.",
  },
  {
    title: "Linux DevOps & Continuous Improvement",
    desc: "Deploying containerized microservices via Docker on Linux production hosts, maintaining comprehensive technical knowledge bases, and driving continuous service improvements.",
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
                I am a Full-Stack Software Developer & Enterprise Systems Engineer with over 2 years of experience architecting scalable web applications, enterprise ERP solutions, and high-volume fintech gateways.
              </p>
              <p>
                Currently at <span className="text-foreground font-medium">Amhara Bank SC</span>, I engineer and integrate core banking services with key enterprise partners—including <span className="text-foreground font-medium">Ethiopian Airlines</span>, <span className="text-foreground font-medium">ESL</span>, <span className="text-foreground font-medium">National Bank of Ethiopia (NBE)</span>, and <span className="text-foreground font-medium">SantimPay</span>—to ensure seamless, secure financial communication and real-time transaction settlement between institutions.
              </p>
              <p>
                My expertise spans full-stack ERP engineering (.NET Core, Next.js, SQL Server), payment roadmap delivery, architecture reviews, proactive incident management, and detailed Root Cause Analysis (RCA)—backed by containerized microservice deployments on <span className="text-foreground font-medium">Linux OS</span> and <span className="text-foreground font-medium">Docker</span>.
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


