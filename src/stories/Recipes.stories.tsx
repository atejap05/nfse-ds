import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Avatar } from '../components/Avatar/Avatar';
import { Button } from '../components/Button/Button';
import { Card } from '../components/Card/Card';
import { Combobox } from '../components/Combobox/Combobox';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from '../components/Dialog/Dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../components/DropdownMenu/DropdownMenu';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '../components/Sheet/Sheet';
import { Stack } from '../components/Stack/Stack';
import { Table, type TableColumn } from '../components/Table/Table';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../components/Tooltip/Tooltip';
import { Typography } from '../components/Typography/Typography';
import recipesStyles from './Recipes.module.css';

const meta = {
  title: 'NFS-e/Recipes',
  parameters: {
    layout: 'fullscreen',
    docs: { page: null },
  },
  decorators: [
    (Story) => (
      <TooltipProvider delayDuration={200}>
        <Story />
      </TooltipProvider>
    ),
  ],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

type Row = { id: string; nome: string; status: string };

const rows: Row[] = [
  { id: '1', nome: 'Serviço A', status: 'Autorizada' },
  { id: '2', nome: 'Serviço B', status: 'Rascunho' },
];

export const BarraUsuarioDropdown: Story = {
  name: 'Barra — Avatar + menu',
  render: () => (
    <header className={recipesStyles.bar}>
      <Typography variant="h3">Portal NFS-e</Typography>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button type="button" className={recipesStyles.avatarTrigger} aria-label="Conta do usuário">
            <Avatar name="João Demo" size="md" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Conta</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onSelect={() => undefined}>Perfil</DropdownMenuItem>
          <DropdownMenuItem onSelect={() => undefined}>Sair</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  ),
};

export const TabelaComMenuETooltip: Story = {
  name: 'Tabela — ações + tooltip',
  render: () => {
    const columns: TableColumn<Row>[] = [
      { key: 'nome', header: 'Nome', render: (r) => r.nome },
      { key: 'status', header: 'Status', render: (r) => r.status },
      {
        key: 'acoes',
        header: 'Ações',
        render: (r) => (
          <div className={recipesStyles.rowActions}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm" type="button">
                  ⋯
                </Button>
              </TooltipTrigger>
              <TooltipContent>Mais opções para {r.nome}</TooltipContent>
            </Tooltip>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="sm" type="button">
                  Abrir menu
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onSelect={() => undefined}>Detalhes</DropdownMenuItem>
                <DropdownMenuItem onSelect={() => undefined}>Download XML</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ),
      },
    ];
    return (
      <div className={recipesStyles.pad}>
        <Table columns={columns} rows={rows} rowKey={(r) => r.id} caption="Notas de exemplo" />
      </div>
    );
  },
};

export const SheetComCard: Story = {
  name: 'Sheet — Stack + Card',
  render: () => (
    <div className={recipesStyles.pad}>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="secondary">Abrir painel</Button>
        </SheetTrigger>
        <SheetContent title="Filtros" description="Refine os resultados da lista.">
          <Stack gap="md">
            <Card header={<Typography variant="h3">Período</Typography>}>
              <Typography variant="body">Use os campos do portal para datas e situação.</Typography>
            </Card>
            <SheetClose asChild>
              <Button variant="primary">Aplicar</Button>
            </SheetClose>
          </Stack>
        </SheetContent>
      </Sheet>
    </div>
  ),
};

function DialogComComboboxStory() {
  const [uf, setUf] = useState<string | null>(null);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary">Nova solicitação</Button>
      </DialogTrigger>
      <DialogContent title="Dados iniciais" description="Preencha para continuar.">
        <Stack gap="md">
          <Combobox
            label="UF"
            options={[
              { value: 'sp', label: 'São Paulo' },
              { value: 'rj', label: 'Rio de Janeiro' },
            ]}
            value={uf}
            onValueChange={setUf}
            placeholder="Selecione a UF"
          />
          <DialogClose asChild>
            <Button variant="secondary">Cancelar</Button>
          </DialogClose>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}

export const DialogComCombobox: Story = {
  name: 'Dialog — Combobox',
  render: () => (
    <div className={recipesStyles.pad}>
      <DialogComComboboxStory />
    </div>
  ),
};
