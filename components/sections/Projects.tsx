"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "../shared/SectionWrapper";
import {
  ArrowUpRight,
  CheckCircle2,
  X,
  Sparkles,
  Network,
  ArrowRight,
  ArrowLeft,
  ArrowLeftRight,
  ShieldCheck,
  Zap,
  Lock,
  RefreshCw,
  Landmark,
  Plane,
  Ship,
  Scale,
  Smartphone,
} from "lucide-react";

// ==========================================
// OFFICIAL COMPANY LOGOS FROM /img/ & /
// ==========================================

export function AmharaBankLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center shrink-0 overflow-hidden rounded-xl bg-white p-1 shadow-sm ${className}`}>
      <Image
        src="/img/amharabanklogo.jpg"
        alt="Amhara Bank"
        fill
        className="object-contain p-0.5"
      />
    </div>
  );
}

export function EthiopianAirlinesLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center shrink-0 overflow-hidden rounded-xl bg-white p-1 shadow-sm ${className}`}>
      <Image
        src="/img/EthAirLineLogo.png"
        alt="Ethiopian Airlines"
        fill
        className="object-contain p-0.5"
      />
    </div>
  );
}

export function ESLLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center shrink-0 overflow-hidden rounded-xl bg-white p-1 shadow-sm ${className}`}>
      <Image
        src="/img/ESLLogo.png"
        alt="Ethiopian Shipping & Logistics"
        fill
        className="object-contain p-0.5"
      />
    </div>
  );
}

export function NBELogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center shrink-0 overflow-hidden rounded-xl bg-white p-1 shadow-sm ${className}`}>
      <Image
        src="/img/NbeLogo.png"
        alt="National Bank of Ethiopia"
        fill
        className="object-contain p-0.5"
      />
    </div>
  );
}

