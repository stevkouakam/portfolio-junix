'use client';

import { motion } from 'framer-motion';
import {
  SiSpring, SiJunit5, SiMongodb, SiPostgresql,
  SiReact, SiAngular, SiVuedotjs, SiHtml5, SiTypescript,
  SiDocker, SiGit, SiPython, SiLinux, SiNextdotjs, SiFastapi,
} from 'react-icons/si';
import { FiCode, FiServer, FiZap } from 'react-icons/fi';

export default function Skills() {
  const aiCoreSkills = [
    'OpenAI API', 'Anthropic Claude', 'LangChain', 'LangGraph',
    'RAG Systems', 'Prompt Engineering', 'Embeddings', 'Vector DBs',
    'LlamaIndex', 'ChromaDB',
  ];

  const agentStack = [
    'Autonomous Agents', 'Multi-Agent Systems', 'Function Calling',
    'OpenAI Assistants API', 'Agent Pipelines', 'FastAPI',
  ];

  const backendSkills = ['Java', 'Spring Boot', 'Python', 'Node.js', 'FastAPI', 'Flask', 'API REST', 'JPA / Hibernate'];
  const frontendSkills = ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'HTML5 / CSS3', 'Tailwind CSS', 'Framer Motion'];
  const devopsSkills = ['Docker', 'Git', 'CI/CD', 'Azure DevOps', 'PostgreSQL', 'MongoDB', 'Linux', 'Agile / Scrum'];

  const techIcons = [
    { icon: <SiPython />, label: 'Python', color: 'hover:text-yellow-400' },
    { icon: <SiFastapi />, label: 'FastAPI', color: 'hover:text-teal-400' },
    { icon: <SiReact />, label: 'React', color: 'hover:text-cyan-400' },
    { icon: <SiNextdotjs />, label: 'Next.js', color: 'hover:text-white' },
    { icon: <SiVuedotjs />, label: 'Vue.js', color: 'hover:text-green-400' },
    { icon: <SiAngular />, label: 'Angular', color: 'hover:text-red-400' },
    { icon: <SiTypescript />, label: 'TypeScript', color: 'hover:text-blue-400' },
    { icon: <SiHtml5 />, label: 'HTML5', color: 'hover:text-orange-400' },
    { icon: <SiSpring />, label: 'Spring Boot', color: 'hover:text-green-500' },
    { icon: <FiServer />, label: 'Node.js', color: 'hover:text-green-400' },
    { icon: <FiCode />, label: 'Java', color: 'hover:text-orange-500' },
    { icon: <SiDocker />, label: 'Docker', color: 'hover:text-blue-500' },
    { icon: <SiMongodb />, label: 'MongoDB', color: 'hover:text-green-600' },
    { icon: <SiPostgresql />, label: 'PostgreSQL', color: 'hover:text-blue-600' },
    { icon: <SiGit />, label: 'Git', color: 'hover:text-orange-500' },
    { icon: <SiLinux />, label: 'Linux', color: 'hover:text-yellow-300' },
    { icon: <SiJunit5 />, label: 'JUnit', color: 'hover:text-red-400' },
  ];

  return (
    <section id="skills" className="py-24 relative">
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
              Skills
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
              My tech stack
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-400" />
          </motion.div>

          {/* ── Two pillars: AI Agentic Engineering & Software Development ── */}
          <div className="grid md:grid-cols-2 gap-5 mb-5">

            {/* AI & Agentic Engineering */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="border border-violet-500/15 hover:border-violet-500/30 rounded-2xl p-7 transition-colors duration-300"
            >
              <div className="flex items-center gap-2.5 mb-1">
                <FiZap size={16} className="text-violet-400" />
                <h3 className="font-bold text-violet-200">AI & Agentic Engineering</h3>
              </div>
              <p className="text-slate-400 text-xs mb-6">LLMs · RAG · Multi-agent systems · Embeddings</p>

              <span className="text-[11px] font-mono uppercase tracking-wider text-violet-400/80 block mb-2.5">Core</span>
              <div className="flex flex-wrap gap-2 mb-6">
                {aiCoreSkills.map((skill) => (
                  <span key={skill} className="px-2.5 py-1 text-xs font-mono text-violet-200 border border-violet-500/25 rounded-md">
                    {skill}
                  </span>
                ))}
              </div>

              <span className="text-[11px] font-mono uppercase tracking-wider text-violet-400/80 block mb-2.5">Agent stack</span>
              <div className="flex flex-wrap gap-2">
                {agentStack.map((skill) => (
                  <span key={skill} className="px-2.5 py-1 text-xs font-mono text-violet-200 border border-violet-500/25 rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Software Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="border border-indigo-500/15 hover:border-indigo-500/30 rounded-2xl p-7 transition-colors duration-300"
            >
              <div className="flex items-center gap-2.5 mb-1">
                <FiCode size={16} className="text-indigo-400" />
                <h3 className="font-bold text-indigo-200">Software Development</h3>
              </div>
              <p className="text-slate-400 text-xs mb-6">Full-stack · Backend · Frontend</p>

              <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-400/80 block mb-2.5">Backend</span>
              <div className="flex flex-wrap gap-2 mb-6">
                {backendSkills.map((skill) => (
                  <span key={skill} className="px-2.5 py-1 text-xs font-mono text-indigo-200 border border-indigo-500/25 rounded-md">
                    {skill}
                  </span>
                ))}
              </div>

              <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-400/80 block mb-2.5">Frontend</span>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((skill) => (
                  <span key={skill} className="px-2.5 py-1 text-xs font-mono text-indigo-200 border border-indigo-500/25 rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>

          {/* ── DevOps & Tools — supporting row ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="border border-cyan-500/15 rounded-xl p-5 mb-6"
          >
            <span className="text-cyan-400/80 text-xs font-semibold uppercase tracking-wider block mb-3">DevOps & Tools</span>
            <div className="flex flex-wrap gap-2">
              {devopsSkills.map((skill) => (
                <span key={skill} className="px-2.5 py-1 text-xs font-mono text-cyan-200 border border-cyan-500/25 rounded-md">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ── Tech icons bar ── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 border border-white/15 rounded-2xl"
          >
            <p className="text-slate-500 text-xs text-center mb-5 uppercase tracking-[0.15em] font-semibold">
              Technologies I work with
            </p>
            <div className="flex flex-wrap justify-center gap-5 text-slate-400">
              {techIcons.map(({ icon, label, color }, i) => (
                <span key={i} title={label} className={`text-2xl transition-colors duration-200 cursor-default ${color}`}>
                  {icon}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
