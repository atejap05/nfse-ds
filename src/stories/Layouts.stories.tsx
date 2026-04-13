import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from '../components/Avatar/Avatar';
import { Button } from '../components/Button/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../components/DropdownMenu/DropdownMenu';
import {
  Header,
  HeaderActions,
  HeaderBrand,
  HeaderInner,
  HeaderLogo,
  HeaderNav,
  HeaderRow,
  HeaderSeparator,
  HeaderSubtitle,
  HeaderTitles,
  HeaderTitle,
} from '../components/Header/Header';
import {
  Persona,
  PersonaAvatar,
  PersonaDescription,
  PersonaName,
  PersonaText,
} from '../components/Persona/Persona';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '../components/Sheet/Sheet';
import {
  Sidebar,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupItem,
  SidebarGroupTrigger,
  SidebarHeader,
  SidebarItem,
  SidebarNav,
} from '../components/Sidebar/Sidebar';
import { AppShell } from '../components/AppShell';
import { Typography } from '../components/Typography/Typography';
import { cn } from '../utils/cn';
import layoutsStyles from './Layouts.module.css';

type HeaderActionsVariant = 'avatarMenu' | 'personaMenu';

type HeaderBuildOptions = {
  compact?: boolean;
  sticky?: boolean;
  forceMobile?: boolean;
  showLogo?: boolean;
  /** `personaMenu`: troca o avatar isolado por Persona + menu (nome/descrição visíveis em md+). */
  actions?: HeaderActionsVariant;
  /** false: limita o `HeaderInner` a `--nfse-layout-max-width` (ex.: shell legado). Predefinição: true. */
  fullWidth?: boolean;
};

/** Conteúdo de `HeaderInner` + `HeaderRow` (para compor com `AppShell` ou `Header`). */
function buildHeaderInnerExample(options: HeaderBuildOptions) {
  const { compact = false, forceMobile = false, showLogo = true, actions = 'avatarMenu' } = options;
  const avatarSize = compact ? 'sm' : 'md';
  return (
    <HeaderInner>
      <HeaderRow>
        <HeaderBrand>
          {showLogo ? (
            <HeaderLogo className={forceMobile ? layoutsStyles.forceMobileHide : undefined}>
              <img
                src="https://placehold.co/112x36/e8eef9/1a3b7e?text=NFS-e"
                alt=""
                width={112}
                height={36}
              />
            </HeaderLogo>
          ) : null}
          <HeaderTitles>
            <HeaderTitle as="h1">Portal NFS-e</HeaderTitle>
            <HeaderSubtitle className={forceMobile ? layoutsStyles.forceMobileHide : undefined}>
              Ambiente de demonstração do design system
            </HeaderSubtitle>
          </HeaderTitles>
        </HeaderBrand>
        <HeaderSeparator className={forceMobile ? layoutsStyles.forceMobileHide : undefined} />
        <HeaderNav>
          <div className={cn(layoutsStyles.navDesktop, forceMobile && layoutsStyles.forceMobileHide)}>
            <Button variant="ghost" size="sm">
              Início
            </Button>
            <Button variant="ghost" size="sm">
              Serviços
            </Button>
            <Button variant="ghost" size="sm">
              Ajuda
            </Button>
          </div>
          <div className={cn(layoutsStyles.navMobile, forceMobile && layoutsStyles.forceMobileShowFlex)}>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" type="button">
                  Menu
                </Button>
              </SheetTrigger>
              <SheetContent title="Navegação" description="Secções principais do portal." side="left">
                <nav className={layoutsStyles.sheetNav} aria-label="Navegação principal">
                  <SheetClose asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      type="button"
                      className={layoutsStyles.sheetNavButton}
                    >
                      Início
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      type="button"
                      className={layoutsStyles.sheetNavButton}
                    >
                      Serviços
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      type="button"
                      className={layoutsStyles.sheetNavButton}
                    >
                      Ajuda
                    </Button>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </HeaderNav>
        <HeaderSeparator className={forceMobile ? layoutsStyles.forceMobileHide : undefined} />
        <HeaderActions>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              {actions === 'personaMenu' ? (
                <button
                  type="button"
                  className={cn(
                    layoutsStyles.headerPersonaTrigger,
                    forceMobile && layoutsStyles.headerPersonaTriggerMobile,
                  )}
                  aria-label="Conta do utilizador — Maria Exemplo"
                >
                  <Persona>
                    <PersonaAvatar>
                      <Avatar name="Maria Exemplo" size={avatarSize} />
                    </PersonaAvatar>
                    <PersonaText className={forceMobile ? layoutsStyles.forceMobileHide : undefined}>
                      <PersonaName>Maria Exemplo</PersonaName>
                      <PersonaDescription>Contribuinte</PersonaDescription>
                    </PersonaText>
                  </Persona>
                </button>
              ) : (
                <button type="button" className={layoutsStyles.avatarTrigger} aria-label="Conta do usuário">
                  <Avatar name="Maria Exemplo" size={avatarSize} />
                </button>
              )}
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Conta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onSelect={() => undefined}>Perfil</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => undefined}>Sair</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </HeaderActions>
      </HeaderRow>
    </HeaderInner>
  );
}

