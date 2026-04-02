import { type ButtonHTMLAttributes, useId } from 'react';
import { cn } from '../../utils/cn';
import styles from './Switch.module.css';

export interface SwitchProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'role' | 'type'> {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  label: string;
}

export function Switch({
  checked,
  onCheckedChange,
  label,
  id: idProp,
  className,
  disabled,
  ...props
}: SwitchProps) {
  const uid = useId();
  const id = idProp ?? `nfse-switch-${uid}`;
  const labelId = `${id}-label`;

  return (
    <div className={cn(styles.row, className)}>
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={checked}
        aria-labelledby={labelId}
        disabled={disabled}
        className={cn(styles.track, checked && styles.trackOn)}
        onClick={() => onCheckedChange(!checked)}
        {...props}
      >
        <span className={cn(styles.thumb, checked && styles.thumbOn)} aria-hidden />
      </button>
      <span id={labelId} className={cn(styles.label, disabled && styles.labelDisabled)}>
        {label}
      </span>
    </div>
  );
}
