import { createElement, type ElementType, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';
import styles from '../../tokens/typography.module.css';

export type TextVariant = 'h1' | 'h2' | 'h3' | 'body' | 'caption';

const variantTag: Record<TextVariant, ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  body: 'p',
  caption: 'span',
};

const variantClass: Record<TextVariant, string> = {
  h1: styles.h1,
  h2: styles.h2,
  h3: styles.h3,
  body: styles.body,
  caption: styles.caption,
};

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant: TextVariant;
  children: ReactNode;
  as?: ElementType;
}

export function Typography({ variant, className, children, as, ...props }: TypographyProps) {
  const Component = as ?? variantTag[variant];
  return createElement(
    Component,
    { className: cn(variantClass[variant], className), ...props },
    children,
  );
}
