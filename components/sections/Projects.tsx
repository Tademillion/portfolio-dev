"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "../shared/SectionWrapper";
import { ExternalLink, Layers, Sparkles, X, CheckCircle2 } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: "Enterprise" | "Full-Stack" | "Backend" | "Frontend";
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Human Resource Management System",
    category: "Enterprise",
    tagline: "Enterprise HR & Workforce Management",
    description:
      "Comprehensive HR management system designed for large-scale employee lifecycle tracking, department organizational structures, and automated payroll operations.",
    highlights: [
      "Role-based access control with granular permission hierarchies",
      "Automated attendance, leave tracking, and payroll reconciliation",
      "High-throughput reporting with DevExpress and SQL Server optimization",
    ],
    tech: [".NET", "C#", "SQL Server", "DevExpress", "IIS"],
    image: "/projects/hr-management.jpg",
  },
  {
    id: 2,
    title: "Stock & Inventory Management System",
    category: "Enterprise",
    tagline: "Real-time Warehouse Tracking & Auditing",
    description:
      "Mission-critical inventory system providing real-time stock level monitoring, threshold alerts, multi-warehouse auditing, and automated purchase ordering.",
    highlights: [
      "Real-time stock balance tracking across multi-site warehouses",
      "Automated low-inventory thresholds and vendor procurement orders",
      "Transaction auditing with complete historical lineage",
    ],
    tech: [".NET", "SQL Server", "DevExpress", "Windows Server"],
    image: "/projects/inventory-system.jpg",
  },
  {
    id: 3,
    title: "Budget & Financial Planning System",
    category: "Full-Stack",
    tagline: "Fiscal Forecasting & Expense Management",
    description:
      "Modern financial planning platform facilitating organizational budget allocation, expense approval workflows, and multi-tier analytics.",
    highlights: [
      "Dynamic approval chains with real-time budget utilization charts",
      "Robust REST API integration between Next.js frontend and .NET Core backend",
      "Exportable financial audits and customizable forecasting models",
    ],
    tech: ["Next.js", ".NET Core", "TypeScript", "Tailwind CSS", "SQL Server"],
    image: "/projects/budget-planning.jpg",
  },
  {
    id: 4,
    title: "Digital Letter Verification Platform",
    category: "Backend",
    tagline: "Cryptographic Document Authenticity Platform",
    description:
      "Secure government and enterprise document verification system that eliminates counterfeit correspondence through cryptographic signatures and QR validation.",
    highlights: [
      "Tamper-evident document hashing and instant QR code verification",
      "Scalable RESTful microservices with Node.js, Express, and MongoDB",
      "High-security authentication and audit trail logging",
    ],
    tech: ["Next.js", "Node.js", "Express", "MongoDB", "TypeScript"],
    image: "/projects/letter-verification.jpg",
  },
  {
    id: 5,
    title: "Court Fee Management System",
    category: "Full-Stack",
    tagline: "Regional Judicial Fee Collection & Case Tracking",
    description:
      "Centralized financial tracking platform for regional courts, streamlining fee assessments, automated receipt generation, and legal case reconciliation.",
    highlights: [
      "Automated fee calculation algorithms based on legal case classification",
      "Containerized deployment using Docker for high availability",
      "Intuitive client portal with real-time case ledger transparency",
    ],
    tech: ["Next.js", "React", "Node.js", "Docker", "MongoDB", "Tailwind CSS"],
    image: "/projects/court-systems.jpg",
  },
  {
    id: 6,
    title: "Supply Chain & Inventory Solution",
    category: "Full-Stack",
    tagline: "End-to-End Logistics & Supply Optimization",
    description:
      "Cloud-native supply chain management portal featuring real-time logistics tracking, batch expiration monitoring, and supplier performance metrics.",
    highlights: [
      "Responsive interactive dashboards with rich operational metrics",
      "Optimized database queries for fast search across tens of thousands of SKUs",
      "Clean TypeScript architecture with robust end-to-end type safety",
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
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase bg-primary/10 text-primary border border-primary/25 mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight text-foreground">
            Engineered with <span className="gradient-text">Precision</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
            A curated selection of enterprise software, full-stack web platforms, and scalable backend architectures built for real-world impact.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "text-primary font-semibold"
                    : "text-muted hover:text-foreground bg-card/60 border border-border/60"
                }`}
              >
                {cat}
                {isSelected && (
                  <motion.div
                    layoutId="activeProjectFilter"
                    className="absolute inset-0 bg-primary/10 rounded-full border border-primary/30 -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col rounded-2xl border border-border/80 bg-card overflow-hidden shadow-sm hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted/20">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium tracking-wide uppercase bg-background/90 backdrop-blur-md border border-border/80 text-foreground shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-2.5">
                    <h3 className="text-lg font-bold font-heading text-foreground group-hover:text-primary transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-primary font-medium">
                      {project.tagline}
                    </p>
                    <p className="text-sm text-muted leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-border/60">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-muted/10 text-muted border border-border/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveModalProject(project)}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-card hover:bg-primary/10 text-foreground hover:text-primary border border-border/80 hover:border-primary/40 transition-all duration-200 cursor-pointer"
                    >
                      <span>Project Details</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
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
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.25 }}
                className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-border/80 bg-card shadow-2xl p-6 sm:p-8 space-y-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono text-primary uppercase tracking-wider">
                      {activeModalProject.category} Project
                    </span>
                    <h3 className="text-2xl font-bold font-heading text-foreground mt-1">
                      {activeModalProject.title}
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveModalProject(null)}
                    className="p-2 rounded-full border border-border/80 bg-card hover:bg-muted/10 text-muted hover:text-foreground transition-colors cursor-pointer"
                    aria-label="Close details"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-muted/20 border border-border/60">
                  <Image
                    src={activeModalProject.image}
                    alt={activeModalProject.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-semibold font-heading uppercase tracking-wider text-foreground">
                    Overview
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    {activeModalProject.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold font-heading uppercase tracking-wider text-foreground">
                    Key Architectural Highlights
                  </h4>
                  <div className="space-y-2">
                    {activeModalProject.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-muted">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-border/60">
                  <h4 className="text-sm font-semibold font-heading uppercase tracking-wider text-foreground">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/25"
                      >
                        {tech}
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
