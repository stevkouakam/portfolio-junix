'use client';

import { FiCpu, FiCode, FiLayers } from 'react-icons/fi';
import Card from './ui/Card';
import Reveal from './ui/Reveal';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';

export default function About() {
  const areas = [
    {
      icon: <FiCpu size={18} />,
      title: 'AI Engineering',
      description: "Integration of language models (OpenAI, Claude) to build chatbots, intelligent assistants, RAG systems, and AI-powered automations.",
    },
    {
      icon: <FiCode size={18} />,
      title: 'Software Engineering',
      description: "Building robust applications based on clean architectures (API, MVC, Clean Code) and professional practices (Git, testing, CI/CD).",
    },
    {
      icon: <FiLayers size={18} />,
      title: 'Web Development',
      description: "Building performant UIs and backend APIs with React, Vue, Next.js, Node, and Flask — delivering complete, scalable web products.",
    },
  ];

  return (
    <Section id="about">

      {/* Section header */}
      <SectionHeader index="01" eyebrow="About" title="Who am I?" />

      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 mb-20 md:mb-28">

        {/* Bio */}
        <Reveal delay={0.05}>
          <div className="space-y-6 text-lead text-muted">
            <p className="text-foreground">
              Software developer with a deep passion for AI, I combine rigorous software engineering with LLM integration to build high-impact products. With 3+ years of experience and 15+ projects delivered, I design clean, performant, results-driven architectures.
            </p>
            <p>
              I thrive building robust and scalable full-stack applications, leveraging the power of modern AI technologies intelligent automation, conversational assistants, RAG systems to solve real-world problems.
            </p>
            <p>
              My goal: join an ambitious technical team to contribute to large-scale projects, bringing both solid engineering foundations and an AI-first mindset.
            </p>
          </div>
        </Reveal>

        {/* Expertise cards */}
        <Reveal delay={0.12}>
          <Card padding="none" className="divide-y divide-line">
            {areas.map((area, index) => (
              <div key={index} className="group flex gap-5 p-6 md:p-7">
                <div className="shrink-0 size-10 rounded-lg border border-line bg-surface-raised flex items-center justify-center text-accent-hover transition-colors duration-300 ease-soft group-hover:border-accent/40">
                  {area.icon}
                </div>
                <div>
                  <h3 className="text-h3 font-medium text-foreground mb-2">{area.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{area.description}</p>
                </div>
              </div>
            ))}
          </Card>
        </Reveal>
      </div>

      {/* Stats */}
      <Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 border-y border-line divide-line max-md:[&>*:nth-child(odd)]:border-r max-md:[&>*:nth-child(-n+2)]:border-b md:divide-x">
          {[
            { label: 'Projects delivered', value: '15+' },
            { label: 'Technologies', value: '20+' },
            { label: 'Years of exp.', value: '3+' },
            { label: 'Passion', value: '100%' },
          ].map((stat, index) => (
            <div key={index} className="border-line px-6 py-8 md:py-10">
              <div className="text-[2.5rem] md:text-5xl font-semibold tracking-[-0.04em] text-foreground leading-none mb-3">
                {stat.value}
              </div>
              <div className="font-mono text-eyebrow uppercase text-subtle">{stat.label}</div>
            </div>
          ))}
        </div>
      </Reveal>

    </Section>
  );
}
