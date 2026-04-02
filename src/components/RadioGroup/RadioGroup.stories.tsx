import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { RadioGroup, RadioGroupItem } from './RadioGroup';

const meta = {
  title: 'Componentes/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { value: 'a', onChange: () => {}, children: null },
  render: function Render() {
    const [v, setV] = useState('a');
    return (
      <RadioGroup value={v} onChange={setV} legend="Escolha uma opção">
        <RadioGroupItem value="a" label="Opção A" />
        <RadioGroupItem value="b" label="Opção B" />
        <RadioGroupItem value="c" label="Opção C" />
      </RadioGroup>
    );
  },
};
