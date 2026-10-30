import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { cx } from './cx';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md';

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
};

// Avec href → <a> (liens, ancres, téléchargement du CV) ; sans → <button>.
type ButtonAsLink = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type ButtonAsButton = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type ButtonProps = ButtonAsLink | ButtonAsButton;

const base =
  'group inline-flex items-center justify-center gap-2 font-medium rounded-full whitespace-nowrap ' +
  'transition-[background-color,border-color,color,transform] duration-300 ease-soft ' +
  'disabled:opacity-50 disabled:pointer-events-none';

const variants: Record<Variant, string> = {
  primary: 'bg-foreground text-canvas hover:bg-white',
  secondary: 'border border-line-strong text-foreground hover:border-subtle hover:bg-surface-raised',
  ghost: 'text-muted hover:text-foreground',
};

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-[0.9375rem]',
};

export function buttonClasses({ variant = 'primary', size = 'md', className }: CommonProps = {}) {
  return cx(base, variants[variant], sizes[size], className);
}

export default function Button(props: ButtonProps) {
  if (props.href !== undefined) {
    const { variant, size, className, ...rest } = props;
    return <a {...rest} className={buttonClasses({ variant, size, className })} />;
  }

  const { variant, size, className, type = 'button', ...rest } = props;
  return <button type={type} {...rest} className={buttonClasses({ variant, size, className })} />;
}
