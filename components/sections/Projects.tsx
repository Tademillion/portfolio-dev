"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "../shared/SectionWrapper";
import { ArrowUpRight, CheckCircle2, X, ExternalLink, Layers } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: "Enterprise" | "Full-Stack" | "Backend";
  tagline: string;
  overview: string;
  highlights: string[];
  tech: string[];
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Enterprise HR Management System",
    category: "Enterprise",
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
    id: 2,
    title: "Stock & Warehouse Inventory System",
    category: "Enterprise",
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
    id: 3,
    title: "Fiscal Budget & Planning Platform",
    category: "Full-Stack",
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
    id: 4,
    title: "Cryptographic Letter Verification System",
    category: "Backend",
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
    id: 5,
    title: "Judicial Court Fee Management System",
    category: "Full-Stack",
    tagline: "Regional Court Fee Processing & Case Accounting",
    overview:
      "Centralized fee collection and reconciliation engine for regional courts, automating fee computation algorithms, legal case tracking, and electronic receipt generation.",
    highlights: [
      "Automated legal fee calculation algorithms based on case classifications",
      "Containerized deployment using Docker for zero-downtime reliability",
      "Clean cashier interface with rapid receipt printing and daily closing reconciliation",
    ],
    tech: ["Next.js", "React", "Node.js", "Docker", "MongoDB", "Tailwind CSS"],
    image: "/projects/court-systems.jpg",
  },
  {
    id: 6,
    title: "Cloud Supply Chain & Inventory Portal",
    category: "Full-Stack",
    tagline: "End-to-End Inventory Tracking & Predictive Analytics",
    overview:
      "Cloud-native supply chain management portal featuring real-time logistics tracking, batch expiration monitoring, and supplier performance scoring dashboards.",
    highlights: [
      "Dynamic interactive dashboards with real-time operational KPI feeds",
      "Optimized query pipelines for instant catalog search across thousands of SKUs",
      "Modern TypeScript codebase with strict end-to-end typing",
    ],
    tech: ["React", "Next.js", "Node.js", "MongoDB", "TypeScript"],
    image: "/projects/inventory-solution.jpg",
  },
];

const categories = ["All", "Enterprise", "Full-Stack", "Backend"] as const;

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <SectionWrapper id="projects">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground uppercase">
              Recent <span className="font-serif italic font-normal text-primary lowercase">Projects</span>
            </h2>
            <p className="text-sm sm:text-base text-muted max-w-lg font-light">
              Enterprise software systems, banking tools, and full-stack web applications.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-full bg-card border border-border/80 w-fit">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    isSelected
                      ? "bg-foreground text-background dark:bg-primary dark:text-primary-foreground font-semibold shadow-sm"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
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
                className="group rounded-2xl border border-border/80 bg-card overflow-hidden shadow-sm hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 w-full overflow-hidden bg-muted/20 border-b border-border/50">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-background/90 backdrop-blur-md border border-border/80 text-foreground">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
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
                    <h3 className="text-2xl font-bold text-foreground mt-1">
                      {activeModalProject.title}
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveModalProject(null)}
                    className="p-2 rounded-full border border-border/80 bg-card hover:bg-muted/20 text-muted hover:text-foreground transition-colors cursor-pointer"
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
                    Key Highlights
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
