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
  /**
   * Quando false, o `HeaderInner` limita o conteúdo a `--nfse-layout-max-width` (equivalente ao Container).
   * Predefinição: true — faixa full-bleed em qualquer layout.
   */
  fullWidth?: boolean;
  /**
   * Quando true, renderiza o botão de abrir/fechar navegação lateral (anatomia no topo do header,
   * padrão GOV.BR DS). O estado é controlado por `navigationOpen` e `onNavigationToggle`.
   */
  showNavigation?: boolean;
  /** Estado da navegação lateral (aberta/fechada), para ARIA e rótulo do botão. */
  navigationOpen?: boolean;
  /** Chamado ao clicar no botão de navegação lateral. */
  onNavigationToggle?: () => void;
  /** ID do painel de navegação controlado (`aria-controls`). */
  navigationId?: string;
}

function HeaderMenuIcon() {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      aria-hidden
      focusable="false"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

export function Header({
  className,
  children,
  variant = 'default',
  sticky = false,
  fullWidth = true,
  showNavigation = false,
  navigationOpen = true,
  onNavigationToggle,
  navigationId,
  ...props
}: HeaderProps) {
  const navExpanded = navigationOpen;
  return (
    <HeaderVariantContext.Provider value={{ variant }}>
      <header
        className={cn(
          styles.root,
          variant === 'compact' && styles.compact,
          sticky && styles.sticky,
          !fullWidth && styles.constrained,
          className,
        )}
        {...props}
      >
        {showNavigation ? (
          <div className={styles.headerWithNav}>
            <div className={styles.menuTrigger}>
              <button
                type="button"
                className={styles.menuTriggerBtn}
                aria-label={navExpanded ? 'Fechar menu lateral' : 'Abrir menu lateral'}
                aria-expanded={navExpanded}
                aria-controls={navigationId}
                onClick={onNavigationToggle}
              >
                <HeaderMenuIcon />
              </button>
            </div>
            <div className={styles.headerWithNavRest}>{children}</div>
          </div>
        ) : (
          children
        )}
      </header>
    </HeaderVariantContext.Provider>
  );
}

export interface HeaderInnerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

/** Área do cabeçalho com gutters; com `Header` predefinido, ocupa a largura disponível (full-bleed). Use `fullWidth={false}` no `Header` para centrar até `--nfse-layout-max-width`. */
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
