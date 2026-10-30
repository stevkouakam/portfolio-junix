'use client';

import { FiCpu, FiCode, FiLayers } from 'react-icons/fi';
import Card from './ui/Card';
import Reveal from './ui/Reveal';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';

export default function About() {
  const areas = [
    {
      icon: <FiCpu size={20} />,
      title: 'AI Engineering',
      description: "Integration of language models (OpenAI, Claude) to build chatbots, intelligent assistants, RAG systems, and AI-powered automations.",
    },
    {
      icon: <FiCode size={20} />,
      title: 'Software Engineering',
      description: "Building robust applications based on clean architectures (API, MVC, Clean Code) and professional practices (Git, testing, CI/CD).",
    },
    {
      icon: <FiLayers size={20} />,
      title: 'Web Development',
      description: "Building performant UIs and backend APIs with React, Vue, Next.js, Node, and Flask — delivering complete, scalable web products.",
    },
  ];

  return (
    <Section id="about">

      {/* Section header */}
      <SectionHeader eyebrow="About" title="Who am I?" />

      {/* Bio */}
      <Reveal className="mb-20 md:mb-24">
        <p className="font-display text-[1.5rem] md:text-[2.125rem] leading-[1.3] tracking-[-0.02em] font-normal text-foreground max-w-4xl text-pretty">
          Software developer with a deep passion for AI, I combine rigorous software engineering with LLM integration to build high-impact products. With 3+ years of experience and 15+ projects delivered, I design clean, performant, results-driven architectures.
        </p>
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 mt-10 max-w-4xl text-muted leading-relaxed">
          <p>
            I thrive building robust and scalable full-stack applications, leveraging the power of modern AI technologies intelligent automation, conversational assistants, RAG systems to solve real-world problems.
          </p>
          <p>
            My goal: join an ambitious technical team to contribute to large-scale projects, bringing both solid engineering foundations and an AI-first mindset.
          </p>
        </div>
      </Reveal>

      {/* Expertise cards */}
      <Reveal>
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          {areas.map((area, index) => (
            <Card key={index} interactive padding="lg" className="group">
              <div className="size-12 rounded-2xl bg-accent-soft border border-accent/30 flex items-center justify-center text-accent-hover mb-10 transition-transform duration-500 group-hover:-translate-y-1">
                {area.icon}
              </div>
              <h3 className="text-h3 font-semibold text-foreground mb-3">{area.title}</h3>
              <p className="text-muted text-[0.9375rem] leading-relaxed">{area.description}</p>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <Card padding="none" size="card" className="grid grid-cols-2 md:grid-cols-4">
          {[
            { label: 'Projects delivered', value: '15+' },
            { label: 'Technologies', value: '20+' },
            { label: 'Years of exp.', value: '3+' },
            { label: 'Passion', value: '100%' },
          ].map((stat, index) => (
            <div
              key={index}
              className="px-6 py-8 md:px-8 md:py-10 border-line max-md:odd:border-r max-md:[&:nth-child(-n+2)]:border-b md:[&:not(:last-child)]:border-r"
            >
              <div className="font-display text-[2.75rem] md:text-[3.5rem] font-semibold tracking-[-0.045em] leading-none text-foreground mb-3">
                {stat.value}
              </div>
              <div className="text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </Card>
      </Reveal>

    </Section>
  );
}
