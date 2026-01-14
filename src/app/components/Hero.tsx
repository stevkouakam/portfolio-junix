'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiTerminal, FiCode } from 'react-icons/fi';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">

          {/* Terminal Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
              <FiTerminal size={16} />
              <span className="font-mono">~/steeve-junix/portfolio</span>
            </div>
          </motion.div>

          {/* Contenu principal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-left"
          >
            {/* Code-style intro */}
            <div className="mb-6 font-mono text-sm text-gray-500">
              <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = {'{'}
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight ml-6">
              <span className="text-white font-mono">
                Steeve juniX
              </span>
            </h1>

            <div className="mb-8 font-mono text-base md:text-lg ml-6 space-y-2">
              <div>
                <span className="text-gray-500">  role: </span>
                <span className="text-green-400">&quot;Développeur logiciel | IA&quot;</span>,
              </div>
              <div>
                <span className="text-gray-500">  skills: [</span>
                <div className="ml-4 space-y-1">
                  <div><span className="text-yellow-400">&quot;Développement Full-Stack (React, Vue, Next.js, Node, Java, Python)&quot;</span>,</div>
                  <div><span className="text-yellow-400">&quot;IA & LLM Engineering (OpenAI, Claude, RAG, Prompt Engineering)&quot;</span>,</div>
                  <div><span className="text-yellow-400">&quot;API & Systèmes Backend&quot;</span>,</div>
                  <div><span className="text-yellow-400">&quot;Automatisation de processus par agents intelligents&quot;</span></div>

                </div>
                <span className="text-gray-500">  ],</span>
              </div>
              <div>
                <span className="text-gray-500">  Passion: </span>
                <span className="text-green-400">&quot;Je conçois les solutions logiciel robustes intégrant la puissances des modèles LLM pour automatiser, assister et optimiser des processus réels&quot;</span>
              </div>
            </div>
            <div className="mb-8 font-mono text-sm text-gray-500">
              {'}'};
            </div>

            {/* Command line style */}
            <div className="mb-8 font-mono text-sm">
              <span className="text-gray-600">$ </span>
              <span className="text-gray-400">ls ./contact/</span>
            </div>

            {/* Social Links - command output style */}
            <div className="flex flex-wrap gap-4 mb-8 ml-4">
              <a
                href="https://github.com/stevkouakam"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-mono text-sm"
              >
                <FiGithub size={18} />
                <span>github</span>
              </a>
              <a
                href="https://www.linkedin.com/in/steeve-junix-044659284"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-mono text-sm"
              >
                <FiLinkedin size={18} />
                <span>linkedin</span>
              </a>
              <a
                href="mailto:kouakamsteve782@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-mono text-sm"
              >
                <FiMail size={18} />
                <span>email</span>
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-12">
              <a
                href="#projects"
                className="group px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-mono text-sm transition-colors duration-200 flex items-center gap-2"
              >
                <FiCode size={16} />
                ./projets
              </a>
              <a
                href="/cv/CV-Steeve-Junix.pdf"
                download="CV-Steeve-Junix.pdf"
                className="px-6 py-3 bg-transparent border border-purple-600/40 hover:border-purple-600 text-purple-400 font-mono text-sm transition-colors duration-200 flex items-center gap-2"
              >
                <FiDownload size={16} />
                télécharger CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}