import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextArea } from './TextArea';

const meta = {
  title: 'Formulário/TextArea',
  component: TextArea,
  tags: ['autodocs'],
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = {
  args: {
    label: 'Observações',
    placeholder: 'Texto livre',
    rows: 4,
  },
};

export const Erro: Story = {
  args: {
    label: 'Justificativa',
    hint: 'Campo obrigatório.',
    error: true,
  },
};
