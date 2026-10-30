'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiUser, FiMessageSquare, FiSend, FiGithub, FiLinkedin, FiClock } from 'react-icons/fi';
import Button from './ui/Button';
import Card from './ui/Card';
import Reveal from './ui/Reveal';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
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
    'w-full h-11 px-4 bg-canvas/60 border border-line hover:border-line-strong focus:border-accent/70 focus:bg-canvas text-foreground placeholder:text-subtle text-sm rounded-lg outline-none transition-colors duration-200';
  const labelClass = 'flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-wider text-subtle mb-2.5';

  return (
    <Section id="contact">

      {/* Section header */}
      <SectionHeader
        index="04"
        eyebrow="Contact"
        title="Let&apos;s work together"
        description="Have a project idea or an opportunity? I&apos;m available and all ears."
        align="center"
      />

      <div className="grid lg:grid-cols-[1fr_1.35fr] gap-4 max-w-5xl mx-auto">

        {/* Contact info */}
        <Reveal className="h-full">
          <Card padding="none" className="h-full divide-y divide-line">
            {contactLinks.map((link, index) => (
              <div
                key={index}
                className="flex items-center gap-4 px-6 py-5"
              >
                <div className="size-9 rounded-lg border border-line bg-surface-raised flex items-center justify-center text-muted shrink-0">
                  {link.icon}
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[0.6875rem] uppercase tracking-wider text-subtle mb-1">{link.label}</p>
                  {link.href ? (
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="block truncate text-foreground text-sm font-medium hover:text-accent-hover transition-colors duration-200"
                    >
                      {link.value}
                    </a>
                  ) : (
                    <p className="text-foreground text-sm font-medium">{link.value}</p>
                  )}
                </div>
              </div>
            ))}
          </Card>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.08}>
          <Card padding="lg">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>
                    <FiUser size={11} />
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
                  <label className={labelClass}>
                    <FiMail size={11} />
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
              </div>

              <div>
                <label className={labelClass}>
                  <FiMessageSquare size={11} />
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`${inputClass} h-auto py-3 resize-none`}
                  placeholder="Your message..."
                />
              </div>

              <Button
                type="submit"
                disabled={status === 'sending'}
                className="w-full"
              >
                {status === 'sending' ? (
                  <>
                    <div className="size-4 border-2 border-canvas/30 border-t-canvas rounded-full animate-spin" />
                    Sending...
                  </>
                ) : status === 'success' ? (
                  'Message sent!'
                ) : (
                  <>
                    <FiSend size={15} className="transition-transform duration-300 ease-soft group-hover:translate-x-0.5" />
                    Send message
                  </>
                )}
              </Button>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: EASE_SOFT }}
                  className="px-4 py-3 border border-success/25 bg-success/10 text-success text-sm rounded-lg"
                >
                  ✓ Message sent successfully!
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: EASE_SOFT }}
                  className="px-4 py-3 border border-red-400/25 bg-red-400/10 text-red-300 text-sm rounded-lg"
                >
                  ✗ An error occurred. Please try again.
                </motion.div>
              )}
            </form>
          </Card>
        </Reveal>

      </div>
    </Section>
  );
}
