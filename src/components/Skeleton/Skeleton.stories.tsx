import type { Meta, StoryObj } from '@storybook/react-vite';
import { Skeleton } from './Skeleton';

const meta = {
  title: 'Componentes/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Texto: Story = {
  render: () => <Skeleton variant="text" />,
};

export const Bloco: Story = {
  render: () => <Skeleton variant="rect" style={{ height: 120 }} />,
};

export const Circular: Story = {
  render: () => <Skeleton variant="circular" />,
};
