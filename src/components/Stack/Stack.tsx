import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';
import styles from './Stack.module.css';

export type StackGap = 'sm' | 'md' | 'lg' | 'xl';

const gapMap: Record<StackGap, string> = {
  sm: styles.gap1,
  md: styles.gap2,
  lg: styles.gap3,
  xl: styles.gap4,
};

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  gap?: StackGap;
}

export function Stack({ className, children, gap = 'md', ...props }: StackProps) {
  return (
    <div className={cn(styles.stack, gapMap[gap], className)} {...props}>
      {children}
    </div>
  );
}
