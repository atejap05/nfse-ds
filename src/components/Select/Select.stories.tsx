import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from './Select';

const options = [
  { value: '', label: 'Selecione…' },
  { value: 'sp', label: 'São Paulo' },
  { value: 'rj', label: 'Rio de Janeiro' },
];

const meta = {
  title: 'Formulário/Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = {
  args: {
    label: 'UF',
    options,
    defaultValue: '',
  },
};

export const Erro: Story = {
  args: {
    label: 'Município',
    options,
    hint: 'Selecione um município.',
    error: true,
  },
};
