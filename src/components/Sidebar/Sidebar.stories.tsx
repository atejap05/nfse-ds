import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Typography } from '../Typography/Typography';
import {
  Sidebar,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupItem,
  SidebarGroupTrigger,
  SidebarHeader,
  SidebarItem,
  SidebarItemIcon,
  SidebarNav,
  type SidebarItemSelectData,
} from './Sidebar';

/** SVGs mínimos (o app pode usar lucide-react ou outra lib no mesmo padrão). */
function IconHome() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable="false">
      <path
        fill="currentColor"
        d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z"
      />
    </svg>
  );
}

function IconBriefcase() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable="false">
      <path
        fill="currentColor"
        d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"
      />
    </svg>
  );
}

function IconFolder() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable="false">
      <path
        fill="currentColor"
        d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.11.89 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"
      />
    </svg>
  );
}

function IconDoc() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable="false">
      <path
        fill="currentColor"
        d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"
      />
    </svg>
  );
}

const meta = {
  title: 'Components/Sidebar',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Navegação lateral com grupos colapsáveis e ícones opcionais. Integra com o padrão de layout em `docs/layout-examples.md` (largura `--nfse-sidebar-width`).',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const ComIcones: Story = {
  name: 'Com ícones (SidebarItemIcon)',
  render: () => (
    <Sidebar defaultSelectedValue="nfe" defaultOpenCategories={['fiscal']} selectedCategoryValue="fiscal">
      <SidebarHeader>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--nfse-space-2)',
          }}
        >
          <SidebarItemIcon>
            <IconBriefcase />
          </SidebarItemIcon>
          <Typography variant="caption" style={{ color: 'var(--nfse-color-text-muted)' }}>
            Área fiscal
          </Typography>
        </div>
      </SidebarHeader>
      <SidebarNav aria-label="Navegação com ícones">
        <SidebarItem value="inicio" href="#inicio">
          <SidebarItemIcon>
            <IconHome />
          </SidebarItemIcon>
          Início
        </SidebarItem>
        <SidebarGroup value="fiscal">
          <SidebarGroupTrigger>
            <SidebarItemIcon>
              <IconFolder />
            </SidebarItemIcon>
            Documentos fiscais
          </SidebarGroupTrigger>
          <SidebarGroupContent>
            <SidebarGroupItem>
              <SidebarItem value="nfe" href="#nfe">
                <SidebarItemIcon>
                  <IconDoc />
                </SidebarItemIcon>
                NF-e
              </SidebarItem>
            </SidebarGroupItem>
            <SidebarGroupItem>
              <SidebarItem value="nfse" href="#nfse">
                <SidebarItemIcon>
                  <IconDoc />
                </SidebarItemIcon>
                NFS-e
              </SidebarItem>
            </SidebarGroupItem>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarNav>
    </Sidebar>
  ),
};

export const Basic: Story = {
  name: 'Básico',
  render: () => (
    <Sidebar defaultSelectedValue="inicio">
      <SidebarHeader>
        <Typography variant="caption" style={{ color: 'var(--nfse-color-text-muted)' }}>
          Secção
        </Typography>
      </SidebarHeader>
      <SidebarNav aria-label="Exemplo básico">
        <SidebarItem value="inicio" href="#inicio">
          Início
        </SidebarItem>
        <SidebarItem value="servicos" href="#servicos">
          Serviços
        </SidebarItem>
        <SidebarItem value="ajuda" href="#ajuda">
          Ajuda
        </SidebarItem>
      </SidebarNav>
    </Sidebar>
  ),
};

export const ComCategorias: Story = {
  name: 'Com categorias',
  render: () => (
    <Sidebar defaultSelectedValue="nfe" defaultOpenCategories={['fiscal']} selectedCategoryValue="fiscal">
      <SidebarNav aria-label="Com grupos">
        <SidebarItem value="dash" href="#dash">
          Painel
        </SidebarItem>
        <SidebarGroup value="fiscal">
          <SidebarGroupTrigger>Fiscal</SidebarGroupTrigger>
          <SidebarGroupContent>
            <SidebarGroupItem>
              <SidebarItem value="nfe" href="#nfe">
                NF-e
              </SidebarItem>
            </SidebarGroupItem>
            <SidebarGroupItem>
              <SidebarItem value="nfse" href="#nfse">
                NFS-e
              </SidebarItem>
            </SidebarGroupItem>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarItem value="conta" href="#conta">
          Conta
        </SidebarItem>
      </SidebarNav>
    </Sidebar>
  ),
};

export const Compacto: Story = {
  name: 'Densidade compacta',
  render: () => (
    <Sidebar density="compact" defaultSelectedValue="a">
      <SidebarNav aria-label="Compacto">
        <SidebarItem value="a" href="#a">
          Item A
        </SidebarItem>
        <SidebarItem value="b" href="#b">
          Item B
        </SidebarItem>
      </SidebarNav>
    </Sidebar>
  ),
};

export const AcordeaoUnico: Story = {
  name: 'Uma categoria aberta (accordion)',
  render: () => (
    <Sidebar multiple={false} defaultOpenCategories={['g1']} defaultSelectedValue="a1">
      <SidebarNav aria-label="Accordion">
        <SidebarGroup value="g1">
          <SidebarGroupTrigger>Grupo 1</SidebarGroupTrigger>
          <SidebarGroupContent>
            <SidebarGroupItem>
              <SidebarItem value="a1" href="#a1">
                Sub A
              </SidebarItem>
            </SidebarGroupItem>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup value="g2">
          <SidebarGroupTrigger>Grupo 2</SidebarGroupTrigger>
          <SidebarGroupContent>
            <SidebarGroupItem>
              <SidebarItem value="b1" href="#b1">
                Sub B
              </SidebarItem>
            </SidebarGroupItem>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarNav>
    </Sidebar>
  ),
};

function ControlledExample() {
  const [selected, setSelected] = useState('nfe');
  const [open, setOpen] = useState<string[]>(['fiscal']);

  const handleSelect = (data: SidebarItemSelectData) => {
    setSelected(data.value);
  };

  return (
    <Sidebar
      selectedValue={selected}
      onItemSelect={handleSelect}
      openCategories={open}
      onOpenCategoriesChange={setOpen}
      selectedCategoryValue="fiscal"
    >
      <SidebarNav aria-label="Controlado">
        <SidebarGroup value="fiscal">
          <SidebarGroupTrigger>Fiscal</SidebarGroupTrigger>
          <SidebarGroupContent>
            <SidebarGroupItem>
              <SidebarItem value="nfe" href="#nfe">
                NF-e
              </SidebarItem>
            </SidebarGroupItem>
            <SidebarGroupItem>
              <SidebarItem value="nfse" href="#nfse">
                NFS-e
              </SidebarItem>
            </SidebarGroupItem>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarNav>
    </Sidebar>
  );
}

export const Controlado: Story = {
  name: 'Seleção e categorias controladas',
  render: () => <ControlledExample />,
};