function buildHeaderExample(options: HeaderBuildOptions) {
  const { compact = false, sticky = false, fullWidth = true } = options;
  return (
    <Header variant={compact ? 'compact' : 'default'} sticky={sticky} fullWidth={fullWidth}>
      {buildHeaderInnerExample(options)}
    </Header>
  );
}

const meta = {
  title: 'NFS-e/Layouts',
  parameters: {
    layout: 'fullscreen',
    docs: { page: null },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/** Cabeçalho completo: marca, navegação (inline em md+; Sheet em mobile) e menu da conta. */
export const HeaderDefault: Story = {
  name: 'Header — padrão',
  render: () => buildHeaderExample({}),
};

export const HeaderCompact: Story = {
  name: 'Header — compacto',
  render: () => buildHeaderExample({ compact: true }),
};

export const HeaderSticky: Story = {
  name: 'Header — sticky + conteúdo',
  render: () => (
    <div>
      {buildHeaderExample({ sticky: true })}
      <div className={layoutsStyles.scrollRegion}>
        {Array.from({ length: 12 }, (_, i) => (
          <p key={i}>
            Parágrafo {i + 1}. Role a página para ver o cabeçalho permanecer visível (token{' '}
            <code style={{ fontSize: '0.9em' }}>--nfse-z-sticky</code>
            ).
          </p>
        ))}
      </div>
    </div>
  ),
};

export const HeaderSemLogo: Story = {
  name: 'Header — sem logo',
  render: () => buildHeaderExample({ showLogo: false }),
};

/** Mesma barra do padrão, com Persona (nome + descrição visíveis a partir de md). */
export const HeaderComPersona: Story = {
  name: 'Header — com Persona (menu)',
  render: () => buildHeaderExample({ actions: 'personaMenu' }),
};

/** Header compacto + Persona no canto (avatar `sm`). */
export const HeaderCompactComPersona: Story = {
  name: 'Header — compacto + Persona',
  render: () => buildHeaderExample({ compact: true, actions: 'personaMenu' }),
};

/** Simulação de tela mobile fixa (375px), reproduzível em qualquer canvas do Storybook. */
export const HeaderViewportMobile: Story = {
  name: 'Header — mobile reproduzível (375)',
  render: () => (
    <div className={layoutsStyles.mobilePreviewScene}>
      <div className={layoutsStyles.mobilePreviewFrame}>
        <div className={layoutsStyles.mobilePreviewTopBar}>
          <span>Simulação local</span>
          <strong>375 px</strong>
        </div>
        {buildHeaderExample({ actions: 'personaMenu', forceMobile: true })}
        <main className={layoutsStyles.mobilePreviewBody}>
          <Typography variant="h3">Fluxos prioritários</Typography>
          <p>
            Esta demonstração fixa o frame e aplica overrides visuais da story para validar o layout mobile
            mesmo quando o canvas do Storybook estiver largo.
          </p>
          <div className={layoutsStyles.mobilePreviewCards}>
            <section className={layoutsStyles.mobilePreviewCard}>
              <Typography variant="body">Emissão de NFS-e</Typography>
              <Typography variant="caption">Acesso rápido ao fluxo principal do portal.</Typography>
            </section>
            <section className={layoutsStyles.mobilePreviewCard}>
              <Typography variant="body">Ajuda e suporte</Typography>
              <Typography variant="caption">Exemplo de conteúdo abaixo do header em coluna única.</Typography>
            </section>
          </div>
        </main>
      </div>
    </div>
  ),
};

const appShellSidebarProps = {
  defaultSelectedValue: 'inicio',
  defaultOpenCategories: ['doc'] as string[],
  selectedCategoryValue: 'doc',
};

function AppShellSidebarNav() {
  return (
    <>
      <SidebarHeader>
        <Typography variant="caption" style={{ color: 'var(--nfse-color-text-muted)' }}>
          Navegação
        </Typography>
      </SidebarHeader>
      <SidebarNav aria-label="Secções do portal">
        <SidebarItem value="inicio" href="#inicio">
          Início
        </SidebarItem>
        <SidebarGroup value="doc">
          <SidebarGroupTrigger>Documentação</SidebarGroupTrigger>
          <SidebarGroupContent>
            <SidebarGroupItem>
              <SidebarItem value="guias" href="#guias">
                Guias
              </SidebarItem>
            </SidebarGroupItem>
            <SidebarGroupItem>
              <SidebarItem value="api" href="#api">
                API
              </SidebarItem>
            </SidebarGroupItem>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarItem value="conta" href="#conta">
          Conta
        </SidebarItem>
      </SidebarNav>
    </>
  );
}

/** Padrão anterior: sidebar à esquerda e Header + main na mesma coluna (alinhamento máximo entre header e conteúdo). */
export const AppShellLegacySidebarColumn: Story = {
  name: 'App shell (legado) — Sidebar | coluna Header+main',
  render: () => (
    <div className={layoutsStyles.appShell}>
      <div className={layoutsStyles.appShellSidebar}>
        <Sidebar {...appShellSidebarProps}>
          <AppShellSidebarNav />
        </Sidebar>
      </div>
      <div className={layoutsStyles.appShellMainColumn}>
        {buildHeaderExample({ fullWidth: false })}
        <main className={layoutsStyles.appShellMain}>
          <p>
            O <code>Header</code> está na mesma coluna que esta área: o <code>HeaderInner</code> partilha o
            mesmo <code>max-width</code> e gutters que o conteúdo principal (em vez de centrar na viewport
            inteira com a sidebar à esquerda).
          </p>
          <p>Role ou redimensione para validar o shell em diferentes larguras.</p>
        </main>
      </div>
    </div>
  ),
};

/** Caminho B: componente `AppShell` + `Header` com trigger de navegação no próprio header (full-bleed por defeito). */
export const AppShellFullWidth: Story = {
  name: 'App shell — Header Full-Width + Sidebar',
  parameters: {
    docs: {
      description: {
        story:
          'Variante com header a 100% da viewport, sidebar colapsável abaixo e botão de menu na anatomia do `Header` (padrão GOV.BR DS). Ver `docs/layout-examples.md` e o componente `AppShell` exportado pelo pacote.',
      },
    },
  },
  render: () => (
    <AppShell
      headerContent={buildHeaderInnerExample({})}
      sidebarContent={
        <Sidebar {...appShellSidebarProps}>
          <AppShellSidebarNav />
        </Sidebar>
      }
    >
      <div className={layoutsStyles.appShellFullWidthMain}>
        <Typography variant="h3">Área principal</Typography>
        <p>
          O <code>AppShell</code> coordena o estado da navegação lateral; o <code>Header</code> usa{' '}
          <code>showNavigation</code> (faixa full-bleed por defeito). Em <strong>md+</strong>, a sidebar
          recolhe com largura animada; em <strong>mobile</strong>, desliza como painel fixo.
        </p>
        <p>
          O <code>HeaderInner</code> não aplica <code>max-width</code> ao centro do conteúdo — alinhamento
          intencional com o Caminho B.
        </p>
        <p>Role ou redimensione para validar o shell.</p>
      </div>
    </AppShell>
  ),
};

export const AppShellSidebarClosed: Story = {
  name: 'App shell — Sidebar recolhida (inicial)',
  render: () => (
    <AppShell
      defaultOpen={false}
      headerContent={buildHeaderInnerExample({})}
      sidebarContent={
        <Sidebar {...appShellSidebarProps}>
          <AppShellSidebarNav />
        </Sidebar>
      }
    >
      <div className={layoutsStyles.appShellFullWidthMain}>
        <Typography variant="h3">Conteúdo</Typography>
        <p>
          Estado inicial com navegação lateral fechada. Use o botão no header para abrir (acessível via{' '}
          <code>aria-expanded</code> / <code>aria-controls</code>).
        </p>
      </div>
    </AppShell>
  ),
};
