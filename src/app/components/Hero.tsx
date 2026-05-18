'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from 'react-icons/fi';

export default function Hero() {
  const roles = ['IA & Solfware Developer', 'Agentic IA', 'Full-Stack'];
  const techTags = ['Claude IA', 'React', 'RAG', 'Java', 'Python', 'API REST', 'LangChain', 'Node.js', 'genini', 'FlastApi'];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-20 items-center">

            {/* ── Left: texte ── */}
            <div className="text-center lg:text-left">

              {/* Badge disponibilité */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-10"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                Available — Looking for an internship
              </motion.div>



              {/* Titre principal */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-7xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight"
              >
                <span className="text-slate-50">Steeve </span>
                <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  juniX
                </span>
              </motion.h1>

              {/* Badges rôles */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap justify-center lg:justify-start gap-2 mb-7"
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
                className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10"
              >
                Passionate about software development and artificial intelligence, I build robust solution with real-world impact — combining IA engineering with the power of LLM to create solutions that automate, assist, and innovate.
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
              >
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5"
                >
                  View my projects
                  <FiArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/cv/cv_Steeve_Master1 (1).pdf"
                  download="CV-Steeve-Junix.pdf"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-200 font-semibold rounded-xl transition-all duration-200"
                >
                  <FiDownload size={17} />
                  Download Resume
                </a>
              </motion.div>

              {/* Réseaux */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="flex items-center justify-center lg:justify-start gap-2"
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

            {/* ── Right: carte profil flottante ── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Lueur derrière la carte */}
                <div className="absolute inset-[-20px] bg-gradient-to-br from-indigo-600/20 to-cyan-600/15 rounded-3xl blur-[60px] -z-10" />

                {/* Gradient border card */}
                <div className="p-[1px] rounded-2xl bg-gradient-to-br from-indigo-500/40 via-violet-500/25 to-cyan-500/40">
                  <div className="bg-[#080f20] rounded-2xl p-6 space-y-5">

                    <div className="h-px bg-white/5" />

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div className="p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/10">
                        <div className="text-xl font-bold text-indigo-400">15+</div>
                        <div className="text-xs text-slate-600 mt-0.5">Projets</div>
                      </div>
                      <div className="p-3 bg-violet-500/10 rounded-xl border border-violet-500/10">
                        <div className="text-xl font-bold text-violet-400">3+</div>
                        <div className="text-xs text-slate-600 mt-0.5">Années</div>
                      </div>
                      <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/10">
                        <div className="text-xl font-bold text-cyan-400">20+</div>
                        <div className="text-xs text-slate-600 mt-0.5">Techs</div>
                      </div>
                    </div>

                    <div className="h-px bg-white/5" />

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {techTags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-mono text-slate-400 bg-white/5 rounded-lg border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Statut */}
                    <div className="flex items-center gap-2.5 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                      <span className="text-emerald-400 text-xs font-medium">Available for an internship</span>
                    </div>
                  </div>
                </div>

                {/* Badge flottant haut-droite */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.9 }}
                  className="absolute -top-3 -right-3 px-3 py-1.5 bg-[#0d1526] border border-violet-500/40 rounded-xl shadow-lg shadow-violet-500/10"
                >
                  <span className="text-violet-400 text-xs font-mono">IA developer</span>
                </motion.div>

                {/* Badge flottant bas-gauche */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.0 }}
                  className="absolute -bottom-3 -left-3 px-3 py-1.5 bg-[#0d1526] border border-cyan-500/40 rounded-xl shadow-lg shadow-cyan-500/10"
                >
                  <span className="text-cyan-400 text-xs font-mono">Full-Stack Dev</span>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
