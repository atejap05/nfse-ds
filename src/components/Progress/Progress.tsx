import * as ProgressPrimitive from '@radix-ui/react-progress';
import { type ComponentPropsWithoutRef } from 'react';
import { cn } from '../../utils/cn';
import styles from './Progress.module.css';

export interface ProgressProps extends ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  className?: string;
  /** Valor de 0 a `max`. */
  value?: number | null;
  max?: number;
}

export function Progress({ className, value, max = 100, ...props }: ProgressProps) {
  const pct = value != null ? Math.min(100, Math.max(0, (value / max) * 100)) : undefined;
  return (
    <ProgressPrimitive.Root className={cn(styles.root, className)} value={value} max={max} {...props}>
      <ProgressPrimitive.Indicator
        className={styles.indicator}
        style={pct != null ? { transform: `translateX(-${100 - pct}%)` } : undefined}
      />
    </ProgressPrimitive.Root>
  );
}
