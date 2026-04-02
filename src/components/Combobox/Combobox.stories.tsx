import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Combobox, type ComboboxOption } from './Combobox';

const options: ComboboxOption[] = [
  { value: 'sp', label: 'São Paulo' },
  { value: 'rj', label: 'Rio de Janeiro' },
  { value: 'mg', label: 'Minas Gerais' },
  { value: 'df', label: 'Distrito Federal' },
];

const meta = {
  title: 'Componentes/Combobox',
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

function Stateful() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <Combobox
      label="UF (busca)"
      options={options}
      value={value}
      onValueChange={setValue}
      placeholder="Escolha o estado"
    />
  );
}

export const Padrao: Story = {
  render: () => <Stateful />,
};
