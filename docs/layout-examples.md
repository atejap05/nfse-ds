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
- Esta etapa **amplia** para layouts mais completos e nomeados, reutilizando os mesmos princípios ([z-index.md](z-index.md), tokens, a11y).

## Critérios de pronto (por template)

1. Storybook em tela cheia ou largura realista; tema NFS-e (`theme.css` + fontes).
2. Pelo menos um fluxo de teclado verificado (Tab, Esc em overlays).
3. Referência no [roadmap](roadmap.md) quando o template for adicionado.
