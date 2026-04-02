import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from './Avatar';

const meta = {
  title: 'Componentes/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Iniciais: Story = {
  args: {
    name: 'Maria Silva',
    size: 'md',
  },
};

export const Tamanhos: Story = {
  args: { name: 'Ana Costa', size: 'md' },
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Avatar name="Ana Costa" size="sm" />
      <Avatar name="Ana Costa" size="md" />
      <Avatar name="Ana Costa" size="lg" />
    </div>
  ),
};

export const ImagemInvalidaUsaFallback: Story = {
  args: {
    name: 'João Santos',
    src: 'https://invalid.example/404.png',
    size: 'md',
  },
};
