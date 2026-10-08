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
  Network,
  Container,
  Quote,
  UserCheck,
  Award,
} from "lucide-react";

const engineeringStandards = [
  {
    title: "Scalable Full-Stack & ERP Systems",
    desc: "Developing enterprise web applications, ERP modules, and microservices in .NET Core, Next.js, and TypeScript with transactional safety.",
    icon: Server,
  },
  {
    title: "Fintech & Enterprise Gateways",
    desc: "Deploying high-throughput API gateways and mediation pipelines connecting prominent financial and non-financial institutions across Ethiopia.",
    icon: Network,
  },
  {
    title: "System Architecture & Performance Tuning",
    desc: "Architecting fault-tolerant, low-latency enterprise backends, conducting comprehensive technical reviews, and ensuring 99.9%+ high-availability SLAs.",
    icon: ShieldCheck,
  },
  {
    title: "DevOps & Production Deployments",
    desc: "Implementing Docker microservices on Linux OS, streamlining CI/CD processes, and delivering flexible, automated deployment workflows.",
    icon: Container,
  },
];

const experiences = [
  {
    id: "amhara-bank-junior",
    type: "work",
    title: "Software Developer and Api Integration Officer",
    organization: "Amhara Bank SC",
    period: "March 2024 – Present",
    location: "Addis Ababa, Ethiopia",
    description:
      "Engineering scalable full-stack applications, enterprise ERP/banking utilities, and mission-critical fintech integrations across Linux and Windows production environments.",
    highlights: [
      "Designed, tested, and deployed enterprise API integrations connecting Amhara Bank to ESL, SantimPay (School Pay), Boost Company PLC (House Rent), Telebirr, Ethswitch, and Le Wedaje using Node.js, Express, and secure REST middleware",
      "Engineered resilient full-stack applications and enterprise ERP modules in .NET Core, C#, Next.js, and TypeScript with transactional schema modeling on SQL Server",
      "Engineered high-availability system topologies, conducted architecture reviews, optimized database queries and throughput, and ensured 99.9%+ availability for mission-critical core banking services",
      "Deployed containerized applications with Docker across Linux OS production servers, collaborating across partner teams for rapid issue resolution",
      "Participated actively in core system upgrades, digital banking product releases, and automated deployment pipelines",
      "Authored comprehensive technical documentation, performance reports, and continuous service improvement plans",
    ],
    tech: ["Full-Stack Development", "Node.js & Express Middleware", "FinTech & Payment Gateways", "Enterprise ERPs", ".NET Core", "Next.js", "TypeScript", "ESL & SantimPay", "Ethswitch & Telebirr", "Linux OS", "Docker", "SQL Server", "System Architecture & High Availability", "REST APIs & Webhooks"],
    icon: Building2,
  },
  {
    id: "amhara-bank-trainee",
    type: "work",
    title: "IT Trainee",
    organization: "Amhara Bank SC",
    period: "Feb 2024 – March 2024",
    location: "Addis Ababa, Ethiopia",
    description:
      "Completed intensive rotational IT and software training across banking operations, Linux/Windows systems administration, database management, and enterprise software engineering workflows.",
    highlights: [
      "Gained hands-on proficiency in Linux and Windows server administration, enterprise networking, and banking systems operations",
      "Assisted in database management, transaction log auditing, and SQL query troubleshooting on SQL Server",
      "Collaborated with senior engineers on containerized microservices, internal utilities, and deployment verification",
      "Mastered banking operational compliance, information security protocols, and enterprise SDLC standards",
    ],
    tech: ["Linux OS", "Banking Systems Operations", "SQL Server", "IT Infrastructure", "Docker Basics", "System Operations"],
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
      "Graduated with deep competency in full-stack architecture, object-oriented systems design, and Linux environments",
      "Built multi-tier database applications with security and transactional modeling",
      "Completed hands-on software engineering capstone projects with highest academic standing",
    ],
    tech: [],
    icon: GraduationCap,
  },
];

// const professionalReferences = [
//   {
//     id: 1,
//     name: "Senior Software Engineering Supervisor",
//     role: "Lead Enterprise Integration Architect",
//     organization: "Amhara Bank SC",
//     department: "Software Development & Systems Integration Division",
//     relationship: "Direct Engineering Supervisor",
//     quote:
//       "Tadde demonstrated exceptional technical mastery across scalable full-stack development, enterprise ERP modules, WSO2 API Manager, Micro Integrator mediation, and Linux Docker containers for our critical financial pipelines (ESL, Ethiopian Airlines, NBE, SantimPay). His attention to detail, proactive RCA, and problem-solving ensure high-reliability, zero-downtime platforms.",
//     icon: Building2,
//     badgeColor: "bg-primary/10 text-primary border-primary/20",
//   },
//   {
//     id: 2,
//     name: "Senior IT Infrastructure & Database Specialist",
//     role: "Database Administrator & Linux Systems Lead",
//     organization: "Amhara Bank SC",
//     department: "IT Infrastructure & Database Operations Division",
//     relationship: "Technical Mentor & Supervisor (Trainee & Junior Dev)",
//     quote:
//       "Working with Tadde across database performance tuning, transaction auditing, and system telemetry monitoring, I found him to be a diligent engineer. He conducts thorough root cause analysis (RCA), manages production incidents calmly, and consistently meets rigorous availability targets.",
//     icon: ShieldCheck,
//     badgeColor: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
//   },
//   {
//     id: 3,
//     name: "Department Head of Computer Science",
//     role: "Head of Computer Science & Senior Academic Lecturer",
//     organization: "Mekdela Amba University",
//     department: "College of Informatics & Technology",
//     relationship: "Academic Advisor & Capstone Project Supervisor",
//     quote:
//       "Tadde graduated with distinguished academic standing in Computer Science. His solid grasp of data structures, distributed systems, and modern full-stack development, combined with an outstanding work ethic, makes him a valuable software engineer.",
//     icon: GraduationCap,
//     badgeColor: "bg-sky-500/10 text-sky-500 border-sky-500/20",
//   },
// ];

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="max-w-5xl mx-auto space-y-16">
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
                Proven track record in scalable full-stack software development, enterprise ERP engineering, fintech integrations, and flexible, production-grade deployment systems.
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

        {/* Professional References Section */}
        {/* <div className="pt-6 border-t border-border/60 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">

              <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground uppercase tracking-tight">
                <span className="font-serif italic font-normal text-primary lowercase">References</span>
              </h3>
            </div>

          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {professionalReferences.map((ref, idx) => {
              const Icon = ref.icon;
              return (
                <motion.div
                  key={ref.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="p-6 rounded-3xl border border-border/80 bg-card shadow-sm hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20 shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <Quote className="w-5 h-5 text-primary/40" />
                    </div>

                    <p className="text-xs text-muted leading-relaxed font-light italic">
                      &ldquo;{ref.quote}&rdquo;
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border/60 space-y-1">
                    <h4 className="font-bold text-sm text-foreground leading-snug">{ref.name}</h4>
                    <p className="text-xs font-medium text-primary leading-tight">{ref.role}</p>
                    <p className="text-[11px] text-muted truncate">{ref.organization}</p>
                    <p className="text-[10px] text-muted/80 font-light truncate">{ref.relationship}</p>
                    <div className="pt-2">

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div> */}
      </div>
    </SectionWrapper>
  );
}



