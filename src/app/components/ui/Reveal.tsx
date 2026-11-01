'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { DURATION, EASE_SOFT } from './motion';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  // Distance du glissement vertical, en px
  y?: number;
  // 'view' : au scroll (une seule fois) · 'mount' : au chargement (hero)
  trigger?: 'view' | 'mount';
};

// Apparition discrète : fondu + léger glissement vers le haut.
// prefers-reduced-motion est géré globalement par MotionProvider.
export default function Reveal({ children, className, delay = 0, y = 12, trigger = 'view' }: RevealProps) {
  const hidden = { opacity: 0, y };
  const shown = { opacity: 1, y: 0 };
  const transition = { duration: DURATION, delay, ease: EASE_SOFT };

  if (trigger === 'mount') {
    return (
      <motion.div initial={hidden} animate={shown} transition={transition} className={className}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={hidden}
      whileInView={shown}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
