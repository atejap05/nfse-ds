import type { Meta, StoryObj } from '@storybook/react-vite';
import { Table, type TableColumn } from './Table';

type Row = { id: string; nome: string; status: string };

const columns: TableColumn<Row>[] = [
  { key: 'nome', header: 'Nome', render: (r) => r.nome },
  { key: 'status', header: 'Status', render: (r) => r.status },
];

const rows: Row[] = [
  { id: '1', nome: 'Nota A', status: 'Autorizada' },
  { id: '2', nome: 'Nota B', status: 'Pendente' },
];

const meta = {
  title: 'Componentes/Table',
  component: Table,
  tags: ['autodocs'],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    columns: columns as TableColumn<unknown>[],
    rows: rows as unknown[],
    rowKey: (r: unknown) => (r as Row).id,
    caption: 'Lista de notas fiscais',
  },
};

export const Zebra: Story = {
  args: {
    columns: columns as TableColumn<unknown>[],
    rows: rows as unknown[],
    rowKey: (r: unknown) => (r as Row).id,
    zebra: true,
  },
};
