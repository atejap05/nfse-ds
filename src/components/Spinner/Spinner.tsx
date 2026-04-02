import { cn } from '../../utils/cn';
import styles from './Spinner.module.css';

export type SpinnerSize = 'sm' | 'md' | 'lg';

export interface SpinnerProps {
  /** Texto para leitores de tela (visível apenas para SR quando label não é passado como children visível) */
  label?: string;
  size?: SpinnerSize;
  /** Ocupa área de bloco centralizado */
  block?: boolean;
  className?: string;
}

const sizeClass: Record<SpinnerSize, string> = {
  sm: styles.sm,
  md: styles.md,
  lg: styles.lg,
};

export function Spinner({ label = 'Carregando', size = 'md', block, className }: SpinnerProps) {
  const content = (
    <svg
      className={cn(styles.svg, sizeClass[size])}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="var(--nfse-color-navy)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="32 48"
      />
    </svg>
  );

  if (block) {
    return (
      <div className={cn(styles.block, styles.wrapper, className)} role="status" aria-label={label}>
        {content}
      </div>
    );
  }

  return (
    <span className={cn(styles.wrapper, className)} role="status" aria-label={label}>
      {content}
    </span>
  );
}
