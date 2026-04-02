import { createContext, type ReactNode, useContext, useId } from 'react';
import { cn } from '../../utils/cn';
import styles from './RadioGroup.module.css';

interface RadioGroupContextValue {
  name: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

export interface RadioGroupProps {
  /** Valor `value` do item selecionado */
  value: string;
  onChange: (value: string) => void;
  name?: string;
  legend?: ReactNode;
  disabled?: boolean;
  children: ReactNode;
  className?: string;
}

export function RadioGroup({ value, onChange, name: nameProp, legend, disabled, children, className }: RadioGroupProps) {
  const uid = useId();
  const name = nameProp ?? `nfse-radiogroup-${uid}`;

  return (
    <fieldset className={cn(styles.fieldset, className)}>
      {legend != null ? <legend className={styles.legend}>{legend}</legend> : null}
      <RadioGroupContext.Provider value={{ name, value, onChange, disabled }}>
        <div className={styles.group}>{children}</div>
      </RadioGroupContext.Provider>
    </fieldset>
  );
}

export interface RadioGroupItemProps {
  value: string;
  label: string;
  id?: string;
  disabled?: boolean;
}

export function RadioGroupItem({ value, label, id: idProp, disabled: disabledItem }: RadioGroupItemProps) {
  const ctx = useContext(RadioGroupContext);
  const uid = useId();
  const id = idProp ?? `nfse-radiogroup-item-${uid}`;
  if (!ctx) {
    throw new Error('RadioGroupItem deve estar dentro de RadioGroup');
  }
  const disabled = disabledItem ?? ctx.disabled;

  return (
    <div className={styles.row}>
      <input
        id={id}
        className={styles.input}
        type="radio"
        name={ctx.name}
        value={value}
        checked={ctx.value === value}
        onChange={() => ctx.onChange(value)}
        disabled={disabled}
      />
      <label className={cn(styles.label, disabled && styles.labelDisabled)} htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
