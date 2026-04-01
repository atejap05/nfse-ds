import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Alert } from './Alert';

const meta = {
  title: 'Feedback/Alert',
  component: Alert,
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sucesso: Story = {
  args: {
    variant: 'success',
    title: 'Operação concluída',
    children: 'Os dados foram salvos com sucesso.',
  },
};

export const Aviso: Story = {
  args: {
    variant: 'warning',
    title: 'Atenção',
    children: 'Verifique os campos antes de enviar.',
  },
};

export const Erro: Story = {
  args: {
    variant: 'error',
    title: 'Não foi possível concluir',
    children: 'Tente novamente em alguns minutos.',
  },
};

export const Informacao: Story = {
  args: {
    variant: 'info',
    title: 'Informação',
    children: 'Novas regras entram em vigor na data publicada no DOU.',
  },
};

export const Dismissivel: Story = {
  args: {
    variant: 'info',
    children: ' ',
  },
  render: function DismissStory() {
    const [open, setOpen] = useState(true);
    if (!open) {
      return <button type="button">Reabrir alerta (story)</button>;
    }
    return (
      <Alert variant="info" dismissible onDismiss={() => setOpen(false)} title="Fechável">
        Clique no X para dispensar.
      </Alert>
    );
  },
};
