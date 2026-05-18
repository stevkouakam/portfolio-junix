'use client';

import { motion } from 'framer-motion';
import { FiCpu, FiCode, FiLayers } from 'react-icons/fi';

export default function About() {
  const areas = [
    {
      icon: <FiCpu size={18} />,
      title: 'IA & LLM Engineering',
      description: "Intégration de modèles de langage (OpenAI, Claude) pour créer des chatbots, assistants intelligents, systèmes RAG et automatisations basées sur l'IA.",
      color: 'text-violet-400',
      bg: 'bg-violet-500/10',
      border: 'border-violet-500/15',
      glow: 'hover:shadow-[0_4px_24px_rgba(139,92,246,0.12)]',
    },
    {
      icon: <FiCode size={18} />,
      title: 'Génie Logiciel',
      description: "Conception d'applications robustes basées sur des architectures propres (API, MVC, Clean Code) et des pratiques professionnelles (Git, tests, CI/CD).",
      color: 'text-indigo-400',
      bg: 'bg-indigo-500/10',
      border: 'border-indigo-500/15',
      glow: 'hover:shadow-[0_4px_24px_rgba(99,102,241,0.12)]',
    },
    {
      icon: <FiLayers size={18} />,
      title: 'Développement Web',
      description: "Développement d'interfaces performantes et d'APIs backend avec React, Vue, Next.js, Node et Flask, pour des produits web complets et scalables.",
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
              À propos
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
              Qui suis-je ?
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
                    Développeur logiciel passionné par l&apos;IA, je combine ingénierie logicielle rigoureuse et intégration de modèles LLMs pour construire des produits à fort impact. Avec 3 ans d&apos;expérience et plus de 15 projets livrés, je conçois des architectures propres, performantes et orientées résultats.
                  </p>
                  <p>
                    Je m&apos;épanouis dans la création d&apos;applications full-stack robustes et scalables, en exploitant la puissance des technologies d&apos;IA modernes — automatisation intelligente, assistants conversationnels, systèmes RAG — pour résoudre des problèmes réels.
                  </p>
                  <p>
                    Mon objectif : rejoindre une équipe technique ambitieuse pour contribuer à des projets d&apos;envergure, en apportant à la fois solidité technique et vision orientée IA.
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
              { label: 'Projets réalisés', value: '15+', color: 'from-indigo-400 to-violet-400' },
              { label: 'Technologies', value: '20+', color: 'from-violet-400 to-cyan-400' },
              { label: "Années d'exp.", value: '3+', color: 'from-cyan-400 to-blue-400' },
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
