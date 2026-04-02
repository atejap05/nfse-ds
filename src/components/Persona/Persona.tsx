import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';
import { Typography, type TypographyProps } from '../Typography/Typography';
import styles from './Persona.module.css';

export interface PersonaProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Persona({ className, children, ...props }: PersonaProps) {
  return (
    <div className={cn(styles.root, className)} {...props}>
      {children}
    </div>
  );
}

export interface PersonaAvatarProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function PersonaAvatar({ className, children, ...props }: PersonaAvatarProps) {
  return (
    <div className={cn(styles.avatar, className)} {...props}>
      {children}
    </div>
  );
}

export interface PersonaTextProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function PersonaText({ className, children, ...props }: PersonaTextProps) {
  return (
    <div className={cn(styles.text, className)} data-nfse-persona-text {...props}>
      {children}
    </div>
  );
}

export type PersonaNameProps = Omit<TypographyProps, 'variant'>;

export function PersonaName({ className, ...props }: PersonaNameProps) {
  return <Typography variant="body" className={cn(styles.name, className)} {...props} />;
}

export type PersonaDescriptionProps = Omit<TypographyProps, 'variant'>;

export function PersonaDescription({ className, ...props }: PersonaDescriptionProps) {
  return <Typography variant="caption" className={className} {...props} />;
}
