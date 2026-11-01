import type { ReactNode } from 'react';
import Reveal from './Reveal';
import { cx } from './cx';

type SectionHeaderProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
};

export default function SectionHeader({ eyebrow, title, description, align = 'left', className }: SectionHeaderProps) {
  const centered = align === 'center';

  return (
    <Reveal className={cx('mb-14 md:mb-20', centered && 'text-center', className)}>
      <p className={cx('inline-flex items-center gap-2 text-eyebrow font-medium text-accent-hover mb-5', centered && 'justify-center')}>
        <span aria-hidden className="size-1.5 rounded-full bg-accent shadow-[0_0_12px_2px_rgb(124_131_255/0.6)]" />
        {eyebrow}
      </p>
      <h2 className={cx('text-h2 font-semibold text-foreground text-balance max-w-3xl', centered && 'mx-auto')}>
        {title}
      </h2>
      {description && (
        <Reveal delay={0.08}>
          <p className={cx('mt-6 text-lead text-muted max-w-prose-tight', centered && 'mx-auto')}>{description}</p>
        </Reveal>
      )}
    </Reveal>
  );
}
