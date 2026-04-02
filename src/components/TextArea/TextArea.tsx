import { type TextareaHTMLAttributes, useId } from 'react';
import { cn } from '../../utils/cn';
import { Label } from '../Label/Label';
import styles from './TextArea.module.css';

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  hint?: string;
  error?: boolean;
  success?: boolean;
  required?: boolean;
}

export function TextArea({
  label,
  hint,
  error,
  success,
  id: idProp,
  className,
  disabled,
  required,
  ...props
}: TextAreaProps) {
  const uid = useId();
  const id = idProp ?? `nfse-textarea-${uid}`;
  const hintId = hint ? `${id}-hint` : undefined;

  return (
    <div className={styles.wrapper}>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <textarea
        id={id}
        className={cn(
          styles.textarea,
          error && styles.textareaError,
          success && styles.textareaSuccess,
          className,
        )}
        disabled={disabled}
        required={required}
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
