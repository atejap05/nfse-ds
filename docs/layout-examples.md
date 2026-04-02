# Layouts de exemplo (templates)

Objetivo: oferecer no **Storybook** páginas ou stories de **nível de aplicação** que mostram componentes do DS **integrados** (não apenas isolados), como referência para o portal NFS-e.

## Escopo planejado

| Template / área        | Conteúdo esperado (exemplo) |
| ---------------------- | --------------------------- |
| **Header / topo**      | Logo ou título, ações globais, menu do usuário (`Avatar` + `DropdownMenu`), opcional `Separator`. |
| **Persona / usuário**  | Bloco com `Avatar`, nome, papel e atalhos (badges, links). |
| **Sidebar**            | Navegação vertical com grupos (`Accordion` ou lista), estado ativo, `Collapsible` para subseções. |
| **Navbar**             | Abas ou links horizontais (`Tabs` ou lista estilizada), alinhada a `Container`. |
| **Tabela + dados**     | `Table` com `Pagination`, filtros em `Card`, ações por linha (`DropdownMenu`, `Tooltip`). |
| **Shell da aplicação** | Composição: header + sidebar + área de conteúdo (`Stack`, `Container`). |

## Relação com o que já existe

- **NFS-e / Recipes** (`src/stories/Recipes.stories.tsx`): receitas pontuais de composição (barra + menu, tabela + tooltip, sheet, dialog + combobox).
- **NFS-e / Layouts** (`src/stories/Layouts.stories.tsx`): templates nomeados; o **Header** usa o componente composto exportado pelo pacote (`Header`, `HeaderInner`, … em `src/components/Header/`), com playground em **Components/Header** no Storybook.
- **Persona** (`src/components/Persona/`): `Avatar` + nome + descrição opcional; playground em **Components/Persona**; em **NFS-e / Layouts**, exemplos de **Header** com Persona no menu (barra superior).
- Esta etapa **amplia** para layouts mais completos e nomeados, reutilizando os mesmos princípios ([z-index.md](z-index.md), tokens, a11y).
- Largura da coluna de página: `Container` e `HeaderInner` compartilham o token `--nfse-layout-max-width` em `theme.css` para manter o cabeçalho alinhado ao conteúdo principal **na mesma coluna**.
- **App shell com Sidebar:** não colocar o `Header` acima de uma faixa full-bleed e a sidebar numa linha abaixo sem grelha — o conteúdo do `HeaderInner` ficaria centrado na viewport e desalinhado do `main`. O padrão recomendado é **grelha de duas colunas** (`--nfse-sidebar-width` + `1fr`): a sidebar na primeira coluna (altura total); na segunda, **stack vertical** com `Header` e `main`, ambos limitados ao mesmo eixo horizontal. A story **App shell — Header + Sidebar + main** em `src/stories/Layouts.stories.tsx` segue este padrão (classes `appShell`, `appShellSidebar`, `appShellMainColumn`, `appShellMain`).

## Critérios de pronto (por template)

1. Storybook em tela cheia ou largura realista; tema NFS-e (`theme.css` + fontes).
2. Pelo menos um fluxo de teclado verificado (Tab, Esc em overlays).
3. Referência no [roadmap](roadmap.md) quando o template for adicionado.
