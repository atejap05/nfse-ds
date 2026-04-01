import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextField } from './TextField';

const meta = {
  title: 'Formulário/TextField',
  component: TextField,
  tags: ['autodocs'],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = {
  args: {
    label: 'Nome',
    placeholder: 'Digite o nome',
  },
};

export const Erro: Story = {
  args: {
    label: 'E-mail',
    hint: 'Informe um e-mail válido.',
    error: true,
    defaultValue: 'invalido',
  },
};

export const Sucesso: Story = {
  args: {
    label: 'CPF',
    hint: 'Formato válido.',
    success: true,
  },
};

export const Desabilitado: Story = {
  args: {
    label: 'Campo somente leitura',
    disabled: true,
    defaultValue: 'Valor fixo',
  },
};
