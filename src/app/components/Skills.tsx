'use client';

import type { ReactNode } from 'react';
import {
  SiSpring, SiJunit5, SiMongodb, SiPostgresql,
  SiReact, SiAngular, SiVuedotjs, SiHtml5, SiTypescript,
  SiDocker, SiGit, SiPython, SiLinux, SiNextdotjs, SiFastapi,
} from 'react-icons/si';
import { FiCode, FiServer, FiZap } from 'react-icons/fi';
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
      <div className="flex flex-wrap gap-2">
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
  const aiCoreSkills = [
    'OpenAI API', 'Anthropic Claude', 'LangChain', 'LangGraph',
    'RAG Systems', 'Prompt Engineering', 'Embeddings', 'Vector DBs',
    'LlamaIndex', 'ChromaDB',
  ];

  const agentStack = [
    'Autonomous Agents', 'Multi-Agent Systems', 'Function Calling',
    'OpenAI Assistants API', 'Agent Pipelines', 'FastAPI',
  ];

  const backendSkills = ['Java', 'Spring Boot', 'Python', 'Node.js', 'FastAPI', 'Flask', 'API REST', 'JPA / Hibernate'];
  const frontendSkills = ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'HTML5 / CSS3', 'Tailwind CSS', 'Framer Motion'];
  const devopsSkills = ['Docker', 'Git', 'CI/CD', 'Azure DevOps', 'PostgreSQL', 'MongoDB', 'Linux', 'Agile / Scrum'];

  const techIcons = [
    { icon: <SiPython />, label: 'Python' },
    { icon: <SiFastapi />, label: 'FastAPI' },
    { icon: <SiReact />, label: 'React' },
    { icon: <SiNextdotjs />, label: 'Next.js' },
    { icon: <SiVuedotjs />, label: 'Vue.js' },
    { icon: <SiAngular />, label: 'Angular' },
    { icon: <SiTypescript />, label: 'TypeScript' },
    { icon: <SiHtml5 />, label: 'HTML5' },
    { icon: <SiSpring />, label: 'Spring Boot' },
    { icon: <FiServer />, label: 'Node.js' },
    { icon: <FiCode />, label: 'Java' },
    { icon: <SiDocker />, label: 'Docker' },
    { icon: <SiMongodb />, label: 'MongoDB' },
    { icon: <SiPostgresql />, label: 'PostgreSQL' },
    { icon: <SiGit />, label: 'Git' },
    { icon: <SiLinux />, label: 'Linux' },
    { icon: <SiJunit5 />, label: 'JUnit' },
  ];

  return (
    <Section id="skills">

      {/* Section header */}
      <SectionHeader eyebrow="Skills" title="My tech stack" />

      <Reveal>
        {/* ── Two pillars: AI Agentic Engineering & Software Development ── */}
        <div className="grid lg:grid-cols-12 gap-4 mb-4">

          {/* AI & Agentic Engineering */}
          <Card size="tile" padding="lg" interactive className="lg:col-span-7 overflow-hidden">
            <div aria-hidden className="absolute inset-x-0 top-0 h-48 opacity-35 [mask-image:linear-gradient(to_bottom,#000,transparent)] pointer-events-none">
              <ProjectVisual kind="multi-agent" uid="skills-ai" />
            </div>
            <div className="relative">
              <span className="size-12 rounded-2xl bg-accent-soft border border-accent/30 flex items-center justify-center text-accent-hover mb-8">
                <FiZap size={20} />
              </span>
              <h3 className="text-[1.75rem] leading-[1.1] tracking-[-0.03em] font-semibold text-foreground mb-2">AI & Agentic Engineering</h3>
              <p className="text-muted mb-10">LLMs · RAG · Multi-agent systems · Embeddings</p>

              <SkillGroup label="Core" skills={aiCoreSkills} className="mb-8" />
              <SkillGroup label="Agent stack" skills={agentStack} />
            </div>
          </Card>

          {/* Software Development */}
          <Card size="tile" padding="lg" interactive className="lg:col-span-5">
            <span className="size-12 rounded-2xl bg-surface-raised border border-line-strong flex items-center justify-center text-foreground/80 mb-8">
              <FiCode size={20} />
            </span>
            <h3 className="text-[1.75rem] leading-[1.1] tracking-[-0.03em] font-semibold text-foreground mb-2">Software Development</h3>
            <p className="text-muted mb-10">Full-stack · Backend · Frontend</p>

            <SkillGroup label="Backend" skills={backendSkills} className="mb-8" />
            <SkillGroup label="Frontend" skills={frontendSkills} />
          </Card>

        </div>

        {/* ── DevOps & Tools — supporting row ── */}
        <Card interactive className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
          <span className="shrink-0 font-display text-lg font-semibold tracking-tight text-foreground">DevOps & Tools</span>
          <div className="flex flex-wrap gap-2">
            {devopsSkills.map((skill) => (
              <Tag key={skill}>
                {skill}
              </Tag>
            ))}
          </div>
        </Card>
      </Reveal>

      {/* ── Tech icons bar ── */}
      <Reveal className="mt-20 md:mt-28">
        <p className="text-sm text-subtle text-center mb-10">
          Technologies I work with
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {techIcons.map(({ icon, label }, i) => (
            <span
              key={i}
              title={label}
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
