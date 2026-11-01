'use client';

import type { HTMLAttributes, PointerEvent } from 'react';
import { cx } from './cx';

type CardProps = HTMLAttributes<HTMLDivElement> & {
  // Halo qui suit la souris + bordure éclairée au survol
  interactive?: boolean;
  padding?: 'none' | 'md' | 'lg';
  // 'tile' : grandes tuiles (bento, panneaux) · 'card' : blocs courants
  size?: 'tile' | 'card';
};

const paddings = {
  none: '',
  md: 'p-6 md:p-7',
  lg: 'p-7 md:p-10',
};

// Pose la position du pointeur en variables CSS, lues par .spotlight (globals.css)
function trackPointer(e: PointerEvent<HTMLDivElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
}

// Surface bleu nuit en verre dépoli, bordure en dégradé indigo ; la lumière vient du survol.
export default function Card({ interactive = false, padding = 'md', size = 'card', className, onPointerMove, ...rest }: CardProps) {
  return (
    <div
      {...rest}
      onPointerMove={interactive ? (e) => { trackPointer(e); onPointerMove?.(e); } : onPointerMove}
      className={cx(
        'relative frame',
        size === 'tile' ? 'rounded-tile' : 'rounded-card',
        paddings[padding],
        interactive && 'spotlight',
        className,
      )}
    />
  );
}
