import { type InputHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import styles from './Input.module.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  success?: boolean;
}

export function Input({ error, success, className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        styles.input,
        error && styles.inputError,
        success && styles.inputSuccess,
        className,
      )}
      aria-invalid={error ? true : undefined}
      {...props}
    />
  );
}
