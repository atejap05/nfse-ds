import { useId, useMemo, useState } from 'react';
import { cn } from '../../utils/cn';
import { Input } from '../Input/Input';
import { Label } from '../Label/Label';
import { Popover, PopoverContent, PopoverTrigger } from '../Popover/Popover';
import styles from './Combobox.module.css';

export interface ComboboxOption {
  value: string;
  label: string;
}

export interface ComboboxProps {
  label: string;
  options: ComboboxOption[];
  value: string | null;
  onValueChange: (value: string | null) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  id?: string;
  disabled?: boolean;
  className?: string;
  hint?: string;
  error?: boolean;
}

export function Combobox({
  label: labelText,
  options,
  value,
  onValueChange,
  placeholder = 'Selecione…',
  searchPlaceholder = 'Buscar…',
  id: idProp,
  disabled,
  className,
  hint,
  error,
}: ComboboxProps) {
  const uid = useId();
  const id = idProp ?? `nfse-combobox-${uid}`;
  const listId = `${id}-list`;
  const hintId = hint ? `${id}-hint` : undefined;
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  const selected = useMemo(() => options.find((o) => o.value === value) ?? null, [options, value]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return options;
    return options.filter((o) => o.label.toLowerCase().includes(q));
  }, [options, query]);

  function select(next: string) {
    onValueChange(next);
    setOpen(false);
    setQuery('');
  }

  return (
    <div className={cn(styles.wrapper, className)}>
      <Label htmlFor={id}>{labelText}</Label>
      <Popover
        open={open}
        onOpenChange={(o) => {
          setOpen(o);
          if (!o) setQuery('');
        }}
      >
        <PopoverTrigger asChild>
          <button
            id={id}
            type="button"
            className={cn(styles.trigger, error && styles.triggerError)}
            disabled={disabled}
            aria-expanded={open}
            aria-controls={listId}
            aria-haspopup="listbox"
            aria-invalid={error ? true : undefined}
            aria-describedby={hintId}
          >
            <span className={selected ? undefined : styles.placeholder}>
              {selected ? selected.label : placeholder}
            </span>
            <span className={styles.chevron} aria-hidden />
          </button>
        </PopoverTrigger>
        <PopoverContent className={styles.popover} align="start" onOpenAutoFocus={(e) => e.preventDefault()}>
          <Input
            value={query}
            placeholder={searchPlaceholder}
            aria-controls={listId}
            onChange={(e) => setQuery(e.target.value)}
            className={styles.search}
          />
          <ul id={listId} role="listbox" className={styles.list}>
            {filtered.length === 0 ? (
              <li className={styles.empty} role="presentation">
                Nenhum resultado.
              </li>
            ) : (
              filtered.map((opt) => (
                <li key={opt.value} role="option" aria-selected={opt.value === value}>
                  <button
                    type="button"
                    className={cn(styles.option, opt.value === value && styles.optionSelected)}
                    onClick={() => select(opt.value)}
                  >
                    {opt.label}
                  </button>
                </li>
              ))
            )}
          </ul>
        </PopoverContent>
      </Popover>
      {hint ? (
        <span
          id={hintId}
          className={cn(styles.hint, error && styles.hintError)}
          role={error ? 'alert' : undefined}
        >
          {hint}
        </span>
      ) : null}
    </div>
  );
}
