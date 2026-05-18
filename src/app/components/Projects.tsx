'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiZap } from 'react-icons/fi';

export default function Projects() {
  const featured = {
    title: 'UGRam — Instagram-like Web App',
    description:
      "Full-stack social web application built in a 6-person team at Université Laval (GLO-3102). Participated in the full project lifecycle — requirements analysis, client-server architecture design, feature implementation, and CI/CD deployment. Developed the Angular frontend with reusable component architecture, TypeScript best practices, and a structured GitFlow workflow with systematic code reviews.",
    tags: ['C#', 'ASP.NET Core', 'Angular', 'TypeScript', 'Docker', 'CI/CD'],
    github: 'https://github.com/stevkouakam',
    demo: null,
    badge: 'Team Project',
    badgeSub: 'Université Laval · GLO-3102',
    accentFrom: 'from-pink-500',
    accentTo: 'to-orange-400',
    glow: 'hover:shadow-[0_8px_40px_rgba(236,72,153,0.18)]',
  };

  const aiProjects = [
    {
      title: 'UTasks — LLM Task Manager',
      description:
        "Task management app with an integrated AI assistant. The LLM agent (OpenAI) analyzes tasks, suggests priorities, generates subtasks, and answers contextual questions from the user.",
      tags: ['React', 'MongoDB', 'OpenAI', 'LLM', 'API'],
      github: 'https://github.com/stevkouakam',
      accentFrom: 'from-indigo-500',
      accentTo: 'to-violet-500',
      glow: 'hover:shadow-[0_8px_40px_rgba(99,102,241,0.18)]',
      badge: 'LLM',
    },
    {
      title: 'DocMind — Chat with your Documents',
      description:
        "RAG-powered web app that lets users upload PDFs or text files and ask questions in natural language. Documents are chunked, embedded with OpenAI, stored in ChromaDB, and retrieved via LlamaIndex — GPT-4o-mini then generates precise, context-grounded answers.",
      tags: ['Python', 'LlamaIndex', 'ChromaDB', 'OpenAI', 'RAG', 'Streamlit'],
      github: 'https://github.com/stevkouakam/DocMind',
      accentFrom: 'from-indigo-500',
      accentTo: 'to-fuchsia-500',
      glow: 'hover:shadow-[0_8px_40px_rgba(99,102,241,0.18)]',
      badge: 'RAG',
    },
    {
      title: 'AI Resume Analyzer',
      description:
        "AI-powered tool that analyzes resumes to detect skills, identify weak points, and generate personalized improvement suggestions. FastAPI backend with OpenAI for intelligent CV parsing and scoring.",
      tags: ['React', 'FastAPI', 'OpenAI', 'Python'],
      github: 'https://github.com/stevkouakam',
      accentFrom: 'from-violet-500',
      accentTo: 'to-fuchsia-500',
      glow: 'hover:shadow-[0_8px_40px_rgba(167,139,250,0.15)]',
      badge: null,
    },
    {
      title: 'AI Email Assistant Agent',
      description:
        "Autonomous AI agent built with FastAPI and OpenAI that reads incoming emails, understands context, and automatically drafts relevant replies — a full end-to-end agentic workflow.",
      tags: ['Python', 'FastAPI', 'OpenAI', 'AI Agent', 'Automation'],
      github: 'https://github.com/stevkouakam',
      accentFrom: 'from-emerald-500',
      accentTo: 'to-cyan-500',
      glow: 'hover:shadow-[0_8px_40px_rgba(16,185,129,0.15)]',
      badge: null,
    },
  ];

  const otherProjects = [
    {
      title: 'UFood',
      description:
        "Web app for restaurant discovery and sharing favorite spots with friends. REST API integration for geolocation-based search and collaborative list management.",
      tags: ['Vue.js', 'Vuetify', 'JavaScript', 'API REST'],
      github: 'https://github.com/stevkouakam',
      accentFrom: 'from-cyan-500',
      accentTo: 'to-blue-500',
      glow: 'hover:shadow-[0_8px_40px_rgba(6,182,212,0.12)]',
    },
    {
      title: 'CNC Cutting Software',
      description:
        "Custom software enabling a CNC cutting table (AVID 5x10) to function as a traditional panel saw. Optimized GCODE generation and intuitive interface for non-technical operators.",
      tags: ['Java', 'Swing', 'GCODE', 'UML'],
      github: 'https://github.com/stevkouakam',
      accentFrom: 'from-orange-500',
      accentTo: 'to-amber-500',
      glow: 'hover:shadow-[0_8px_40px_rgba(249,115,22,0.12)]',
    },
    {
      title: 'SplitUL',
      description:
        "Bill-splitting app for friends with group management, debt tracking, and reimbursements. Java backend with PostgreSQL persistence and a documented REST API.",
      tags: ['Java', 'PostgreSQL', 'Docker', 'API REST'],
      github: 'https://github.com/stevkouakam',
      accentFrom: 'from-sky-500',
      accentTo: 'to-indigo-500',
      glow: 'hover:shadow-[0_8px_40px_rgba(14,165,233,0.12)]',
    },
  ];

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

          {/* ── Featured: UTasks ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`group mb-10 transition-all duration-300 ${featured.glow}`}
          >
            <div className={`p-[1px] rounded-2xl bg-gradient-to-r ${featured.accentFrom} ${featured.accentTo}`}>
              <div className="bg-[#080f20] rounded-2xl p-7 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-block text-xs font-bold text-pink-300 bg-pink-500/15 border border-pink-500/25 px-3 py-1 rounded-lg tracking-wide uppercase">
                        Featured
                      </span>
                      <span className="text-xs text-slate-500 font-mono">{featured.badge}</span>
                      <span className="text-xs text-slate-600 font-mono">·</span>
                      <span className="text-xs text-slate-600 font-mono">{featured.badgeSub}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-50 mb-3 group-hover:text-white transition-colors">
                      {featured.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed mb-5 max-w-2xl">
                      {featured.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {featured.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1.5 text-xs font-mono text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-lg">
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
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── AI Projects ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 bg-violet-500/10 border border-violet-500/20 rounded-xl">
              <FiZap size={13} className="text-violet-400" />
              <span className="text-violet-400 text-xs font-semibold uppercase tracking-wider">AI Projects</span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-violet-500/20 to-transparent" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {aiProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative bg-[#0d1526] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 hover:-translate-y-1 transition-all duration-300 ${project.glow}`}
              >
                <div className={`h-px w-full bg-gradient-to-r ${project.accentFrom} ${project.accentTo}`} />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1 pr-2">
                      {project.badge && (
                        <span className="inline-block text-xs font-bold text-fuchsia-300 bg-fuchsia-500/10 border border-fuchsia-500/20 px-2 py-0.5 rounded-md mb-2">
                          {project.badge}
                        </span>
                      )}
                      <h3 className="text-base font-bold text-slate-100 group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="p-1.5 text-slate-600 hover:text-slate-300 hover:bg-white/5 rounded-lg transition-all shrink-0"
                      aria-label="GitHub"><FiGithub size={16} />
                    </a>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 text-xs font-mono text-slate-400 bg-white/5 border border-white/5 rounded-lg">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Other Projects ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="text-slate-600 text-xs font-semibold uppercase tracking-wider">Other projects</span>
            <div className="h-px flex-1 bg-white/5" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative bg-[#0d1526] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 hover:-translate-y-1 transition-all duration-300 ${project.glow}`}
              >
                <div className={`h-px w-full bg-gradient-to-r ${project.accentFrom} ${project.accentTo}`} />
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-base font-bold text-slate-100 group-hover:text-white transition-colors pr-2">
                      {project.title}
                    </h3>
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="p-1.5 text-slate-600 hover:text-slate-300 hover:bg-white/5 rounded-lg transition-all shrink-0"
                      aria-label="GitHub"><FiGithub size={16} />
                    </a>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 text-xs font-mono text-slate-500 bg-white/5 border border-white/5 rounded-lg">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* GitHub CTA */}
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
