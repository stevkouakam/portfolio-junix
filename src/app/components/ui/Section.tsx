import type { ReactNode } from 'react';
import { cx } from './cx';

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  // Filet supérieur pour séparer les sections, façon pages produit sobres
  divider?: boolean;
};

// Section pleine largeur : marges verticales généreuses + contenu centré et limité.
export default function Section({ id, children, className, divider = true }: SectionProps) {
  return (
    <section
      id={id}
      className={cx(
        'relative py-section scroll-mt-16',
        divider && 'before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-line-strong before:to-transparent',
        className,
      )}
    >
      <div className="mx-auto w-full max-w-content px-6">{children}</div>
    </section>
  );
}
