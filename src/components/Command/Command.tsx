import { Command as CommandPrimitive } from 'cmdk';
import { type ComponentPropsWithoutRef } from 'react';
import { cn } from '../../utils/cn';
import styles from './Command.module.css';

export interface CommandProps extends ComponentPropsWithoutRef<typeof CommandPrimitive> {
  className?: string;
}

export function Command({ className, ...props }: CommandProps) {
  return <CommandPrimitive className={cn(styles.command, className)} {...props} />;
}

export interface CommandInputProps extends ComponentPropsWithoutRef<typeof CommandPrimitive.Input> {
  className?: string;
}

export function CommandInput({ className, ...props }: CommandInputProps) {
  return <CommandPrimitive.Input className={cn(styles.input, className)} {...props} />;
}

export interface CommandListProps extends ComponentPropsWithoutRef<typeof CommandPrimitive.List> {
  className?: string;
}

export function CommandList({ className, ...props }: CommandListProps) {
  return <CommandPrimitive.List className={cn(styles.list, className)} {...props} />;
}

export interface CommandEmptyProps extends ComponentPropsWithoutRef<typeof CommandPrimitive.Empty> {
  className?: string;
}

export function CommandEmpty({ className, ...props }: CommandEmptyProps) {
  return <CommandPrimitive.Empty className={cn(styles.empty, className)} {...props} />;
}

export interface CommandGroupProps extends ComponentPropsWithoutRef<typeof CommandPrimitive.Group> {
  className?: string;
}

export function CommandGroup({ className, ...props }: CommandGroupProps) {
  return <CommandPrimitive.Group className={cn(styles.group, className)} {...props} />;
}

export interface CommandItemProps extends ComponentPropsWithoutRef<typeof CommandPrimitive.Item> {
  className?: string;
}

export function CommandItem({ className, ...props }: CommandItemProps) {
  return <CommandPrimitive.Item className={cn(styles.item, className)} {...props} />;
}

export interface CommandSeparatorProps extends ComponentPropsWithoutRef<typeof CommandPrimitive.Separator> {
  className?: string;
}

export function CommandSeparator({ className, ...props }: CommandSeparatorProps) {
  return <CommandPrimitive.Separator className={cn(styles.separator, className)} {...props} />;
}
