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
  title: 'Componentes/Persona',
  component: Persona,
  tags: ['autodocs'],
  subcomponents: {
    PersonaAvatar,
    PersonaText,
    PersonaName,
    PersonaDescription,
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Composição

1. **\`Persona\`** — contentor flexível; aceita \`aria-label\` para o conjunto.
2. **\`PersonaAvatar\`** — envolve o \`Avatar\` (ou ícone).
3. **\`PersonaText\`** — agrupa nome e descrição (\`data-nfse-persona-text\` para responsividade no header).
4. **\`PersonaName\`** e **\`PersonaDescription\`** — tipografia consistente.

Em listas, pode usar \`aria-hidden\` no \`Avatar\` se o nome estiver visível ao lado, para evitar leitura duplicada.
`,
      },
    },
  },
  argTypes: {
    children: { control: false, description: 'Conteúdo (normalmente `PersonaAvatar` + `PersonaText`).' },
    'aria-label': { description: 'Rótulo acessível para o bloco da persona.' },
  },
} satisfies Meta<typeof Persona>;

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
