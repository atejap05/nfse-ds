import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { type ComponentPropsWithoutRef, type ReactNode } from 'react';
import { cn } from '../../utils/cn';
import styles from './Accordion.module.css';

export type AccordionProps = AccordionPrimitive.AccordionSingleProps | AccordionPrimitive.AccordionMultipleProps;

export function Accordion({ children, ...props }: AccordionProps & { children: ReactNode }) {
  return <AccordionPrimitive.Root {...props}>{children}</AccordionPrimitive.Root>;
}

export interface AccordionItemProps extends ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> {
  className?: string;
}

export function AccordionItem({ className, ...props }: AccordionItemProps) {
  return <AccordionPrimitive.Item className={cn(styles.item, className)} {...props} />;
}

export interface AccordionTriggerProps extends ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
  className?: string;
}

export function AccordionTrigger({ className, children, ...props }: AccordionTriggerProps) {
  return (
    <AccordionPrimitive.Header className={styles.header}>
      <AccordionPrimitive.Trigger className={cn(styles.trigger, className)} {...props}>
        {children}
        <span className={styles.chevron} aria-hidden />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

export interface AccordionContentProps extends ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> {
  className?: string;
}

export function AccordionContent({ className, children, ...props }: AccordionContentProps) {
  return (
    <AccordionPrimitive.Content className={cn(styles.content, className)} {...props}>
      <div className={styles.contentInner}>{children}</div>
    </AccordionPrimitive.Content>
  );
}
