import { type TextareaHTMLAttributes, useId } from 'react';
import { cn } from '../../utils/cn';
import styles from './TextArea.module.css';

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  hint?: string;
  error?: boolean;
  success?: boolean;
}

export function TextArea({
  label,
  hint,
  error,
  success,
  id: idProp,
  className,
  disabled,
  ...props
}: TextAreaProps) {
  const uid = useId();
  const id = idProp ?? `nfse-textarea-${uid}`;
  const hintId = hint ? `${id}-hint` : undefined;

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <textarea
        id={id}
        className={cn(
          styles.textarea,
          error && styles.textareaError,
          success && styles.textareaSuccess,
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
