import type { HTMLAttributes } from 'react';
import { cx } from './cx';

type TagProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: 'neutral' | 'accent';
};

// Étiquette technique en police mono (technos, statuts).
export default function Tag({ tone = 'neutral', className, ...rest }: TagProps) {
  return (
    <span
      {...rest}
      className={cx(
        'inline-flex items-center gap-1.5 h-6 px-2.5 rounded-md border font-mono text-[0.6875rem] tracking-wide',
        tone === 'neutral' && 'border-line bg-surface-raised/60 text-muted',
        tone === 'accent' && 'border-accent/25 bg-accent-soft text-accent-hover',
        className,
      )}
    />
  );
}
