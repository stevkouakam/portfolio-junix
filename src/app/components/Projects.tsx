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

          {/* ── Featured: UGRam ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="border border-white/10 hover:border-white/20 rounded-2xl p-8 md:p-10 transition-colors duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
                <div className="flex-1 max-w-2xl">
                  <div className="flex items-center gap-2 mb-4 text-xs">
                    <span className="text-slate-300 font-semibold uppercase tracking-wider">Featured</span>
                    <span className="text-slate-600">·</span>
                    <span className="text-slate-500 notranslate" translate="no">{featured.badgeSub}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-50 mb-4 notranslate" translate="no">
                    {featured.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-7">
                    {featured.description}
                  </p>
                  <div className="flex flex-wrap gap-2 notranslate" translate="no">
                    {featured.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 text-xs font-mono text-slate-400 border border-white/10 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="shrink-0 md:w-56 space-y-6">
                  <ul className="space-y-2.5">
                    <li className="text-slate-400 text-sm">Team of 6 developers</li>
                    <li className="text-slate-400 text-sm">Angular frontend lead</li>
                    <li className="text-slate-400 text-sm">GitFlow & code reviews</li>
                    <li className="text-slate-400 text-sm">CI/CD pipeline</li>
                    <li className="text-slate-400 text-sm">Technical documentation</li>
                  </ul>
                  <a
                    href={featured.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    <FiGithub size={15} />
                    View on GitHub
                  </a>
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
            className="flex items-center gap-3 mb-6"
          >
            <div className="flex items-center gap-1.5">
              <FiZap size={13} className="text-slate-500" />
              <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">AI Projects</span>
            </div>
            <div className="h-px flex-1 bg-white/10" />
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5 mb-14 items-stretch">
            {aiProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group flex flex-col h-full border border-white/10 hover:border-white/25 rounded-xl p-6 transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-400/80 notranslate" translate="no">
                    {project.badge}
                  </span>
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="text-slate-600 hover:text-slate-300 transition-colors shrink-0"
                    aria-label="GitHub"><FiGithub size={16} />
                  </a>
                </div>
                <h3 className="text-base font-bold text-slate-100 group-hover:text-white transition-colors mb-2 notranslate" translate="no">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-auto notranslate" translate="no">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 text-[11px] font-mono text-slate-500 border border-white/10 rounded">{tag}</span>
                  ))}
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
            className="flex items-center gap-3 mb-6"
          >
            <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Other projects</span>
            <div className="h-px flex-1 bg-white/10" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5 items-stretch">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group flex flex-col h-full border border-white/10 hover:border-white/25 rounded-xl p-6 transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-base font-bold text-slate-100 group-hover:text-white transition-colors pr-2 notranslate" translate="no">
                    {project.title}
                  </h3>
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="text-slate-600 hover:text-slate-300 transition-colors shrink-0"
                    aria-label="GitHub"><FiGithub size={16} />
                  </a>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-auto notranslate" translate="no">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 text-[11px] font-mono text-slate-500 border border-white/10 rounded">{tag}</span>
                  ))}
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
