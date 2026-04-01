import { type SelectHTMLAttributes, useId } from 'react';
import { cn } from '../../utils/cn';
import styles from './Select.module.css';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'children'> {
  label: string;
  options: SelectOption[];
  hint?: string;
  error?: boolean;
  success?: boolean;
}

export function Select({
  label,
  options,
  hint,
  error,
  success,
  id: idProp,
  className,
  disabled,
  ...props
}: SelectProps) {
  const uid = useId();
  const id = idProp ?? `nfse-select-${uid}`;
  const hintId = hint ? `${id}-hint` : undefined;

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <select
        id={id}
        className={cn(
          styles.select,
          error && styles.selectError,
          success && styles.selectSuccess,
          className,
        )}
        disabled={disabled}
        aria-invalid={error ? true : undefined}
        aria-describedby={hintId}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
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
