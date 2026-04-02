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
import { Typography } from '../components/Typography/Typography';
import layoutsStyles from './Layouts.module.css';

type HeaderActionsVariant = 'avatarMenu' | 'personaMenu';

function buildHeaderExample(options: {
  compact?: boolean;
  sticky?: boolean;
  showLogo?: boolean;
  /** `personaMenu`: troca o avatar isolado por Persona + menu (nome/descrição visíveis em md+). */
  actions?: HeaderActionsVariant;
}) {
  const { compact = false, sticky = false, showLogo = true, actions = 'avatarMenu' } = options;
  const avatarSize = compact ? 'sm' : 'md';
  return (
    <Header variant={compact ? 'compact' : 'default'} sticky={sticky}>
      <HeaderInner>
        <HeaderRow>
          <HeaderBrand>
            {showLogo ? (
              <HeaderLogo>
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
              <HeaderSubtitle>Ambiente de demonstração do design system</HeaderSubtitle>
            </HeaderTitles>
          </HeaderBrand>
          <HeaderSeparator />
          <HeaderNav>
            <div className={layoutsStyles.navDesktop}>
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
            <div className={layoutsStyles.navMobile}>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" type="button">
                    Menu
                  </Button>
                </SheetTrigger>
                <SheetContent
                  title="Navegação"
                  description="Secções principais do portal."
                  side="left"
                >
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
          <HeaderSeparator />
          <HeaderActions>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                {actions === 'personaMenu' ? (
                  <button
                    type="button"
                    className={layoutsStyles.headerPersonaTrigger}
                    aria-label="Conta do utilizador — Maria Exemplo"
                  >
                    <Persona>
                      <PersonaAvatar>
                        <Avatar name="Maria Exemplo" size={avatarSize} />
                      </PersonaAvatar>
                      <PersonaText>
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

/** Layout em coluna estreita (375px) para validar Mobile First sem depender do addon viewport. */
export const HeaderViewportMobile: Story = {
  name: 'Header — viewport mobile (375)',
  parameters: {
    viewport: {
      defaultViewport: 'nfseMobile',
    },
  },
  render: () => (
    <div className={layoutsStyles.viewportMobile375}>{buildHeaderExample({ actions: 'personaMenu' })}</div>
  ),
};

/** Cabeçalho + coluna lateral (Sidebar) + área principal: grelha para o header alinhar à coluna do `main`. */
export const AppShellComSidebar: Story = {
  name: 'App shell — Header + Sidebar + main',
  render: () => (
    <div className={layoutsStyles.appShell}>
      <div className={layoutsStyles.appShellSidebar}>
        <Sidebar defaultSelectedValue="inicio" defaultOpenCategories={['doc']} selectedCategoryValue="doc">
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
        </Sidebar>
      </div>
      <div className={layoutsStyles.appShellMainColumn}>
        {buildHeaderExample({})}
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
