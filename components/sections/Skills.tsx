"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "../shared/SectionWrapper";
import {
  SiDotnet,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiLinux,
  SiGit,
  SiPostman,
  SiSwagger,
  SiNginx,
} from "react-icons/si";
import {
  Code2,
  Database,
  Server,
  ShieldCheck,
  Lock,
  Network,
  KeyRound,
  Workflow,
  Sparkles,
  Container,
  Terminal,
  Activity,
  CheckCircle2,
  SearchCode,
  Smartphone,
} from "lucide-react";
import { IconType } from "react-icons";

interface SkillItem {
  name: string;
  category: "languages" | "databases" | "devops" | "enterprise";
  tag: string;
  icon: IconType | typeof Database;
  color?: string;
}

const allSkills: SkillItem[] = [
  // Languages & Frameworks
  { name: "C# / .NET Core", category: "languages", tag: "Backend & Microservices", icon: SiDotnet, color: "#512BD4" },
  { name: "ASP.NET / DevExpress", category: "languages", tag: "Enterprise Architecture", icon: Code2, color: "#0078D4" },
  { name: "TypeScript", category: "languages", tag: "Type System & Tooling", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript (ES6+)", category: "languages", tag: "Modern Web Standard", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Next.js 16 (App Router)", category: "languages", tag: "Full-Stack Framework", icon: SiNextdotjs },
  { name: "React 19", category: "languages", tag: "Frontend Ecosystem", icon: SiReact, color: "#61DAFB" },
  { name: "Node.js & Express", category: "languages", tag: "Runtime & API Layer", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Tailwind CSS", category: "languages", tag: "Modern Styling Engine", icon: SiTailwindcss, color: "#06B6D4" },

  // Databases & Storage
  { name: "Microsoft SQL Server", category: "databases", tag: "RDBMS & Stored Procs", icon: Database, color: "#CC292B" },
  { name: "MongoDB", category: "databases", tag: "Document Store", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", category: "databases", tag: "Relational Database", icon: SiMysql, color: "#4479A1" },

  // DevOps, Linux & Gateways
  { name: "Linux OS (Server/Bash)", category: "devops", tag: "Host & Sysadmin", icon: SiLinux, color: "#FCC624" },
  { name: "WSO2 API Manager", category: "devops", tag: "Enterprise API Gateway", icon: Network, color: "#FF7300" },
  { name: "WSO2 Micro Integrator", category: "devops", tag: "Integration Middleware", icon: Workflow, color: "#F97316" },
  { name: "Docker Containerization", category: "devops", tag: "Containers & Isolation", icon: SiDocker, color: "#2496ED" },
  { name: "System & App Monitoring", category: "devops", tag: "Telemetry & Performance", icon: Activity, color: "#10B981" },
  { name: "Incident Handling & RCA", category: "devops", tag: "Root Cause Analysis", icon: SearchCode, color: "#EC4899" },
  { name: "Architecture & SLA Reviews", category: "devops", tag: "Optimization & High Uptime", icon: CheckCircle2, color: "#6366F1" },
  { name: "Nginx & Reverse Proxies", category: "devops", tag: "Web & Proxy Server", icon: SiNginx, color: "#009639" },
  { name: "Git & GitHub", category: "devops", tag: "Version Control & CI", icon: SiGit, color: "#F05032" },
  { name: "Postman & Swagger", category: "devops", tag: "API Testing & Docs", icon: SiPostman, color: "#FF6C37" },

  // Banking & Enterprise Integrations
  { name: "B2B Financial Integrations", category: "enterprise", tag: "ESL · Airlines · NBE · SantimPay", icon: Workflow, color: "#0EA5E9" },
  { name: " Roadmap Delivery", category: "enterprise", tag: "Products, Upgrades & PSPs", icon: Smartphone, color: "#00B04F" },
  { name: "XML & Synapse Code", category: "enterprise", tag: "Mediation Sequences", icon: Code2, color: "#06B6D4" },
  { name: "REST & SOAP APIs", category: "enterprise", tag: "Payload Transformation", icon: Server, color: "#6366F1" },
  { name: "Banking API Integration", category: "enterprise", tag: "REST & SOAP Endpoints", icon: ShieldCheck, color: "#10B981" },
  { name: "ACID Transactions", category: "enterprise", tag: "Financial Consistency", icon: Lock, color: "#F59E0B" },
  { name: "JWT & Security Auth", category: "enterprise", tag: "mTLS · OAuth2 · RBAC", icon: KeyRound, color: "#EC4899" },
];


const categoryTabs = [
  { id: "all", label: "All Tech" },
  { id: "languages", label: "Languages & Frameworks" },
  { id: "databases", label: "Databases & Storage" },
  { id: "devops", label: "Linux, DevOps & Gateways" },
  { id: "enterprise", label: "Banking & Enterprise" },
];

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredSkills =
    selectedCategory === "all"
      ? allSkills
      : allSkills.filter((s) => s.category === selectedCategory);

  return (
    <SectionWrapper id="skills">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tech Stack & Tools</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground uppercase">
            Technical <span className="font-serif italic font-normal text-primary lowercase">Skills</span>
          </h2>
          <p className="text-sm sm:text-base text-muted max-w-xl mx-auto font-light leading-relaxed">
            Production-proven programming languages, Linux environments, enterprise API gateways, and database architectures.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="p-4 rounded-2xl border border-border/80 bg-card shadow-sm hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all flex items-center gap-3.5 group cursor-default"
                >
                  <div
                    className="w-10 h-10 rounded-xl bg-muted/15 border border-border/60 flex items-center justify-center text-foreground group-hover:text-primary group-hover:border-primary/40 transition-colors shrink-0"
                    style={{ color: skill.color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-xs sm:text-sm text-foreground leading-snug group-hover:text-primary transition-colors">
                      {skill.name}
                    </p>
                    <p className="text-[11px] text-muted font-light mt-0.5 leading-tight">
                      {skill.tag}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}


