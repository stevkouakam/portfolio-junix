'use client';

import { FiGithub, FiArrowUpRight, FiZap } from 'react-icons/fi';
import Button from './ui/Button';
import Card from './ui/Card';
import Reveal from './ui/Reveal';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import Tag from './ui/Tag';

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
      <SectionHeader index="02" eyebrow="Projects" title="What I&apos;ve built" />

      {/* ── Featured: UGRam ── */}
      <Reveal className="mb-24 md:mb-32">
        <Card padding="lg" interactive>
          <div className="grid lg:grid-cols-[1fr_15rem] gap-10 lg:gap-16">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-2.5 mb-6">
                <Tag tone="accent">Featured</Tag>
                <span className="text-subtle text-xs">·</span>
                <span className="font-mono text-xs text-subtle notranslate" translate="no">{featured.badgeSub}</span>
              </div>
              <h3 className="text-[1.75rem] md:text-[2.25rem] leading-[1.15] tracking-[-0.03em] font-semibold text-foreground mb-5 notranslate" translate="no">
                {featured.title}
              </h3>
              <p className="text-muted leading-relaxed mb-8">
                {featured.description}
              </p>
              <div className="flex flex-wrap gap-1.5 notranslate" translate="no">
                {featured.tags.map((tag) => (
                  <Tag key={tag}>
                    {tag}
                  </Tag>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-between gap-8 lg:border-l lg:border-line lg:pl-10">
              <ul className="space-y-3.5 text-sm text-muted [&>li]:flex [&>li]:items-center [&>li]:gap-3 [&>li]:before:size-1 [&>li]:before:rounded-full [&>li]:before:bg-accent [&>li]:before:shrink-0 [&>li]:before:content-['']">
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
                className="group/link inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent-hover transition-colors duration-200"
              >
                <FiGithub size={15} />
                View on GitHub
                <FiArrowUpRight size={14} className="text-subtle transition-transform duration-300 ease-soft group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </a>
            </div>
          </div>
        </Card>
      </Reveal>

      {/* ── AI Projects ── */}
      <Reveal className="flex items-center gap-4 mb-8">
        <div className="flex items-center gap-2 font-mono text-eyebrow uppercase text-muted">
          <FiZap size={12} className="text-accent" />
          <span>AI Projects</span>
        </div>
        <div className="h-px flex-1 bg-line" />
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-24 md:mb-28 items-stretch">
        {aiProjects.map((project, index) => (
          <Reveal key={index} delay={(index % 3) * 0.06} className="h-full">
            <Card interactive className="group flex flex-col h-full">
              <div className="flex items-start justify-between mb-6">
                <span className="font-mono text-[0.6875rem] uppercase tracking-wider text-accent-hover notranslate" translate="no">
                  {project.badge}
                </span>
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="text-subtle hover:text-foreground transition-colors shrink-0"
                  aria-label="GitHub"><FiGithub size={16} />
                </a>
              </div>
              <h3 className="text-h3 font-medium text-foreground mb-3 notranslate" translate="no">
                {project.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-6 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-auto pt-5 border-t border-line notranslate" translate="no">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

      {/* ── Other Projects ── */}
      <Reveal className="flex items-center gap-4 mb-8">
        <span className="font-mono text-eyebrow uppercase text-muted">Other projects</span>
        <div className="h-px flex-1 bg-line" />
      </Reveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
        {otherProjects.map((project, index) => (
          <Reveal key={index} delay={(index % 4) * 0.06} className="h-full">
            <Card interactive className="group flex flex-col h-full">
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-base font-medium tracking-tight text-foreground notranslate" translate="no">
                  {project.title}
                </h3>
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="text-subtle hover:text-foreground transition-colors shrink-0"
                  aria-label="GitHub"><FiGithub size={16} />
                </a>
              </div>
              <p className="text-muted text-sm leading-relaxed mb-6 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-auto notranslate" translate="no">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

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
