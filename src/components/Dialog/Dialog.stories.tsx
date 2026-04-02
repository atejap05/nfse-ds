import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../Button/Button';
import { Dialog, DialogClose, DialogContent, DialogTrigger } from './Dialog';

const meta = {
  title: 'Componentes/Dialog',
  component: Dialog,
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: null },
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Abrir diálogo</Button>
      </DialogTrigger>
      <DialogContent
        title="Confirmar envio"
        description="Esta ação enviará os dados para a NFS-e."
        footer={
          <>
            <DialogClose asChild>
              <Button variant="ghost">Cancelar</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button>Confirmar</Button>
            </DialogClose>
          </>
        }
      >
        Revise as informações antes de continuar.
      </DialogContent>
    </Dialog>
  ),
};
