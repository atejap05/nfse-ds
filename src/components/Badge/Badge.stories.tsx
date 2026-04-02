import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';

const meta = {
  title: 'Componentes/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['neutral', 'success', 'warning', 'error', 'info'] },
    size: { control: 'select', options: ['sm', 'md'] },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neutral: Story = {
  args: { children: 'Rascunho', variant: 'neutral' },
};

export const Variantes: Story = {
  args: { children: 'Neutro', variant: 'neutral' },
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
      <Badge variant="neutral">Neutro</Badge>
      <Badge variant="success">Sucesso</Badge>
      <Badge variant="warning">Aviso</Badge>
      <Badge variant="error">Erro</Badge>
      <Badge variant="info">Info</Badge>
    </div>
  ),
};
