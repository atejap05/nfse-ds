import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from '../Stack/Stack';
import { Typography } from './Typography';

const meta = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Tipografia baseada em tokens Roboto. **H1** e **H2** usam a cor semântica `--nfse-color-heading` (verde primário da marca). **H3**, **body** e **caption** usam texto neutro ou secundário. Sobrescreva com `className` apenas quando necessário.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'body', 'caption'],
      description: 'Escala tipográfica e cor associada.',
    },
    as: {
      control: false,
      description: 'Substitui a tag semântica padrão da variante (polimorfismo).',
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    variant: 'body',
    children:
      'Corpo de texto padrão. Use tokens em CSS (`var(--nfse-color-text)`) para conteúdo longo.',
  },
};

export const EscalaCompleta: Story = {
  name: 'Escala e cores',
  args: {
    variant: 'body',
    children: '',
  },
  render: () => (
    <Stack gap="md">
      <Typography variant="h1">H1 — título principal (heading)</Typography>
      <Typography variant="h2">H2 — título de secção (heading)</Typography>
      <Typography variant="h3">H3 — subtítulo (texto neutro)</Typography>
      <Typography variant="body">Corpo — parágrafo padrão.</Typography>
      <Typography variant="caption">Legenda — texto secundário.</Typography>
    </Stack>
  ),
};
