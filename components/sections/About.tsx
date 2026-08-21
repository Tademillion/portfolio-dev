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
    title: "B2B Integrations & Payment Gateways",
    desc: "Architecting and securing inter-institutional financial communication pipelines (ESL, Ethiopian Airlines, NBE, SantimPay, ) with WSO2 API Manager & Micro Integrator.",
    icon: Network,
  },
  {
    title: "System Monitoring & Problem Management",
    desc: "Conducting continuous application monitoring, architecture reviews, optimization, incident handling, and detailed Root Cause Analysis (RCA) to maintain high availability.",
    icon: Activity,
  },
  {
    title: "DevOps & Containerization",
    desc: "Implementing Docker containerization on Linux OS, streamlining deployment processes, and collaborating with cross-functional technical teams for rapid issue resolution.",
    icon: Container,
  },
  {
    title: "Full-Stack Software Engineering",
    desc: "Engineering resilient web applications and microservices in .NET Core, Next.js, and TypeScript with clean database modeling on SQL Server and strong attention to detail.",
    icon: Code2,
  },
];

const operationalPillars = [
  {
    title: "Monitoring, Incident Handling & RCA",
    desc: "Performing proactive 24/7 system and application telemetry monitoring, architecture reviews, performance tuning, and thorough root cause analysis for complete problem management.",
  },
  {
    title: "Product Design, Testing &  Roadmap",
    desc: "Participating actively in the end-to-end design, rigorous testing, and deployment of new products, core upgrades, and  / payment system roadmap milestones.",
  },
  {
    title: "DevOps Processes & Technical Collaboration",
    desc: "Deploying containerized microservices via Docker across Linux production hosts while collaborating closely with internal and external partner teams for rapid incident resolution.",
  },
  {
    title: "Knowledge Base & Service Improvement",
    desc: "Maintaining comprehensive technical knowledge bases, compiling accurate system performance reports, and driving continuous service improvements aligned with strict availability SLAs.",
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
            A detail-oriented software developer and enterprise integration engineer dedicated to solving complex problems, ensuring high availability, and delivering mission-critical financial systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 space-y-6">
            <div className="p-7 sm:p-8 rounded-3xl border border-border/80 bg-card shadow-sm space-y-4 text-muted leading-relaxed font-light text-base">
              <p className="text-foreground font-medium text-lg">
                I am a Full-Stack Software Developer & Enterprise Systems Engineer based in Addis Ababa, Ethiopia, with over 2 years of hands-on experience in enterprise banking systems, B2B financial integrations, and scalable full-stack applications.
              </p>
              <p>
                Currently serving as a <span className="text-foreground font-medium">Junior Software Developer at Amhara Bank SC</span> (following a foundational year as an <span className="text-foreground font-medium">IT Trainee</span>), I approach software engineering with <span className="text-foreground font-medium">meticulous attention to detail</span> and an analytical mindset focused on understanding and resolving deep technical bottlenecks.
              </p>
              <p>
                My expertise spans designing, testing, and deploying mission-critical services (including <span className="text-foreground font-medium"> roadmap delivery</span>, <span className="text-foreground font-medium">ESL</span>, <span className="text-foreground font-medium">Ethiopian Airlines</span>, <span className="text-foreground font-medium">NBE</span>, and <span className="text-foreground font-medium">SantimPay</span>), executing architecture reviews, incident management, detailed root cause analysis (RCA), and containerized microservice deployments across <span className="text-foreground font-medium">Linux OS</span> and <span className="text-foreground font-medium">Docker</span>.
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


