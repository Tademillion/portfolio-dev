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
  { name: "C# / .NET Core", category: "languages", tag: "Backend Framework", icon: SiDotnet, color: "#512BD4" },
  { name: "ASP.NET / DevExpress", category: "languages", tag: "Enterprise Suite", icon: Code2, color: "#0078D4" },
  { name: "Next.js 16 (App Router)", category: "languages", tag: "Full-Stack React", icon: SiNextdotjs },
  { name: "React 19", category: "languages", tag: "Frontend UI", icon: SiReact, color: "#61DAFB" },
  { name: "Node.js & Express", category: "languages", tag: "Runtime & API", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "TypeScript", category: "languages", tag: "Type System", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript (ES6+)", category: "languages", tag: "Web Standard", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind CSS", category: "languages", tag: "Modern Styling", icon: SiTailwindcss, color: "#06B6D4" },

  // Databases
  { name: "Microsoft SQL Server", category: "databases", tag: "RDBMS", icon: Database, color: "#CC292B" },
  { name: "MongoDB", category: "databases", tag: "Document Store", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", category: "databases", tag: "Relational DB", icon: SiMysql, color: "#4479A1" },

  // DevOps & Tools
  { name: "Docker Containerization", category: "devops", tag: "Containers", icon: SiDocker, color: "#2496ED" },
  { name: "Git & GitHub", category: "devops", tag: "Version Control", icon: SiGit, color: "#F05032" },
  { name: "Postman API Testing", category: "devops", tag: "API Client", icon: SiPostman, color: "#FF6C37" },
  { name: "Swagger / OpenAPI", category: "devops", tag: "API Docs", icon: SiSwagger, color: "#85EA2D" },
  { name: "IIS & Linux Servers", category: "devops", tag: "Host Platform", icon: Server, color: "#0078D4" },

  // Banking & Enterprise
  { name: "Core Banking Systems", category: "enterprise", tag: "Fintech Domain", icon: ShieldCheck, color: "#10B981" },
  { name: "RESTful Microservices", category: "enterprise", tag: "Architecture", icon: Network, color: "#0EA5E9" },
  { name: "ACID Transactions", category: "enterprise", tag: "Data Consistency", icon: Lock, color: "#F59E0B" },
  { name: "JWT & RBAC Security", category: "enterprise", tag: "Auth Security", icon: KeyRound, color: "#EC4899" },
  { name: "SDLC & Agile Workflows", category: "enterprise", tag: "Methodology", icon: Workflow, color: "#8B5CF6" },
];

const categoryTabs = [
  { id: "all", label: "All Tech" },
  { id: "languages", label: "Languages & Frameworks" },
  { id: "databases", label: "Databases & Storage" },
  { id: "devops", label: "DevOps & Tools" },
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
            Core technologies, database architectures, and engineering toolchains deployed across production applications.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            {categoryTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === tab.id
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
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5"
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
                    <p className="font-semibold text-xs sm:text-sm text-foreground truncate group-hover:text-primary transition-colors">
                      {skill.name}
                    </p>
                    <p className="text-[11px] text-muted truncate font-light">
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
