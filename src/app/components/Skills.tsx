'use client';

import { motion } from 'framer-motion';
import { FiTerminal } from 'react-icons/fi';
import {
  SiPython, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiTensorflow, SiDocker, SiGit, SiPostgresql,
  SiTailwindcss, SiNodedotjs
} from 'react-icons/si';
import { FiCode } from 'react-icons/fi';

export default function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: [
        { name: "Python", level: 90, icon: <SiPython /> },
        { name: "Java", level: 85, icon: <FiCode /> },
        { name: "TypeScript", level: 80, icon: <SiTypescript /> },
        { name: "JavaScript", level: 85, icon: <SiJavascript /> },
      ]
    },
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 85, icon: <SiReact /> },
        { name: "Next.js", level: 80, icon: <SiNextdotjs /> },
        { name: "Tailwind CSS", level: 90, icon: <SiTailwindcss /> },
        { name: "Node.js", level: 75, icon: <SiNodedotjs /> },
      ]
    },
    {
      category: "AI & Data",
      skills: [
        { name: "Machine Learning", level: 85, icon: <SiTensorflow /> },
        { name: "LLM Development", level: 80, icon: <SiPython /> },
        { name: "TensorFlow", level: 75, icon: <SiTensorflow /> },
        { name: "Data Analysis", level: 85, icon: <SiPython /> },
      ]
    },
    {
      category: "Tools & DevOps",
      skills: [
        { name: "Git", level: 90, icon: <SiGit /> },
        { name: "Docker", level: 75, icon: <SiDocker /> },
        { name: "PostgreSQL", level: 80, icon: <SiPostgresql /> },
        { name: "Linux", level: 85, icon: <FiTerminal /> },
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20 relative">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">

          {/* Terminal Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
              <FiTerminal size={16} />
              <span className="font-mono">~/skills</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-mono mb-4">
              $ cat competences.json
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-600"></div>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-slate-900/50 backdrop-blur-sm border border-purple-600/20 p-6"
              >
                {/* Category Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white font-mono mb-2">
                    <span className="text-purple-400">const</span> {category.category.toLowerCase()} = {'{'}
                  </h3>
                </div>

                {/* Skills */}
                <div className="space-y-6 ml-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      {/* Skill Name */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-purple-400 text-lg">
                            {skill.icon}
                          </span>
                          <span className="text-gray-300 font-mono text-sm">
                            {skill.name}:
                          </span>
                        </div>
                        <span className="text-purple-400 font-mono text-sm">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="relative h-2 bg-slate-800 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2 }}
                          className="h-full bg-gradient-to-r from-purple-600 to-blue-600 relative"
                        >
                          {/* Glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 blur-sm opacity-50" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Category Footer */}
                <div className="mt-6 font-mono text-sm text-gray-500">
                  {'}'};
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 p-6 bg-slate-900/30 border border-purple-600/10 text-center"
          >
            <p className="text-gray-400 font-mono text-sm">
              <span className="text-gray-600">// </span>
              En constante évolution et toujours prêt à apprendre de nouvelles technologies
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
