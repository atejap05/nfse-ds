import type { Meta, StoryObj } from '@storybook/react-vite';
import { Spinner } from './Spinner';

const meta = {
  title: 'Componentes/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Inline: Story = {
  args: {
    size: 'md',
    label: 'Carregando conteúdo',
  },
};

export const Bloco: Story = {
  args: {
    block: true,
    size: 'lg',
  },
};
