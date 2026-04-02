import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../Button/Button';
import { Popover, PopoverContent, PopoverTrigger } from './Popover';

const meta = {
  title: 'Componentes/Popover',
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary">Abrir painel</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p style={{ margin: 0 }}>Conteúdo ancorado ao gatilho. Feche com Esc ou clique fora.</p>
      </PopoverContent>
    </Popover>
  ),
};
