import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../Button/Button';
import { NfseToaster, toast } from './NfseToaster';

const meta = {
  title: 'Componentes/NfseToaster',
  component: NfseToaster,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <>
        <Story />
        <NfseToaster />
      </>
    ),
  ],
} satisfies Meta<typeof NfseToaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DispararToasts: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
      <Button onClick={() => toast.success('Operação concluída')}>Sucesso</Button>
      <Button onClick={() => toast.error('Falha ao processar')}>Erro</Button>
      <Button onClick={() => toast.warning('Verifique os dados')}>Aviso</Button>
      <Button onClick={() => toast.info('Nova mensagem')}>Info</Button>
    </div>
  ),
};
