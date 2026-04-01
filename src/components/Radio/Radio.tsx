import { type InputHTMLAttributes, useId } from 'react';
import { cn } from '../../utils/cn';
import styles from './Radio.module.css';

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
}

export function Radio({ label, id: idProp, className, disabled, ...props }: RadioProps) {
  const uid = useId();
  const id = idProp ?? `nfse-radio-${uid}`;

  return (
    <div className={cn(styles.row, className)}>
      <input id={id} className={styles.input} type="radio" disabled={disabled} {...props} />
      <label className={cn(styles.label, disabled && styles.labelDisabled)} htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
