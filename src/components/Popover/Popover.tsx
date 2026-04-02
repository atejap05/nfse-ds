import * as PopoverPrimitive from '@radix-ui/react-popover';
import { type ComponentPropsWithoutRef, type ReactNode } from 'react';
import { cn } from '../../utils/cn';
import styles from './Popover.module.css';

export interface PopoverProps extends PopoverPrimitive.PopoverProps {
  children: ReactNode;
}

export function Popover(props: PopoverProps) {
  return <PopoverPrimitive.Root {...props} />;
}

export interface PopoverTriggerProps extends PopoverPrimitive.PopoverTriggerProps {
  className?: string;
}

export function PopoverTrigger({ className, ...props }: PopoverTriggerProps) {
  return <PopoverPrimitive.Trigger className={cn(styles.trigger, className)} {...props} />;
}

export interface PopoverAnchorProps extends PopoverPrimitive.PopoverAnchorProps {
  className?: string;
}

export function PopoverAnchor({ className, ...props }: PopoverAnchorProps) {
  return <PopoverPrimitive.Anchor className={className} {...props} />;
}

export interface PopoverContentProps extends ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> {
  className?: string;
}

export function PopoverContent({ className, align = 'center', sideOffset = 6, ...props }: PopoverContentProps) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        align={align}
        sideOffset={sideOffset}
        className={cn(styles.content, className)}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
}
