'use client';

import { motion } from 'framer-motion';
import { FiTerminal, FiCode, FiDatabase, FiSettings } from 'react-icons/fi';
import {
  SiSpring, SiJunit5, SiMongodb, SiPostgresql,
  SiReact, SiAngular, SiVuedotjs, SiHtml5, SiTypescript,
  SiDocker, SiGit, SiIntellijidea,
  SiPython, SiLinux
} from 'react-icons/si';

export default function Skills() {
  const skillCategories = [
    {
      category: "Backend Development",
      description: "Développement backend & architecture",
      skills: [
        {
          name: "Java",
          details: "Spring Boot, JPA, Hibernate, JAX-RS",
          icon: <FiCode />
        },
        {
          name: "Tests",
          details: "JUnit, tests unitaires et d'intégration",
          icon: <SiJunit5 />
        },
        {
          name: "Bases de données",
          details: "SQL Server, MongoDB, Oracle, Morphia",
          icon: <SiMongodb />
        },
      ]
    },
    {
      category: "Frontend Development",
      description: "Interfaces modernes & responsive",
      skills: [
        {
          name: "Framework",
          details: "React, Angular, Vue.js",
          icon: <SiReact />
        },
        {
          name: "Technologies Web",
          details: "HTML5, CSS3, JavaScript, TypeScript",
          icon: <SiHtml5 />
        },
        {
          name: "UI/UX",
          details: "Swing, interfaces responsives, composants réutilisables",
          icon: <FiCode />
        },
      ]
    },
    {
      category: "DevOps & Méthodologie",
      description: "Outils & bonnes pratiques",
      skills: [
        {
          name: "Outils",
          details: "Docker, Git, Azure DevOps, CI/CD, maven",
          icon: <SiDocker />
        },
        {
          name: "Méthodologies",
          details: "Agile/Scrum, TDD, architecture en couches, code review",
          icon: <FiTerminal />
        },
        {
          name: "IDE",
          details: "IntelliJ IDEA, VS Code, Maven, Cursor",
          icon: <SiIntellijidea />
        },
      ]
    },
    {
      category: "Compétences Additionnelles",
      description: "Technologies complémentaires",
      skills: [
        {
          name: "Langages",
          details: "Python, C/C++, PHP, JavaScript, TypeScript",
          icon: <SiPython />
        },
        {
          name: "Intelligence Artificielle",
          details: "Intégration d'agents conversationnels (LLM)",
          icon: <FiCode />
        },
        {
          name: "Systèmes",
          details: "Linux, Windows, Algorithme et structure de données",
          icon: <SiLinux />
        },
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20 relative">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">

          {/* Terminal Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
              <FiTerminal size={16} />
              <span className="font-mono">~/skills</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-mono mb-4">
              $ cat competences_techniques.json
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-600"></div>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-slate-900/50 backdrop-blur-sm border border-purple-600/20 p-6 hover:border-purple-600/40 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white font-mono mb-1">
                    <span className="text-purple-400">const</span> {category.category.toLowerCase().replace(/ /g, '_')} = {'{'}
                  </h3>
                  <p className="text-gray-500 text-xs font-mono ml-4">
                    // {category.description}
                  </p>
                </div>

                {/* Skills */}
                <div className="space-y-5 ml-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="group"
                    >
                      {/* Skill Name */}
                      <div className="flex items-start gap-3 mb-2">
                        <span className="text-purple-400 text-xl mt-1 group-hover:scale-110 transition-transform">
                          {skill.icon}
                        </span>
                        <div className="flex-1">
                          <div className="text-white font-mono text-sm mb-1 group-hover:text-purple-400 transition-colors">
                            {skill.name}:
                          </div>
                          <div className="text-gray-400 text-xs leading-relaxed">
                            <span className="text-yellow-400">&quot;</span>
                            {skill.details}
                            <span className="text-yellow-400">&quot;</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Category Footer */}
                <div className="mt-6 font-mono text-sm text-gray-500">
                  {'}'};
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info with Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 bg-slate-900/30 border border-purple-600/10 overflow-hidden"
          >
            <div className="p-6 text-center">
              <p className="text-gray-400 font-mono text-sm mb-6">
                <span className="text-gray-600">// </span>
                Intérêt marqué pour l&apos;IA et en constante évolution
              </p>

              {/* Tech Stack Icons */}
              <div className="flex flex-wrap justify-center gap-4 text-gray-500">
                <FiCode className="text-2xl hover:text-orange-500 transition-colors" title="Java" />
                <SiSpring className="text-2xl hover:text-green-500 transition-colors" title="Spring Boot" />
                <SiReact className="text-2xl hover:text-blue-400 transition-colors" title="React" />
                <SiVuedotjs className="text-2xl hover:text-green-400 transition-colors" title="Vue.js" />
                <SiAngular className="text-2xl hover:text-red-500 transition-colors" title="Angular" />
                <SiTypescript className="text-2xl hover:text-blue-500 transition-colors" title="TypeScript" />
                <SiDocker className="text-2xl hover:text-blue-600 transition-colors" title="Docker" />
                <SiMongodb className="text-2xl hover:text-green-600 transition-colors" title="MongoDB" />
                <SiPostgresql className="text-2xl hover:text-blue-700 transition-colors" title="PostgreSQL" />
                <SiGit className="text-2xl hover:text-orange-600 transition-colors" title="Git" />
                <SiPython className="text-2xl hover:text-yellow-500 transition-colors" title="Python" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
