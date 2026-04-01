import type { Meta, StoryObj } from '@storybook/react-vite';
import { Radio } from './Radio';

const meta = {
  title: 'Formulário/Radio',
  component: Radio,
  tags: ['autodocs'],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = {
  args: {
    label: 'Grupo',
    name: 'tipo',
  },
  render: () => (
    <fieldset style={{ border: 'none', margin: 0, padding: 0 }}>
      <legend className="sr-only">Tipo de pessoa</legend>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <Radio name="tipo" value="pf" label="Pessoa física" defaultChecked />
        <Radio name="tipo" value="pj" label="Pessoa jurídica" />
      </div>
    </fieldset>
  ),
};