export function SantimPayLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center shrink-0 overflow-hidden rounded-xl bg-white p-1 shadow-sm ${className}`}>
      <Image
        src="/santimpay.png"
        alt="SantimPay"
        fill
        className="object-contain p-0.5"
      />
    </div>
  );
}


interface Project {
  id: number;
  title: string;
  category: "Enterprise & Integrations" | "Web & Full-Stack";
  tagline: string;
  overview: string;
  highlights: string[];
  tech: string[];
  image?: string;
  isIntegration?: boolean;
  integrationPartner?: "Ethiopian Airlines" | "ESL" | "NBE" | "SantimPay";
  partnerSubtitle?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Amhara Bank ⇄ Ethiopian Airlines Integration",
    category: "Enterprise & Integrations",
    tagline: "Ticketing Revenue Settlement & Corporate Banking Gateway",
    overview:
      "Mission-critical bidirectional B2B financial integration connecting Amhara Bank's financial APIs with Ethiopian Airlines. Built using WSO2 API Manager and WSO2 Micro Integrator with XML synapse mediation code, containerized in Docker on Linux OS, the platform enables real-time ticket purchase authorizations, corporate account automated settlements, and automated booking payment reconciliations via REST and SOAP APIs.",
    highlights: [
      "Bidirectional airline ticket payment authorization and settlement API gateway via WSO2 API Manager",
      "Engineered XML synapse mediation sequences in WSO2 Micro Integrator for REST and SOAP payload transformations",
      "Automated end-of-day revenue reconciliation and ledger posting to Core Banking APIs",
      "Containerized Micro Integrator deployment with Docker on Linux OS production servers",
      "Encrypted mTLS communication and JWT token authentication for institutional integrity",
    ],
    tech: ["WSO2 API Manager", "WSO2 Micro Integrator", "Linux OS", "Docker", "XML Code", "REST APIs", "SOAP APIs", "mTLS Security"],
    isIntegration: true,
    integrationPartner: "Ethiopian Airlines",
    partnerSubtitle: "National Carrier · Ticket Revenue & Corporate Settlement",
  },
  {
    id: 2,
    title: "Amhara Bank ⇄ ESL Logistics Payment System Integration",
    category: "Enterprise & Integrations",
    tagline: "Customer Invoice Inquiry, Validation & Real-Time Payment Confirmation Gateway",
    overview:
      "Technical integration with the ESL (Ethiopian Shipping and Logistics) Payment System APIs for authorized banks and Payment Service Providers (PSPs). Built using WSO2 API Manager and WSO2 Micro Integrator with XML synapse mediation code in Docker on Linux OS, the platform provides secure, standardized REST-based interfaces supporting customer invoice inquiry, real-time bill validation, and instant payment confirmation to ensure reliable and secure freight clearance processing.",
    highlights: [
      "Engineered secure, standardized REST-based interfaces for real-time customer invoice inquiry and validation",
      "Automated instant payment confirmation and receipt token dispatch conforming to ESL technical specifications",
      "XML synapse mediation in WSO2 Micro Integrator for request/response formatting and protocol transformation",
      "Robust authentication, request/response verification, and mTLS security requirements for institutional PSP processing",
      "Containerized high-availability Micro Integrator deployment with Docker on Linux OS with transactional audit logging",
    ],
    tech: ["WSO2 API Manager", "WSO2 Micro Integrator", "Linux OS", "Docker", "XML Code", "REST APIs", "SOAP APIs", "mTLS Security"],
    isIntegration: true,
    integrationPartner: "ESL",
    partnerSubtitle: "Ethiopian Shipping & Logistics · Invoice Inquiry, Validation & Payment Confirmation",
  },
  {
    id: 3,
    title: "Amhara Bank ⇄ NBE Regulatory Integration",
    category: "Enterprise & Integrations",
    tagline: "Mandatory Central Bank Regulatory Reporting & RTGS Clearing Feed",
    overview:
      "Secure institutional financial pipeline connecting Amhara Bank directly to the National Bank of Ethiopia (NBE). Engineered using WSO2 API Manager and WSO2 Micro Integrator with XML synapse mediation code in Docker on Linux OS, the system automates mandatory regulatory monetary compliance reporting, Real-Time Gross Settlement (RTGS) inter-bank transaction reporting, and central reserve auditing data streams.",
    highlights: [
      "Automated RTGS (Real-Time Gross Settlement) clearing transaction data pipelines",
      "XML synapse mediation in WSO2 Micro Integrator for XML payload translation across REST and SOAP endpoints",
      "Direct compliance data feed complying with National Bank of Ethiopia regulatory guidelines",
      "Containerized WSO2 Micro Integrator running in Docker on Linux OS server infrastructure",
      "End-to-end payload encryption, digital signatures, and audit trail generation",
    ],
    tech: ["WSO2 API Manager", "WSO2 Micro Integrator", "Linux OS", "Docker", "XML Code", "REST APIs", "SOAP APIs", "mTLS Security"],
    isIntegration: true,
    integrationPartner: "NBE",
    partnerSubtitle: "National Bank of Ethiopia · Regulatory & RTGS Clearing",
  },
  {
    id: 4,
    title: "Amhara Bank ⇄ SantimPay School Fee Payment Integration",
    category: "Enterprise & Integrations",
    tagline: "Digital School Fee Collection, Student Bill Inquiry & Tuition Settlement Gateway",
    overview:
      "Bidirectional fintech payment gateway integration connecting Amhara Bank's financial APIs with SantimPay for digital school payment handling. Built using WSO2 API Manager and WSO2 Micro Integrator with XML synapse mediation code in Docker on Linux OS, the platform enables real-time student tuition fee inquiry, automated bill validation, instant digital tuition payment confirmation, and automated ledger settlement to educational institutions' bank accounts.",
    highlights: [
      "Real-time student fee invoice inquiry and automated bill validation across participating educational institutions",
      "Instant digital tuition payment confirmation and receipt token dispatch to SantimPay gateway",
      "XML synapse mediation in WSO2 Micro Integrator for REST and SOAP payload transformations between bank host and SantimPay",
      "Automated school account ledger posting and end-of-day tuition revenue reconciliation",
      "Containerized Micro Integrator deployment with Docker on Linux OS with mTLS authentication and strict ACID transaction safety",
    ],
    tech: ["WSO2 API Manager", "WSO2 Micro Integrator", "Linux OS", "Docker", "XML Code", "REST APIs", "SOAP APIs", "mTLS Security"],
    isIntegration: true,
    integrationPartner: "SantimPay",
    partnerSubtitle: "SantimPay Payment Switch · School Fee Collection & Tuition Settlement",
  },
  {
    id: 5,
    title: "Enterprise HR Management System",
    category: "Web & Full-Stack",
    tagline: "Workforce Logistics & Automated Payroll Architecture",
    overview:
      "Enterprise human resource management platform built for institutional employee lifecycle tracking, organizational hierarchies, and automated payroll operations with strict audit logging.",
    highlights: [
      "Role-based permissions matrix for departmental isolation",
      "Automated attendance, leave tracking, and payroll reconciliation",
      "High-throughput reporting queries optimized for sub-second execution",
    ],
    tech: [".NET", "C#", "SQL Server", "DevExpress", "IIS"],
    image: "/projects/hr-management.jpg",
  },
  {
    id: 6,
    title: "Stock & Warehouse Inventory System",
    category: "Web & Full-Stack",
    tagline: "Multi-Warehouse Inventory Tracking & Reorder Automation",
    overview:
      "High-precision inventory system providing real-time stock balances, dynamic minimum-threshold warnings, multi-warehouse transfers, and vendor purchase requisition workflows.",
    highlights: [
      "Real-time stock balance tracking with automated FIFO inventory valuation",
      "Automated threshold alarms and vendor procurement dispatch",
      "Immutable transaction auditing for compliance and internal audits",
    ],
    tech: [".NET", "SQL Server", "DevExpress", "Windows Server"],
    image: "/projects/inventory-system.jpg",
  },
  {
    id: 7,
    title: "Fiscal Budget & Planning Platform",
    category: "Web & Full-Stack",
    tagline: "Organizational Forecasting & Multi-Tier Approvals",
    overview:
      "Modern financial planning platform facilitating organizational budget distribution, dynamic expense authorization workflows, and multi-tier analytics.",
    highlights: [
      "Interactive multi-tier approval chains with real-time budget burn rate",
      "Type-safe REST API bridge between Next.js and .NET Core",
      "Custom analytics dashboard with instant exportable financial reports",
    ],
    tech: ["Next.js", ".NET Core", "TypeScript", "Tailwind CSS", "SQL Server"],
    image: "/projects/budget-planning.jpg",
  },
  {
    id: 8,
    title: "Cryptographic Letter Verification System",
    category: "Web & Full-Stack",
    tagline: "Tamper-Proof Document Authentication Platform",
    overview:
      "High-security document verification platform that eliminates counterfeit official correspondence through cryptographic payload hashing and instant public QR validation.",
    highlights: [
      "Tamper-evident document hashing and instant verification via QR codes",
      "Scalable RESTful microservice handling concurrent document lookups",
      "Complete immutable audit trail of verification scans and attempts",
    ],
    tech: ["Next.js", "Node.js", "Express", "MongoDB", "TypeScript"],
    image: "/projects/letter-verification.jpg",
  },
  {
    id: 9,
    title: "Judicial Court Fee Management System",
    category: "Web & Full-Stack",
    tagline: "Regional Court Fee Processing & Case Accounting",
    overview:
      "Centralized fee collection and reconciliation engine for regional courts, automating fee computation algorithms, legal case tracking, and electronic receipt generation.",
    highlights: [
      "Automated legal fee calculation algorithms based on case classifications",
      "Containerized deployment using Docker on Linux for zero-downtime reliability",
      "Clean cashier interface with rapid receipt printing and daily closing reconciliation",
    ],
    tech: ["Next.js", "React", "Node.js", "Docker", "MongoDB", "Tailwind CSS"],
    image: "/projects/court-systems.jpg",
  },
];

const categoryTabs = [
  { id: "all", label: "All Projects" },
  { id: "Enterprise & Integrations", label: "Enterprise & Integrations" },
  { id: "Web & Full-Stack", label: "Web & Full-Stack Development" },
];

// ==========================================
// INTERACTIVE INTEGRATION FLOW CARD BANNER
// ==========================================

function IntegrationCardBanner({
  partner,
  isModal = false,
}: {
  partner: "Ethiopian Airlines" | "ESL" | "NBE" | "SantimPay";
  isModal?: boolean;
}) {
  const partnerConfig = {
    "Ethiopian Airlines": {
      name: "Ethiopian Airlines",
      code: "ET / EAL",
      logo: EthiopianAirlinesLogo,
      badgeColor: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
      accentGlow: "from-emerald-500/15 via-teal-500/5 to-transparent",
      serviceTag: "Ticket Revenue & Settlement",
    },
    ESL: {
      name: "Ethiopian Shipping & Logistics",
      code: "ESLSE",
      logo: ESLLogo,
      badgeColor: "bg-sky-500/10 text-sky-500 border-sky-500/20",
      accentGlow: "from-sky-500/15 via-blue-500/5 to-transparent",
      serviceTag: "Invoice Inquiry, Validation & Payment",
    },
    NBE: {
      name: "National Bank of Ethiopia",
      code: "NBE / Central Bank",
      logo: NBELogo,
      badgeColor: "bg-amber-500/10 text-amber-500 border-amber-500/20",
      accentGlow: "from-amber-500/15 via-orange-500/5 to-transparent",
      serviceTag: "Regulatory RTGS & Compliance",
    },
    SantimPay: {
      name: "SantimPay",
      code: "SantimPay / Fintech Switch",
      logo: SantimPayLogo,
      badgeColor: "bg-purple-500/10 text-purple-500 border-purple-500/20",
      accentGlow: "from-purple-500/15 via-indigo-500/5 to-transparent",
      serviceTag: "School Fee Collection & Tuition Settlement",
    },
  }[partner];

  const PartnerLogo = partnerConfig.logo;

  return (
    <div
      className={`relative w-full overflow-hidden bg-gradient-to-br ${partnerConfig.accentGlow} bg-card border-b border-border/60 ${isModal ? "p-5 sm:p-7 rounded-2xl border" : "p-4 sm:p-5"
        }`}
    >
      {/* Background ambient pulse line */}
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />

      <div className="relative z-10 flex items-center justify-between gap-2 sm:gap-4">
        {/* Left Side: Amhara Bank */}
        <div className="flex items-center gap-2.5 sm:gap-3 flex-1 min-w-0">
          <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-card border border-border/80 shadow-md p-1 flex items-center justify-center shrink-0 group-hover:border-primary/40 transition-colors">
            <AmharaBankLogo className="w-9 h-9 sm:w-11 sm:h-11" />
          </div>
          <div className="min-w-0">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-primary truncate block">
              Origin
            </span>
            <h4 className="text-xs sm:text-sm font-extrabold text-foreground truncate">
              Amhara Bank
            </h4>
            <p className="text-[10px] text-muted truncate hidden sm:block">Core Banking API</p>
          </div>
        </div>

        {/* Center: Bidirectional WSO2 API Gateway Flow Indicator */}
        <div className="flex flex-col items-center justify-center shrink-0 px-1 sm:px-2">
          <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-[9px] font-mono text-primary font-bold">
            <Network className="w-3 h-3" />
            <span className="hidden sm:inline">WSO2 API & MI</span>
          </div>

          <div className="flex items-center gap-1 my-1 text-primary">
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary animate-pulse" />
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
            <div className="w-4 sm:w-7 h-[2px] bg-gradient-to-r from-primary via-emerald-500 to-primary rounded-full" />
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 animate-pulse" />
          </div>

          <span className="text-[8px] font-mono text-muted uppercase tracking-tighter hidden sm:inline">
            ⇄ Bidirectional · REST/SOAP
          </span>
        </div>

        {/* Right Side: Destination Institution */}
        <div className="flex items-center gap-2.5 sm:gap-3 flex-1 justify-end min-w-0 text-right">
          <div className="min-w-0">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-500 truncate block">
              Partner
            </span>
            <h4 className="text-xs sm:text-sm font-extrabold text-foreground truncate">
              {partnerConfig.name}
            </h4>
            <p className="text-[10px] text-muted truncate hidden sm:block">{partnerConfig.code}</p>
          </div>

          <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-card border border-border/80 shadow-md p-1 flex items-center justify-center shrink-0 group-hover:border-primary/40 transition-colors">
            <PartnerLogo className="w-9 h-9 sm:w-11 sm:h-11" />
          </div>
        </div>
      </div>

      {/* Protocol ribbon at bottom of banner */}
      <div className="mt-3 pt-2.5 border-t border-border/40 flex items-center justify-between text-[10px] text-muted font-mono">
        <span className="flex items-center gap-1 truncate text-foreground font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          {partnerConfig.serviceTag}
        </span>
      </div>
    </div>
  );
}


export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <SectionWrapper id="projects">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center md:text-left space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Production Deployments</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground uppercase">
            Shipped <span className="font-serif italic font-normal text-primary lowercase">Projects</span>
          </h2>
          <p className="text-sm sm:text-base text-muted max-w-xl font-light leading-relaxed">
            Enterprise banking integrations, WSO2 API gateways, and full-stack software systems engineered for zero-compromise reliability.
          </p>


          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-3">
            {categoryTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${selectedCategory === tab.id
                  ? "bg-foreground text-background dark:bg-primary dark:text-primary-foreground shadow-sm scale-105"
                  : "bg-card border border-border/80 text-muted hover:text-foreground hover:border-primary/40"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                onClick={() => setActiveModalProject(project)}
                className={`group rounded-2xl border bg-card overflow-hidden shadow-sm hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-pointer flex flex-col justify-between ${project.isIntegration
                  ? "border-primary/40 ring-1 ring-primary/20"
                  : "border-border/80"
                  }`}
              >
                <div>
                  {project.isIntegration && project.integrationPartner ? (
                    <IntegrationCardBanner partner={project.integrationPartner} />
                  ) : project.image ? (
                    <div className="relative h-44 w-full overflow-hidden bg-muted/20 border-b border-border/50">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-background/90 backdrop-blur-md border border-border/80 text-foreground">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  ) : null}

                  <div className="p-5 space-y-2.5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-0.5" />
                    </div>

                    <p className="text-xs text-muted leading-relaxed line-clamp-2 font-light">
                      {project.tagline}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2 flex flex-wrap gap-1.5 border-t border-border/40">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-muted/15 text-muted font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Case Study */}
        <AnimatePresence>
          {activeModalProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveModalProject(null)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.2 }}
                className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-border/80 bg-card shadow-2xl p-6 sm:p-8 space-y-6"
              >
                <div className="flex items-start justify-between gap-4 border-b border-border/60 pb-4">
                  <div>
                    <span className="text-xs font-serif italic text-primary">
                      {activeModalProject.category} Case Study
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mt-1">
                      {activeModalProject.title}
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveModalProject(null)}
                    className="p-2 rounded-full border border-border/80 bg-card hover:bg-muted/20 text-muted hover:text-foreground transition-colors cursor-pointer shrink-0"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {activeModalProject.isIntegration && activeModalProject.integrationPartner ? (
                  <IntegrationCardBanner partner={activeModalProject.integrationPartner} isModal={true} />
                ) : activeModalProject.image ? (
                  <div className="relative h-52 sm:h-60 w-full rounded-2xl overflow-hidden bg-muted/20 border border-border/60">
                    <Image
                      src={activeModalProject.image}
                      alt={activeModalProject.title}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                ) : null}

                <div className="space-y-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted">
                    Project Overview
                  </h4>
                  <p className="text-sm text-foreground/90 leading-relaxed font-light">
                    {activeModalProject.overview}
                  </p>
                </div>

                <div className="space-y-2.5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted">
                    Key Highlights & Architecture
                  </h4>
                  <div className="space-y-2">
                    {activeModalProject.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-foreground/80 font-light">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t border-border/60">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted">
                    Technologies Applied
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}


