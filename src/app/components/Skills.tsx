'use client';

import type { ReactNode } from 'react';
import {
  SiSpring, SiJunit5, SiMongodb, SiPostgresql,
  SiReact, SiAngular, SiVuedotjs, SiHtml5, SiTypescript,
  SiDocker, SiGit, SiPython, SiLinux, SiNextdotjs, SiFastapi,
} from 'react-icons/si';
import { FiCode, FiServer, FiZap } from 'react-icons/fi';
import Card from './ui/Card';
import Reveal from './ui/Reveal';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import Tag from './ui/Tag';

// Sous-groupe d'un pilier : libellé mono + liste de tags
function SkillGroup({ label, skills, className }: { label: ReactNode; skills: string[]; className?: string }) {
  return (
    <div className={className}>
      <span className="block font-mono text-[0.6875rem] uppercase tracking-wider text-subtle mb-3">{label}</span>
      <div className="flex flex-wrap gap-1.5">
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
      <SectionHeader index="03" eyebrow="Skills" title="My tech stack" />

      {/* ── Two pillars: AI Agentic Engineering & Software Development ── */}
      <div className="grid md:grid-cols-2 gap-4 mb-4">

        {/* AI & Agentic Engineering */}
        <Reveal className="h-full">
          <Card padding="lg" interactive className="h-full">
            <div className="flex items-center gap-3 mb-2">
              <span className="size-8 rounded-lg border border-line bg-surface-raised flex items-center justify-center text-accent-hover">
                <FiZap size={15} />
              </span>
              <h3 className="text-h3 font-medium text-foreground">AI & Agentic Engineering</h3>
            </div>
            <p className="text-subtle text-sm mb-8">LLMs · RAG · Multi-agent systems · Embeddings</p>

            <SkillGroup label="Core" skills={aiCoreSkills} className="mb-7" />
            <SkillGroup label="Agent stack" skills={agentStack} />
          </Card>
        </Reveal>

        {/* Software Development */}
        <Reveal delay={0.06} className="h-full">
          <Card padding="lg" interactive className="h-full">
            <div className="flex items-center gap-3 mb-2">
              <span className="size-8 rounded-lg border border-line bg-surface-raised flex items-center justify-center text-accent-hover">
                <FiCode size={15} />
              </span>
              <h3 className="text-h3 font-medium text-foreground">Software Development</h3>
            </div>
            <p className="text-subtle text-sm mb-8">Full-stack · Backend · Frontend</p>

            <SkillGroup label="Backend" skills={backendSkills} className="mb-7" />
            <SkillGroup label="Frontend" skills={frontendSkills} />
          </Card>
        </Reveal>

      </div>

      {/* ── DevOps & Tools — supporting row ── */}
      <Reveal>
        <Card className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <span className="shrink-0 font-mono text-[0.6875rem] uppercase tracking-wider text-subtle">DevOps & Tools</span>
          <div className="flex flex-wrap gap-1.5">
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
        <p className="font-mono text-eyebrow uppercase text-subtle text-center mb-10">
          Technologies I work with
        </p>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-8 text-subtle">
          {techIcons.map(({ icon, label }, i) => (
            <span key={i} title={label} className="text-[1.75rem] transition-colors duration-300 ease-soft hover:text-foreground cursor-default">
              {icon}
            </span>
          ))}
        </div>
      </Reveal>

    </Section>
  );
}
