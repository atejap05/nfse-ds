import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Pagination } from './Pagination';

const meta = {
  title: 'Componentes/Pagination',
  component: Pagination,
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { page: 1, pageCount: 12, onPageChange: () => {} },
  render: function Render() {
    const [page, setPage] = useState(1);
    return <Pagination page={page} pageCount={12} onPageChange={setPage} />;
  },
};

export const PoucasPaginas: Story = {
  args: { page: 1, pageCount: 3, onPageChange: () => {} },
  render: function Render() {
    const [page, setPage] = useState(1);
    return <Pagination page={page} pageCount={3} onPageChange={setPage} />;
  },
};
