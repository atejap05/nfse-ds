import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import { type ComponentPropsWithoutRef, type ReactNode } from 'react';
import { cn } from '../../utils/cn';
import styles from './Collapsible.module.css';

export interface CollapsibleProps extends CollapsiblePrimitive.CollapsibleProps {
  children: ReactNode;
}

export function Collapsible(props: CollapsibleProps) {
  return <CollapsiblePrimitive.Root {...props} />;
}

export interface CollapsibleTriggerProps extends ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleTrigger> {
  className?: string;
}

export function CollapsibleTrigger({ className, ...props }: CollapsibleTriggerProps) {
  return <CollapsiblePrimitive.Trigger className={cn(styles.trigger, className)} {...props} />;
}

export interface CollapsibleContentProps
  extends ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleContent> {
  className?: string;
}

export function CollapsibleContent({ className, ...props }: CollapsibleContentProps) {
  return <CollapsiblePrimitive.Content className={cn(styles.content, className)} {...props} />;
}
