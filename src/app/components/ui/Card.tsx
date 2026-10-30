import type { HTMLAttributes } from 'react';
import { cx } from './cx';

type CardProps = HTMLAttributes<HTMLDivElement> & {
  // Réagit au survol (bordure plus marquée, fond légèrement éclairci)
  interactive?: boolean;
  padding?: 'none' | 'md' | 'lg';
};

const paddings = {
  none: '',
  md: 'p-6',
  lg: 'p-8 md:p-10',
};

// Carte sobre : fond à peine relevé, bordure fine, pas d'ombre.
export default function Card({ interactive = false, padding = 'md', className, ...rest }: CardProps) {
  return (
    <div
      {...rest}
      className={cx(
        'relative rounded-card border border-line bg-surface/60',
        paddings[padding],
        interactive && 'transition-colors duration-300 ease-soft hover:border-line-strong hover:bg-surface',
        className,
      )}
    />
  );
}
