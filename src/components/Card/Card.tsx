import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';
import styles from './Card.module.css';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
}

export function Card({ children, header, footer, className, ...props }: CardProps) {
  return (
    <div className={cn(styles.card, className)} {...props}>
      {header != null ? <div className={styles.header}>{header}</div> : null}
      <div className={styles.body}>{children}</div>
      {footer != null ? <div className={styles.footer}>{footer}</div> : null}
    </div>
  );
}
