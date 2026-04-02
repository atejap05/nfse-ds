import { createContext, type ReactNode, useContext, useId } from 'react';
import { cn } from '../../utils/cn';
import styles from './CheckboxGroup.module.css';

interface CheckboxGroupContextValue {
  values: string[];
  toggle: (value: string) => void;
  disabled?: boolean;
}

const CheckboxGroupContext = createContext<CheckboxGroupContextValue | null>(null);

export interface CheckboxGroupProps {
  values: string[];
  onChange: (values: string[]) => void;
  legend?: ReactNode;
  disabled?: boolean;
  children: ReactNode;
  className?: string;
}

export function CheckboxGroup({ values, onChange, legend, disabled, children, className }: CheckboxGroupProps) {
  const toggle = (v: string) => {
    if (values.includes(v)) {
      onChange(values.filter((x) => x !== v));
    } else {
      onChange([...values, v]);
    }
  };

  return (
    <fieldset className={cn(styles.fieldset, className)}>
      {legend != null ? <legend className={styles.legend}>{legend}</legend> : null}
      <CheckboxGroupContext.Provider value={{ values, toggle, disabled }}>
        <div className={styles.group}>{children}</div>
      </CheckboxGroupContext.Provider>
    </fieldset>
  );
}

export interface CheckboxGroupItemProps {
  value: string;
  label: string;
  id?: string;
  disabled?: boolean;
}

export function CheckboxGroupItem({ value, label, id: idProp, disabled: disabledItem }: CheckboxGroupItemProps) {
  const ctx = useContext(CheckboxGroupContext);
  const uid = useId();
  const id = idProp ?? `nfse-checkboxgroup-item-${uid}`;
  if (!ctx) {
    throw new Error('CheckboxGroupItem deve estar dentro de CheckboxGroup');
  }
  const disabled = disabledItem ?? ctx.disabled;
  const checked = ctx.values.includes(value);

  return (
    <div className={styles.row}>
      <input
        id={id}
        className={styles.input}
        type="checkbox"
        checked={checked}
        onChange={() => ctx.toggle(value)}
        disabled={disabled}
      />
      <label className={cn(styles.label, disabled && styles.labelDisabled)} htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
