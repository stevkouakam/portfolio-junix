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
      title: 'IA agentique & LLM',
      description: "Agents autonomes et systèmes multi-agents (LangGraph), RAG sur documents, function calling et intégration d'OpenAI, de Claude et de Mistral dans des produits concrets.",
    },
    {
      icon: <FiCode size={20} />,
      title: 'Génie logiciel',
      description: "Architecture hexagonale et principes SOLID, tests du niveau unitaire jusqu'au bout en bout (JUnit 5, Cypress, Cucumber), revues de code et GitFlow en équipe.",
    },
    {
      icon: <FiLayers size={20} />,
      title: 'Full-stack & mise en production',
      description: "Interfaces React, Angular et Vue, API Spring Boot, ASP.NET Core et FastAPI, conteneurisées avec Docker et livrées par des pipelines CI/CD.",
    },
  ];

  return (
    <Section id="about">

      {/* Section header */}
      <SectionHeader eyebrow="À propos" title="Qui suis-je ?" />

      {/* Bio */}
      <Reveal className="mb-20 md:mb-24">
        <p className="font-display text-[1.5rem] md:text-[2.125rem] leading-[1.3] tracking-[-0.02em] font-normal text-foreground max-w-4xl text-pretty">
          Je construis des logiciels qui raisonnent — et qui tiennent la route. J’allie la rigueur du génie logiciel à la conception d’agents IA pour créer des produits utiles, fiables et maintenables. Plus de 3 ans d’expérience et plus de 15 projets livrés.
        </p>
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 mt-10 max-w-4xl text-muted leading-relaxed">
          <p>
            Côté IA, je conçois des agents qui orchestrent plusieurs étapes, interrogent des bases de connaissances, appellent des outils et automatisent des tâches réelles — de la veille d’actualités à la recherche de logement.
          </p>
          <p>
            Côté logiciel, je m’appuie sur des architectures propres, des tests à tous les niveaux et l’intégration continue. Mon objectif : rejoindre une équipe ambitieuse en stage et contribuer à des produits où l’IA crée une vraie valeur.
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
            { label: 'Projets livrés', value: '15+' },
            { label: 'Technologies', value: '20+' },
            { label: 'Années d’exp.', value: '3+' },
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
