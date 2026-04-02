import type { Meta, StoryObj } from '@storybook/react-vite';
import { Label } from './Label';

const meta = {
  title: 'Componentes/Label',
  component: Label,
  tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Nome completo',
    htmlFor: 'exemplo-nome',
  },
};

export const Obrigatorio: Story = {
  args: {
    children: 'E-mail institucional',
    htmlFor: 'exemplo-email',
    required: true,
  },
};
