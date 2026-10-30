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
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={cx(
        'fixed top-0 inset-x-0 z-50 border-b transition-[background-color,border-color] duration-300 ease-soft',
        scrolled || isOpen ? 'bg-canvas/80 backdrop-blur-xl border-line' : 'bg-transparent border-transparent',
      )}
    >
      <div className="mx-auto w-full max-w-content px-6">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 text-[0.9375rem] font-semibold tracking-tight text-foreground">
            <span aria-hidden className="size-2 rounded-[3px] bg-accent" />
            Steeve juniX
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-sm text-muted hover:text-foreground transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <Button href="#contact" variant="secondary" size="sm" className="ml-4">
              Contact Me
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden -mr-2 p-2 text-muted hover:text-foreground transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 pt-2 animate-fadeIn">
            <div className="flex flex-col border-t border-line pt-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="py-3 text-base text-muted hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button href="#contact" variant="primary" className="mt-4" onClick={() => setIsOpen(false)}>
                Contact Me
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
