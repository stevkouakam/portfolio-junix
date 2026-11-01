'use client';

import type { ReactNode } from 'react';
import {
  SiOpenai, SiAnthropic, SiGooglegemini, SiLangchain, SiStreamlit,
  SiPython, SiOpenjdk, SiSpringboot, SiDotnet, SiFastapi, SiNodedotjs,
  SiReact, SiNextdotjs, SiAngular, SiVuedotjs, SiTypescript, SiTailwindcss,
  SiDocker, SiGit, SiGithubactions, SiPostgresql, SiMongodb, SiLinux,
  SiJunit5, SiCypress,
} from 'react-icons/si';
import { FiCode, FiZap } from 'react-icons/fi';
import Card from './ui/Card';
import ProjectVisual from './ui/ProjectVisual';
import Reveal from './ui/Reveal';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import Tag from './ui/Tag';

// Sous-groupe d'un pilier : libellé + liste de tags
function SkillGroup({ label, skills, className }: { label: ReactNode; skills: string[]; className?: string }) {
  return (
    <div className={className}>
      <span className="block text-sm font-medium text-foreground/80 mb-3">{label}</span>
      <div className="flex flex-wrap gap-2 notranslate" translate="no">
        {skills.map((skill) => (
          <Tag key={skill}>
            {skill}
          </Tag>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  // ── Pilier 1 : IA agentique ──
  const aiGroups = [
    {
      label: 'Modèles & API LLM',
      skills: ['OpenAI (GPT-4o, GPT-4o-mini)', 'Anthropic Claude', 'Mistral', 'Gemini', 'Vercel AI SDK'],
    },
    {
      label: 'Agents & orchestration',
      skills: ['LangGraph', 'LangChain', 'Systèmes multi-agents', 'Agents autonomes', 'Function Calling / Tool Use', 'OpenAI Assistants API'],
    },
    {
      label: 'RAG & données',
      skills: ['LlamaIndex', 'ChromaDB', 'Embeddings', 'Bases vectorielles', 'Déduplication sémantique', 'Ingénierie de prompts'],
    },
    {
      label: 'Mise en production',
      skills: ['FastAPI', 'Streaming de réponses', 'Playwright (scraping)', 'Streamlit', 'Pipelines planifiés'],
    },
  ];

  // ── Pilier 2 : génie logiciel ──
  const softwareGroups = [
    {
      label: 'Backend',
      skills: ['Java', 'Spring Boot', 'C# / ASP.NET Core', 'Python', 'FastAPI', 'Flask', 'Node.js', 'API REST', 'JPA / Hibernate'],
    },
    {
      label: 'Frontend',
      skills: ['React 19', 'Next.js', 'Angular', 'Vue.js 3', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      label: 'Architecture & qualité',
      skills: ['Architecture hexagonale', 'SOLID', 'Clean Code', 'MVC', 'JUnit 5', 'Cypress', 'Cucumber', 'JaCoCo', 'UML'],
    },
  ];

  const devopsSkills = ['Docker', 'Git / GitFlow', 'GitHub Actions', 'CI/CD', 'Azure DevOps', 'PostgreSQL', 'MongoDB', 'SQLite', 'Linux', 'Agile / Scrum', 'Revues de code'];

  const techIcons = [
    { icon: <SiOpenai />, label: 'OpenAI' },
    { icon: <SiAnthropic />, label: 'Anthropic Claude' },
    { icon: <SiGooglegemini />, label: 'Gemini' },
    { icon: <SiLangchain />, label: 'LangChain / LangGraph' },
    { icon: <SiPython />, label: 'Python' },
    { icon: <SiFastapi />, label: 'FastAPI' },
    { icon: <SiStreamlit />, label: 'Streamlit' },
    { icon: <SiOpenjdk />, label: 'Java' },
    { icon: <SiSpringboot />, label: 'Spring Boot' },
    { icon: <SiDotnet />, label: 'ASP.NET Core' },
    { icon: <SiNodedotjs />, label: 'Node.js' },
    { icon: <SiTypescript />, label: 'TypeScript' },
    { icon: <SiReact />, label: 'React' },
    { icon: <SiNextdotjs />, label: 'Next.js' },
    { icon: <SiAngular />, label: 'Angular' },
    { icon: <SiVuedotjs />, label: 'Vue.js' },
    { icon: <SiTailwindcss />, label: 'Tailwind CSS' },
    { icon: <SiDocker />, label: 'Docker' },
    { icon: <SiGithubactions />, label: 'GitHub Actions' },
    { icon: <SiGit />, label: 'Git' },
    { icon: <SiPostgresql />, label: 'PostgreSQL' },
    { icon: <SiMongodb />, label: 'MongoDB' },
    { icon: <SiLinux />, label: 'Linux' },
    { icon: <SiJunit5 />, label: 'JUnit 5' },
    { icon: <SiCypress />, label: 'Cypress' },
  ];

  return (
    <Section id="skills">

      {/* Section header */}
      <SectionHeader
        eyebrow="Compétences"
        title="Deux expertises, un même produit"
        description="L’IA agentique pour rendre les applications intelligentes, le génie logiciel pour les rendre fiables, maintenables et prêtes pour la production."
      />

      <Reveal>
        {/* ── Deux piliers : IA agentique & génie logiciel ── */}
        <div className="grid lg:grid-cols-12 gap-4 mb-4">

          {/* IA agentique */}
          <Card size="tile" padding="lg" interactive className="lg:col-span-7 overflow-hidden">
            <div aria-hidden className="absolute inset-x-0 top-0 h-48 opacity-35 [mask-image:linear-gradient(to_bottom,#000,transparent)] pointer-events-none">
              <ProjectVisual kind="multi-agent" uid="skills-ai" />
            </div>
            <div className="relative">
              <span className="size-12 rounded-2xl bg-accent-soft border border-accent/30 flex items-center justify-center text-accent-hover mb-8">
                <FiZap size={20} />
              </span>
              <h3 className="text-[1.75rem] leading-[1.1] tracking-[-0.03em] font-semibold text-foreground mb-2">IA agentique & LLM</h3>
              <p className="text-muted mb-10">Des agents qui raisonnent, utilisent des outils et s’appuient sur vos données.</p>

              {aiGroups.map((group, i) => (
                <SkillGroup key={group.label} label={group.label} skills={group.skills} className={i < aiGroups.length - 1 ? 'mb-8' : undefined} />
              ))}
            </div>
          </Card>

          {/* Génie logiciel */}
          <Card size="tile" padding="lg" interactive className="lg:col-span-5">
            <span className="size-12 rounded-2xl bg-surface-raised border border-line-strong flex items-center justify-center text-foreground/80 mb-8">
              <FiCode size={20} />
            </span>
            <h3 className="text-[1.75rem] leading-[1.1] tracking-[-0.03em] font-semibold text-foreground mb-2">Génie logiciel</h3>
            <p className="text-muted mb-10">Des applications full-stack bien architecturées, testées et déployées en continu.</p>

            {softwareGroups.map((group, i) => (
              <SkillGroup key={group.label} label={group.label} skills={group.skills} className={i < softwareGroups.length - 1 ? 'mb-8' : undefined} />
            ))}
          </Card>

        </div>

        {/* ── DevOps & outils — rangée de soutien ── */}
        <Card interactive className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
          <span className="shrink-0 font-display text-lg font-semibold tracking-tight text-foreground">DevOps & méthodes</span>
          <div className="flex flex-wrap gap-2 notranslate" translate="no">
            {devopsSkills.map((skill) => (
              <Tag key={skill}>
                {skill}
              </Tag>
            ))}
          </div>
        </Card>
      </Reveal>

      {/* ── Bande d'icônes ── */}
      <Reveal className="mt-20 md:mt-28">
        <p className="text-sm text-subtle text-center mb-10">
          Mon environnement de travail au quotidien
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {techIcons.map(({ icon, label }) => (
            <span
              key={label}
              title={label}
              aria-label={label}
              className="size-14 rounded-2xl border border-line glass flex items-center justify-center text-[1.5rem] text-subtle transition-colors duration-300 hover:text-foreground hover:border-accent/40 cursor-default"
            >
              {icon}
            </span>
          ))}
        </div>
      </Reveal>

    </Section>
  );
}
