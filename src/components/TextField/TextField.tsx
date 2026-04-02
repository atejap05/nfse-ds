import { type InputHTMLAttributes, useId } from 'react';
import { cn } from '../../utils/cn';
import { Input } from '../Input/Input';
import { Label } from '../Label/Label';
import styles from './TextField.module.css';

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: string;
  error?: boolean;
  success?: boolean;
  /** Indicador de campo obrigatório no label */
  required?: boolean;
}

export function TextField({
  label,
  hint,
  error,
  success,
  id: idProp,
  className,
  disabled,
  required,
  ...props
}: TextFieldProps) {
  const uid = useId();
  const id = idProp ?? `nfse-field-${uid}`;
  const hintId = hint ? `${id}-hint` : undefined;

  return (
    <div className={styles.wrapper}>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <Input
        id={id}
        className={className}
        disabled={disabled}
        required={required}
        error={error}
        success={success}
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
