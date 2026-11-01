'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiUser, FiMessageSquare, FiSend, FiGithub, FiLinkedin, FiClock } from 'react-icons/fi';
import Button from './ui/Button';
import ProjectVisual from './ui/ProjectVisual';
import Reveal from './ui/Reveal';
import Section from './ui/Section';
import { EASE_SOFT } from './ui/motion';

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
      label: 'Courriel',
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
      label: 'Délai de réponse',
      value: '24 à 48 heures',
      href: null,
    },
  ];

  // Champ « étiquette intégrée » : l'étiquette vit dans le cadre, qui s'éclaire au focus
  const fieldClass =
    'group/field block rounded-control border border-line bg-canvas/50 px-4 pt-3 pb-1 transition-[border-color,box-shadow,background-color] ' +
    'hover:border-line-strong focus-within:border-accent/70 focus-within:bg-canvas/80 focus-within:shadow-[0_0_0_4px_rgb(124_131_255/0.12)]';
  const labelClass =
    'flex items-center gap-1.5 text-xs font-medium text-subtle transition-colors group-focus-within/field:text-accent-hover';
  const inputClass =
    'w-full h-10 bg-transparent text-foreground placeholder:text-subtle/70 text-[0.9375rem] outline-none';

  return (
    <Section id="contact">
      <Reveal>
        <div className="grid lg:grid-cols-[1fr_1.3fr] rounded-tile border border-line overflow-hidden">

          {/* ── Panneau indigo : titre + contacts ── */}
          <div className="relative overflow-hidden p-8 md:p-12 bg-[radial-gradient(120%_90%_at_0%_0%,var(--accent-deep)_0%,#1a1f5c_35%,var(--surface)_80%)]">
            <div aria-hidden className="absolute -right-24 -bottom-24 size-[28rem] opacity-40 pointer-events-none">
              <ProjectVisual kind="other" uid="contact" />
            </div>

            <div className="relative">
              <p className="inline-flex items-center gap-2 text-eyebrow font-medium text-accent-hover mb-5">
                <span aria-hidden className="size-1.5 rounded-full bg-accent-hover shadow-[0_0_12px_2px_rgb(165_170_255/0.6)]" />
                Contact
              </p>
              <h2 className="text-h2 font-semibold text-white text-balance mb-5">
                Travaillons ensemble
              </h2>
              <p className="text-lead text-white/70 max-w-sm mb-10">
                Vous avez une idée de projet ou une opportunité ? Je suis disponible et à votre écoute.
              </p>

              {/* Contact info */}
              <div className="space-y-2">
                {contactLinks.map((link, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 rounded-control px-3 py-3 -mx-3 transition-colors hover:bg-white/[0.04]"
                  >
                    <div className="size-10 rounded-xl bg-white/[0.07] border border-white/10 flex items-center justify-center text-white/80 shrink-0">
                      {link.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-white/50 mb-0.5">{link.label}</p>
                      {link.href ? (
                        <a
                          href={link.href}
                          target={link.external ? '_blank' : undefined}
                          rel={link.external ? 'noopener noreferrer' : undefined}
                          className="block truncate text-white text-[0.9375rem] font-medium hover:text-accent-hover transition-colors"
                        >
                          {link.value}
                        </a>
                      ) : (
                        <p className="text-white text-[0.9375rem] font-medium">{link.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Form ── */}
          <div className="glass p-8 md:p-12 border-t lg:border-t-0 lg:border-l border-line">
            <form onSubmit={handleSubmit} className="space-y-4 h-full flex flex-col">
              <div className="grid sm:grid-cols-2 gap-4">
                <label className={fieldClass}>
                  <span className={labelClass}>
                    <FiUser size={12} />
                    Nom
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="Votre nom"
                  />
                </label>

                <label className={fieldClass}>
                  <span className={labelClass}>
                    <FiMail size={12} />
                    Courriel
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="votre@email.com"
                  />
                </label>
              </div>

              <label className={`${fieldClass} flex-1 flex flex-col`}>
                <span className={labelClass}>
                  <FiMessageSquare size={12} />
                  Message
                </span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`${inputClass} h-auto flex-1 min-h-40 py-2 resize-none`}
                  placeholder="Votre message..."
                />
              </label>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
                <Button
                  type="submit"
                  disabled={status === 'sending'}
                  className="sm:w-auto w-full h-12 px-7"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="size-4 border-2 border-canvas/30 border-t-canvas rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : status === 'success' ? (
                    'Message envoyé !'
                  ) : (
                    <>
                      <FiSend size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                      Envoyer le message
                    </>
                  )}
                </Button>

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, ease: EASE_SOFT }}
                    className="flex-1 px-4 py-3 border border-success/25 bg-success/10 text-success text-sm rounded-control"
                  >
                    ✓ Message envoyé avec succès !
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, ease: EASE_SOFT }}
                    className="flex-1 px-4 py-3 border border-red-400/25 bg-red-400/10 text-red-300 text-sm rounded-control"
                  >
                    ✗ Une erreur est survenue. Veuillez réessayer.
                  </motion.div>
                )}
              </div>
            </form>
          </div>

        </div>
      </Reveal>
    </Section>
  );
}
