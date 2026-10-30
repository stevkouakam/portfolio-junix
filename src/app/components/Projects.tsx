'use client';

import { FiGithub, FiArrowUpRight, FiZap, FiStar } from 'react-icons/fi';
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
  const kinds: Record<string, VisualKind> = { LLM: 'llm', RAG: 'rag', NLP: 'nlp', Agent: 'agent', 'Multi-Agent': 'multi-agent' };
  return kinds[badge] ?? 'other';
}

export default function Projects() {
  const featured = {
    title: 'UGRam — Instagram-like Web App',
    description:
      "Full-stack social web application built in a 6-person team at Université Laval (GLO-3102). Participated in the full project lifecycle — requirements analysis, client-server architecture design, feature implementation, and CI/CD deployment. Developed the Angular frontend with reusable component architecture, TypeScript best practices, and a structured GitFlow workflow with systematic code reviews.",
    tags: ['C#', 'ASP.NET Core', 'Angular', 'TypeScript', 'Docker', 'CI/CD'],
    github: 'https://github.com/stevkouakam',
    demo: null,
    badge: 'Team Project',
    badgeSub: 'Université Laval · GLO-3102',
  };

  const aiProjects = [
    {
      title: 'UTasks — LLM Task Manager',
      description:
        "Task management app with an integrated AI assistant. The LLM agent (OpenAI) analyzes tasks, suggests priorities, generates subtasks, and answers contextual questions from the user.",
      tags: ['React', 'MongoDB', 'OpenAI', 'LLM', 'API'],
      github: 'https://github.com/stevkouakam',
      badge: 'LLM',
    },
    {
      title: 'DocMind — Chat with your Documents',
      description:
        "RAG-powered web app that lets users upload PDFs or text files and ask questions in natural language. Documents are chunked, embedded with OpenAI, stored in ChromaDB, and retrieved via LlamaIndex — GPT-4o-mini then generates precise, context-grounded answers.",
      tags: ['Python', 'LlamaIndex', 'ChromaDB', 'OpenAI', 'RAG', 'Streamlit'],
      github: 'https://github.com/stevkouakam/DocMind',
      badge: 'RAG',
    },
    {
      title: 'AI Resume Analyzer',
      description:
        "AI-powered tool that analyzes resumes to detect skills, identify weak points, and generate personalized improvement suggestions. FastAPI backend with OpenAI for intelligent CV parsing and scoring.",
      tags: ['React', 'FastAPI', 'OpenAI', 'Python'],
      github: 'https://github.com/stevkouakam',
      badge: 'NLP',
    },
    {
      title: 'AI Email Assistant Agent',
      description:
        "Autonomous AI agent built with FastAPI and OpenAI that reads incoming emails, understands context, and automatically drafts relevant replies — a full end-to-end agentic workflow.",
      tags: ['Python', 'FastAPI', 'OpenAI', 'AI Agent', 'Automation'],
      github: 'https://github.com/stevkouakam',
      badge: 'Agent',
    },
    {
      title: "Y'TILIKAN — AI News Monitoring & Newsletter Pipeline",
      description:
        "End-to-end AI pipeline for Africa-focused news monitoring: automated RSS ingestion, semantic deduplication via embeddings, and LLM summarization (Mistral API), fully automated. Deployed to production via GitHub Actions with a scheduled pipeline and newsletter delivery.",
      tags: ['Python', 'Mistral API', 'FastAPI', 'SQLite', 'Streamlit'],
      github: 'https://github.com/stevkouakam',
      badge: 'Pipeline · In progress',
    },
    {
      title: 'NestIQ — AI Housing Search Agent',
      color: 'text-cyan-400',
      description:
        "Multi-agent pipeline (LangGraph) combining NLP extraction, Playwright scraping, and GPT-4o-mini analysis for real-time rental search across Kijiji, LesPAC, and Marketplace. RAG-based price comparison by neighborhood, plus a React 19 interface with AI listing scoring and scam detection.",
      tags: ['Python', 'FastAPI', 'LangGraph', 'GPT-4o-mini', 'ChromaDB', 'React 19'],
      github: 'https://github.com/stevkouakam',
      badge: 'Multi-Agent',
    },
  ];

  const otherProjects = [
    {
      title: 'UFood',
      description:
        "Web app for restaurant discovery and sharing favorite spots with friends. REST API integration for geolocation-based search and collaborative list management.",
      tags: ['Vue.js', 'Vuetify', 'JavaScript', 'API REST'],
      github: 'https://github.com/stevkouakam',
    },
    {
      title: 'CNC Cutting Software',
      description:
        "Custom software enabling a CNC cutting table (AVID 5x10) to function as a traditional panel saw. Optimized GCODE generation and intuitive interface for non-technical operators.",
      tags: ['Java', 'Swing', 'GCODE', 'UML'],
      github: 'https://github.com/stevkouakam',
    },
    {
      title: 'SplitUL',
      description:
        "Bill-splitting app for friends with group management, debt tracking, and reimbursements. Java backend with PostgreSQL persistence and a documented REST API.",
      tags: ['Java', 'PostgreSQL', 'Docker', 'API REST'],
      github: 'https://github.com/stevkouakam',
    },
    {
      title: 'USpace — Space Cruise Booking Platform',
      description:
        "Space cruise booking platform built for Université Laval's software quality course. Hexagonal, SOLID-based architecture with a full test pyramid (JUnit 5, Cypress, Cucumber) and automated JaCoCo/Checkstyle quality gates.",
      tags: ['Java', 'Vue.js 3', 'Hibernate', 'JUnit 5', 'Cypress'],
      github: 'https://github.com/stevkouakam',
    },
  ];

  return (
    <Section id="projects">

      {/* Section header */}
      <SectionHeader eyebrow="Projects" title="What I&apos;ve built" />

      {/* ── Featured: UGRam ── */}
      <Reveal className="mb-6">
        <Card size="tile" padding="none" interactive className="overflow-hidden">
          <div className="grid lg:grid-cols-[1.2fr_1fr]">
            <div className="p-7 md:p-12 flex flex-col">
              <div className="flex flex-wrap items-center gap-2 mb-8">
                <Tag tone="accent">
                  <FiStar size={12} />
                  Featured
                </Tag>
                <span className="text-subtle text-xs">·</span>
                <span className="text-sm text-subtle notranslate" translate="no">{featured.badgeSub}</span>
              </div>
              <h3 className="text-[2rem] md:text-[2.75rem] leading-[1.02] tracking-[-0.035em] font-semibold text-foreground mb-6 notranslate" translate="no">
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
              <ul className="relative space-y-4 text-[0.9375rem] text-foreground/90 [&>li]:flex [&>li]:items-center [&>li]:gap-3 [&>li]:before:size-1.5 [&>li]:before:rounded-full [&>li]:before:bg-success [&>li]:before:shrink-0 [&>li]:before:content-[''] mt-16 lg:mt-24">
                <li>Team of 6 developers</li>
                <li>Angular frontend lead</li>
                <li>GitFlow & code reviews</li>
                <li>CI/CD pipeline</li>
                <li>Technical documentation</li>
              </ul>
              <a
                href={featured.github}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group/link self-start inline-flex items-center gap-2 h-11 px-5 rounded-full border border-line-strong text-sm font-medium text-foreground hover:bg-surface-raised transition-colors"
              >
                <FiGithub size={15} />
                View on GitHub
                <FiArrowUpRight size={14} className="text-muted transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </a>
            </div>
          </div>
        </Card>
      </Reveal>

      {/* ── AI Projects ── */}
      <Reveal className="flex items-center gap-3 mt-20 md:mt-24 mb-6">
        <span className="size-8 rounded-full bg-accent-soft border border-accent/30 flex items-center justify-center text-accent-hover">
          <FiZap size={14} />
        </span>
        <span className="font-display text-xl font-semibold tracking-tight text-foreground">AI Projects</span>
      </Reveal>

      <Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-12 lg:grid-flow-dense gap-4">
          {aiProjects.map((project, index) => {
            const big = index === aiProjects.length - 1;
            return (
              <Card
                key={index}
                size={big ? 'tile' : 'card'}
                padding="none"
                interactive
                className={cx(
                  'group flex flex-col overflow-hidden',
                  big && 'md:col-span-2 lg:col-span-7 lg:row-span-2 lg:order-first',
                  !big && (index < 2 ? 'lg:col-span-5' : 'lg:col-span-4'),
                )}
              >
                {/* Visuel */}
                <div className={cx('relative border-b border-line bg-canvas/30 overflow-hidden', big ? 'h-56 lg:h-auto lg:flex-1 lg:min-h-64' : 'h-32')}>
                  <ProjectVisual
                    kind={visualForBadge(project.badge)}
                    uid={`ai-${index}`}
                    className="absolute inset-0 opacity-80 transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-5 top-5 notranslate" translate="no">
                    <Tag tone="accent" className="glass">{project.badge}</Tag>
                  </span>
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="absolute right-4 top-4 size-9 rounded-full glass border border-line flex items-center justify-center text-muted hover:text-foreground transition-colors"
                    aria-label="GitHub"><FiGithub size={15} />
                  </a>
                </div>

                {/* Contenu */}
                <div className={cx('flex flex-col', big ? 'p-7 md:p-9' : 'p-6 flex-1')}>
                  <h3 className={cx('font-semibold text-foreground mb-3 notranslate', big ? 'text-[1.75rem] leading-[1.1] tracking-[-0.03em]' : 'text-h3')} translate="no">
                    {project.title}
                  </h3>
                  <p className={cx('text-muted leading-relaxed mb-6 flex-1', big ? 'text-[0.9375rem]' : 'text-sm')}>{project.description}</p>
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

      {/* ── Other Projects ── */}
      <Reveal className="flex items-center gap-3 mt-20 md:mt-24 mb-6">
        <span className="font-display text-xl font-semibold tracking-tight text-foreground">Other projects</span>
      </Reveal>

      <Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {otherProjects.map((project, index) => (
            <Card key={index} interactive className="group flex flex-col">
              <div className="flex items-start justify-between gap-3 mb-4">
                <h3 className="text-lg font-semibold tracking-tight text-foreground notranslate" translate="no">
                  {project.title}
                </h3>
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="text-subtle hover:text-foreground transition-colors shrink-0 mt-1"
                  aria-label="GitHub"><FiGithub size={16} />
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
          View all my projects on GitHub
        </Button>
      </Reveal>

    </Section>
  );
}
