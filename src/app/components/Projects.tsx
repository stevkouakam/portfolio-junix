'use client';

import type { ReactNode } from 'react';
import { FiGithub, FiArrowUpRight, FiZap, FiStar, FiCode } from 'react-icons/fi';
import Button from './ui/Button';
import Card from './ui/Card';
import ProjectVisual, { type VisualKind } from './ui/ProjectVisual';
import Reveal from './ui/Reveal';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import Tag from './ui/Tag';
import { cx } from './ui/cx';

// Motif décoratif associé à la catégorie (badge) d'un projet IA
function visualForBadge(badge: string): VisualKind {
  if (badge.startsWith('Pipeline')) return 'pipeline';
  const kinds: Record<string, VisualKind> = { LLM: 'llm', RAG: 'rag', NLP: 'nlp', Agent: 'agent', 'Multi-agents': 'multi-agent' };
  return kinds[badge] ?? 'other';
}

// En-tête d'une catégorie de projets : icône + titre + sous-titre
function CategoryHeader({ icon, title, subtitle, accent }: { icon: ReactNode; title: string; subtitle: string; accent?: boolean }) {
  return (
    <Reveal className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6">
      <div className="flex items-center gap-3">
        <span
          className={cx(
            'size-8 rounded-full border flex items-center justify-center',
            accent ? 'bg-accent-soft border-accent/30 text-accent-hover' : 'bg-surface-raised border-line-strong text-foreground/80',
          )}
        >
          {icon}
        </span>
        <span className="font-display text-xl font-semibold tracking-tight text-foreground">{title}</span>
      </div>
      <span className="text-sm text-subtle sm:border-l sm:border-line sm:pl-4">{subtitle}</span>
    </Reveal>
  );
}

