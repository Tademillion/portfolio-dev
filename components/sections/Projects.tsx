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
} from "lucide-react";

interface FullStackProject {
  id: string;
  title: string;
  systemName: string;
  tagline: string;
  overview: string;
  highlights: string[];
  tech: string[];
  image: string;
  metrics?: string;
}

interface IntegratedCompany {
  name: string;
  category: string;
  scope: string;
}

const fullStackProjects: FullStackProject[] = [
  {
    id: "court-fee-system",
    title: "Judicial Court Fee Management System",
    systemName: "Court Management System",
    tagline: "Regional Court Case Accounting, Dynamic Statutory Fee Computation & Electronic Receipting",
    overview:
      "A mission-critical financial accounting and fee collection platform engineered for regional judicial courts. The system centralizes case registry accounting, dynamically computes statutory legal fees based on multi-tiered case classifications, and provides cashiers with rapid POS-style receipt printing and daily end-of-shift reconciliation with zero financial discrepancy.",
    highlights: [
      "Dynamic statutory fee calculation algorithms supporting complex multi-tier judicial case classifications and litigation types",
      "Streamlined cashier interface with instant thermal/PDF receipt printing and automated shift closing balance verification",
      "Containerized microservice architecture deployed using Docker on Linux OS for high reliability and zero downtime",
      "Immutable transactional audit trails capturing every cashier activity, fee waiver, and case payment status transition",
      "Responsive, clean UI designed for fast keyboard navigation and high cashier throughput under peak operational hours",
    ],
    tech: ["Next.js", "React", "Node.js", "MongoDB", "Docker", "Tailwind CSS"],
    image: "/projects/court-systems.jpg",
    metrics: "Sub-second Fee Computation · Zero Audit Discrepancies",
  },
  {
    id: "hr-leave-system",
    title: "Enterprise HR & Leave Management System",
    systemName: "HR Management System",
    tagline: "Institutional Employee Lifecycle Logistics, Departmental Hierarchies & Automated Leave Workflows",
    overview:
      "Enterprise human resource management platform developed for large institutional workforce lifecycle tracking. It manages complex departmental hierarchies, automates multi-stage employee leave application and approval chains, and performs algorithmic attendance and leave balance reconciliation.",
    highlights: [
      "Granular role-based access control (RBAC) matrix for strict departmental isolation and multi-tier organizational approval chains",
      "Automated employee attendance tracking, statutory leave entitlement calculations, and balance rollover algorithms",
      "High-throughput transactional database queries tuned for sub-second execution on Microsoft SQL Server",
      "Institutional reporting engine generating comprehensive staff analytics, leave utilization, and departmental audit logs",
      "Type-safe backend architecture built with .NET Core and C# ensuring enterprise stability and data integrity",
    ],
    tech: [".NET Core", "C#", "SQL Server", "DevExpress", "IIS"],
    image: "/img/hr-management.png",
    metrics: "Multi-Tier Approval Chains · High-Throughput SQL Queries",
  },
  {
    id: "stock-inventory-system",
    title: "Stock & Warehouse Inventory ERP",
    systemName: "Stock Management System",
    tagline: "Multi-Warehouse Inventory Tracking, FIFO Valuation & Automated Vendor Reordering",
    overview:
      "High-precision inventory and supply chain ERP delivering real-time stock visibility across distributed enterprise warehouses. Features automated FIFO (First-In, First-Out) valuation algorithms, dynamic threshold warnings, inter-warehouse transfer authorizations, and vendor purchase requisition workflows.",
    highlights: [
      "Real-time stock balance tracking with automated FIFO inventory valuation and cost-of-goods calculation algorithms",
      "Automated minimum-threshold alerts triggering automated purchase requisitions and supplier replenishment pipelines",
      "Multi-warehouse transfer workflows with dual-custody verification (dispatch and receive verification) to eliminate shrinkage",
      "Immutable transaction auditing for enterprise compliance, periodic physical counts, and internal audit verification",
      "Optimized database schema handling concurrent inventory transactions with strict ACID consistency guarantees",
    ],
    tech: [".NET Core", "C#", "SQL Server", "DevExpress", "Windows Server"],
    image: "/img/stock-management.png",
    metrics: "Real-Time Balance Tracking · FIFO Inventory Valuation",
  },
];

const integratedCompanies: IntegratedCompany[] = [
  {
    name: "Ethiopian Shipping & Logistics (ESL)",
    category: "Logistics & Customs",
    scope: "Multimodal Cargo Freight Clearance & Invoicing",
  },
  {
    name: "SantimPay (School Pay)",
    category: "Educational FinTech",
    scope: "Digital Tuition & School Fee Collection Switch",
  },
  {
    name: "Boost Software Development PLC",
    category: "Software Development",
    scope: "House Rent Verification & Landlord Settlement",
  },
  {
    name: "Telebirr (Ethio Telecom)",
    category: "Digital Payment Switch",
    scope: "Dynamic Web Checkout & Payment Callbacks",
  },
  {
    name: "Ethswitch",
    category: "National Payment Switch",
    scope: "Inter-Bank Interoperability & Routing",
  },
  {
    name: "Kifiya Financial Technology",
    category: "FinTech",
    scope: "Digital Lending Application",
  },
];

const tabs = [
  { id: "all", label: "All Deliverables" },
  { id: "fullstack", label: "Full-Stack Systems" },
  { id: "integrations", label: "FinTech & API Integrations" },
];

