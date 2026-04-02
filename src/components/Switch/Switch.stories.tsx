import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch } from './Switch';

const meta = {
  title: 'Componentes/Switch',
  component: Switch,
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

function Controlled(props: { label: string; disabled?: boolean }) {
  const [on, setOn] = useState(false);
  return <Switch {...props} checked={on} onCheckedChange={setOn} />;
}

export const Default: Story = {
  args: { checked: false, label: 'Ativar notificações', onCheckedChange: () => {} },
  render: () => <Controlled label="Ativar notificações" />,
};

export const Desabilitado: Story = {
  args: { checked: false, label: 'Somente leitura', onCheckedChange: () => {}, disabled: true },
  render: () => (
    <Switch checked={false} onCheckedChange={() => {}} label="Somente leitura" disabled />
  ),
};
