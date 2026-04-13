import type { Meta, StoryObj } from '@storybook/react-vite';
import { Typography } from '../Typography/Typography';
import {
  Sidebar,
  SidebarHeader,
  SidebarItem,
  SidebarNav,
} from '../Sidebar/Sidebar';
import {
  HeaderInner,
  HeaderRow,
  HeaderBrand,
  HeaderTitles,
  HeaderTitle,
} from '../Header/Header';
import { AppShell } from './AppShell';

const headerContent = (
  <HeaderInner>
    <HeaderRow>
      <HeaderBrand>
        <HeaderTitles>
          <HeaderTitle as="h1">Portal NFS-e</HeaderTitle>
        </HeaderTitles>
      </HeaderBrand>
    </HeaderRow>
  </HeaderInner>
);

const sidebarContent = (
  <Sidebar defaultSelectedValue="inicio">
    <SidebarHeader>
      <Typography variant="caption" style={{ color: 'var(--nfse-color-text-muted)' }}>
        Navegação
      </Typography>
    </SidebarHeader>
    <SidebarNav aria-label="Navegação de exemplo">
      <SidebarItem value="inicio" href="#inicio">
        Início
      </SidebarItem>
      <SidebarItem value="servicos" href="#servicos">
        Serviços
      </SidebarItem>
    </SidebarNav>
  </Sidebar>
);

const meta = {
  title: 'Componentes/AppShell',
  component: AppShell,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## Função

Orquestra **header** (com botão de menu lateral na anatomia do \`Header\`), **sidebar** abaixo do header e **área principal**. Estado da navegação lateral: \`defaultOpen\`, \`navigationOpen\` / \`onNavigationToggle\` (interno) e \`aria-controls\` ligado ao painel.

## Props

- **\`headerContent\`** — o que vai dentro do \`Header\` **sem** o botão de menu (este é injetado pelo \`AppShell\` via \`showNavigation\` no \`Header\`).
- **\`sidebarContent\`** — navegação lateral (ex.: \`Sidebar\`).
- **\`children\`** — \`<main>\` da aplicação.
- **\`defaultOpen\`** — estado inicial da sidebar.
- **\`sidebarWidth\`** — override da largura (CSS \`--shell-sidebar-width\`).
- **\`className\`** — classe na raiz do shell.

Mais contexto: **NFS-e / Layouts** no Storybook e \`docs/layout-examples.md\`.
`,
      },
    },
  },
  argTypes: {
    headerContent: { control: false, description: 'Conteúdo do header (marca, nav global, etc.).' },
    sidebarContent: { control: false, description: 'Conteúdo do painel lateral.' },
    children: { control: false, description: 'Conteúdo da área principal (`<main>`).' },
    defaultOpen: { description: 'Sidebar aberta inicialmente (desktop: coluna; mobile: painel).' },
    sidebarWidth: { description: 'Largura da sidebar aberta (ex.: `18rem`).' },
    className: { description: 'Classe na raiz do shell.' },
  },
} satisfies Meta<typeof AppShell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = {
  render: () => (
    <AppShell headerContent={headerContent} sidebarContent={sidebarContent}>
      <div style={{ padding: 'var(--nfse-space-4)' }}>
        <Typography variant="h3">Área principal</Typography>
        <Typography variant="body">Use o botão de menu no header para abrir ou fechar a navegação lateral.</Typography>
      </div>
    </AppShell>
  ),
};

export const SidebarRecolhida: Story = {
  name: 'Sidebar inicialmente fechada',
  render: () => (
    <AppShell defaultOpen={false} headerContent={headerContent} sidebarContent={sidebarContent}>
      <div style={{ padding: 'var(--nfse-space-4)' }}>
        <Typography variant="body">Estado inicial com defaultOpen definido como false.</Typography>
      </div>
    </AppShell>
  ),
};
