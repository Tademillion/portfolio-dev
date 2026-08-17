"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../shared/SectionWrapper";
import { Code2, Server, Database, Wrench, Check } from "lucide-react";

interface SkillGroup {
  title: string;
  icon: typeof Code2;
  description: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Engineering",
    icon: Code2,
    description: "Building responsive, accessible, and high-performance user interfaces.",
    skills: ["React.js", "Next.js (App Router)", "TypeScript", "Tailwind CSS", "JavaScript (ES6+)", "HTML5 / Modern CSS", "State Management"],
  },
  {
    title: "Backend & Enterprise Systems",
    icon: Server,
    description: "Designing robust business logic, secure authentication, and scalable APIs.",
    skills: [".NET Core / C#", "Node.js", "Express.js", "RESTful API Architecture", "Authentication & JWT", "Microservices", "DevExpress & IIS"],
  },
  {
    title: "Databases & Data Modeling",
    icon: Database,
    description: "Relational schema design, query optimization, and NoSQL solutions.",
    skills: ["Microsoft SQL Server", "PostgreSQL", "MongoDB", "MySQL", "Database Indexing", "Query Optimization", "Data Integrity"],
  },
  {
    title: "DevOps, Tools & Practices",
    icon: Wrench,
    description: "Modern development toolchains, version control, and containerization.",
    skills: ["Git & GitHub", "Docker", "Postman & API Testing", "Swagger / OpenAPI", "Linux & Windows Server", "CI/CD Pipelines", "Clean Code & Agile"],
  },
];

export function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="max-w-6xl mx-auto space-y-14">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase bg-primary/10 text-primary border border-primary/25 mb-4">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight text-foreground">
            Technologies & <span className="gradient-text">Tooling</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
            A battle-tested stack of modern frameworks, programming languages, and enterprise tools applied to production applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="p-6 sm:p-8 rounded-3xl border border-border/80 bg-card shadow-sm hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-heading text-foreground">
                        {group.title}
                      </h3>
                      <p className="text-xs text-muted">
                        {group.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-border/60">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-muted/10 text-foreground border border-border/60 hover:border-primary/40 transition-colors"
                    >
                      <Check className="w-3 h-3 text-primary" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
