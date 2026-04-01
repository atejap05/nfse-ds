import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './Checkbox';

const meta = {
  title: 'Formulário/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = {
  args: {
    label: 'Declaro que as informações são verdadeiras.',
    defaultChecked: false,
  },
};

export const Desabilitado: Story = {
  args: {
    label: 'Opção indisponível',
    disabled: true,
  },
};
