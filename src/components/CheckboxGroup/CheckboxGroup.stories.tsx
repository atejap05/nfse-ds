import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { CheckboxGroup, CheckboxGroupItem } from './CheckboxGroup';

const meta = {
  title: 'Componentes/CheckboxGroup',
  component: CheckboxGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { values: [], onChange: () => {}, children: null },
  render: function Render() {
    const [v, setV] = useState<string[]>(['x']);
    return (
      <CheckboxGroup values={v} onChange={setV} legend="Selecione serviços">
        <CheckboxGroupItem value="x" label="Serviço X" />
        <CheckboxGroupItem value="y" label="Serviço Y" />
        <CheckboxGroupItem value="z" label="Serviço Z" />
      </CheckboxGroup>
    );
  },
};