export function Projects() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [activeModalProject, setActiveModalProject] = useState<FullStackProject | null>(null);

  const showFullStack = activeTab === "all" || activeTab === "fullstack";
  const showIntegrations = activeTab === "all" || activeTab === "integrations";

  return (
    <SectionWrapper id="projects">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center md:text-left space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Full-Stack Engineering & FinTech Integration</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground uppercase">
            Shipped <span className="font-serif italic font-normal text-primary lowercase">Systems & Integrations</span>
          </h2>

          <p className="text-sm sm:text-base text-muted max-w-2xl font-light leading-relaxed">
            Enterprise full-stack platforms and production FinTech payment gateways engineered with strict ACID transaction safety, idempotency, webhook security, and zero-loss financial reconciliation.
          </p>

          {/* View Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${activeTab === tab.id
                  ? "bg-foreground text-background dark:bg-primary dark:text-primary-foreground shadow-sm scale-105"
                  : "bg-card border border-border/80 text-muted hover:text-foreground hover:border-primary/40"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 1. Full-Stack Systems Subsection */}
        {showFullStack && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                  Core Enterprise Applications
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  Full-Stack Systems
                </h3>
              </div>
              <span className="text-xs text-muted font-mono">
                {fullStackProjects.length} Deployed Platforms
              </span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {fullStackProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setActiveModalProject(project)}
                  className="group rounded-2xl border border-border/80 bg-card overflow-hidden shadow-sm hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    {/* Project Screenshot Banner */}
                    <div className="relative h-44 w-full overflow-hidden bg-muted/20 border-b border-border/50">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-background/90 backdrop-blur-md border border-border/80 text-foreground">
                          {project.systemName}
                        </span>
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="p-5 space-y-2.5">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                          {project.title}
                        </h4>
                        <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-0.5" />
                      </div>

                      <p className="text-xs text-muted leading-relaxed line-clamp-2 font-light">
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
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
            </div>
          </div>
        )}

        {/* 2. FinTech & API Integrations Subsection */}
        {showIntegrations && (
          <div className="space-y-6 pt-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/60 pb-3">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                  System Interoperability & Enterprise Middleware
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  Enterprise API & FinTech Integrations
                </h3>
              </div>
              <span className="text-xs text-muted font-mono">
                {integratedCompanies.length} Partner Institutions
              </span>
            </div>

            {/* General Architecture Master Card */}
            <div className="p-6 sm:p-8 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-card to-card shadow-sm space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                  <Network className="w-3.5 h-3.5" />
                  <span>Architecture & Integration Engine</span>
                </div>
                <h4 className="text-lg sm:text-2xl font-bold text-foreground">
                  High-Throughput Middleware & Payment Integration Engine
                </h4>
                <p className="text-sm sm:text-base text-muted font-light leading-relaxed">
                  I engineer resilient, high-throughput integration middleware and secure REST APIs that bridge Amhara Bank&apos;s core banking infrastructure with prominent governmental, financial, and private enterprise platforms across Ethiopia. Utilizing <span className="text-foreground font-medium">Node.js, Express, and SQL Server</span>, I develop asynchronous integration pipelines that handle real-time customer and institutional invoice inquiries, dynamic bill validations, automated tuition and rental fee collections, mobile wallet checkouts, and national switch clearing feeds. My architectures enforce bank-grade security and transactional integrity through HMAC-SHA256 cryptographic signature verification, real-time webhook listeners, request idempotency nonces to eliminate duplicate debits, and automated end-of-day ledger reconciliation to guarantee zero financial discrepancies.
                </p>
              </div>

              {/* Core Technologies & Standards Pill Bar */}
              <div className="pt-2 border-t border-border/40 flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-semibold text-muted uppercase tracking-wider">
                  Core Technologies & Standards:
                </span>
                {[
                  "Node.js",
                  "Express",
                  "REST APIs",
                  "Webhooks",
                  "Idempotency Keys",
                  "SQL Server",
                  "ACID Transactions",
                  "Automated Ledger Reconciliation",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] px-2.5 py-0.5 rounded-md bg-muted/15 text-foreground/80 font-medium font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Integrated Partner Companies List */}
              <div className="pt-4 border-t border-border/40 space-y-3">
                <div className="flex items-center justify-between">
                  <h5 className="text-xs font-semibold uppercase tracking-wider text-muted">
                    Integrated Partner Institutions & Platforms:
                  </h5>
                  <span className="text-[11px] font-mono text-muted">
                    Active Deployments
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {integratedCompanies.map((company) => (
                    <div
                      key={company.name}
                      className="p-3.5 rounded-2xl border border-border/70 bg-card/80 hover:border-primary/40 hover:bg-card transition-all space-y-1.5"
                    >
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 inline-block">
                        {company.category}
                      </span>
                      <h6 className="text-xs sm:text-sm font-bold text-foreground">
                        {company.name}
                      </h6>
                      <p className="text-[11px] text-muted font-light leading-relaxed">
                        {company.scope}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Detailed Modal for Full-Stack Projects */}
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
                      {activeModalProject.systemName} Case Study
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

                <div className="relative h-52 sm:h-60 w-full rounded-2xl overflow-hidden bg-muted/20 border border-border/60">
                  <Image
                    src={activeModalProject.image}
                    alt={activeModalProject.title}
                    fill
                    className="object-cover object-top"
                  />
                </div>

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
