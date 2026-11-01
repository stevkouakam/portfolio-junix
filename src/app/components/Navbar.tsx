'use client';

import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Button from './ui/Button';
import { cx } from './ui/cx';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Accueil', href: '#home' },
    { label: 'À propos', href: '#about' },
    { label: 'Projets', href: '#projects' },
    { label: 'Compétences', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const floating = scrolled || isOpen;

  return (
    <nav className="fixed top-0 inset-x-0 z-50 px-3 pt-3 md:pt-4">
      <div
        className={cx(
          'mx-auto w-full max-w-content border transition-[background-color,border-color,box-shadow,border-radius] duration-500',
          isOpen ? 'rounded-3xl' : 'rounded-full',
          floating
            ? 'glass border-line shadow-[0_12px_40px_-12px_rgb(0_0_0/0.6)]'
            : 'bg-transparent border-transparent',
        )}
      >
        <div className="flex justify-between items-center h-14 pl-5 pr-2.5">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 font-display text-[1.0625rem] font-semibold tracking-tight text-foreground">
            <span aria-hidden className="size-2.5 rounded-full bg-accent shadow-[0_0_14px_3px_rgb(124_131_255/0.55)]" />
            Steeve juniX
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-0.5">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3.5 h-9 inline-flex items-center rounded-full text-sm text-muted hover:text-foreground hover:bg-surface-raised/70 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button href="#contact" size="sm" className="ml-3">
              Me contacter
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden size-10 inline-flex items-center justify-center rounded-full text-muted hover:text-foreground hover:bg-surface-raised/70 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Ouvrir ou fermer le menu"
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden px-5 pb-5 animate-fadeIn">
            <div className="flex flex-col border-t border-line pt-3">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="py-3 font-display text-xl font-medium text-muted hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button href="#contact" variant="primary" className="mt-4" onClick={() => setIsOpen(false)}>
                Me contacter
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
