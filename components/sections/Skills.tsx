"use client";

import { motion } from "framer-motion";
import { AnimatedText } from "../shared/AnimatedText";
import { SectionWrapper } from "../shared/SectionWrapper";

const allSkills = [
  { name: "React", icon: "⚛️", category: "Frontend" },
  { name: "Next.js", icon: "▲", category: "Frontend" },
  { name: "TypeScript", icon: "TS", category: "Frontend" },
  { name: "Tailwind CSS", icon: "🎨", category: "Frontend" },

  { name: "Node.js", icon: "⚙️", category: "Backend" },
  { name: "Express.js", icon: "🚀", category: "Backend" },
  { name: ".NET Core", icon: ".NET", category: "Backend" },
  { name: "REST APIs", icon: "🔌", category: "Backend" },

  { name: "MongoDB", icon: "🍃", category: "Database" },
  { name: "SQL Server", icon: "💾", category: "Database" },
  { name: "MySQL", icon: "🗄️", category: "Database" },
  { name: "PostgreSQL", icon: "🐘", category: "Database" },

  { name: "Git/GitHub", icon: "🐙", category: "Tools" },
  { name: "Docker", icon: "🐳", category: "Tools" },
  { name: "Postman", icon: "📮", category: "Tools" },
  { name: "Swagger", icon: "📖", category: "Tools" },
];

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50, y: 50 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <SectionWrapper id="skills">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            <span>Technical Expertise</span>
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            A diverse toolkit of modern technologies and frameworks I use to
            build scalable, elegant solutions
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "0px 0px -100px 0px" }}
        >
          {allSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants as any}
              className="relative"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative rounded-3xl p-6 bg-card border border-border/50 shadow-xl hover:shadow-2xl hover:border-primary/40 hover:shadow-primary/10 transition-all duration-300 min-h-[220px] flex flex-col items-center justify-center group">
                <motion.div
                  className="text-4xl mb-3 inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 text-white shadow-lg group-hover:shadow-primary/30"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  {skill.icon.length === 1 ? (
                    skill.icon
                  ) : (
                    <span className="text-xs font-bold text-primary">
                      {skill.icon}
                    </span>
                  )}
                </motion.div>

                <p className="font-semibold text-white text-center text-sm sm:text-base">
                  {skill.name}
                </p>

                <p className="text-xs text-primary mt-2 uppercase tracking-widest rounded-full bg-primary/10 px-3 py-1 border border-primary/30">
                  {skill.category}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 pt-12 border-t border-border/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5 }}
        ></motion.div>
      </div>
    </SectionWrapper>
  );
}
