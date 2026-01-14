'use client';

import { motion } from 'framer-motion';
import { FiTerminal, FiCode, FiCpu, FiBriefcase } from 'react-icons/fi';

export default function About() {
  const experiences = [
   {
  icon: <FiCode />,
  title: "Génie Logiciel",
  description: "Conception d’applications robustes et maintenables, basées sur des architectures propres (API, MVC, Clean Code) et des pratiques professionnelles (Git, tests, CI/CD)."
},
{
  icon: <FiCpu />,
  title: "Intelligence Artificielle & LLM",
  description: "Intégration de modèles de langage (OpenAI, Claude) pour créer des chatbots, assistants intelligents, systèmes RAG et automatisations basées sur l’IA."
},
{
  icon: <FiBriefcase />,
  title: "Développement Web Moderne",
  description: "Développement d’interfaces performantes et d’APIs backend avec React, Vue, Next.js, Node, Flask, pour des produits web complets et scalables."
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
              <div className="ml-6 space-y-4 text-gray-300 leading-relaxed">
                <p>
               Étudiant en 3ᵉ année en informatique, je suis animé par une passion profonde pour le développement logiciel et l’intelligence artificielle. Pour moi, coder ne se limite pas à écrire des programmes : c’est concevoir des systèmes intelligents, comprendre leur logique en profondeur et transformer des idées en solutions concrètes à fort impact.</p>

              <p>Je m’épanouis dans la création d’applications robustes, performantes et évolutives, en combinant les bonnes pratiques du génie logiciel avec la puissance des technologies d’IA modernes, notamment les modèles de langage (LLM). J’aime explorer, expérimenter et bâtir des architectures propres, maintenables et orientées utilisateurs, capables d’automatiser, d’assister et d’optimiser des processus réels.</p>

              <p>Mon objectif est de devenir tres bon dans mon domaine pour capable de concevoir des produits intelligents utiles, fiables et innovants, et de contribuer activement à des équipes techniques ambitieuses, d’abord à travers un stage, puis dans des projets à grande échelle.
              </p>
              </div>

              <div className="font-mono text-sm text-gray-500">               
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
              { label: 'Projets', value: '15+' },
              { label: 'Technologies', value: '20+' },
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
