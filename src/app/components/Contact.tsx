'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiTerminal, FiMail, FiUser, FiMessageSquare, FiSend, FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Simuler l'envoi (à remplacer par votre logique d'envoi réelle)
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 relative">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* Terminal Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mb-4">
              <FiTerminal size={16} />
              <span className="font-mono">~/contact</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-mono mb-4">
              $ send_message
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
            <p className="text-gray-400 mt-6 font-mono text-sm">
              <span className="text-gray-600">// </span>
              Une idée de projet ? Discutons-en !
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Left Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Info Box */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-600/20 p-6">
                <h3 className="text-xl font-bold text-white font-mono mb-6">
                  <span className="text-purple-400">const</span> contactInfo = {'{'}
                </h3>

                <div className="space-y-4 ml-4">
                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <FiMail className="text-purple-400 mt-1" size={20} />
                    <div>
                      <p className="text-gray-500 font-mono text-xs mb-1">email:</p>
                      <a
                        href="mailto:kouakamsteve782@gmail.com"
                        className="text-gray-300 hover:text-purple-400 transition-colors font-mono text-sm"
                      >
                        "kouakamsteve782@gmail.com"
                      </a>
                    </div>
                  </div>

                  {/* GitHub */}
                  <div className="flex items-start gap-3">
                    <FiGithub className="text-purple-400 mt-1" size={20} />
                    <div>
                      <p className="text-gray-500 font-mono text-xs mb-1">github:</p>
                      <a
                        href="https://github.com/stevkouakam"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-purple-400 transition-colors font-mono text-sm"
                      >
                        "@stevkouakam"
                      </a>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex items-start gap-3">
                    <FiLinkedin className="text-purple-400 mt-1" size={20} />
                    <div>
                      <p className="text-gray-500 font-mono text-xs mb-1">linkedin:</p>
                      <a
                        href="https://www.linkedin.com/in/steeve-junix-044659284"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-purple-400 transition-colors font-mono text-sm"
                      >
                        "steeve-junix"
                      </a>
                    </div>
                  </div>
                </div>

                <p className="text-gray-500 font-mono text-sm mt-6">{'}'}</p>
              </div>

              {/* Command Hint */}
              <div className="bg-slate-900/30 border border-purple-600/10 p-4">
                <p className="text-gray-500 font-mono text-xs">
                  <span className="text-purple-400">$</span> echo "Réponse sous 24-48h"
                </p>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Input */}
                <div>
                  <label className="flex items-center gap-2 text-gray-400 font-mono text-sm mb-2">
                    <FiUser size={14} />
                    Nom
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-purple-600/20 focus:border-purple-600/60 text-white font-mono text-sm transition-colors outline-none"
                    placeholder="Votre nom"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="flex items-center gap-2 text-gray-400 font-mono text-sm mb-2">
                    <FiMail size={14} />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-purple-600/20 focus:border-purple-600/60 text-white font-mono text-sm transition-colors outline-none"
                    placeholder="votre@email.com"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="flex items-center gap-2 text-gray-400 font-mono text-sm mb-2">
                    <FiMessageSquare size={14} />
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-purple-600/20 focus:border-purple-600/60 text-white font-mono text-sm transition-colors outline-none resize-none"
                    placeholder="Votre message..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-600/50 text-white font-mono text-sm transition-colors flex items-center justify-center gap-2 group"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : status === 'success' ? (
                    <>
                      Message envoyé !
                    </>
                  ) : (
                    <>
                      <FiSend size={16} className="group-hover:translate-x-1 transition-transform" />
                      Envoyer le message
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-green-600/10 border border-green-600/30 text-green-400 font-mono text-xs"
                  >
                    ✓ Message envoyé avec succès !
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-red-600/10 border border-red-600/30 text-red-400 font-mono text-xs"
                  >
                    ✗ Erreur lors de l'envoi. Réessayez.
                  </motion.div>
                )}
              </form>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
