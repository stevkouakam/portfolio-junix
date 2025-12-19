'use client';

import { motion } from 'framer-motion';
import { FiTerminal, FiCode, FiCpu, FiBriefcase } from 'react-icons/fi';

export default function About() {
  const experiences = [
    {
      icon: <FiCode />,
      title: "Développement Logiciel",
      description: "Création de solutions logicielles robustes et scalables avec des technologies modernes"
    },
    {
      icon: <FiCpu />,
      title: "Machine Learning & LLM",
      description: "Développement et intégration de modèles d'intelligence artificielle pour résoudre des problèmes complexes"
    },
    {
      icon: <FiBriefcase />,
      title: "Développement Web",
      description: "Applications web performantes et responsive avec les derniers frameworks"
    }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 relative">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">

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
              <span className="font-mono">~/about</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-mono mb-4">
              $ cat about.txt
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-600"></div>
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">

            {/* Left Column - Bio */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="font-mono text-sm">
                <span className="text-purple-400">class</span>{' '}
                <span className="text-blue-400">Developer</span>{' '}
                <span className="text-gray-500">{'{'}</span>
              </div>

              <div className="ml-6 space-y-4 text-gray-300 leading-relaxed">
                <p>
                  <span className="text-gray-500 font-mono">// </span>
                  Passionné par le développement logiciel et l'intelligence artificielle,
                  je transforme des idées complexes en solutions technologiques élégantes et efficaces.
                </p>

                <p>
                  <span className="text-gray-500 font-mono">// </span>
                  Mon approche combine rigueur technique et créativité pour concevoir
                  des applications qui répondent aux besoins réels des utilisateurs.
                </p>

                <p>
                  <span className="text-gray-500 font-mono">// </span>
                  Spécialisé dans le développement avec Python, Java, et les technologies web modernes,
                  j'explore continuellement les dernières innovations en Machine Learning et LLM.
                </p>
              </div>

              <div className="font-mono text-sm text-gray-500">
                {'}'}
              </div>
            </motion.div>

            {/* Right Column - Experience Cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-4"
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="group p-6 bg-slate-900/50 backdrop-blur-sm border border-purple-600/20 hover:border-purple-600/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-purple-400 text-2xl group-hover:scale-110 transition-transform duration-300">
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-mono text-lg mb-2 group-hover:text-purple-400 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { label: 'Projets', value: '20+' },
              { label: 'Technologies', value: '15+' },
              { label: 'Expérience', value: '3+ ans' },
              { label: 'Passion', value: '100%' }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-slate-900/30 border border-purple-600/10 hover:border-purple-600/30 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-purple-400 font-mono mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-mono">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
