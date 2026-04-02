import * as DialogPrimitive from '@radix-ui/react-dialog';
import { type ComponentPropsWithoutRef, type ReactNode } from 'react';
import { cn } from '../../utils/cn';
import styles from './Sheet.module.css';

export interface SheetProps extends DialogPrimitive.DialogProps {
  children: ReactNode;
}

export function Sheet(props: SheetProps) {
  return <DialogPrimitive.Root {...props} />;
}

export interface SheetTriggerProps extends DialogPrimitive.DialogTriggerProps {
  className?: string;
}

export function SheetTrigger({ className, ...props }: SheetTriggerProps) {
  return <DialogPrimitive.Trigger className={className} {...props} />;
}

export type SheetCloseProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Close>;

export function SheetClose(props: SheetCloseProps) {
  return <DialogPrimitive.Close {...props} />;
}

export type SheetSide = 'top' | 'right' | 'bottom' | 'left';

const sideClass: Record<SheetSide, string> = {
  top: styles.sideTop,
  right: styles.sideRight,
  bottom: styles.sideBottom,
  left: styles.sideLeft,
};

export interface SheetContentProps extends Omit<DialogPrimitive.DialogContentProps, 'title' | 'children'> {
  /** Título visível e para leitores de tela. */
  title: string;
  description?: string;
  side?: SheetSide;
  children: ReactNode;
  footer?: ReactNode;
  showClose?: boolean;
}

export function SheetContent({
  title,
  description,
  side = 'right',
  children,
  footer,
  showClose = true,
  className,
  ...props
}: SheetContentProps) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className={styles.overlay} />
      <DialogPrimitive.Content className={cn(styles.content, sideClass[side], className)} {...props}>
        <div className={styles.header}>
          <DialogPrimitive.Title className={styles.title}>{title}</DialogPrimitive.Title>
          {showClose ? (
            <DialogPrimitive.Close className={styles.close} type="button" aria-label="Fechar">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </DialogPrimitive.Close>
          ) : null}
        </div>
        <DialogPrimitive.Description
          className={description ? styles.description : styles.visuallyHidden}
        >
          {description ?? title}
        </DialogPrimitive.Description>
        <div className={styles.body}>{children}</div>
        {footer != null ? <div className={styles.footer}>{footer}</div> : null}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}
