import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from '../Avatar/Avatar';
import {
  Persona,
  PersonaAvatar,
  PersonaDescription,
  PersonaName,
  PersonaText,
} from './Persona';

const meta = {
  title: 'Components/Persona',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Em listas, pode evitar leitura duplicada no leitor de ecrã com `aria-hidden` no `Avatar` se o nome estiver visível ao lado.',
      },
    },
  },
  render: () => (
    <Persona aria-label="Utilizador atual">
      <PersonaAvatar>
        <Avatar name="Maria Exemplo" size="md" />
      </PersonaAvatar>
      <PersonaText>
        <PersonaName>Maria Exemplo</PersonaName>
        <PersonaDescription>Contribuinte — NFS-e</PersonaDescription>
      </PersonaText>
    </Persona>
  ),
};

export const DescricaoLonga: Story = {
  name: 'Descrição longa (e-mail)',
  render: () => (
    <Persona style={{ maxWidth: '20rem' }}>
      <PersonaAvatar>
        <Avatar name="João Silva" size="md" />
      </PersonaAvatar>
      <PersonaText>
        <PersonaName>João Silva</PersonaName>
        <PersonaDescription>joao.silva.exemplo@receita.fazenda.gov.br</PersonaDescription>
      </PersonaText>
    </Persona>
  ),
};
