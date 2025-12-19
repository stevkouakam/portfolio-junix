'use client';

import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-purple-600/20 bg-slate-950/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Left - Name */}
          <div className="text-center md:text-left">
            <p className="text-white font-mono font-bold mb-1">
              Steeve JuniX
            </p>
            <p className="text-gray-500 font-mono text-xs">
              AI Software Developer
            </p>
          </div>

          {/* Center - Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/stevkouakam"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/steeve-junix-044659284"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="mailto:kouakamsteve782@gmail.com"
              className="p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <FiMail size={20} />
            </a>
          </div>

          {/* Right - Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-500 font-mono text-xs flex items-center gap-1">
              <span>© {new Date().getFullYear()} Made with</span>
              <FiHeart className="text-purple-400" size={12} />
              <span>by Steeve JuniX</span>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
