'use client';

import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const socialLink =
  'size-10 inline-flex items-center justify-center rounded-full border border-line text-subtle hover:text-foreground hover:border-line-strong transition-colors duration-200';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-line">
      <div className="mx-auto w-full max-w-content px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-12">

          <div className="text-center md:text-left">
            <p className="flex items-center justify-center md:justify-start gap-2.5 font-display text-lg font-semibold tracking-tight text-foreground mb-1">
              <span aria-hidden className="size-2.5 rounded-full bg-accent shadow-[0_0_14px_3px_rgb(124_131_255/0.55)]" />
              Steeve JuniX
            </p>
            <p className="text-sm text-subtle">AI & Software Developer</p>
          </div>

          <div className="flex gap-2">
            <a
              href="https://github.com/stevkouakam"
              target="_blank"
              rel="noopener noreferrer"
              className={socialLink}
              aria-label="GitHub"
            >
              <FiGithub size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/steeve-junix-044659284"
              target="_blank"
              rel="noopener noreferrer"
              className={socialLink}
              aria-label="LinkedIn"
            >
              <FiLinkedin size={16} />
            </a>
            <a
              href="mailto:kouakamsteve782@gmail.com"
              className={socialLink}
              aria-label="Email"
            >
              <FiMail size={16} />
            </a>
          </div>
        </div>

        <div className="border-t border-line py-6 text-center md:text-left">
          <p className="text-subtle text-xs">
            © {new Date().getFullYear()} Steeve JuniX — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
