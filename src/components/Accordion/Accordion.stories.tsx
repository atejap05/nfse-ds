import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './Accordion';

const meta = {
  title: 'Componentes/Accordion',
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = {
  render: () => (
    <Accordion type="single" collapsible defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>Primeira seção</AccordionTrigger>
        <AccordionContent>Conteúdo da primeira seção.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Segunda seção</AccordionTrigger>
        <AccordionContent>Conteúdo da segunda seção.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
