import { type CSSProperties, type ReactNode, useId, useState } from 'react';
import { Header } from '../Header/Header';
import { cn } from '../../utils/cn';
import styles from './AppShell.module.css';

export interface AppShellProps {
  /**
   * Conteúdo do header (marca, navegação global, conta, etc.). O botão de menu lateral
   * não deve ser incluído aqui: é renderizado pelo `Header` quando `showNavigation` é
   * ativado internamente pelo `AppShell`.
   */
  headerContent: ReactNode;
  /** Conteúdo da área de navegação lateral (ex.: componente `Sidebar` ou lista de links). */
  sidebarContent: ReactNode;
  /** Área principal da aplicação. */
  children: ReactNode;
  /** Estado inicial da navegação lateral aberta (desktop: coluna; mobile: painel visível). */
  defaultOpen?: boolean;
  /** Largura da sidebar aberta (ex.: `18rem`). Predefinição: `--nfse-sidebar-width`. */
  sidebarWidth?: string;
  className?: string;
}

export function AppShell({
  headerContent,
  sidebarContent,
  children,
  defaultOpen = true,
  sidebarWidth,
  className,
}: AppShellProps) {
  const [open, setOpen] = useState(defaultOpen);
  const sidebarId = `nfse-shell-nav-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;

  const shellStyle: CSSProperties | undefined = sidebarWidth
    ? ({ ['--shell-sidebar-width' as string]: sidebarWidth } as CSSProperties)
    : undefined;

  return (
    <div className={cn(styles.shell, className)} style={shellStyle}>
      <div className={styles.shellHeader}>
        <Header
          showNavigation
          navigationOpen={open}
          navigationId={sidebarId}
          onNavigationToggle={() => setOpen((v) => !v)}
        >
          {headerContent}
        </Header>
      </div>
      <div className={styles.shellBody}>
        <div
          id={sidebarId}
          role="navigation"
          aria-label="Menu lateral"
          aria-hidden={!open}
          className={cn(styles.sidebar, !open && styles.sidebarClosed)}
        >
          <div className={styles.sidebarInner}>{sidebarContent}</div>
        </div>
        <main className={styles.main} tabIndex={-1}>
          {children}
        </main>
      </div>
    </div>
  );
}
