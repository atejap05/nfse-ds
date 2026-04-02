import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './Tabs';

const meta = {
  title: 'Componentes/Tabs',
  component: Tabs,
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { defaultValue: 'tab1', children: null },
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Geral</TabsTrigger>
        <TabsTrigger value="tab2">Detalhes</TabsTrigger>
        <TabsTrigger value="tab3">Histórico</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Conteúdo da aba Geral.</TabsContent>
      <TabsContent value="tab2">Detalhes adicionais do serviço.</TabsContent>
      <TabsContent value="tab3">Linha do tempo de eventos.</TabsContent>
    </Tabs>
  ),
};
