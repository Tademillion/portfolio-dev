"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../shared/SectionWrapper";
import {
  Briefcase,
  GraduationCap,
  CheckCircle2,
  Building2,
  ShieldCheck,
  Server,
  Database,
  Workflow,
  Sparkles,
} from "lucide-react";

const engineeringStandards = [
  {
    title: "Mission-Critical Stability",
    desc: "Strict adherence to transaction integrity, ACID compliance, and zero-compromise uptime.",
    icon: ShieldCheck,
  },
  {
    title: "Enterprise Architecture",
    desc: "High-throughput REST microservices in .NET Core and Node.js with role-based security.",
    icon: Server,
  },
  {
    title: "Data & Query Optimization",
    desc: "Sub-second SQL Server queries, complex stored procedures, and scalable data schemas.",
    icon: Database,
  },
  {
    title: "Production Delivery",
    desc: "Modern TypeScript workflows, containerized environments, and clean multi-tier architecture.",
    icon: Workflow,
  },
];

const experiences = [
  {
    id: "amhara-bank-junior",
    type: "work",
    title: "Junior Software Developer",
    organization: "Amhara Bank SC",
    period: "2024 — Present",
    location: "Addis Ababa, Ethiopia",
    description:
      "Engineering, securing, and maintaining core banking applications and client-facing digital services with strict adherence to high security, transactional integrity, and system uptime.",
    highlights: [
      "Engineered resilient full-stack modules and responsive web interfaces for high-volume banking workflows",
      "Developed and integrated secure RESTful microservices in .NET Core for reliable inter-system communication",
      "Conducted database query optimization, index tuning, and schema architecture on Microsoft SQL Server",
      "Collaborated with cross-functional engineering teams adhering to enterprise compliance and audit protocols",
    ],
    tech: [".NET Core", "C#", "SQL Server", "REST APIs", "DevExpress", "Banking Security"],
    icon: Building2,
  },
  {
    id: "amhara-bank-trainee",
    type: "work",
    title: "IT Trainee",
    organization: "Amhara Bank SC",
    period: "2023 — 2024 ",
    location: "Addis Ababa, Ethiopia",
    description:
      "Completed intensive 1-year rotational IT and software training across banking operations, core systems administration, database management, and enterprise software engineering workflows.",
    highlights: [
      "Gained hands-on experience in core banking infrastructure, network operations, and system reliability",
      "Assisted in database management, SQL query troubleshooting, and transaction log auditing on SQL Server",
      "Collaborated with senior software developers on internal utilities, bug fixes, and deployment verification",
      "Mastered banking operational compliance, information security protocols, and enterprise SDLC standards",
    ],
    tech: ["Core Banking", "SQL Server", "IT Infrastructure", "System Operations", "Software Engineering"],
    icon: Briefcase,
  },
  {
    id: "mekdela-amba",
    type: "education",
    title: "BSc in Computer Science",
    organization: "Mekdela Amba University",
    period: "Graduated July 2023",
    location: "Ethiopia",
    description:
      "Rigorous academic study focusing on algorithmic complexity, database architecture, distributed systems, and modern software engineering paradigms.",
    highlights: [
      "Graduated with deep competency in full-stack architecture and object-oriented systems design",
      "Built multi-tier database applications with security and transactional modeling",
      "Completed hands-on software engineering capstone projects with highest academic standing",
    ],
    tech: [],
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Professional Trajectory</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground uppercase">
                Career & <span className="font-serif italic font-normal text-primary lowercase">Experience</span>
              </h2>
              <p className="text-sm sm:text-base text-muted font-light leading-relaxed">
                Proven track record in enterprise banking software engineering backed by strong computer science fundamentals.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <p className="text-xs uppercase font-semibold tracking-wider text-muted">
                Enterprise Engineering Standards
              </p>
              <div className="grid gap-3">
                {engineeringStandards.map((std, idx) => {
                  const Icon = std.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm shadow-sm flex items-start gap-3.5 hover:border-primary/40 hover:bg-card transition-all"
                    >
                      <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20 shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="font-bold text-xs sm:text-sm text-foreground">
                          {std.title}
                        </h4>
                        <p className="text-xs text-muted leading-relaxed font-light">
                          {std.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
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

                  {item.tech && item.tech.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/40">
                      {item.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/15 font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

