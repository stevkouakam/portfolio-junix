'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight, FiCpu, FiCornerDownLeft } from 'react-icons/fi';
import Button from './ui/Button';
import Reveal from './ui/Reveal';
import Tag from './ui/Tag';
import { EASE_SOFT } from './ui/motion';
import { openChatBot, suggestedQuestions } from '@/lib/chatbot-suggestions';

const socialLink =
  'size-10 inline-flex items-center justify-center rounded-full border border-line text-muted hover:text-foreground hover:border-line-strong hover:bg-surface-raised/60 transition-colors';

// Ligne du nom : glisse depuis un masque (seul moment orchestré de la page)
function NameLine({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        className="block"
        initial={{ y: '105%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease: EASE_SOFT }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const roles = ['Développeur logiciel', 'IA agentique & LLM', 'Full-Stack'];
  const techTags = ['Python', 'Java', 'TypeScript', 'LangGraph', 'LangChain', 'RAG', 'OpenAI', 'Claude', 'FastAPI', 'Spring Boot', 'React', 'Docker'];

  return (
    <section id="home" className="relative min-h-[100svh] flex flex-col pt-32 md:pt-40">
      <div className="mx-auto w-full max-w-content px-6 flex-1 flex items-center">
        <div className="w-full grid lg:grid-cols-[1.15fr_1fr] gap-14 lg:gap-16 items-center">

          {/* ── Left: texte ── */}
          <div>

            {/* Badge disponibilité */}
            <Reveal trigger="mount">
              <div className="inline-flex items-center gap-2.5 h-9 pl-3.5 pr-4 rounded-full glass border border-line text-sm text-muted mb-10">
                <span className="relative flex size-2 shrink-0">
                  <span className="absolute inset-0 rounded-full bg-success animate-beacon" />
                  <span className="relative size-2 rounded-full bg-success" />
                </span>
                Disponible — À la recherche d’un stage
              </div>
            </Reveal>

            {/* Titre principal */}
            <h1 className="text-display text-foreground mb-8">
              <NameLine delay={0.1}>
                <span className="font-bold">Steeve </span>
              </NameLine>
              <NameLine delay={0.22}>
                <span className="font-extralight text-foreground/90">
                  juniX
                </span>
              </NameLine>
            </h1>

            {/* Badges rôles */}
            <Reveal trigger="mount" delay={0.4}>
              <div className="flex flex-wrap gap-2 mb-8">
                {roles.map((role) => (
                  <Tag key={role}>
                    {role}
                  </Tag>
                ))}
              </div>
            </Reveal>

            {/* Description */}
            <Reveal trigger="mount" delay={0.48}>
              <p className="text-lead text-muted max-w-xl mb-10">
                Développeur logiciel passionné d’IA agentique, je conçois des agents LLM capables de raisonner, d’utiliser des outils et d’exploiter vos données — puis je les intègre dans des applications full-stack robustes, testées et prêtes pour la production.
              </p>
            </Reveal>

            {/* CTA */}
            <Reveal trigger="mount" delay={0.56}>
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  href="#projects"
                >
                  Voir mes projets
                  <FiArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                </Button>
                <Button
                  href="/cv/Cv_steeve_master-1.pdf"
                  download="CV-Steeve-Junix.pdf"
                  variant="secondary"
                >
                  <FiDownload size={16} />
                  Télécharger mon CV
                </Button>

                {/* Réseaux */}
                <div className="flex items-center gap-2 sm:ml-2">
                  <a
                    href="https://github.com/stevkouakam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={socialLink}
                    aria-label="GitHub"
                  >
                    <FiGithub size={17} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/steeve-junix-044659284"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={socialLink}
                    aria-label="LinkedIn"
                  >
                    <FiLinkedin size={17} />
                  </a>
                  <a
                    href="mailto:kouakamsteve782@gmail.com"
                    className={socialLink}
                    aria-label="Courriel"
                  >
                    <FiMail size={17} />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ── Right: console juniXbot ── */}
          <Reveal trigger="mount" delay={0.7} y={24}>
            <div className="relative">
              {/* Lueur derrière la console */}
              <div aria-hidden className="absolute -inset-10 -z-10 rounded-full bg-accent/15 blur-[90px]" />

              <div className="ring-gradient glass rounded-tile">

                {/* En-tête */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-line">
                  <div className="flex items-center gap-3">
                    <span className="size-9 rounded-xl bg-accent-soft border border-accent/30 flex items-center justify-center text-accent-hover">
                      <FiCpu size={17} />
                    </span>
                    <div className="flex flex-col gap-1">
                      <span className="font-display text-[0.9375rem] font-semibold leading-none text-foreground">juniXbot</span>
                      <span className="flex items-center gap-1.5 text-xs leading-none text-success/90">
                        <span aria-hidden className="size-1.5 rounded-full bg-success" />
                        Disponible pour un stage
                      </span>
                    </div>
                  </div>
                  <div className="hidden sm:flex gap-1.5">
                    <Tag className="h-6 px-2.5 text-xs">Développeur IA</Tag>
                    <Tag className="h-6 px-2.5 text-xs">Dév Full-Stack</Tag>
                  </div>
                </div>

                {/* Faux champ : ouvre le chatbot */}
                <div className="p-5">
                  <button
                    type="button"
                    onClick={() => openChatBot()}
                    className="group w-full flex items-center gap-3 h-14 pl-4 pr-2 rounded-control border border-line bg-canvas/60 text-left hover:border-accent/50 transition-colors"
                  >
                    <span className="font-mono text-accent text-sm">&gt;</span>
                    <span className="flex-1 font-mono text-sm text-subtle group-hover:text-muted transition-colors">
                      Posez-moi une question...
                      <span aria-hidden className="inline-block w-[7px] h-4 -mb-0.5 ml-1 bg-accent/70 animate-pulse" />
                    </span>
                    <span className="size-10 rounded-[0.6rem] bg-accent text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                      <FiCornerDownLeft size={16} />
                    </span>
                  </button>

                  {/* Suggestions → ouvrent le chatbot avec la question */}
                  <div className="mt-4">
                    <p className="text-xs text-subtle mb-3">Questions suggérées :</p>
                    <div className="flex flex-wrap gap-2">
                      {suggestedQuestions.map((question) => (
                        <button
                          key={question}
                          type="button"
                          onClick={() => openChatBot(question)}
                          className="h-8 px-3.5 rounded-full border border-line bg-surface-raised/40 text-[0.8125rem] text-muted hover:text-foreground hover:border-accent/40 hover:bg-accent-soft transition-colors"
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>

      {/* ── Bande inférieure : chiffres + technos ── */}
      <Reveal trigger="mount" delay={0.85} y={0}>
        <div className="mt-20 md:mt-24 relative before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-line-strong before:to-transparent">
          <div className="mx-auto w-full max-w-content px-6 py-8 flex flex-col md:flex-row md:items-center gap-8 md:gap-12">

            {/* Stats */}
            <div className="flex gap-10 shrink-0">
              <div>
                <div className="font-display text-3xl font-semibold tracking-tight text-foreground">15+</div>
                <div className="text-sm text-subtle mt-1">Projets</div>
              </div>
              <div>
                <div className="font-display text-3xl font-semibold tracking-tight text-foreground">3+</div>
                <div className="text-sm text-subtle mt-1">Années</div>
              </div>
              <div>
                <div className="font-display text-3xl font-semibold tracking-tight text-foreground">20+</div>
                <div className="text-sm text-subtle mt-1">Techs</div>
              </div>
            </div>

            <div aria-hidden className="hidden md:block w-px self-stretch bg-line" />

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {techTags.map((tag) => (
                <Tag key={tag}>
                  {tag}
                </Tag>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
