'use client';

import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#060b18]">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          <div className="text-center md:text-left">
            <p className="font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-0.5">
              Steeve JuniX
            </p>
            <p className="text-slate-600 text-xs">AI & Software Developer</p>
          </div>

          <div className="flex gap-2">
            <a
              href="https://github.com/stevkouakam"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-slate-300 hover:bg-white/5 rounded-lg transition-all"
              aria-label="GitHub"
            >
              <FiGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/steeve-junix-044659284"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-slate-300 hover:bg-white/5 rounded-lg transition-all"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href="mailto:kouakamsteve782@gmail.com"
              className="p-2 text-slate-600 hover:text-slate-300 hover:bg-white/5 rounded-lg transition-all"
              aria-label="Email"
            >
              <FiMail size={18} />
            </a>
          </div>

          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Steeve JuniX — Tous droits réservés
          </p>

        </div>
      </div>
    </footer>
  );
}
