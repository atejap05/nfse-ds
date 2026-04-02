import { type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import styles from './Skeleton.module.css';

export type SkeletonVariant = 'text' | 'rect' | 'circular';

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: SkeletonVariant;
}

export function Skeleton({ variant = 'rect', className, style, ...props }: SkeletonProps) {
  const baseStyle =
    variant === 'text'
      ? { width: '100%', maxWidth: '12rem', ...style }
      : variant === 'circular'
        ? { width: '2.5rem', height: '2.5rem', ...style }
        : { width: '100%', height: '4rem', ...style };

  return (
    <div
      className={cn(
        styles.skeleton,
        variant === 'text' && styles.text,
        variant === 'circular' && styles.circular,
        className,
      )}
      style={baseStyle}
      aria-hidden
      {...props}
    />
  );
}
