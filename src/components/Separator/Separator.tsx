import { type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import styles from './Separator.module.css';

export interface SeparatorProps extends HTMLAttributes<HTMLHRElement> {
  /** `horizontal` (padrão) ou `vertical` */
  orientation?: 'horizontal' | 'vertical';
  /** Se true, o separador é puramente visual (sem anúncio por leitores de tela) */
  decorative?: boolean;
}

export function Separator({
  orientation = 'horizontal',
  decorative = true,
  className,
  ...props
}: SeparatorProps) {
  return (
    <hr
      className={cn(styles.root, orientation === 'vertical' ? styles.vertical : styles.horizontal, className)}
      role={decorative ? 'none' : 'separator'}
      aria-orientation={decorative ? undefined : orientation === 'vertical' ? 'vertical' : 'horizontal'}
      {...props}
    />
  );
}
