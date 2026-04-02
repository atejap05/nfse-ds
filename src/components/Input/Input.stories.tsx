import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';

const meta = {
  title: 'Componentes/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Texto sem label (uso com Label externo)',
    'aria-label': 'Campo de exemplo',
  },
};

export const Erro: Story = {
  args: {
    defaultValue: 'valor inválido',
    error: true,
    'aria-label': 'Campo com erro',
  },
};

export const Sucesso: Story = {
  args: {
    defaultValue: 'válido',
    success: true,
    'aria-label': 'Campo válido',
  },
};
