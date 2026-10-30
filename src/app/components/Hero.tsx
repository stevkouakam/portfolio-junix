'use client';

import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from 'react-icons/fi';
import Button from './ui/Button';
import Reveal from './ui/Reveal';
import Tag from './ui/Tag';

const socialLink = 'p-2 -m-0.5 text-subtle hover:text-foreground transition-colors duration-200';

export default function Hero() {
  const roles = ['AI & Software Developer', 'Agentic AI', 'Full-Stack'];
  const techTags = ['Claude', 'React', 'RAG', 'Java', 'Python', 'API REST', 'LangChain', 'Node.js', 'Gemini', 'FastAPI'];

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center pt-32 pb-24">
      <div className="mx-auto w-full max-w-content px-6">
        <div className="grid lg:grid-cols-[1fr_340px] gap-16 lg:gap-20 items-center">

          {/* ── Left: texte ── */}
          <div className="text-center lg:text-left">

            {/* Badge disponibilité */}
            <Reveal trigger="mount">
              <div className="inline-flex items-center gap-2.5 h-8 pl-3 pr-4 rounded-full border border-line bg-surface/70 text-sm text-muted mb-10">
                <span className="relative flex size-2 shrink-0">
                  <span className="absolute inset-0 rounded-full bg-success opacity-60 animate-ping" />
                  <span className="relative size-2 rounded-full bg-success" />
                </span>
                Available — Looking for an internship
              </div>
            </Reveal>

            {/* Titre principal */}
            <Reveal trigger="mount" delay={0.08} y={16}>
              <h1 className="text-display font-semibold mb-8">
                <span className="text-foreground">Steeve </span>
                <span className="text-accent-hover">
                  juniX
                </span>
              </h1>
            </Reveal>

            {/* Badges rôles */}
            <Reveal trigger="mount" delay={0.16}>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
                {roles.map((role) => (
                  <Tag key={role}>
                    {role}
                  </Tag>
                ))}
              </div>
            </Reveal>

            {/* Description */}
            <Reveal trigger="mount" delay={0.24}>
              <p className="text-lead text-muted max-w-xl mx-auto lg:mx-0 mb-10">
                Passionate about software development and artificial intelligence, I build robust solutions with real-world impact — combining AI engineering with the power of LLMs to create solutions that automate, assist, and innovate.
              </p>
            </Reveal>

            {/* CTA */}
            <Reveal trigger="mount" delay={0.32}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-12">
                <Button
                  href="#projects"
                >
                  View my projects
                  <FiArrowRight size={16} className="transition-transform duration-300 ease-soft group-hover:translate-x-0.5" />
                </Button>
                <Button
                  href="/cv/Cv_steeve_master-1.pdf"
                  download="CV-Steeve-Junix.pdf"
                  variant="secondary"
                >
                  <FiDownload size={16} />
                  Download Resume
                </Button>
              </div>
            </Reveal>

            {/* Réseaux */}
            <Reveal trigger="mount" delay={0.4} y={0}>
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <a
                  href="https://github.com/stevkouakam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialLink}
                  aria-label="GitHub"
                >
                  <FiGithub size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/steeve-junix-044659284"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialLink}
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={18} />
                </a>
                <a
                  href="mailto:kouakamsteve782@gmail.com"
                  className={socialLink}
                  aria-label="Email"
                >
                  <FiMail size={18} />
                </a>
              </div>
            </Reveal>
          </div>

          {/* ── Right: carte profil ── */}
          <Reveal trigger="mount" delay={0.45} y={20} className="hidden lg:block">
            <div className="relative">
              <div className="rounded-card border border-line bg-surface/70 backdrop-blur-sm">

                {/* Stats */}
                <div className="grid grid-cols-3 divide-x divide-line border-b border-line">
                  <div className="px-4 py-5">
                    <div className="text-2xl font-semibold tracking-tight text-foreground">15+</div>
                    <div className="font-mono text-[0.6875rem] uppercase tracking-wider text-subtle mt-1">Projets</div>
                  </div>
                  <div className="px-4 py-5">
                    <div className="text-2xl font-semibold tracking-tight text-foreground">3+</div>
                    <div className="font-mono text-[0.6875rem] uppercase tracking-wider text-subtle mt-1">Années</div>
                  </div>
                  <div className="px-4 py-5">
                    <div className="text-2xl font-semibold tracking-tight text-foreground">20+</div>
                    <div className="font-mono text-[0.6875rem] uppercase tracking-wider text-subtle mt-1">Techs</div>
                  </div>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 p-5 border-b border-line">
                  {techTags.map((tag) => (
                    <Tag key={tag}>
                      {tag}
                    </Tag>
                  ))}
                </div>

                {/* Statut */}
                <div className="flex items-center gap-2.5 px-5 py-4">
                  <span className="size-1.5 rounded-full bg-success shrink-0" />
                  <span className="text-success/90 text-xs font-medium">Available for an internship</span>
                </div>
              </div>

              {/* Badge flottant haut-droite */}
              <div className="absolute -top-3 right-5 px-2.5 h-6 inline-flex items-center rounded-md border border-line-strong bg-surface-raised">
                <span className="text-muted text-[0.6875rem] font-mono">AI Developer</span>
              </div>

              {/* Badge flottant bas-gauche */}
              <div className="absolute -bottom-3 left-5 px-2.5 h-6 inline-flex items-center rounded-md border border-line-strong bg-surface-raised">
                <span className="text-muted text-[0.6875rem] font-mono">Full-Stack Dev</span>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
