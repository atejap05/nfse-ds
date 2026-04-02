import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../Button/Button';
import { Card } from './Card';

const meta = {
  title: 'Componentes/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Completo: Story = {
  args: {
    header: 'Título do cartão',
    children: 'Conteúdo principal do cartão com texto de exemplo para o portal NFS-e.',
    footer: <Button size="sm">Ação</Button>,
  },
};

export const SemCabecalho: Story = {
  args: {
    children: 'Apenas corpo com informações.',
  },
};
