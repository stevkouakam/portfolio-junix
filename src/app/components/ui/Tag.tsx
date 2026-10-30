import type { HTMLAttributes } from 'react';
import { cx } from './cx';

type TagProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: 'neutral' | 'accent' | 'success';
};

// Pastille (technos, catégories, statuts).
export default function Tag({ tone = 'neutral', className, ...rest }: TagProps) {
  return (
    <span
      {...rest}
      className={cx(
        'inline-flex items-center gap-1.5 h-7 px-3 rounded-full border text-[0.8125rem] leading-none whitespace-nowrap',
        tone === 'neutral' && 'border-line bg-surface-raised/50 text-muted',
        tone === 'accent' && 'border-accent/30 bg-accent-soft text-accent-hover',
        tone === 'success' && 'border-success/25 bg-success/10 text-success',
        className,
      )}
    />
  );
}
