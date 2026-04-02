import type { Meta, StoryObj } from '@storybook/react-vite';
import { Progress } from './Progress';

const meta = {
  title: 'Componentes/Progress',
  component: Progress,
  tags: ['autodocs'],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Parcial: Story = {
  args: { value: 45, max: 100 },
  decorators: [(s) => <div style={{ maxWidth: 320 }}>{s()}</div>],
};
