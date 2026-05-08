'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

export default function Projects() {
  const projects = [
    {
      title: 'Logiciel de découpe CNC',
      description:
        "Logiciel personnalisé permettant d'utiliser une table de découpe CNC (AVID 5x10) comme une scie à panneaux traditionnelle. Génération de fichiers GCODE optimisés, interface intuitive pour opérateurs non-techniques.",
      tags: ['Java', 'Swing', 'GCODE', 'UML'],
      github: 'https://github.com/stevkouakam',
      demo: null,
      accent: 'from-violet-500 to-indigo-500',
    },
    {
      title: 'UFood',
      description:
        "Application web de localisation de restaurants et de partage de favoris entre amis. Intégration d'une API REST pour la recherche géolocalisée et gestion des listes collaboratives en temps réel.",
      tags: ['Vue.js', 'Vuetify', 'JavaScript', 'API REST'],
      github: 'https://github.com/stevkouakam',
      demo: null,
      accent: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'UTasks — LLM Task Manager',
      description:
        "Application de gestion de tâches avec assistant IA intégré. L'agent LLM (OpenAI) analyse les tâches, propose des priorités, génère des sous-tâches et répond aux questions contextuelles de l'utilisateur.",
      tags: ['React', 'MongoDB', 'OpenAI', 'LLM', 'API'],
      github: 'https://github.com/stevkouakam',
      demo: null,
      accent: 'from-indigo-500 to-purple-500',
      featured: true,
    },
    {
      title: 'SplitUL',
      description:
        "Application de partage de factures entre amis avec gestion des groupes, des dettes et des remboursements. Backend Java avec persistance PostgreSQL et API REST documentée.",
      tags: ['Java', 'PostgreSQL', 'Docker', 'API REST'],
      github: 'https://github.com/stevkouakam',
      demo: null,
      accent: 'from-emerald-500 to-cyan-500',
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
              Projets
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
              Ce que j&apos;ai construit
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-400" />
          </motion.div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative bg-[#0d1526] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 hover:-translate-y-1 transition-all duration-300 ${
                  project.featured ? 'ring-1 ring-indigo-500/25' : ''
                }`}
              >
                {/* Accent top line */}
                <div className={`h-px w-full bg-gradient-to-r ${project.accent}`} />

                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      {project.featured && (
                        <span className="inline-block text-xs font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded-lg mb-2">
                          Featured
                        </span>
                      )}
                      <h3 className="text-lg font-bold text-slate-100 group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex gap-1 shrink-0 ml-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-500 hover:text-slate-200 hover:bg-white/5 rounded-lg transition-all"
                        aria-label="GitHub"
                      >
                        <FiGithub size={18} />
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-slate-500 hover:text-slate-200 hover:bg-white/5 rounded-lg transition-all"
                          aria-label="Demo"
                        >
                          <FiExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2.5 py-1 text-xs font-mono text-slate-400 bg-white/5 border border-white/5 rounded-lg"
                      >
                        {tag}
                      </span>
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
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/stevkouakam"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-300 font-medium rounded-xl transition-all duration-200"
            >
              <FiGithub size={18} />
              Voir tous mes projets sur GitHub
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
