import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Slider } from './Slider';

const meta = {
  title: 'Componentes/Slider',
  component: Slider,
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

function Controlled() {
  const [v, setV] = useState([35]);
  return (
    <div style={{ maxWidth: 320 }}>
      <Slider value={v} onValueChange={setV} min={0} max={100} step={1} />
      <p style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>Valor: {v[0]}</p>
    </div>
  );
}

export const Padrao: Story = {
  render: () => <Controlled />,
};
