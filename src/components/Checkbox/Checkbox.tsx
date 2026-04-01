import { type InputHTMLAttributes, useId } from 'react';
import { cn } from '../../utils/cn';
import styles from './Checkbox.module.css';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
}

export function Checkbox({ label, id: idProp, className, disabled, ...props }: CheckboxProps) {
  const uid = useId();
  const id = idProp ?? `nfse-checkbox-${uid}`;

  return (
    <div className={cn(styles.row, className)}>
      <input id={id} className={styles.input} type="checkbox" disabled={disabled} {...props} />
      <label className={cn(styles.label, disabled && styles.labelDisabled)} htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
