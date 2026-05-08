'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from 'react-icons/fi';

export default function Hero() {
  const roles = ['Full-Stack Developer', 'LLM Engineer', 'AI Builder'];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-10"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            Disponible — Recherche de stage
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 tracking-tight"
          >
            <span className="text-slate-50">Steeve </span>
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              JuniX
            </span>
          </motion.h1>

          {/* Role badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            {roles.map((role) => (
              <span
                key={role}
                className="px-3 py-1.5 text-xs font-mono font-semibold text-slate-300 bg-[#0d1526] border border-white/10 rounded-lg"
              >
                {role}
              </span>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Je conçois des solutions logicielles robustes en intégrant la puissance des modèles LLMs — pour automatiser, assister et optimiser des processus réels.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
            >
              Voir mes projets
              <FiArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/cv/CV-Steeve-Junix.pdf"
              download="CV-Steeve-Junix.pdf"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-200 font-semibold rounded-xl transition-all duration-200"
            >
              <FiDownload size={17} />
              Télécharger CV
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex items-center justify-center gap-3"
          >
            <a
              href="https://github.com/stevkouakam"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-slate-500 hover:text-slate-200 hover:bg-white/5 rounded-xl transition-all"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/steeve-junix-044659284"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-slate-500 hover:text-slate-200 hover:bg-white/5 rounded-xl transition-all"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="mailto:kouakamsteve782@gmail.com"
              className="p-2.5 text-slate-500 hover:text-slate-200 hover:bg-white/5 rounded-xl transition-all"
              aria-label="Email"
            >
              <FiMail size={20} />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
