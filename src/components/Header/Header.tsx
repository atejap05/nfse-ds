import {
  createContext,
  type HTMLAttributes,
  type ReactNode,
  useContext,
} from 'react';
import { cn } from '../../utils/cn';
import { Separator, type SeparatorProps } from '../Separator/Separator';
import { Typography, type TextVariant, type TypographyProps } from '../Typography/Typography';
import styles from './Header.module.css';

export type HeaderVariantName = 'default' | 'compact';

const HeaderVariantContext = createContext<{ variant: HeaderVariantName }>({ variant: 'default' });

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  /** Densidade visual e tipografia do bloco de título */
  variant?: HeaderVariantName;
  /** Cabeçalho fixo ao rolar a página */
  sticky?: boolean;
}

export function Header({
  className,
  children,
  variant = 'default',
  sticky = false,
  ...props
}: HeaderProps) {
  return (
    <HeaderVariantContext.Provider value={{ variant }}>
      <header
        className={cn(styles.root, variant === 'compact' && styles.compact, sticky && styles.sticky, className)}
        {...props}
      >
        {children}
      </header>
    </HeaderVariantContext.Provider>
  );
}

export interface HeaderInnerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

/** Conteúdo alinhado à largura máxima do DS (equivalente ao Container). */
export function HeaderInner({ className, children, ...props }: HeaderInnerProps) {
  return (
    <div className={cn(styles.inner, className)} {...props}>
      {children}
    </div>
  );
}

export interface HeaderRowProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

/** Linha principal: marca, navegação e ações. */
export function HeaderRow({ className, children, ...props }: HeaderRowProps) {
  return (
    <div className={cn(styles.row, className)} {...props}>
      {children}
    </div>
  );
}

export interface HeaderBrandProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function HeaderBrand({ className, children, ...props }: HeaderBrandProps) {
  return (
    <div className={cn(styles.brand, className)} {...props}>
      {children}
    </div>
  );
}

export interface HeaderLogoProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function HeaderLogo({ className, children, ...props }: HeaderLogoProps) {
  return (
    <div className={cn(styles.logo, className)} data-nfse-header-logo {...props}>
      {children}
    </div>
  );
}

export interface HeaderTitlesProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

/** Agrupa título e subtítulo com espaçamento consistente. */
export function HeaderTitles({ className, children, ...props }: HeaderTitlesProps) {
  return (
    <div className={cn(styles.titles, className)} {...props}>
      {children}
    </div>
  );
}

export type HeaderTitleProps = Omit<TypographyProps, 'variant'> & {
  /** Sobrescreve a variante de tipografia (por padrão segue o `variant` do Header). */
  variant?: TextVariant;
};

export function HeaderTitle({ className, variant: typoVariant, ...props }: HeaderTitleProps) {
  const { variant: headerVariant } = useContext(HeaderVariantContext);
  const v = typoVariant ?? (headerVariant === 'compact' ? 'body' : 'h3');
  return (
    <Typography
      variant={v}
      className={cn(
        styles.title,
        headerVariant === 'compact' && v === 'body' && styles.titleCompact,
        className,
      )}
      {...props}
    />
  );
}

export type HeaderSubtitleProps = Omit<TypographyProps, 'variant'>;

export function HeaderSubtitle({ className, ...props }: HeaderSubtitleProps) {
  return <Typography variant="caption" className={cn(styles.subtitle, className)} {...props} />;
}

export interface HeaderNavProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export function HeaderNav({
  className,
  children,
  'aria-label': ariaLabel = 'Navegação principal',
  ...props
}: HeaderNavProps) {
  return (
    <nav className={cn(styles.nav, className)} aria-label={ariaLabel} {...props}>
      {children}
    </nav>
  );
}

export interface HeaderActionsProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function HeaderActions({ className, children, ...props }: HeaderActionsProps) {
  return (
    <div className={cn(styles.actions, className)} {...props}>
      {children}
    </div>
  );
}

export type HeaderSeparatorProps = Omit<SeparatorProps, 'orientation'>;

/** Separador vertical entre regiões do cabeçalho. */
export function HeaderSeparator({ className, decorative = true, ...props }: HeaderSeparatorProps) {
  return (
    <Separator
      orientation="vertical"
      decorative={decorative}
      className={cn(styles.separator, className)}
      {...props}
    />
  );
}
