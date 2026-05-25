"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { SectionWrapper } from "../shared/SectionWrapper";

const projects = [
  {
    id: 1,
    title: "Human Resource Management System",
    description:
      "HR management system designed for efficient employee tracking and organizational workforce management.",
    tech: [".NET", "SQL Server", "DevExpress", "IIS"],
    category: "Enterprise",
    image: "/projects/hr-management.jpg",
  },
  {
    id: 2,
    title: "Stock Management System",
    description:
      "Real-time inventory management with stock tracking, alerts, and reporting capabilities.",
    tech: [".NET", "SQL Server", "DevExpress", "IIS"],
    category: "Enterprise",
    image: "/projects/inventory-system.jpg",
  },
  {
    id: 3,
    title: "Budget & Planning System",
    description:
      "Budgeting and financial planning application with real-time expense tracking and reporting analytics.",
    tech: ["Next.js", ".NetCore", "Tailwind", "TypeScript"],
    category: "BackEnd",
    image: "/projects/budget-planning.jpg",
  },
  {
    id: 4,
    title: "Digital Letter Verification System",
    description:
      "Secure document verification platform with digital signatures and authentication.",
    tech: [
      "Next.js",
      "MongoDB",
      "Tailwind",
      "TypeScript",
      "Node.js",
      "Express",
    ],
    category: "BackEnd",
    image: "/projects/letter-verification.jpg",
  },
  {
    id: 5,
    title: "Amhara Region Court Fee Management",
    description:
      "Court fee management system with payment processing and case tracking.",
    tech: ["Next.js", "Tailwind", "Node.js", "Docker", "MongoDB"],
    category: "Front End",
    image: "/projects/court-systems.jpg",
  },
  {
    id: 6,
    title: "Inventory Management Solution",
    description:
      "Advanced supply chain and inventory management with real-time analytics and reporting.",
    tech: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind", "TypeScript"],
    category: "Full-Stack",
    image: "/projects/inventory-solution.jpg",
  },
];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -100, y: 100 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <SectionWrapper id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            <span>Projects</span>
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            A selection of work showcasing my expertise in full-stack
            development and enterprise solutions
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2 }}
        ></motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "0px 0px -150px 0px" }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants as any}
              className="group relative h-full"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-full rounded-[2rem] overflow-hidden border border-border/40 bg-card/70 shadow-xl dark:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
                <div className="relative w-full h-52 overflow-hidden bg-gradient-to-br from-slate-950 to-black">
                  <div className="relative w-full h-72 md:h-80 overflow-hidden bg-gradient-to-br from-slate-950 to-black">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                  <motion.div
                    className="absolute top-4 right-4 bg-primary/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary-foreground shadow-lg shadow-primary/40"
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.08 }}
                  >
                    {project.category}
                  </motion.div>
                </div>

                <div className="flex-1 p-6 flex flex-col bg-card/50 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">
                    {project.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-muted mb-6 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-primary/15 text-primary font-semibold border border-primary/30"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:bg-primary/90"
                  >
                    View Project
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-foreground/80 text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </SectionWrapper>
  );
}
