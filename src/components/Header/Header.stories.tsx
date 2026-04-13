import type { Meta, StoryObj } from '@storybook/react-vite';
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
  title: 'Components/Header',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Cabeçalho de aplicação: por defeito o `HeaderInner` é full-bleed (sem `max-width` no centro). Use `fullWidth={false}` no `Header` para alinhar ao Container. Com **sidebar**, há dois padrões de app shell — ver `docs/layout-examples.md` e **NFS-e / Layouts** no Storybook.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <Header>
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
    </Header>
  ),
};
