'use client';

import { motion } from 'framer-motion';
import {
  SiSpring, SiJunit5, SiMongodb, SiPostgresql,
  SiReact, SiAngular, SiVuedotjs, SiHtml5, SiTypescript,
  SiDocker, SiGit, SiPython, SiLinux, SiNextdotjs,
} from 'react-icons/si';
import { FiCode, FiServer, FiZap } from 'react-icons/fi';

export default function Skills() {
  const aiSkills = [
    'OpenAI API', 'Anthropic Claude', 'LangChain',
    'RAG Systems', 'Prompt Engineering', 'Autonomous Agents',
    'Embeddings', 'Vector DBs',
  ];

  const otherCategories = [
    {
      label: 'Backend Development',
      color: 'text-cyan-400',
      borderColor: 'border-cyan-500/20',
      pillBg: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/15',
      skills: ['Java', 'Spring Boot', 'Python', 'Node.js', 'Flask', 'API REST', 'JPA / Hibernate', 'JUnit'],
    },
    {
      label: 'Frontend Development',
      color: 'text-indigo-400',
      borderColor: 'border-indigo-500/20',
      pillBg: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/15',
      skills: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'HTML5 / CSS3', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      label: 'DevOps & Tools',
      color: 'text-emerald-400',
      borderColor: 'border-emerald-500/20',
      pillBg: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/15',
      skills: ['Docker', 'Git', 'CI/CD', 'Azure DevOps', 'PostgreSQL', 'MongoDB', 'Linux', 'Agile / Scrum'],
    },
  ];

  const techIcons = [
    { icon: <SiPython />, label: 'Python', color: 'hover:text-yellow-400' },
    { icon: <SiReact />, label: 'React', color: 'hover:text-cyan-400' },
    { icon: <SiNextdotjs />, label: 'Next.js', color: 'hover:text-white' },
    { icon: <SiVuedotjs />, label: 'Vue.js', color: 'hover:text-green-400' },
    { icon: <SiAngular />, label: 'Angular', color: 'hover:text-red-400' },
    { icon: <SiTypescript />, label: 'TypeScript', color: 'hover:text-blue-400' },
    { icon: <SiHtml5 />, label: 'HTML5', color: 'hover:text-orange-400' },
    { icon: <SiSpring />, label: 'Spring Boot', color: 'hover:text-green-500' },
    { icon: <FiServer />, label: 'Node.js', color: 'hover:text-green-400' },
    { icon: <FiCode />, label: 'Java', color: 'hover:text-orange-500' },
    { icon: <SiDocker />, label: 'Docker', color: 'hover:text-blue-500' },
    { icon: <SiMongodb />, label: 'MongoDB', color: 'hover:text-green-600' },
    { icon: <SiPostgresql />, label: 'PostgreSQL', color: 'hover:text-blue-600' },
    { icon: <SiGit />, label: 'Git', color: 'hover:text-orange-500' },
    { icon: <SiLinux />, label: 'Linux', color: 'hover:text-yellow-300' },
    { icon: <SiJunit5 />, label: 'JUnit', color: 'hover:text-red-400' },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-indigo-400 mb-3 block">
              Skills
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
              My tech stack
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-400" />
          </motion.div>

          {/* IA & LLM — catégorie premium pleine largeur */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="p-[1px] rounded-2xl bg-gradient-to-r from-violet-500/50 via-indigo-500/40 to-cyan-500/50">
              <div className="bg-[#080f20] rounded-2xl p-6">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-violet-500/15 flex items-center justify-center text-violet-400">
                      <FiZap size={17} />
                    </div>
                    <h3 className="font-bold text-violet-300 text-sm uppercase tracking-wider">
                      IA & LLM Engineering
                    </h3>
                  </div>
                  <span className="text-xs font-semibold text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3 py-1 rounded-lg">
                    Core Expertise
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {aiSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm font-medium text-violet-200 bg-violet-500/10 border border-violet-500/20 rounded-xl hover:bg-violet-500/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Autres catégories — grille 3 colonnes */}
          <div className="grid md:grid-cols-3 gap-5 mb-6">
            {otherCategories.map((cat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-5 bg-[#0d1526] border rounded-2xl hover:bg-[#0f1a30] transition-all duration-300 ${cat.borderColor}`}
              >
                <h3 className={`font-bold text-xs mb-4 uppercase tracking-wider ${cat.color}`}>
                  {cat.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-2.5 py-1.5 text-xs font-medium rounded-lg border ${cat.pillBg}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Barre d'icônes tech */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 bg-[#0d1526] border border-white/5 rounded-2xl"
          >
            <p className="text-slate-600 text-xs text-center mb-5 uppercase tracking-[0.15em] font-semibold">
              Technologies I work with
            </p>
            <div className="flex flex-wrap justify-center gap-5 text-slate-600">
              {techIcons.map(({ icon, label, color }, i) => (
                <span
                  key={i}
                  title={label}
                  className={`text-2xl transition-colors duration-200 cursor-default ${color}`}
                >
                  {icon}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
