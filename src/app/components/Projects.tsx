'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

export default function Projects() {
  const projects = [
    {
      title: 'UTasks — LLM Task Manager',
      description:
        "Task management app with an integrated AI assistant. The LLM agent (OpenAI) analyzes tasks, suggests priorities, generates subtasks, and answers contextual questions from the user.",
      tags: ['React', 'MongoDB', 'OpenAI', 'LLM', 'API'],
      github: 'https://github.com/stevkouakam',
      demo: null,
      accentFrom: 'from-indigo-500',
      accentTo: 'to-violet-500',
      glow: 'hover:shadow-[0_8px_40px_rgba(99,102,241,0.18)]',
      featured: true,
    },
    {
      title: 'Logiciel de découpe CNC',
      description:
        "Custom software enabling a CNC cutting table (AVID 5x10) to function as a traditional panel saw. Optimized GCODE file generation and an intuitive interface for non-technical operators.",
      tags: ['Java', 'Swing', 'GCODE', 'UML'],
      github: 'https://github.com/stevkouakam',
      demo: null,
      accentFrom: 'from-violet-500',
      accentTo: 'to-indigo-500',
      glow: 'hover:shadow-[0_8px_40px_rgba(139,92,246,0.15)]',
      featured: false,
    },
    {
      title: 'UFood',
      description:
        "Web app for restaurant discovery and sharing favorite spots with friends. REST API integration for geolocation-based search and real-time collaborative list management.",
      tags: ['Vue.js', 'Vuetify', 'JavaScript', 'API REST'],
      github: 'https://github.com/stevkouakam',
      demo: null,
      accentFrom: 'from-cyan-500',
      accentTo: 'to-blue-500',
      glow: 'hover:shadow-[0_8px_40px_rgba(6,182,212,0.15)]',
      featured: false,
    },
    {
      title: 'SplitUL',
      description:
        "Bill-splitting app for friends with group management, debt tracking, and reimbursements. Java backend with PostgreSQL persistence and a documented REST API.",
      tags: ['Java', 'PostgreSQL', 'Docker', 'API REST'],
      github: 'https://github.com/stevkouakam',
      demo: null,
      accentFrom: 'from-emerald-500',
      accentTo: 'to-cyan-500',
      glow: 'hover:shadow-[0_8px_40px_rgba(16,185,129,0.15)]',
      featured: false,
    },
  ];

  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-indigo-400 mb-3 block">
              Projects
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
              What I&apos;ve built
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-400" />
          </motion.div>

          {/* Projet featured — pleine largeur */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`group relative mb-6 transition-all duration-300 ${featured.glow}`}
          >
            {/* Gradient border */}
            <div className={`p-[1px] rounded-2xl bg-gradient-to-r ${featured.accentFrom} ${featured.accentTo}`}>
              <div className="bg-[#080f20] rounded-2xl p-7 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-block text-xs font-bold text-indigo-300 bg-indigo-500/15 border border-indigo-500/25 px-3 py-1 rounded-lg tracking-wide uppercase">
                        Featured
                      </span>
                      <span className="text-xs text-slate-600 font-mono">AI Project</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-50 mb-3 group-hover:text-white transition-colors">
                      {featured.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed mb-5 max-w-2xl">
                      {featured.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {featured.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 text-xs font-mono text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex md:flex-col gap-2 shrink-0">
                    <a
                      href={featured.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-300 text-sm font-medium rounded-xl transition-all"
                    >
                      <FiGithub size={15} />
                      View on GitHub
                    </a>
                    {featured.demo && (
                      <a
                        href={featured.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 text-indigo-300 text-sm font-medium rounded-xl transition-all"
                      >
                        <FiExternalLink size={15} />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Autres projets — grille 3 colonnes */}
          <div className="grid md:grid-cols-3 gap-5">
            {rest.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative bg-[#0d1526] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 hover:-translate-y-1 transition-all duration-300 ${project.glow}`}
              >
                {/* Ligne d'accent */}
                <div className={`h-px w-full bg-gradient-to-r ${project.accentFrom} ${project.accentTo}`} />

                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-base font-bold text-slate-100 group-hover:text-white transition-colors pr-2">
                      {project.title}
                    </h3>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-slate-600 hover:text-slate-300 hover:bg-white/5 rounded-lg transition-all shrink-0"
                      aria-label="GitHub"
                    >
                      <FiGithub size={16} />
                    </a>
                  </div>

                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-mono text-slate-500 bg-white/5 border border-white/5 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA GitHub */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/stevkouakam"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-300 font-medium rounded-xl transition-all duration-200"
            >
              <FiGithub size={17} />
              View all my projects on GitHub
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
