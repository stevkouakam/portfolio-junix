'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiUser, FiMessageSquare, FiSend, FiGithub, FiLinkedin, FiClock } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Erreur:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactLinks = [
    {
      icon: <FiMail size={18} />,
      label: 'Email',
      value: 'kouakamsteve782@gmail.com',
      href: 'mailto:kouakamsteve782@gmail.com',
    },
    {
      icon: <FiGithub size={18} />,
      label: 'GitHub',
      value: '@stevkouakam',
      href: 'https://github.com/stevkouakam',
      external: true,
    },
    {
      icon: <FiLinkedin size={18} />,
      label: 'LinkedIn',
      value: 'steeve-junix',
      href: 'https://www.linkedin.com/in/steeve-junix-kouakam-044659284/',
      external: true,
    },
    {
      icon: <FiClock size={18} />,
      label: 'Response time',
      value: '24 – 48 hours',
      href: null,
    },
  ];

  const inputClass =
    'w-full px-4 py-3 bg-[#060b18] border border-white/10 focus:border-indigo-500/60 text-slate-100 placeholder-slate-600 text-sm rounded-xl outline-none transition-colors duration-200';

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-indigo-400 mb-3 block">
              Contact
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
              Let&apos;s work together
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto mb-5" />
            <p className="text-slate-400 max-w-md mx-auto">
              Have a project idea or an opportunity? I&apos;m available and all ears.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              {contactLinks.map((link, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-[#0d1526] border border-white/5 rounded-2xl"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                    {link.icon}
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs mb-0.5">{link.label}</p>
                    {link.href ? (
                      <a
                        href={link.href}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                        className="text-slate-200 text-sm font-medium hover:text-indigo-400 transition-colors"
                      >
                        {link.value}
                      </a>
                    ) : (
                      <p className="text-slate-200 text-sm font-medium">{link.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="flex items-center gap-1.5 text-slate-400 text-xs font-medium mb-2">
                    <FiUser size={12} />
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-1.5 text-slate-400 text-xs font-medium mb-2">
                    <FiMail size={12} />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-1.5 text-slate-400 text-xs font-medium mb-2">
                    <FiMessageSquare size={12} />
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`${inputClass} resize-none`}
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-600/50 text-white font-semibold text-sm rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group shadow-lg shadow-indigo-500/20"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : status === 'success' ? (
                    'Message sent!'
                  ) : (
                    <>
                      <FiSend size={15} className="group-hover:translate-x-0.5 transition-transform" />
                      Send message
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm rounded-xl"
                  >
                    ✓ Message sent successfully!
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3.5 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-xl"
                  >
                    ✗ An error occurred. Please try again.
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
