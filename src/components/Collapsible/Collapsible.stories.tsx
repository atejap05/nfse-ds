import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../Button/Button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './Collapsible';

const meta = {
  title: 'Componentes/Collapsible',
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = {
  render: () => (
    <Collapsible>
      <CollapsibleTrigger asChild>
        <Button variant="secondary">Mostrar detalhes</Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <p style={{ margin: '0.5rem 0 0', maxWidth: '24rem' }}>
          Conteúdo expansível. Teclado: foco no gatilho e Enter/Espaço para alternar.
        </p>
      </CollapsibleContent>
    </Collapsible>
  ),
};
