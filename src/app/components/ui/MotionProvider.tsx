'use client';

import { MotionConfig } from 'framer-motion';
import type { ReactNode } from 'react';
import { DURATION, EASE_SOFT } from './motion';

// Réglages Framer Motion communs : courbe ease-soft par défaut, et respect de
// prefers-reduced-motion (les déplacements sont coupés, seuls les fondus restent).
export default function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: DURATION, ease: EASE_SOFT }}>
      {children}
    </MotionConfig>
  );
}
