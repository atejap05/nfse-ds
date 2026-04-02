import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../Button/Button';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from './Sheet';

const meta = {
  title: 'Componentes/Sheet',
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Direita: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">Abrir gaveta</Button>
      </SheetTrigger>
      <SheetContent title="Menu lateral" description="Navegação complementar.">
        <p style={{ margin: 0 }}>Conteúdo da gaveta. Use Esc ou o botão fechar.</p>
        <SheetClose asChild>
          <Button variant="ghost" style={{ marginTop: '1rem' }}>
            Fechar
          </Button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  ),
};
