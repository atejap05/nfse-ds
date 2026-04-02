import * as TabsPrimitive from '@radix-ui/react-tabs';
import { type ReactNode } from 'react';
import { cn } from '../../utils/cn';
import styles from './Tabs.module.css';

export interface TabsProps extends TabsPrimitive.TabsProps {
  children: ReactNode;
  className?: string;
}

export function Tabs({ className, children, ...props }: TabsProps) {
  return (
    <TabsPrimitive.Root className={cn(styles.root, className)} {...props}>
      {children}
    </TabsPrimitive.Root>
  );
}

export interface TabsListProps extends TabsPrimitive.TabsListProps {
  className?: string;
}

export function TabsList({ className, ...props }: TabsListProps) {
  return <TabsPrimitive.List className={cn(styles.list, className)} {...props} />;
}

export interface TabsTriggerProps extends TabsPrimitive.TabsTriggerProps {
  className?: string;
}

export function TabsTrigger({ className, ...props }: TabsTriggerProps) {
  return <TabsPrimitive.Trigger className={cn(styles.trigger, className)} {...props} />;
}

export interface TabsContentProps extends TabsPrimitive.TabsContentProps {
  className?: string;
}

export function TabsContent({ className, ...props }: TabsContentProps) {
  return <TabsPrimitive.Content className={cn(styles.content, className)} {...props} />;
}
