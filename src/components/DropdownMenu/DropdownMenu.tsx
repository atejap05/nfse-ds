import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { type ComponentPropsWithoutRef, type ReactNode } from 'react';
import { cn } from '../../utils/cn';
import styles from './DropdownMenu.module.css';

export interface DropdownMenuProps extends DropdownMenuPrimitive.DropdownMenuProps {
  children: ReactNode;
}

export function DropdownMenu(props: DropdownMenuProps) {
  return <DropdownMenuPrimitive.Root {...props} />;
}

export interface DropdownMenuTriggerProps extends DropdownMenuPrimitive.DropdownMenuTriggerProps {
  className?: string;
}

export function DropdownMenuTrigger({ className, ...props }: DropdownMenuTriggerProps) {
  return <DropdownMenuPrimitive.Trigger className={cn(styles.trigger, className)} {...props} />;
}

export interface DropdownMenuContentProps
  extends ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> {
  className?: string;
}

export function DropdownMenuContent({
  className,
  sideOffset = 6,
  align = 'start',
  ...props
}: DropdownMenuContentProps) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        sideOffset={sideOffset}
        align={align}
        className={cn(styles.content, className)}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
}

export interface DropdownMenuItemProps extends ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> {
  className?: string;
  inset?: boolean;
}

export function DropdownMenuItem({ className, inset, ...props }: DropdownMenuItemProps) {
  return (
    <DropdownMenuPrimitive.Item
      className={cn(styles.item, inset && styles.itemInset, className)}
      {...props}
    />
  );
}

export interface DropdownMenuCheckboxItemProps
  extends ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem> {
  className?: string;
}

export function DropdownMenuCheckboxItem({ className, ...props }: DropdownMenuCheckboxItemProps) {
  return <DropdownMenuPrimitive.CheckboxItem className={cn(styles.item, className)} {...props} />;
}

export interface DropdownMenuLabelProps extends ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> {
  className?: string;
  inset?: boolean;
}

export function DropdownMenuLabel({ className, inset, ...props }: DropdownMenuLabelProps) {
  return (
    <DropdownMenuPrimitive.Label
      className={cn(styles.label, inset && styles.itemInset, className)}
      {...props}
    />
  );
}

export interface DropdownMenuSeparatorProps
  extends ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator> {
  className?: string;
}

export function DropdownMenuSeparator({ className, ...props }: DropdownMenuSeparatorProps) {
  return <DropdownMenuPrimitive.Separator className={cn(styles.separator, className)} {...props} />;
}

export function DropdownMenuGroup(props: DropdownMenuPrimitive.DropdownMenuGroupProps) {
  return <DropdownMenuPrimitive.Group {...props} />;
}

export function DropdownMenuRadioGroup(props: DropdownMenuPrimitive.DropdownMenuRadioGroupProps) {
  return <DropdownMenuPrimitive.RadioGroup {...props} />;
}

export interface DropdownMenuRadioItemProps
  extends ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem> {
  className?: string;
}

export function DropdownMenuRadioItem({ className, ...props }: DropdownMenuRadioItemProps) {
  return <DropdownMenuPrimitive.RadioItem className={cn(styles.item, className)} {...props} />;
}

export function DropdownMenuSub(props: DropdownMenuPrimitive.DropdownMenuSubProps) {
  return <DropdownMenuPrimitive.Sub {...props} />;
}

export interface DropdownMenuSubTriggerProps
  extends ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> {
  className?: string;
  inset?: boolean;
}

export function DropdownMenuSubTrigger({ className, inset, ...props }: DropdownMenuSubTriggerProps) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      className={cn(styles.subTrigger, inset && styles.itemInset, className)}
      {...props}
    />
  );
}

export interface DropdownMenuSubContentProps
  extends ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent> {
  className?: string;
}

export function DropdownMenuSubContent({ className, ...props }: DropdownMenuSubContentProps) {
  return (
    <DropdownMenuPrimitive.SubContent className={cn(styles.content, styles.subContent, className)} {...props} />
  );
}
