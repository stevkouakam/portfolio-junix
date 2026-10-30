import type { ReactNode } from 'react';
import Reveal from './Reveal';
import { cx } from './cx';

type SectionHeaderProps = {
  // Numéro décoratif de la section (« 01 », « 02 »…)
  index?: string;
  eyebrow: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
};

export default function SectionHeader({ index, eyebrow, title, description, align = 'left', className }: SectionHeaderProps) {
  const centered = align === 'center';

  return (
    <Reveal className={cx('mb-14 md:mb-20', centered && 'text-center', className)}>
      <p className={cx('flex items-center gap-3 font-mono text-eyebrow uppercase text-subtle mb-6', centered && 'justify-center')}>
        {index && (
          <span aria-hidden className="text-accent">
            {index}
          </span>
        )}
        {index && <span aria-hidden className="h-px w-6 bg-line-strong" />}
        <span>{eyebrow}</span>
      </p>
      <h2 className={cx('text-h2 font-semibold text-foreground text-balance max-w-3xl', centered && 'mx-auto')}>
        {title}
      </h2>
      {description && (
        <Reveal delay={0.08}>
          <p className={cx('mt-5 text-lead text-muted max-w-prose-tight', centered && 'mx-auto')}>{description}</p>
        </Reveal>
      )}
    </Reveal>
  );
}
