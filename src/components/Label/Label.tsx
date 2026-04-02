import { type LabelHTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';
import styles from './Label.module.css';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  /** Exibe indicador visual e texto acessível de campo obrigatório */
  required?: boolean;
}

export function Label({ children, className, required, ...props }: LabelProps) {
  return (
    <label className={cn(styles.label, className)} {...props}>
      {children}
      {required ? (
        <>
          <span className={styles.required} aria-hidden>
            *
          </span>
          <span className={styles.srOnly}>(obrigatório)</span>
        </>
      ) : null}
    </label>
  );
}
