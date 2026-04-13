import type { Meta, StoryObj } from '@storybook/react-vite';
import { useId, useState } from 'react';
import { Button } from '../Button/Button';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '../Sheet/Sheet';
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
} from './Header';
import headerStoryStyles from './Header.stories.module.css';

const meta = {
  title: 'Componentes/Header',
  component: Header,
  tags: ['autodocs'],
  subcomponents: {
    HeaderInner,
    HeaderRow,
    HeaderBrand,
    HeaderLogo,
    HeaderTitles,
    HeaderTitle,
    HeaderSubtitle,
    HeaderNav,
    HeaderActions,
    HeaderSeparator,
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## Composição

1. **\`Header\`** — envolve a faixa; aceita \`variant\`, \`sticky\`, \`fullWidth\`, e opcionalmente \`showNavigation\` (menu GOV.BR).
2. **\`HeaderInner\`** — área com padding horizontal; com \`fullWidth\` predefinido no \`Header\`, o conteúdo é full-bleed; use \`fullWidth={false}\` no \`Header\` para limitar a \`--nfse-layout-max-width\`.
3. **\`HeaderRow\`** — linha flexível (marca, nav, ações).
4. **\`HeaderBrand\` → \`HeaderLogo\` + \`HeaderTitles\` (\`HeaderTitle\`, \`HeaderSubtitle\`)** — identidade.
5. **\`HeaderNav\`** — navegação; em mobile use o padrão **Sheet** + \`SheetTrigger\` como nesta story.
6. **\`HeaderActions\`** — botões ou conta à direita.

Com **sidebar** e shell em coluna única, ver **NFS-e / Layouts** e \`docs/layout-examples.md\`.
`,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'compact'],
      description: 'Densidade visual do bloco de título.',
    },
    sticky: { description: 'Fixa o cabeçalho ao rolar a página.' },
    fullWidth: {
      description:
        'false: limita o `HeaderInner` a `--nfse-layout-max-width`. true (predefinição): full-bleed.',
    },
    showNavigation: {
      description: 'Renderiza o botão de abrir/fechar navegação lateral (anatomia GOV.BR).',
    },
    navigationOpen: {
      description: 'Estado da navegação lateral (aberta/fechada), para ARIA e rótulo do botão.',
    },
    onNavigationToggle: { control: false, description: 'Callback do botão de navegação lateral.' },
    navigationId: { description: 'ID do painel controlado (`aria-controls`).' },
    children: { control: false, description: 'Conteúdo (normalmente `HeaderInner` e descendentes).' },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

function HeaderDemoInner() {
  return (
    <HeaderInner>
      <HeaderRow>
        <HeaderBrand>
          <HeaderLogo>
            <img src="https://placehold.co/120x40/e8eef9/1a3b7e?text=NFS-e" alt="" width={120} height={40} />
          </HeaderLogo>
          <HeaderTitles>
            <HeaderTitle as="h1">Portal NFS-e</HeaderTitle>
            <HeaderSubtitle>Design System — exemplo</HeaderSubtitle>
          </HeaderTitles>
        </HeaderBrand>
        <HeaderSeparator />
        <HeaderNav>
          <div className={headerStoryStyles.navDesktop}>
            <Button variant="ghost" size="sm">
              Início
            </Button>
            <Button variant="ghost" size="sm">
              Documentação
            </Button>
          </div>
          <div className={headerStoryStyles.navMobile}>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" type="button">
                  Menu
                </Button>
              </SheetTrigger>
              <SheetContent title="Navegação" description="Secções do portal." side="left">
                <nav className={headerStoryStyles.sheetNav} aria-label="Navegação principal">
                  <SheetClose asChild>
                    <Button variant="ghost" size="sm" type="button" className={headerStoryStyles.sheetNavButton}>
                      Início
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button variant="ghost" size="sm" type="button" className={headerStoryStyles.sheetNavButton}>
                      Documentação
                    </Button>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </HeaderNav>
        <HeaderSeparator />
        <HeaderActions>
          <Button variant="secondary" size="sm">
            Ajuda
          </Button>
        </HeaderActions>
      </HeaderRow>
    </HeaderInner>
  );
}

export const Playground: Story = {
  args: {
    variant: 'default',
    sticky: false,
    fullWidth: true,
    showNavigation: false,
  },
  render: (args) => (
    <Header {...args}>
      <HeaderDemoInner />
    </Header>
  ),
};

/** Mesmo conteúdo com \`showNavigation\` e estado local (para validar ARIA e foco). */
export const ComMenuLateral: Story = {
  name: 'Com menu lateral (showNavigation)',
  render: function HeaderComNav() {
    const [open, setOpen] = useState(true);
    const navId = useId();
    return (
      <Header
        showNavigation
        navigationOpen={open}
        onNavigationToggle={() => setOpen((v) => !v)}
        navigationId={navId}
      >
        <HeaderDemoInner />
      </Header>
    );
  },
};
