import type { Meta, StoryObj } from '@storybook/react-vite';
import { Separator } from './Separator';

const meta = {
  title: 'Componentes/Separator',
  component: Separator,
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    decorative: { control: 'boolean' },
  },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
    decorative: true,
  },
};

export const Vertical: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'stretch', gap: '1rem', minHeight: 80 }}>
      <span>Esquerda</span>
      <Separator orientation="vertical" />
      <span>Direita</span>
    </div>
  ),
};
