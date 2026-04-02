import { type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import styles from './Pagination.module.css';

export interface PaginationProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
  /** Página atual (1-based) */
  page: number;
  /** Total de páginas (>= 1) */
  pageCount: number;
  onPageChange: (page: number) => void;
  /** Símbolos opcionais para anterior / próximo */
  labels?: { previous?: string; next?: string };
}

function pageButtons(current: number, total: number): (number | 'ellipsis')[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  const set = new Set<number>();
  set.add(1);
  set.add(total);
  for (let p = current - 1; p <= current + 1; p++) {
    if (p >= 1 && p <= total) set.add(p);
  }
  const sorted = [...set].sort((a, b) => a - b);
  const out: (number | 'ellipsis')[] = [];
  for (let i = 0; i < sorted.length; i++) {
    if (i > 0 && sorted[i] - sorted[i - 1] > 1) out.push('ellipsis');
    out.push(sorted[i]);
  }
  return out;
}

export function Pagination({
  page,
  pageCount,
  onPageChange,
  labels = { previous: 'Anterior', next: 'Próximo' },
  className,
  ...props
}: PaginationProps) {
  const safe = Math.min(Math.max(1, page), Math.max(1, pageCount));
  const items = pageButtons(safe, pageCount);

  return (
    <nav className={cn(styles.nav, className)} aria-label="Paginação" {...props}>
      <button
        type="button"
        className={styles.button}
        disabled={safe <= 1}
        onClick={() => onPageChange(safe - 1)}
        aria-label="Página anterior"
      >
        {labels.previous}
      </button>
      {items.map((item, i) =>
        item === 'ellipsis' ? (
          <span key={`e-${i}`} className={styles.ellipsis} aria-hidden>
            …
          </span>
        ) : (
          <button
            key={item}
            type="button"
            className={cn(styles.button, safe === item && styles.buttonActive)}
            onClick={() => onPageChange(item)}
            aria-label={`Ir para página ${item}`}
            aria-current={safe === item ? 'page' : undefined}
          >
            {item}
          </button>
        ),
      )}
      <button
        type="button"
        className={styles.button}
        disabled={safe >= pageCount}
        onClick={() => onPageChange(safe + 1)}
        aria-label="Próxima página"
      >
        {labels.next}
      </button>
    </nav>
  );
}
