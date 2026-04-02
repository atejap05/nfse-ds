import * as DialogPrimitive from '@radix-ui/react-dialog';
import { type ReactNode } from 'react';
import { cn } from '../../utils/cn';
import styles from './Dialog.module.css';

export interface DialogProps extends DialogPrimitive.DialogProps {
  children: ReactNode;
}

export function Dialog(props: DialogProps) {
  return <DialogPrimitive.Root {...props} />;
}

export interface DialogTriggerProps extends DialogPrimitive.DialogTriggerProps {
  className?: string;
}

export function DialogTrigger({ className, ...props }: DialogTriggerProps) {
  return <DialogPrimitive.Trigger className={className} {...props} />;
}

export interface DialogContentProps extends Omit<DialogPrimitive.DialogContentProps, 'title' | 'children'> {
  title: string;
  description?: string;
  children: ReactNode;
  footer?: ReactNode;
  showClose?: boolean;
}

export function DialogContent({
  title,
  description,
  children,
  footer,
  showClose = true,
  className,
  ...props
}: DialogContentProps) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className={styles.overlay} />
      <DialogPrimitive.Content className={cn(styles.content, className)} {...props}>
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

export const DialogClose = DialogPrimitive.Close;