// Liste à puces vertes (points clés d'un projet)
function Highlights({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cx('space-y-3 text-[0.9375rem] text-foreground/90 [&>li]:flex [&>li]:items-start [&>li]:gap-3 [&>li]:before:mt-2 [&>li]:before:size-1.5 [&>li]:before:rounded-full [&>li]:before:bg-success [&>li]:before:shrink-0 [&>li]:before:content-[\'\']', className)}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function Projects() {
  // ── IA agentique & LLM : le premier projet occupe la grande tuile ──
  const aiProjects = [
    {
      title: 'NestIQ — Agent IA de recherche de logement',
      description:
        "Chercher un logement, c'est éplucher des centaines d'annonces dispersées sur plusieurs sites. NestIQ confie ce travail à un pipeline multi-agents LangGraph qui comprend la demande en langage naturel, collecte les annonces en temps réel et les analyse avec GPT-4o-mini.",
      highlights: [
        'Orchestration multi-agents avec LangGraph',
        'Extraction NLP des critères de recherche',
        'Collecte temps réel sur Kijiji, LesPAC et Marketplace (Playwright)',
        'Comparaison des prix par quartier (RAG + ChromaDB)',
        'Notation des annonces et détection des arnaques',
      ],
      tags: ['Python', 'LangGraph', 'GPT-4o-mini', 'Playwright', 'ChromaDB', 'FastAPI', 'React 19'],
      github: 'https://github.com/stevkouakam',
      badge: 'Multi-agents',
    },
    {
      title: 'NBA Watch — Veille NBA multi-agents',
      description:
        "Système autonome qui surveille toutes les 15 minutes les scores NBA en direct et 4 flux d'actualités (ESPN, CBS Sports, ClutchPoints, Sportando). Un graphe LangGraph à deux branches parallèles détecte les nouveautés, classe et note la crédibilité de chaque information, puis un agent de routage alerte sur Telegram ou par courriel selon l'urgence. En production, avec 77 tests et une CI/CD.",
      tags: ['Python', 'LangGraph', 'FastAPI', 'PostgreSQL', 'Docker', 'GitHub Actions', 'Telegram', 'DeepL'],
      github: 'https://github.com/stevkouakam/Agent-IA-veille-nba',
      badge: 'Multi-agents',
      // Motif distinct de NestIQ, affiché juste à côté
      visual: 'agent' as VisualKind,
    },
    {
      title: "Y'TILIKAN — Veille d'actualités et infolettre par IA",
      description:
        "Pipeline IA qui automatise la veille d'actualités sur l'Afrique : ingestion RSS, déduplication sémantique par embeddings, résumés générés par LLM (Mistral) et envoi d'une infolettre — exécuté en production selon un calendrier via GitHub Actions.",
      tags: ['Python', 'Mistral API', 'Embeddings', 'FastAPI', 'SQLite', 'GitHub Actions'],
      github: 'https://github.com/stevkouakam',
      badge: 'Pipeline · En cours',
    },
    {
      title: 'DocMind — Discutez avec vos documents',
      description:
        "Posez vos questions directement à vos PDF. DocMind découpe et vectorise les documents (OpenAI), les indexe dans ChromaDB et retrouve les passages pertinents avec LlamaIndex, pour que GPT-4o-mini réponde à partir du bon contexte.",
      tags: ['Python', 'LlamaIndex', 'ChromaDB', 'OpenAI', 'RAG', 'Streamlit'],
      github: 'https://github.com/stevkouakam/DocMind',
      badge: 'RAG',
    },
    {
      title: 'Agent IA assistant de courriels',
      description:
        "Agent autonome qui lit les courriels entrants, en comprend l'intention et rédige automatiquement une réponse adaptée — un flux agentique complet, de la réception à la proposition de réponse, exposé par une API FastAPI.",
      tags: ['Python', 'FastAPI', 'OpenAI', 'Agent IA', 'Automatisation'],
      github: 'https://github.com/stevkouakam',
      badge: 'Agent',
    },
    {
      title: 'Analyseur de CV par IA',
      description:
        "Outil d'analyse de CV propulsé par OpenAI : extraction des compétences, détection des points faibles, score global et suggestions d'amélioration personnalisées. Backend FastAPI, interface React.",
      tags: ['Python', 'FastAPI', 'OpenAI', 'React'],
      github: 'https://github.com/stevkouakam',
      badge: 'NLP',
    },
  ];

  // ── Génie logiciel : projet d'équipe en vitrine ──
  const featured = {
    title: 'UGRam — Application web de type Instagram',
    description:
      "Application web sociale full-stack réalisée en équipe de 6 à l'Université Laval (GLO-3102). J'ai participé à tout le cycle de vie du projet — analyse des besoins, architecture client-serveur, développement et déploiement CI/CD — et dirigé le frontend Angular, bâti sur des composants réutilisables et un flux GitFlow avec revues de code systématiques.",
    highlights: [
      'Équipe de 6 développeurs',
      'Responsable du frontend Angular',
      'GitFlow & revues de code',
      'Pipeline CI/CD',
      'Documentation technique',
    ],
    tags: ['C#', 'ASP.NET Core', 'Angular', 'TypeScript', 'Docker', 'CI/CD'],
    github: 'https://github.com/stevkouakam',
    badgeSub: 'Université Laval · GLO-3102',
  };

  const softwareProjects = [
    {
      title: 'USpace — Réservation de croisières spatiales',
      description:
        "Plateforme de réservation conçue pour le cours de qualité logicielle de l'Université Laval. Architecture hexagonale fondée sur SOLID, pyramide de tests complète et barrières de qualité automatisées (JaCoCo, Checkstyle).",
      tags: ['Java', 'Vue.js 3', 'Hibernate', 'JUnit 5', 'Cypress', 'Cucumber'],
      github: 'https://github.com/stevkouakam',
    },
    {
      title: 'SplitUL',
      description:
        "Application de partage de dépenses entre amis : gestion de groupes, suivi des dettes et remboursements. Backend Java, persistance PostgreSQL et API REST documentée, le tout conteneurisé avec Docker.",
      tags: ['Java', 'PostgreSQL', 'Docker', 'API REST'],
      github: 'https://github.com/stevkouakam',
    },
    {
      title: 'Logiciel de découpe CNC',
      description:
        "Logiciel sur mesure qui transforme une table de découpe CNC (AVID 5x10) en scie à panneaux traditionnelle : génération optimisée de GCODE et interface pensée pour des opérateurs non techniques.",
      tags: ['Java', 'Swing', 'GCODE', 'UML'],
      github: 'https://github.com/stevkouakam',
    },
    {
      title: 'UFood',
      description:
        "Application web pour découvrir des restaurants et partager ses adresses favorites : recherche par géolocalisation via API REST et listes collaboratives entre amis.",
      tags: ['Vue.js', 'Vuetify', 'JavaScript', 'API REST'],
      github: 'https://github.com/stevkouakam',
    },
  ];

  return (
    <Section id="projects">

      {/* Section header */}
      <SectionHeader
        eyebrow="Projets"
        title="Des agents IA aux applications en production"
        description="Une sélection de projets qui illustrent mes deux expertises : l’IA agentique d’abord, puis le génie logiciel mené en équipe."
      />

      {/* ── 01 · IA agentique & LLM ── */}
      <CategoryHeader
        icon={<FiZap size={14} />}
        title="IA agentique & LLM"
        subtitle={`${aiProjects.length} projets · agents, RAG, pipelines`}
        accent
      />

      <Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-12 lg:grid-flow-dense gap-4">
          {aiProjects.map((project, index) => {
            const big = index === 0;
            return (
              <Card
                key={project.title}
                size={big ? 'tile' : 'card'}
                padding="none"
                interactive
                className={cx(
                  'group flex flex-col overflow-hidden',
                  big && 'md:col-span-2 lg:col-span-7 lg:row-span-2',
                  !big && (index < 3 ? 'lg:col-span-5' : 'lg:col-span-4'),
                )}
              >
                {/* Visuel */}
                <div className={cx('relative border-b border-line bg-canvas/30 overflow-hidden', big ? 'h-56 lg:h-64' : 'h-32')}>
                  <ProjectVisual
                    kind={project.visual ?? visualForBadge(project.badge)}
                    uid={`ai-${index}`}
                    className="absolute inset-0 opacity-80 transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-5 top-5 flex gap-2 notranslate" translate="no">
                    {big && (
                      <Tag tone="accent" className="glass">
                        <FiStar size={12} />
                        En vedette
                      </Tag>
                    )}
                    <Tag tone="accent" className="glass">{project.badge}</Tag>
                  </span>
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="absolute right-4 top-4 size-9 rounded-full glass border border-line flex items-center justify-center text-muted hover:text-foreground transition-colors"
                    aria-label={`${project.title} sur GitHub`}><FiGithub size={15} />
                  </a>
                </div>

                {/* Contenu */}
                <div className={cx('flex flex-col flex-1', big ? 'p-7 md:p-9' : 'p-6')}>
                  <h3 className={cx('font-semibold text-foreground mb-3', big ? 'text-[1.75rem] leading-[1.1] tracking-[-0.03em]' : 'text-h3')}>
                    {project.title}
                  </h3>
                  <p className={cx('text-muted leading-relaxed mb-6', big ? 'text-[0.9375rem]' : 'text-sm flex-1')}>{project.description}</p>
                  {project.highlights && <Highlights items={project.highlights} className="mb-8" />}
                  <div className="flex flex-wrap gap-1.5 mt-auto notranslate" translate="no">
                    {project.tags.map((tag) => (
                      <Tag key={tag} className="h-6 px-2.5 text-xs">{tag}</Tag>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Reveal>

      {/* ── 02 · Génie logiciel & full-stack ── */}
      <div className="mt-20 md:mt-28">
        <CategoryHeader
          icon={<FiCode size={14} />}
          title="Génie logiciel & full-stack"
          subtitle={`${softwareProjects.length + 1} projets · architecture, tests, travail d’équipe`}
        />
      </div>

      {/* Vitrine : UGRam */}
      <Reveal className="mb-4">
        <Card size="tile" padding="none" interactive className="overflow-hidden">
          <div className="grid lg:grid-cols-[1.2fr_1fr]">
            <div className="p-7 md:p-12 flex flex-col">
              <div className="flex flex-wrap items-center gap-2 mb-8">
                <Tag tone="accent">
                  <FiStar size={12} />
                  Projet d’équipe
                </Tag>
                <span className="text-subtle text-xs">·</span>
                <span className="text-sm text-subtle notranslate" translate="no">{featured.badgeSub}</span>
              </div>
              <h3 className="text-[2rem] md:text-[2.75rem] leading-[1.02] tracking-[-0.035em] font-semibold text-foreground mb-6">
                {featured.title}
              </h3>
              <p className="text-muted leading-relaxed mb-8 max-w-xl">
                {featured.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto notranslate" translate="no">
                {featured.tags.map((tag) => (
                  <Tag key={tag}>
                    {tag}
                  </Tag>
                ))}
              </div>
            </div>

            <div className="relative flex flex-col justify-between gap-8 border-t lg:border-t-0 lg:border-l border-line bg-canvas/30 p-7 md:p-12 overflow-hidden">
              <ProjectVisual kind="featured" uid="featured" className="absolute inset-0 opacity-50 [mask-image:linear-gradient(to_bottom,#000,transparent_75%)]" />
              <Highlights items={featured.highlights} className="relative mt-16 lg:mt-24" />
              <a
                href={featured.github}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group/link self-start inline-flex items-center gap-2 h-11 px-5 rounded-full border border-line-strong text-sm font-medium text-foreground hover:bg-surface-raised transition-colors"
              >
                <FiGithub size={15} />
                Voir sur GitHub
                <FiArrowUpRight size={14} className="text-muted transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </a>
            </div>
          </div>
        </Card>
      </Reveal>

      <Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {softwareProjects.map((project) => (
            <Card key={project.title} interactive className="group flex flex-col">
              <div className="flex items-start justify-between gap-3 mb-4">
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {project.title}
                </h3>
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="text-subtle hover:text-foreground transition-colors shrink-0 mt-1"
                  aria-label={`${project.title} sur GitHub`}><FiGithub size={16} />
                </a>
              </div>
              <p className="text-muted text-sm leading-relaxed mb-6 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-auto notranslate" translate="no">
                {project.tags.map((tag) => (
                  <Tag key={tag} className="h-6 px-2.5 text-xs">{tag}</Tag>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Reveal>

      {/* GitHub CTA */}
      <Reveal className="flex justify-center mt-16">
        <Button
          href="https://github.com/stevkouakam"
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
        >
          <FiGithub size={16} />
          Voir tous mes projets sur GitHub
        </Button>
      </Reveal>

    </Section>
  );
}
