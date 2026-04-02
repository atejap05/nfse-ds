import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';
import styles from './Table.module.css';

export interface TableColumn<T> {
  key: string;
  header: ReactNode;
  scope?: 'col' | 'row';
  render: (row: T) => ReactNode;
}

export interface TableProps<T> extends HTMLAttributes<HTMLDivElement> {
  columns: TableColumn<T>[];
  rows: T[];
  rowKey: (row: T) => string;
  zebra?: boolean;
  caption?: ReactNode;
}

export function Table<T>({ columns, rows, rowKey, zebra, caption, className, ...props }: TableProps<T>) {
  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      <table className={cn(styles.table, zebra && styles.zebra)}>
        {caption != null ? <caption className={styles.captionHidden}>{caption}</caption> : null}
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} className={styles.th} scope={col.scope ?? 'col'}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={rowKey(row)}>
              {columns.map((col) => (
                <td key={col.key} className={styles.td}>
                  {col.render(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
