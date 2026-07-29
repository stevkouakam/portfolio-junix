'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiZap } from 'react-icons/fi';

export default function Projects() {
  // Single consistent accent per section — keeps the grid visually calm
  // instead of every card carrying its own one-off gradient.
  const FEATURED_ACCENT = { from: 'from-indigo-500', to: 'to-cyan-400', glow: 'hover:shadow-[0_8px_40px_rgba(99,102,241,0.18)]' };
  const AI_ACCENT = { from: 'from-indigo-500', to: 'to-violet-500', glow: 'hover:shadow-[0_8px_40px_rgba(99,102,241,0.16)]' };
  const OTHER_ACCENT = { from: 'from-slate-500', to: 'to-cyan-500', glow: 'hover:shadow-[0_8px_30px_rgba(100,116,139,0.12)]' };

  const featured = {
    title: 'UGRam — Instagram-like Web App',
    description:
      "Full-stack social web application built in a 6-person team at Université Laval (GLO-3102). Participated in the full project lifecycle — requirements analysis, client-server architecture design, feature implementation, and CI/CD deployment. Developed the Angular frontend with reusable component architecture, TypeScript best practices, and a structured GitFlow workflow with systematic code reviews.",
    tags: ['C#', 'ASP.NET Core', 'Angular', 'TypeScript', 'Docker', 'CI/CD'],
    github: 'https://github.com/stevkouakam',
    demo: null,
    badge: 'Team Project',
    badgeSub: 'Université Laval · GLO-3102',
  };

  const aiProjects = [
    {
      title: 'UTasks — LLM Task Manager',
      description:
        "Task management app with an integrated AI assistant. The LLM agent (OpenAI) analyzes tasks, suggests priorities, generates subtasks, and answers contextual questions from the user.",
      tags: ['React', 'MongoDB', 'OpenAI', 'LLM', 'API'],
      github: 'https://github.com/stevkouakam',
      badge: 'LLM',
    },
    {
      title: 'DocMind — Chat with your Documents',
      description:
        "RAG-powered web app that lets users upload PDFs or text files and ask questions in natural language. Documents are chunked, embedded with OpenAI, stored in ChromaDB, and retrieved via LlamaIndex — GPT-4o-mini then generates precise, context-grounded answers.",
      tags: ['Python', 'LlamaIndex', 'ChromaDB', 'OpenAI', 'RAG', 'Streamlit'],
      github: 'https://github.com/stevkouakam/DocMind',
      badge: 'RAG',
    },
    {
      title: 'AI Resume Analyzer',
      description:
        "AI-powered tool that analyzes resumes to detect skills, identify weak points, and generate personalized improvement suggestions. FastAPI backend with OpenAI for intelligent CV parsing and scoring.",
      tags: ['React', 'FastAPI', 'OpenAI', 'Python'],
      github: 'https://github.com/stevkouakam',
      badge: 'NLP',
    },
    {
      title: 'AI Email Assistant Agent',
      description:
        "Autonomous AI agent built with FastAPI and OpenAI that reads incoming emails, understands context, and automatically drafts relevant replies — a full end-to-end agentic workflow.",
      tags: ['Python', 'FastAPI', 'OpenAI', 'AI Agent', 'Automation'],
      github: 'https://github.com/stevkouakam',
      badge: 'Agent',
    },
  ];

  const otherProjects = [
    {
      title: 'UFood',
      description:
        "Web app for restaurant discovery and sharing favorite spots with friends. REST API integration for geolocation-based search and collaborative list management.",
      tags: ['Vue.js', 'Vuetify', 'JavaScript', 'API REST'],
      github: 'https://github.com/stevkouakam',
    },
    {
      title: 'CNC Cutting Software',
      description:
        "Custom software enabling a CNC cutting table (AVID 5x10) to function as a traditional panel saw. Optimized GCODE generation and intuitive interface for non-technical operators.",
      tags: ['Java', 'Swing', 'GCODE', 'UML'],
      github: 'https://github.com/stevkouakam',
    },
    {
      title: 'SplitUL',
      description:
        "Bill-splitting app for friends with group management, debt tracking, and reimbursements. Java backend with PostgreSQL persistence and a documented REST API.",
      tags: ['Java', 'PostgreSQL', 'Docker', 'API REST'],
      github: 'https://github.com/stevkouakam',
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
            className={`group mb-10 transition-all duration-300 ${FEATURED_ACCENT.glow}`}
          >
            <div className={`p-[1px] rounded-2xl bg-gradient-to-r ${FEATURED_ACCENT.from} ${FEATURED_ACCENT.to}`}>
              <div className="bg-[#080f20] rounded-2xl p-7 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-block text-xs font-bold text-indigo-300 bg-indigo-500/15 border border-indigo-500/25 px-3 py-1 rounded-lg tracking-wide uppercase">
                        Featured
                      </span>
                      <span className="text-xs text-slate-500 font-mono">{featured.badge}</span>
                      <span className="text-xs text-slate-600 font-mono">·</span>
                      <span className="text-xs text-slate-600 font-mono">{featured.badgeSub}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-50 mb-3 group-hover:text-white transition-colors">
                      {featured.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed mb-5">
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
                  <div className="flex md:flex-col gap-3 shrink-0 md:w-48">
                    <div className="p-4 bg-white/[0.03] border border-white/5 rounded-xl space-y-3 flex-1 md:flex-none">
                      <p className="text-slate-600 text-[10px] font-semibold uppercase tracking-widest">Project details</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                          <span className="text-slate-400 text-xs">Team of 6 developers</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                          <span className="text-slate-400 text-xs">Angular frontend lead</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                          <span className="text-slate-400 text-xs">GitFlow & code reviews</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                          <span className="text-slate-400 text-xs">CI/CD pipeline</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                          <span className="text-slate-400 text-xs">Technical documentation</span>
                        </div>
                      </div>
                    </div>
                    <a
                      href={featured.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-300 text-sm font-medium rounded-xl transition-all"
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10 items-stretch">
            {aiProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative flex flex-col h-full bg-[#0d1526] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 hover:-translate-y-1 transition-all duration-300 ${AI_ACCENT.glow}`}
              >
                <div className={`h-px w-full bg-gradient-to-r ${AI_ACCENT.from} ${AI_ACCENT.to}`} />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <span className="inline-block text-xs font-bold text-violet-300 bg-violet-500/10 border border-violet-500/20 px-2 py-0.5 rounded-md">
                      {project.badge}
                    </span>
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="p-1.5 text-slate-600 hover:text-slate-300 hover:bg-white/5 rounded-lg transition-all shrink-0"
                      aria-label="GitHub"><FiGithub size={16} />
                    </a>
                  </div>
                  <h3 className="text-base font-bold text-slate-100 group-hover:text-white transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
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

          <div className="grid md:grid-cols-3 gap-5 items-stretch">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative flex flex-col h-full bg-[#0d1526] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 hover:-translate-y-1 transition-all duration-300 ${OTHER_ACCENT.glow}`}
              >
                <div className={`h-px w-full bg-gradient-to-r ${OTHER_ACCENT.from} ${OTHER_ACCENT.to}`} />
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-base font-bold text-slate-100 group-hover:text-white transition-colors pr-2">
                      {project.title}
                    </h3>
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="p-1.5 text-slate-600 hover:text-slate-300 hover:bg-white/5 rounded-lg transition-all shrink-0"
                      aria-label="GitHub"><FiGithub size={16} />
                    </a>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
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
