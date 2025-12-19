'use client';

import { motion } from 'framer-motion';
import { FiTerminal, FiGithub, FiExternalLink } from 'react-icons/fi';

export default function Projects() {
  const projects = [
    {
      title: "Projet 1",
      description: "Description de votre projet principal avec les technologies utilisées et les problèmes résolus",
      tags: ["Python", "Machine Learning", "TensorFlow"],
      github: "https://github.com/stevkouakam",
      demo: "#",
      status: "Production"
    },
    {
      title: "Projet 2",
      description: "Application web full-stack développée avec les dernières technologies",
      tags: ["React", "Next.js", "TypeScript", "Tailwind"],
      github: "https://github.com/stevkouakam",
      demo: "#",
      status: "En cours"
    },
    {
      title: "Projet 3",
      description: "Système d'intelligence artificielle utilisant des LLM pour automatiser des tâches complexes",
      tags: ["Python", "LLM", "API"],
      github: "https://github.com/stevkouakam",
      demo: "#",
      status: "Production"
    },
    {
      title: "Projet 4",
      description: "Backend robuste et scalable avec microservices architecture",
      tags: ["Java", "Spring Boot", "PostgreSQL"],
      github: "https://github.com/stevkouakam",
      demo: "#",
      status: "Production"
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 relative">
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
              <span className="font-mono">~/projects</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-mono mb-4">
              $ ls -la ./projets
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-600"></div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-slate-900/50 backdrop-blur-sm border border-purple-600/20 hover:border-purple-600/60 transition-all duration-300 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-xs font-mono text-gray-500">{project.status}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white font-mono group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-white transition-colors"
                        aria-label="GitHub"
                      >
                        <FiGithub size={20} />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-white transition-colors"
                        aria-label="Demo"
                      >
                        <FiExternalLink size={20} />
                      </a>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-mono bg-purple-600/10 text-purple-400 border border-purple-600/30 hover:bg-purple-600/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Command line style */}
                  <div className="mt-6 pt-4 border-t border-purple-600/20">
                    <div className="font-mono text-xs text-gray-600">
                      <span className="text-gray-500">$ </span>
                      <span className="text-gray-400">git clone {project.title.toLowerCase().replace(' ', '-')}.git</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More */}
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-purple-600/40 hover:border-purple-600 hover:bg-purple-600/10 text-purple-400 font-mono text-sm transition-all duration-300"
            >
              <FiGithub size={18} />
              Voir plus sur GitHub
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
