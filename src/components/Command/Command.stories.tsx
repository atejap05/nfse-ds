import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from './Command';

const meta = {
  title: 'Componentes/Command',
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Paleta: Story = {
  render: () => (
    <Command>
      <CommandInput placeholder="Buscar ação…" />
      <CommandList>
        <CommandEmpty>Nenhum resultado.</CommandEmpty>
        <CommandGroup heading="Atalhos">
          <CommandItem onSelect={() => undefined}>Nova NFS-e</CommandItem>
          <CommandItem onSelect={() => undefined}>Consultar notas</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};
