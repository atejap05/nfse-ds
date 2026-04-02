import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { type ComponentPropsWithoutRef, type ReactNode } from 'react';
import { cn } from '../../utils/cn';
import styles from './Tooltip.module.css';

export type TooltipProviderProps = TooltipPrimitive.TooltipProviderProps;

export function TooltipProvider(props: TooltipProviderProps) {
  return <TooltipPrimitive.Provider {...props} />;
}

export interface TooltipProps extends TooltipPrimitive.TooltipProps {
  children: ReactNode;
}

export function Tooltip({ delayDuration = 300, ...props }: TooltipProps) {
  return <TooltipPrimitive.Root delayDuration={delayDuration} {...props} />;
}

export interface TooltipTriggerProps extends TooltipPrimitive.TooltipTriggerProps {
  className?: string;
}

export function TooltipTrigger({ className, ...props }: TooltipTriggerProps) {
  return <TooltipPrimitive.Trigger className={cn(styles.trigger, className)} {...props} />;
}

export interface TooltipContentProps extends ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> {
  className?: string;
}

export function TooltipContent({ className, sideOffset = 6, ...props }: TooltipContentProps) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        sideOffset={sideOffset}
        className={cn(styles.content, className)}
        {...props}
      />
    </TooltipPrimitive.Portal>
  );
}
