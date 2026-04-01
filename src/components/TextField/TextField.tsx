import { type InputHTMLAttributes, useId } from 'react';
import { cn } from '../../utils/cn';
import styles from './TextField.module.css';

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: string;
  error?: boolean;
  success?: boolean;
}

export function TextField({
  label,
  hint,
  error,
  success,
  id: idProp,
  className,
  disabled,
  ...props
}: TextFieldProps) {
  const uid = useId();
  const id = idProp ?? `nfse-field-${uid}`;
  const hintId = hint ? `${id}-hint` : undefined;

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className={cn(
          styles.input,
          error && styles.inputError,
          success && styles.inputSuccess,
          className,
        )}
        disabled={disabled}
        aria-invalid={error ? true : undefined}
        aria-describedby={hintId}
        {...props}
      />
      {hint ? (
        <span
          id={hintId}
          className={cn(
            styles.hint,
            error && styles.hintError,
            success && !error && styles.hintSuccess,
          )}
          role={error ? 'alert' : undefined}
        >
          {hint}
        </span>
      ) : null}
    </div>
  );
}
