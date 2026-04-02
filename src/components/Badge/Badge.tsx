import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';
import styles from './Badge.module.css';

export type BadgeVariant = 'neutral' | 'success' | 'warning' | 'error' | 'info';
export type BadgeSize = 'sm' | 'md';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
}

const variantClass: Record<BadgeVariant, string> = {
  neutral: styles.neutral,
  success: styles.success,
  warning: styles.warning,
  error: styles.error,
  info: styles.info,
};

const sizeClass: Record<BadgeSize, string> = {
  sm: styles.sm,
  md: styles.md,
};

export function Badge({ children, variant = 'neutral', size = 'md', className, ...props }: BadgeProps) {
  return (
    <span className={cn(styles.badge, variantClass[variant], sizeClass[size], className)} {...props}>
      {children}
    </span>
  );
}
