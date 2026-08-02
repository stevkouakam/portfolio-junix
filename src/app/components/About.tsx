'use client';

import { motion } from 'framer-motion';
import { FiCpu, FiCode, FiLayers } from 'react-icons/fi';

export default function About() {
  const areas = [
    {
      icon: <FiCpu size={18} />,
      title: 'AI Engineering',
      description: "Integration of language models (OpenAI, Claude) to build chatbots, intelligent assistants, RAG systems, and AI-powered automations.",
      color: 'text-violet-400',
      bg: 'bg-violet-500/10',
      border: 'border-violet-500/15',
      glow: 'hover:shadow-[0_4px_24px_rgba(139,92,246,0.12)]',
    },
    {
      icon: <FiCode size={18} />,
      title: 'Software Engineering',
      description: "Building robust applications based on clean architectures (API, MVC, Clean Code) and professional practices (Git, testing, CI/CD).",
      color: 'text-indigo-400',
      bg: 'bg-indigo-500/10',
      border: 'border-indigo-500/15',
      glow: 'hover:shadow-[0_4px_24px_rgba(99,102,241,0.12)]',
    },
    {
      icon: <FiLayers size={18} />,
      title: 'Web Development',
      description: "Building performant UIs and backend APIs with React, Vue, Next.js, Node, and Flask — delivering complete, scalable web products.",
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/15',
      glow: 'hover:shadow-[0_4px_24px_rgba(6,182,212,0.12)]',
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-indigo-400 mb-3 block">
              About
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
              Who am I?
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-400" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 mb-12">

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Ligne verticale décorative */}
              <div className="flex gap-5">
                <div className="w-px bg-gradient-to-b from-indigo-500/60 via-violet-500/40 to-transparent shrink-0 mt-1" />
                <div className="space-y-5 text-slate-400 leading-relaxed">
                  <p>
                    Software developer with a deep passion for AI, I combine rigorous software engineering with LLM integration to build high-impact products. With 3+ years of experience and 15+ projects delivered, I design clean, performant, results-driven architectures.
                  </p>
                  <p>
                    I thrive building robust and scalable full-stack applications, leveraging the power of modern AI technologies intelligent automation, conversational assistants, RAG systems to solve real-world problems.
                  </p>
                  <p>
                    My goal: join an ambitious technical team to contribute to large-scale projects, bringing both solid engineering foundations and an AI-first mindset.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Expertise cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4"
            >
              {areas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className={`group flex gap-4 p-5 bg-[#0d1526] border rounded-2xl hover:bg-[#0f1a30] transition-all duration-300 ${area.border} ${area.glow}`}
                >
                  <div className={`shrink-0 w-10 h-10 rounded-xl ${area.bg} flex items-center justify-center ${area.color} group-hover:scale-110 transition-transform duration-300`}>
                    {area.icon}
                  </div>
                  <div>
                    <h3 className={`font-semibold mb-1.5 ${area.color}`}>{area.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{area.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { label: 'Projects delivered', value: '15+', color: 'from-indigo-400 to-violet-400' },
              { label: 'Technologies', value: '20+', color: 'from-violet-400 to-cyan-400' },
              { label: 'Years of exp.', value: '3+', color: 'from-cyan-400 to-blue-400' },
              { label: 'Passion', value: '100%', color: 'from-blue-400 to-indigo-400' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-[#0d1526] border border-white/5 rounded-2xl hover:border-white/10 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1.5`}>
                  {stat.value}
                </div>
                <div className="text-slate-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
